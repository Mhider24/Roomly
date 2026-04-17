import { getAllRooms, getBuildings, getReservations, getUsers } from "./api.js";

const eventsList = document.getElementById("events-list");
const eventsCount = document.getElementById("events-count");

function formatDate(dateValue) {
    const date = new Date(`${dateValue}T00:00:00`);
    return date.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}

function formatTime(timeValue) {
    const [hours = "0", minutes = "00"] = timeValue.split(":");
    const date = new Date();
    date.setHours(Number(hours), Number(minutes), 0, 0);
    return date.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit"
    });
}

function getEventName(reservation, room, building) {
    if (reservation.reservation_name) {
        return reservation.reservation_name;
    }

    const roomNumber = room?.room_number || "Campus Room";
    const buildingName = building?.name || "Campus";
    return `${buildingName} ${roomNumber} Open Study`;
}

function renderEmpty(message) {
    eventsList.innerHTML = `
        <div class="events-empty">
            <h2>No open events right now.</h2>
            <p>${message}</p>
        </div>
    `;
}

function renderEventCard(event) {
    const article = document.createElement("article");
    article.className = "event-card";

    article.innerHTML = `
        <div class="event-card-header">
            <p class="event-label">Open to Join</p>
            <h3>${event.name}</h3>
        </div>
        <dl class="event-details">
            <div>
                <dt>Building</dt>
                <dd>${event.buildingName}</dd>
            </div>
            <div>
                <dt>Room</dt>
                <dd>${event.roomNumber}</dd>
            </div>
            <div>
                <dt>Date</dt>
                <dd>${event.date}</dd>
            </div>
            <div>
                <dt>Time</dt>
                <dd>${event.startTime} - ${event.endTime}</dd>
            </div>
            <div>
                <dt>Host</dt>
                <dd>${event.host}</dd>
            </div>
        </dl>
        <button class="join-event-button" type="button">Join Event</button>
    `;

    const button = article.querySelector(".join-event-button");
    button.addEventListener("click", () => {
        button.textContent = "Joined";
        button.disabled = true;
        article.classList.add("joined");
    });

    return article;
}

async function loadOpenEvents() {
    try {
        const [reservations, rooms, buildings, users] = await Promise.all([
            getReservations(),
            getAllRooms(),
            getBuildings(),
            getUsers()
        ]);

        const roomById = new Map(rooms.map(room => [room.id, room]));
        const buildingById = new Map(buildings.map(building => [building.id, building]));
        const userById = new Map(users.map(user => [user.id, user]));

        const openReservations = reservations.filter(reservation =>
            reservation.is_open && reservation.status !== "cancelled"
        );

        eventsList.innerHTML = "";
        eventsCount.textContent = `${openReservations.length} open ${openReservations.length === 1 ? "event" : "events"}`;

        if (openReservations.length === 0) {
            renderEmpty("Check back later or create an open reservation from a room page.");
            return;
        }

        openReservations
            .sort((a, b) => `${a.date} ${a.start_time}`.localeCompare(`${b.date} ${b.start_time}`))
            .forEach(reservation => {
                const room = roomById.get(reservation.room_id);
                const building = room ? buildingById.get(room.building_id) : null;
                const host = userById.get(reservation.user_id);

                const event = {
                    name: getEventName(reservation, room, building),
                    buildingName: building?.name || "Unknown Building",
                    roomNumber: room?.room_number || `Room ${reservation.room_id}`,
                    date: formatDate(reservation.date),
                    startTime: formatTime(reservation.start_time),
                    endTime: formatTime(reservation.end_time),
                    host: host?.umid ? `Hosted by ${host.umid}` : "Hosted by student"
                };

                eventsList.appendChild(renderEventCard(event));
            });
    } catch (error) {
        eventsCount.textContent = "Could not load events";
        renderEmpty("Start the backend server, then refresh this page.");
        console.error("Failed to load open events:", error);
    }
}

loadOpenEvents();
