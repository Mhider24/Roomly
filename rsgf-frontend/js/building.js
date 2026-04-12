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
        "Keyplans/Keyplans/CASL-1080/CASL-Floor 1.pdf",
        "Keyplans/Keyplans/CASL-1080/CASL-Floor 2.pdf",
        "Keyplans/Keyplans/CASL-1080/CASL-Floor 3.pdf",
        "Keyplans/Keyplans/CASL-1080/CASL-Floor 4.pdf"
    ],

    ml: [
        "Keyplans/Keyplans/ML-1065/MLIB-1.pdf",
        "Keyplans/Keyplans/ML-1065/MLIB-2.pdf",
        "Keyplans/Keyplans/ML-1065/MLIB-3.pdf",
        "Keyplans/Keyplans/ML-1065/MLIB-4.pdf",
        "Keyplans/Keyplans/ML-1065/MLIB-B.pdf"
    ],

    ruc: [
        "Keyplans/Keyplans/RUC-1060/RUC-1.pdf",
        "Keyplans/Keyplans/RUC-1060/RUC-2.pdf"
    ],

    hpec: [
        "Keyplans/Keyplans/HPEC-1075/HPEC-1.pdf",
        "Keyplans/Keyplans/HPEC-1075/HPEC-2.pdf",
        "Keyplans/Keyplans/HPEC-1075/HPEC-PH.pdf"
    ],

    ca: [
        "Keyplans/Keyplans/CA-1020/CASLANNEX1.pdf",
        "Keyplans/Keyplans/CA-1020/CASLANNEX2.pdf"
    ],

    fhwc: [
        "Keyplans/Keyplans/FH-1017/FH-1.pdf",
        "Keyplans/Keyplans/FH-1017/FH-2.pdf",
        "Keyplans/Keyplans/FH-1017/FH-GR.pdf"
    ],

    pec: [
        "Keyplans/Keyplans/PEC-1078/PEC-1.pdf",
        "Keyplans/Keyplans/PEC-1078/PEC-2.pdf",
        "Keyplans/Keyplans/PEC-1078/PEC-PH.pdf"
    ],

    elb: [
        "Keyplans/Keyplans/ELB-1013/ELB-1.pdf",
        "Keyplans/Keyplans/ELB-1013/ELB-2.pdf",
        "Keyplans/Keyplans/ELB-1013/ELB-3.pdf",
        "Keyplans/Keyplans/ELB-1013/ELB-4.pdf"
    ],

    nsb: [
        "Keyplans/Keyplans/NSB-1009/NSB-1.pdf",
        "Keyplans/Keyplans/NSB-1009/NSB-2.pdf",
        "Keyplans/Keyplans/NSB-1009/NSB-B.pdf",
        "Keyplans/Keyplans/NSB-1009/NSB-PH.pdf"
    ],

    ssb: [
        "Keyplans/Keyplans/SSB-1077/SSB-1.pdf",
        "Keyplans/Keyplans/SSB-1077/SSB-2.pdf",
        "Keyplans/Keyplans/SSB-1077/SSB-PH.pdf"
    ],

    cis: [
        "Keyplans/Keyplans/CIS-1011/CIS1.pdf",
        "Keyplans/Keyplans/CIS-1011/CIS2.pdf",
        "Keyplans/Keyplans/CIS-1011/CISB.pdf"
    ],

    css: [
        "Keyplans/Keyplans/CSS-1074/CSS1.pdf"
    ],

    iavs: [
        "Keyplans/Keyplans/IAVS-5137/IAVS-1.pdf",
        "Keyplans/Keyplans/IAVS-5137/IAVS-2.pdf",
        "Keyplans/Keyplans/IAVS-5137/IAVS-B.pdf",
        "Keyplans/Keyplans/IAVS-5137/IAVS-PH.pdf"
    ],

    nsbs: [
        "Keyplans/Keyplans/NSBS-1079/NSBS-1.pdf",
        "Keyplans/Keyplans/NSBS-1079/NSBS-2.pdf",
        "Keyplans/Keyplans/NSBS-1079/NSBS-B.pdf",
        "Keyplans/Keyplans/NSBS-1079/NSBS-PH.pdf"
    ],

    sfc: [
        "Keyplans/Keyplans/SFC-1015/SFC-1.pdf",
        "Keyplans/Keyplans/SFC-1015/SFC-2.pdf",
        "Keyplans/Keyplans/SFC-1015/SFC-BASEMENT.pdf"
    ],

    gb: [
        "Keyplans/Keyplans/GB-1073/GB1.pdf"
    ],

    slrc: [
        "Keyplans/Keyplans/SLRC-5138/SLRC-1.pdf",
        "Keyplans/Keyplans/SLRC-5138/SLRC-2.pdf",
        "Keyplans/Keyplans/SLRC-5138/SLRC-3.pdf",
        "Keyplans/Keyplans/SLRC-5138/SLRC-4.pdf"
    ],

    ab: [
        
    ],

    apc: [
        
    ],

    eic: [
        
    ],

    msel: [
        
    ],

    mrl: [
        
    ],

    mps: [
        
    ],

    flc: [
        
    ],

    flbp: [
        
    ]
};

function getBuildingIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
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
        floorplanContainer.innerHTML = floorplans.map((floorplan, index) => `
            <div style="margin-bottom: 30px;">
                <h3>Floor ${index + 1}</h3>
                <iframe
                    src="${floorplan}"
                    width="100%"
                    height="600"
                    style="border: 1px solid #ccc;">
                </iframe>
            </div>
        `).join("");
    } else {
        floorplanContainer.innerHTML = "<p>Buliding cannot be reserved.</p>";
    }

    roomListElement.innerHTML = `
        <p>Selected building ID: <strong>${buildingId}</strong></p>
    `;
}

loadBuildingPage();