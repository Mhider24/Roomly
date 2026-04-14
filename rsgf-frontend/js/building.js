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

// Prototype room overlays.
// Add more buildings/floors later using the same pattern.
const roomOverlays = {
    pec: {
        0: [
            {
        id: "1410",
        status: "available",
        coords: [
            [476.9494022617124, 672],
            [476.9494022617124, 698],
            [458.93428109854597, 700],
            [456.9326009693053, 674]
        ]
    },
    {
        id: "1420",
        status: "available",
        coords: [
            [526.4940226171244, 673],
            [526.4940226171244, 695],
            [510.4805815831987, 696],
            [510.4805815831987, 671]
        ]
    },
    {
        id: "1430",
        status: "available",
        coords: [
            [582.5410662358643, 669],
            [583.5419063004847, 696],
            [569.5301453957997, 697],
            [568.5293053311793, 669]
        ]
    },
    {
        id: "1440",
        status: "available",
        coords: [
            [640.5897899838449, 668],
            [638.5881098546042, 697],
            [622.5746688206785, 697],
            [623.5755088852989, 667]
        ]
    },
    {
        id: "1560",
        status: "available",
        coords: [
            [435.41757673667206, 853],
            [436.4184168012924, 879],
            [425.40917609046846, 880],
            [425.40917609046846, 854]
        ]
    },
    {
        id: "1310",
        status: "available",
        coords: [
            [611.06197092084, 978],
            [611.06197092084, 996],
            [597.050210016155, 998],
            [597.050210016155, 978]
        ]
    },
    {
        id: "1330",
        status: "available",
        coords: [
            [635.0821324717285, 884],
            [633.0804523424879, 912],
            [619.068691437803, 912],
            [615.0653311793214, 888]
        ]
    },
    {
        id: "1340",
        status: "available",
        coords: [
            [605.0569305331179, 804],
            [607.0586106623587, 826],
            [597.050210016155, 826],
            [597.050210016155, 804]
        ]
    },
    {
        id: "1550",
        status: "available",
        coords: [
            [557.0166074313408, 804],
            [557.0166074313408, 752],
            [543.0048465266559, 770],
            [543.0048465266559, 750]
        ]
    },
    {
        id: "1530",
        status: "available",
        coords: [
            [587.0418093699516, 894],
            [587.0418093699516, 912],
            [575.0317285945073, 918],
            [571.0283683360258, 892]
        ]
    },
    {
        id: "1540",
        status: "available",
        coords: [
            [528.993085621971, 892],
            [528.993085621971, 918],
            [518.9846849757673, 918],
            [514.9813247172859, 892]
        ]
    },
    {
        id: "1000",
        status: "available",
        coords: [
            [583.0384491114701, 1048],
            [583.0384491114701, 1070],
            [573.0300484652665, 1072],
            [569.0266882067851, 1046]
        ]
    },
    {
        id: "1200",
        status: "available",
        coords: [
            [559.0182875605815, 880],
            [559.0182875605815, 900],
            [545.0065266558966, 902],
            [545.0065266558966, 878]
        ]
    },
    {
        id: "1010",
        status: "available",
        coords: [
            [681.120775444265, 980],
            [681.120775444265, 992],
            [673.114054927302, 992],
            [669.1106946688207, 982]
        ]
    },
    {
        id: "1020",
        status: "available",
        coords: [
            [689.1274959612279, 1022],
            [689.1274959612279, 1030],
            [675.1157350565428, 1026],
            [673.114054927302, 1034]
        ]
    },
    {
        id: "1030",
        status: "available",
        coords: [
            [685.1241357027463, 1062],
            [685.1241357027463, 1074],
            [671.1123747980614, 1060],
            [671.1123747980614, 1072]
        ]
    },
    {
        id: "1510",
        status: "available",
        coords: [
            [667.1090145395799, 1036],
            [665.1073344103393, 1058],
            [649.0938933764136, 1054],
            [651.0955735056543, 1034]
        ]
    },
    {
        id: "1500",
        status: "available",
        coords: [
            [651.272633279483, 1027.5],
            [651.7730533117932, 1049.5],
            [645.2675928917608, 1027.5],
            [642.76549273021, 1053.5]
        ]
    },
    {
        id: "1S01",
        status: "available",
        coords: [
            [617.7444911147011, 1030.5],
            [616.7436510500808, 1038.5],
            [607.2356704361874, 1038.5],
            [606.234830371567, 1032.5]
        ]
    },
    {
        id: "1140",
        status: "available",
        coords: [
            [513.3990953150242, 842],
            [513.3990953150242, 848],
            [501.38901453957993, 848],
            [501.38901453957993, 840]
        ]
    },
    {
        id: "1150",
        status: "available",
        coords: [
            [513.3990953150242, 789],
            [514.3999353796446, 797],
            [500.3881744749596, 789],
            [499.38733441033924, 798]
        ]
    },
    {
        id: "1170",
        status: "available",
        coords: [
            [455.3503715670436, 814],
            [454.34953150242325, 838],
            [443.34029079159933, 838],
            [444.3411308562197, 811]
        ]
    },
    {
        id: "1600",
        status: "available",
        coords: [
            [466.3596122778675, 773],
            [466.3596122778675, 792],
            [453.34869143780287, 792],
            [453.34869143780287, 773]
        ]
    },
    {
        id: "1110",
        status: "available",
        coords: [
            [484.95612277867525, 1036],
            [482.95444264943455, 1056],
            [468.9426817447496, 1058],
            [468.9426817447496, 1034]
        ]
    },
    {
        id: "1120",
        status: "available",
        coords: [
            [482.95444264943455, 960],
            [482.95444264943455, 988],
            [468.9426817447496, 988],
            [468.9426817447496, 962]
        ]
    },
    {
        id: "1130",
        status: "available",
        coords: [
            [484.95612277867525, 890],
            [484.95612277867525, 914],
            [468.9426817447496, 916],
            [468.9426817447496, 888]
        ]
    }
],
        
        1: [
            {
                id: "2010",
                status: "available",
                coords: [
                    [680.5654281098546, 1090],
                    [678.2806138933764, 1125.5],
                    [656.7625525040388, 1128],
                    [660.7659127625202, 1094.5]
                ]
            },
            {
                id: "2020",
                status: "available",
                coords: [
                    [677.5326655896607, 1155],
                    [676.5318255250404, 1180],
                    [661.519224555735, 1180],
                    [662.5200646203555, 1153]
                ]
            },
            {
                id: "2000",
                status: "available",
                coords: [
                    [631.4940226171244, 1090],
                    [632.4948626817447, 1121],
                    [613.478901453958, 1120],
                    [611.4772213247172, 1092]
                ]
            },
            {
                id: "2S01",
                status: "available",
                coords: [
                    [649.5091437802907, 1139],
                    [650.5099838449112, 1149],
                    [642.5032633279483, 1149],
                    [642.5032633279483, 1138]
                ]
            },
            {
                id: "2030",
                status: "available",
                coords: [
                    [644.504943457189, 1173],
                    [644.504943457189, 1183],
                    [629.4923424878837, 1183],
                    [629.4923424878837, 1172]
                ]
            },
            {
                id: "2040",
                status: "available",
                coords: [
                    [613.478901453958, 1160],
                    [617.4822617124394, 1184],
                    [603.4705008077544, 1184],
                    [599.4671405492729, 1162]
                ]
            },
            {
                id: "2050",
                status: "available",
                coords: [
                    [581.4520193861066, 1160],
                    [582.4528594507269, 1183],
                    [572.4444588045235, 1182],
                    [571.4436187399031, 1160]
                ]
            },
            {
                id: "2E01",
                status: "available",
                coords: [
                    [556.4310177705977, 1114],
                    [556.4310177705977, 1114],
                    [543.2045880452342, 1117.5],
                    [543.2045880452342, 1105]
                ]
            },
            {
                id: "2520",
                status: "available",
                coords: [
                    [563.481421647819, 1131],
                    [563.481421647819, 1145],
                    [535.4578998384491, 1145],
                    [534.4570597738287, 1130]
                ]
            },
            {
                id: "2510",
                status: "available",
                coords: [
                    [554.4738610662358, 1159],
                    [555.4747011308561, 1182],
                    [543.464620355412, 1183],
                    [543.464620355412, 1159]
                ]
            },
            {
                id: "2120",
                status: "available",
                coords: [
                    [531.4545395799677, 1106],
                    [521.4461389337641, 1116],
                    [521.4461389337641, 1116],
                    [521.2230694668821, 1108.5]
                ]
            },
            {
                id: "2060",
                status: "available",
                coords: [
                    [527.7285298869144, 1159],
                    [526.727689822294, 1185],
                    [512.2155088852988, 1184],
                    [512.7159289176091, 1158.5]
                ]
            },
            {
                id: "2100",
                status: "available",
                coords: [
                    [506.35523424878835, 1085.5],
                    [506.10502423263324, 1096.5],
                    [492.8438933764136, 1096.5],
                    [493.59452342487884, 1086.5]
                ]
            },
            {
                id: "2100",
                status: "available",
                coords: [
                    [476.2041680129241, 1087],
                    [476.2041680129241, 1094],
                    [463.1932471728594, 1095],
                    [462.1924071082391, 1089.5]
                ]
            },
            {
                id: "2090",
                status: "available",
                coords: [
                    [478.20584814216477, 1109.5],
                    [478.20584814216477, 1120],
                    [461.19156704361876, 1121.5],
                    [460.69114701130854, 1109.5]
                ]
            },
            {
                id: "2070",
                status: "available",
                coords: [
                    [495.720549273021, 1163],
                    [495.720549273021, 1178.5],
                    [484.7113085621971, 1179],
                    [484.7113085621971, 1165]
                ]
            },
            {
                id: "2080",
                status: "available",
                coords: [
                    [464.19408723747983, 1147.5],
                    [464.19408723747983, 1171],
                    [449.6819063004847, 1171.5],
                    [449.6819063004847, 1148.5]
                ]
            }
        ],
        2: [
            {
                id: "3000",
                status: "available",
                coords: [
                    [541.0031663974152, 1010],
                    [536.9998061389338, 1030],
                    [524.9897253634895, 1012],
                    [524.9897253634895, 1030]
                ]
            }
        ]
    }
};

let floorMap = null;
let currentFloorIndex = 0;

function getBuildingIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function getFloorImagePath(floorplanPath) {
    return floorplanPath;
}

function getFloorLabel(floorplanPath, index) {
    const fileName = floorplanPath.split("/").pop().replace(/\.(png|jpg|jpeg)$/i, "");
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

function renderRoomSummary(buildingId, roomListElement) {
    const rooms = roomOverlays[buildingId]?.[currentFloorIndex] || [];

    if (rooms.length === 0) {
        roomListElement.innerHTML = `
            <p>No room overlays added for this floor yet.</p>
        `;
        return;
    }

    roomListElement.innerHTML = `
        <p>Blue rooms are available. Red rooms are unavailable.</p>
        <ul>
            ${rooms.map(room => `<li>${room.id} - ${room.status}</li>`).join("")}
        </ul>
    `;
}

function loadLeafletFloor(buildingId, floorplanPath) {
    const roomListElement = document.getElementById("room-list");
    const floorMapElement = document.getElementById("floor-map");
    const floorImageElement = document.getElementById("floorplan-image");

    if (!floorMapElement) {
        return;
    }

    if (!window.L) {
        floorMapElement.remove();
        renderRoomSummary(buildingId, roomListElement);
        return;
    }

    if (floorMap) {
        floorMap.remove();
    }

    floorMap = L.map("floor-map", {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 2,
        dragging: false
    });

    const bounds = [[0, 0], [1000, 2000]];
    const imageOverlay = L.imageOverlay(floorplanPath, bounds).addTo(floorMap);
    imageOverlay.on("load", () => {
        if (floorImageElement) {
            floorImageElement.hidden = true;
        }
    });
    imageOverlay.on("error", () => {
        floorMap.remove();
        floorMap = null;
        floorMapElement.remove();

        if (floorImageElement) {
            floorImageElement.hidden = false;
        }
    });
    floorMap.fitBounds(bounds);

    const rooms = roomOverlays[buildingId]?.[currentFloorIndex] || [];

    rooms.forEach(room => {
        const color = room.status === "available" ? "blue" : "red";

        const polygon = L.polygon(room.coords, {
            color: color,
            fillColor: color,
            fillOpacity: 0.3,
            weight: 2
        })
        .addTo(floorMap)
        .bindTooltip(`${room.id} - ${room.status}`, {
            sticky: true
        });

        if (room.status === "available") {
            polygon.on("click", function () {
                alert(`Clicked room ${room.id}`);
            });
        }
    });

    floorMap.on("click", function (e) {
        console.log(e.latlng);
    });

    renderRoomSummary(buildingId, roomListElement);
}

function renderFloorplan(buildingId, floorplans, floorplanContainer) {
    const floorplanPath = floorplans[currentFloorIndex];
    const floorLabel = getFloorLabel(floorplanPath, currentFloorIndex);
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

            <div id="floor-map"></div>
            <img
                id="floorplan-image"
                class="floorplan-image"
                src="${floorplanPath}"
                alt="${floorLabel} keyplan"
            >
        </section>
    `;

    loadLeafletFloor(buildingId, floorplanPath);

    if (!hasMultipleFloors) {
        return;
    }

    document.getElementById("floor-down").addEventListener("click", () => {
        currentFloorIndex = Math.max(0, currentFloorIndex - 1);
        renderFloorplan(buildingId, floorplans, floorplanContainer);
    });

    document.getElementById("floor-up").addEventListener("click", () => {
        currentFloorIndex = Math.min(floorplans.length - 1, currentFloorIndex + 1);
        renderFloorplan(buildingId, floorplans, floorplanContainer);
    });
}

function loadBuildingPage() {
    const buildingId = getBuildingIdFromUrl();
    const buildingNameElement = document.getElementById("building-name");
    const floorplanContainer = document.getElementById("floorplan-container");
    const roomListElement = document.getElementById("room-list");

    if (!buildingId) {
        buildingNameElement.textContent = "No building selected";
        floorplanContainer.innerHTML = "<p>No floorplan available.</p>";
        roomListElement.innerHTML = "<p>Please return to the campus map and select a building.</p>";
        return;
    }

    const buildingName = buildingNames[buildingId] || `Unknown Building (${buildingId})`;
    buildingNameElement.textContent = buildingName;

    const floorplans = buildingFloorplans[buildingId];

    if (!floorplans || floorplans.length === 0) {
        floorplanContainer.innerHTML = "<p>No floorplan available for this building.</p>";
        roomListElement.innerHTML = "<p>No rooms available for this building.</p>";
        return;
    }

    currentFloorIndex = 0;
    renderFloorplan(buildingId, floorplans, floorplanContainer);
}

loadBuildingPage();
