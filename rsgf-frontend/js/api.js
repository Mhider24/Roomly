const BASE_URL = "http://127.0.0.1:8001";

// Get buildings
export async function getBuildings() {
    const res = await fetch(`${BASE_URL}/buildings/`);
    if (!res.ok) throw new Error("Failed to load buildings");
    return res.json();
}

// Get rooms by building
export async function getRooms(buildingId) {
    const res = await fetch(`${BASE_URL}/rooms/?building_id=${buildingId}`);
    if (!res.ok) throw new Error("Failed to load rooms");
    return res.json();
}

// Get all rooms
export async function getAllRooms() {
    const res = await fetch(`${BASE_URL}/rooms/`);
    if (!res.ok) throw new Error("Failed to load rooms");
    return res.json();
}

// Get users
export async function getUsers() {
    const res = await fetch(`${BASE_URL}/users/`);
    if (!res.ok) throw new Error("Failed to load users");
    return res.json();
}

// Get reservations
export async function getReservations(filters = {}) {
    const params = new URLSearchParams();

    if (filters.user_id != null) params.set("user_id", filters.user_id);
    if (filters.room_id != null) params.set("room_id", filters.room_id);
    if (filters.date != null) params.set("date", filters.date);

    const query = params.toString();
    const url = query
        ? `${BASE_URL}/reservations/?${query}`
        : `${BASE_URL}/reservations/`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load reservations");
    return res.json();
}

// Create reservation
export async function createReservation(data) {
    const res = await fetch(`${BASE_URL}/reservations/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Failed to create reservation");
    }

    return res.json();
}

// Cancel reservation
export async function cancelReservation(reservationId) {
    const res = await fetch(`${BASE_URL}/reservations/${reservationId}`, {
        method: "DELETE"
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Failed to cancel reservation");
    }

    return res.json();
}