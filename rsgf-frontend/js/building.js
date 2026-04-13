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

const buildingFloorplans = {
    cb: [
        "Keyplans/Keyplans/CASL-1080/CASL-FLOOR 1.png",
        "Keyplans/Keyplans/CASL-1080/CASL-FLOOR 2.png",
        "Keyplans/Keyplans/CASL-1080/CASL-FLOOR 3.png",
        "Keyplans/Keyplans/CASL-1080/CASL-FLOOR 4.png",
        "Keyplans/Keyplans/CASL-1080/CASL-PENTHOUSE.png"
    ],

    ml: [
        "Keyplans/Keyplans/ML-1065/MLIB-B.png",
        "Keyplans/Keyplans/ML-1065/MLIB-1.png",
        "Keyplans/Keyplans/ML-1065/MLIB-2.png",
        "Keyplans/Keyplans/ML-1065/MLIB-3.png",
        "Keyplans/Keyplans/ML-1065/MLIB-4.png"
    ],

    ruc: [
        "Keyplans/Keyplans/RUC-1060/RUC-1.png",
        "Keyplans/Keyplans/RUC-1060/RUC-2.png"
    ],

    hpec: [
        "Keyplans/Keyplans/HPEC-1075/HPEC-1.png",
        "Keyplans/Keyplans/HPEC-1075/HPEC-2.png",
        "Keyplans/Keyplans/HPEC-1075/HPEC-PH.png"
    ],

    ca: [
        "Keyplans/Keyplans/CA-1020/CASLANNEX1.png",
        "Keyplans/Keyplans/CA-1020/CASLANNEX2.png"
    ],

    fhwc: [
        "Keyplans/Keyplans/FH-1017/FH-GR.png",
        "Keyplans/Keyplans/FH-1017/FH-1.png",
        "Keyplans/Keyplans/FH-1017/FH-2.png"
    ],

    pec: [
        "Keyplans/Keyplans/PEC-1078/PEC-1.png",
        "Keyplans/Keyplans/PEC-1078/PEC-2.png",
        "Keyplans/Keyplans/PEC-1078/PEC-PH.png"
    ],

    elb: [
        "Keyplans/Keyplans/ELB-1013/ELB-1.png",
        "Keyplans/Keyplans/ELB-1013/ELB-2.png",
        "Keyplans/Keyplans/ELB-1013/ELB-3.png",
        "Keyplans/Keyplans/ELB-1013/ELB-4.png"
    ],

    nsb: [
        "Keyplans/Keyplans/NSB-1009/NSB-B.png",
        "Keyplans/Keyplans/NSB-1009/NSB-1.png",
        "Keyplans/Keyplans/NSB-1009/NSB-2.png",
        "Keyplans/Keyplans/NSB-1009/NSB-PH.png"
    ],

    ssb: [
        "Keyplans/Keyplans/SSB-1077/SSB-1.png",
        "Keyplans/Keyplans/SSB-1077/SSB-2.png",
        "Keyplans/Keyplans/SSB-1077/SSB-PH.png"
    ],

    cis: [
        "Keyplans/Keyplans/CIS-1011/CISB.png",
        "Keyplans/Keyplans/CIS-1011/CIS1.png",
        "Keyplans/Keyplans/CIS-1011/CIS2.png"
    ],

    css: [
        "Keyplans/Keyplans/CSS-1074/CSS1.png"
    ],

    iavs: [
        "Keyplans/Keyplans/IAVS-5137/IAVS-B.png",
        "Keyplans/Keyplans/IAVS-5137/IAVS-1.png",
        "Keyplans/Keyplans/IAVS-5137/IAVS-2.png",
        "Keyplans/Keyplans/IAVS-5137/IAVS-PH.png"
    ],

    nsbs: [
        "Keyplans/Keyplans/NSBS-1079/NSBS-B.png",
        "Keyplans/Keyplans/NSBS-1079/NSBS-1.png",
        "Keyplans/Keyplans/NSBS-1079/NSBS-2.png",
        "Keyplans/Keyplans/NSBS-1079/NSBS-PH.png"
    ],

    sfc: [
        "Keyplans/Keyplans/SFC-1015/SFC-BASEMENT.png",
        "Keyplans/Keyplans/SFC-1015/SFC-1.png",
        "Keyplans/Keyplans/SFC-1015/SFC-2.png"
    ],

    gb: [
        "Keyplans/Keyplans/GB-1073/GB1.png"
    ],

    slrc: [
        "Keyplans/Keyplans/SLRC-5138/SLRC-1.png",
        "Keyplans/Keyplans/SLRC-5138/SLRC-2.png",
        "Keyplans/Keyplans/SLRC-5138/SLRC-3.png",
        "Keyplans/Keyplans/SLRC-5138/SLRC-4.png"
    ],

    ab: [],
    apc: [],
    eic: [],
    msel: [],
    mrl: [],
    mps: [],
    flc: [],
    flpb: []
};

const demoRooms = {
    cb: {
        0: [
            { id: "1041", label: "Room 1041" },
            { id: "1043", label: "Room 1043" },
            { id: "1045", label: "Room 1045" }
        ],
        1: [
            { id: "200", label: "Room 200" },
            { id: "201", label: "Room 201" },
            { id: "202", label: "Room 202" }
        ]
    },
    ml: {
        0: [
            { id: "B01", label: "Room B01" },
            { id: "B02", label: "Room B02" }
        ],
        1: [
            { id: "101", label: "Room 101" },
            { id: "102", label: "Room 102" }
        ]
    },
    ruc: {
        0: [
            { id: "120", label: "Room 120" },
            { id: "125", label: "Room 125" }
        ]
    }
};

let currentFloorIndex = 0;

function getBuildingIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function getFloorImagePath(floorplanPath) {
    return floorplanPath;
}

function getFloorLabel(floorplanPath, index) {
    const fileName = floorplanPath.split("/").pop().replace(/\.png$/i, "");
    const normalizedName = fileName.toUpperCase();
    const floorMatch =
        normalizedName.match(/(?:FLOOR\s*|[-_])(\d+)$/) ||
        normalizedName.match(/(\d+)$/);

    if (
        normalizedName.includes("BASEMENT") ||
        normalizedName.endsWith("-B") ||
        normalizedName.endsWith("B")
    ) {
        return "Basement";
    }

    if (
        normalizedName.includes("PENTHOUSE") ||
        normalizedName.endsWith("-PH") ||
        normalizedName.endsWith("PH")
    ) {
        return "Penthouse";
    }

    if (normalizedName.endsWith("-GR") || normalizedName.endsWith("GR")) {
        return "Ground Floor";
    }

    if (floorMatch) {
        return `Floor ${floorMatch[1]}`;
    }

    return `Floor ${index + 1}`;
}

function renderRoomButtons(buildingId, roomListElement) {
    const roomsForFloor = demoRooms[buildingId]?.[currentFloorIndex] || [];

    if (roomsForFloor.length === 0) {
        roomListElement.innerHTML = `
            <p>Selected building ID: <strong>${buildingId}</strong></p>
            <p>No clickable rooms added for this floor yet.</p>
        `;
        return;
    }

    roomListElement.innerHTML = `
        <p>Selected building ID: <strong>${buildingId}</strong></p>
        <div class="room-buttons">
            ${roomsForFloor.map(room => `
                <button
                    class="room-button"
                    type="button"
                    data-room-id="${room.id}"
                >
                    ${room.label}
                </button>
            `).join("")}
        </div>
    `;

    document.querySelectorAll(".room-button").forEach(button => {
        button.addEventListener("click", () => {
            const roomId = button.dataset.roomId;
            alert(`Clicked room ${roomId}`);
        });
    });
}

function renderFloorplan(buildingId, floorplans, floorplanContainer, roomListElement) {
    const floorplanPath = floorplans[currentFloorIndex];
    const floorLabel = getFloorLabel(floorplanPath, currentFloorIndex);
    const imagePath = getFloorImagePath(floorplanPath);
    const hasMultipleFloors = floorplans.length > 1;

    floorplanContainer.innerHTML = `
        <section class="floorplan-viewer" aria-label="Building floorplan">
            <div class="floorplan-toolbar">
                ${hasMultipleFloors ? `
                    <button id="floor-down" type="button" ${currentFloorIndex === 0 ? "disabled" : ""}>
                        Down a floor
                    </button>
                ` : ""}

                <div class="floorplan-status">
                    <h3>${floorLabel}</h3>
                    <p>Floor ${currentFloorIndex + 1} of ${floorplans.length}</p>
                </div>

                ${hasMultipleFloors ? `
                    <button id="floor-up" type="button" ${currentFloorIndex === floorplans.length - 1 ? "disabled" : ""}>
                        Up a floor
                    </button>
                ` : ""}
            </div>

            <img
                class="floorplan-image"
                src="${imagePath}"
                alt="${floorLabel} keyplan"
            >
        </section>
    `;

    renderRoomButtons(buildingId, roomListElement);

    if (!hasMultipleFloors) {
        return;
    }

    document.getElementById("floor-down").addEventListener("click", () => {
        currentFloorIndex = Math.max(0, currentFloorIndex - 1);
        renderFloorplan(buildingId, floorplans, floorplanContainer, roomListElement);
    });

    document.getElementById("floor-up").addEventListener("click", () => {
        currentFloorIndex = Math.min(floorplans.length - 1, currentFloorIndex + 1);
        renderFloorplan(buildingId, floorplans, floorplanContainer, roomListElement);
    });
}

function loadBuildingPage() {
    const buildingId = getBuildingIdFromUrl();
    const buildingNameElement = document.getElementById("building-name");
    const roomListElement = document.getElementById("room-list");
    const floorplanContainer = document.getElementById("floorplan-container");

    if (!buildingId) {
        buildingNameElement.textContent = "No building selected";
        floorplanContainer.innerHTML = "<p>No floorplan available.</p>";
        roomListElement.innerHTML = "<p>Please return to the campus map and select a building.</p>";
        return;
    }

    const buildingName = buildingNames[buildingId] || `Unknown Building (${buildingId})`;
    buildingNameElement.textContent = buildingName;

    const floorplans = buildingFloorplans[buildingId];

    if (floorplans && floorplans.length > 0) {
        currentFloorIndex = 0;
        renderFloorplan(buildingId, floorplans, floorplanContainer, roomListElement);
    } else {
        floorplanContainer.innerHTML = "<p>Building cannot be reserved.</p>";
        renderRoomButtons(buildingId, roomListElement);
    }
}

loadBuildingPage();
