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
export async function getReservations() {
    const res = await fetch(`${BASE_URL}/reservations/`);
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
