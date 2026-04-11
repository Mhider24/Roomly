const buildingNames = {
    cb: "College of Arts, Sciences, and Letters",
    fhwc: "Fieldhouse / Wellness Center",
    ml: "Mardigian Library",
    ab: "Administration Building",
    elb: "England Engineering Lab Building",
    pec: "Professional Education Center",
    ruc: "Renick University Center",
    nsb: "Natural Science Building",
    ssb: "Social Sciences Building",
    cis: "Computer & Information Science",
    apc: "Auxiliary Program Center",
    css: "Campus Support Services",
    eic: "Environmental Interpretive Center",
    iavs: "Institute for Advanced Vehicle Systems",
    msel: "Manufacturing Systems Engineering Lab",
    mrl: "Modular Research Lab",
    mps: "Monteith Parking Structure",
    nsbs: "Natural Sciences Building South",
    sfc: "Science Faculty Center",
    gb: "Grounds Building",
    slrc: "Science Learning and Research Center",
    hpec: "Heinz Prechter Engineering Complex",
    ca: "CASL Annex",
    flc: "Fair Lane Cottages",
    flpb: "Fair Lane Pony Barn"
};

function getBuildingIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function loadBuildingPage() {
    const buildingId = getBuildingIdFromUrl();
    const buildingNameElement = document.getElementById("building-name");
    const roomListElement = document.getElementById("room-list");

    if (!buildingId) {
        buildingNameElement.textContent = "No building selected";
        roomListElement.innerHTML = "<p>Please return to the campus map and select a building.</p>";
        return;
    }

    const buildingName = buildingNames[buildingId] || `Unknown Building (${buildingId})`;
    buildingNameElement.textContent = buildingName;

    roomListElement.innerHTML = `
        <p>Selected building ID: <strong>${buildingId}</strong></p>
        <p>This page is ready for room data and floor maps.</p>
        <ul>
            <li>Room 101 (placeholder)</li>
            <li>Room 102 (placeholder)</li>
            <li>Room 103 (placeholder)</li>
        </ul>
    `;
}

loadBuildingPage();