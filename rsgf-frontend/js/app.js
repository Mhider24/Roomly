import { getBuildings, getRooms } from "./api.js";

async function loadBuildings() {

    const container = document.getElementById("building-list");
    if (!container) return;//Crash preventor 3000
    const buildings = await getBuildings();
    container.innerHTML = "";

    buildings.forEach(b => {
        const btn = document.createElement("button");
        btn.textContent = b.name;

        btn.onclick = () => loadRooms(b.id);

        container.appendChild(btn);
    });
}

async function loadRooms(buildingId) {
    const rooms = await getRooms(buildingId);
    const container = document.getElementById("room-list");

    container.innerHTML = "";

    rooms.forEach(r => {
        const div = document.createElement("div");
        div.textContent = `Room ${r.room_number} (Capacity: ${r.capacity})`;
        container.appendChild(div);
    });
}

loadBuildings();