const BASE_URL = "http://localhost:8000";

// Get buildings
export async function getBuildings() {
    const res = await fetch(`${BASE_URL}/buildings/`);
    return res.json();
}

// Get rooms by building
export async function getRooms(buildingId) {
    const res = await fetch(`${BASE_URL}/rooms/?building_id=${buildingId}`);
    return res.json();
}