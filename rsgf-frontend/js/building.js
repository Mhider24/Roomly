import { getBuildings, getRooms } from "./api.js";

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

const buildingBackendIds = {
    cb: 1,
    elb: 2,
    iavs: 3,
    // etc... match the order they were seeded into the DB!
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
        [866.6552639339428, 40],
        [868.6558537304629, 236],
        [736.6169271601298, 234],
        [744.6192863462106, 28]
    ]
},
{
    id: "1420",
    status: "available",
    coords: [
        [690.6033618401651, 36],
        [694.6045414332056, 238],
        [576.5697434385137, 234],
        [578.5703332350339, 32]
    ]
},
{
    id: "1430",
    status: "available",
    coords: [
        [530.5561781185492, 34],
        [528.5555883220289, 234],
        [416.5225597168977, 230],
        [416.5225597168977, 28]
    ]
},
{
    id: "1440",
    status: "available",
    coords: [
        [370.5089943969331, 32],
        [372.5095841934533, 232],
        [272.48009436744326, 234],
        [278.4818637570038, 24]
    ]
},
            {
    id: "1560",
    status: "available",
    coords: [
        [264.4777351813624, 342],
        [326.49601887348865, 344],
        [320.494249483928, 484],
        [266.4783249778826, 482]
    ]
},
{
    id: "1310",
    status: "available",
    coords: [
        [430.5266882925391, 494],
        [430.5266882925391, 612],
        [266.4783249778826, 614],
        [266.4783249778826, 496]
    ]
},
{
    id: "1330",
    status: "available",
    coords: [
        [428.5260984960189, 634],
        [432.52727808905934, 752],
        [266.4783249778826, 754],
        [266.4783249778826, 630]
    ]
},
{
    id: "1340",
    status: "available",
    coords: [
        [432.52727808905934, 766],
        [434.52786788557944, 894],
        [268.4789147744028, 900],
        [268.4789147744028, 768]
    ]
},
            {
    id: "1550",
    status: "available",
    coords: [
        [446.53140666470074, 322],
        [446.53140666470074, 386],
        [352.50368622825124, 386],
        [350.503096431731, 320]
    ]
},
{
    id: "1530",
    status: "available",
    coords: [
        [446.53140666470074, 402],
        [438.5290474786199, 464],
        [344.5013270421705, 468],
        [346.5019168386907, 402]
    ]
},
{
    id: "1540",
    status: "available",
    coords: [
        [594.5750516071955, 358],
        [528.5555883220289, 356],
        [524.5544087289885, 640],
        [592.5744618106753, 640]
    ]
},
{
    id: "1000",
    status: "available",
    coords: [
        [844.6487761722206, 312],
        [844.6487761722206, 436],
        [682.6010026540844, 436],
        [674.5986434680035, 316]
    ]
},
{
    id: "1200",
    status: "available",
    coords: [
        [844.6487761722206, 448],
        [846.6493659687408, 642],
        [682.6010026540844, 640],
        [682.6010026540844, 446]
    ]
},
{
    id: "1010",
    status: "available",
    coords: [
        [846.6493659687408, 656],
        [844.6487761722206, 772],
        [646.5903863167207, 772],
        [648.5909761132409, 652]
    ]
},
            {
    id: "1020",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1030",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1510",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1500",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1S01",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1140",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1150",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1170",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1600",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1110",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1120",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "1130",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
}
        ],

        1: [
            {
    id: "2010",
    status: "available",
    coords: [
        [957.6820996756119, 666],
        [955.6815098790917, 758],
        [885.6608670008848, 754],
        [885.6608670008848, 666]
    ]
},
{
    id: "2020",
    status: "available",
    coords: [
        [959.6826894721321, 768],
        [959.6826894721321, 854],
        [851.6508404600413, 856],
        [851.6508404600413, 764]
    ]
},
{
    id: "2000",
    status: "available",
    coords: [
        [823.6425833087585, 808],
        [823.6425833087585, 858],
        [751.6213506340313, 856],
        [751.6213506340313, 810]
    ]
},
{
    id: "2S01",
    status: "available",
    coords: [
        [729.614862872309, 786],
        [725.6136832792687, 852],
        [649.591271011501, 856],
        [651.5918608080212, 786]
    ]
},
{
    id: "2030",
    status: "available",
    coords: [
        [621.5830138602182, 784],
        [623.5836036567384, 854],
        [549.561781185491, 856],
        [547.5611913889708, 786]
    ]
},
{
    id: "2040",
    status: "available",
    coords: [
        [425.5252138012386, 788],
        [421.52403420819815, 850],
        [349.5028015334709, 852],
        [349.5028015334709, 786]
    ]
},
{
    id: "2050",
    status: "available",
    coords: [
        [325.49572397522854, 786],
        [327.49631377174876, 856],
        [247.47272191094078, 856],
        [245.47213211442056, 786]
    ]
},
{
    id: "2E01",
    status: "available",
    coords: [
        [263.4774402831023, 666],
        [261.4768504865822, 730],
        [183.4538484222943, 730],
        [183.4538484222943, 666]
    ]
},
{
    id: "2520",
    status: "available",
    coords: [
        [355.50457092303157, 664],
        [359.505750516072, 696],
        [293.4862872309053, 698],
        [293.4862872309053, 666]
    ]
},
{
    id: "2510",
    status: "available",
    coords: [
        [591.5741669124152, 692],
        [591.5741669124152, 730],
        [463.53641993512235, 734],
        [461.53583013860214, 702]
    ]
},
            {
                id: "2120",
                status: "available",
                locked: false,
                coords: [
                    [211.4621055735771, 742],
                    [207.46092598053667, 854],
                    [117.43438513712772, 858],
                    [111.43261574756707, 740]
                ]
            },
            {
                id: "2060",
                status: "available",
                locked: false,
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "2100",
                status: "available",
                locked: false,
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "2100",
                status: "available",
                locked: false,
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "2090",
                status: "available",
                locked: false,
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "2070",
                status: "available",
                locked: false,
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "2080",
                status: "available",
                locked: false,
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            }
        ],
        2: [
            {
                id: "3000",
                status: "available",
                locked: false,
                coords: [
                    [941.6773813034504, 606],
                    [937.6762017104099, 804],
                    [599.5765260984961, 808],
                    [599.5765260984961, 616]
                ]
            }
        ]
    },
    cb: {
        0: [
            {
    id: "1018",
    status: "available",
    coords: [
        [764.6251843114126, 56],
        [818.641108817458, 128],
        [630.5856679445591, 158],
        [580.5709230315541, 94]
    ]
},
{
    id: "1015",
    status: "available",
    coords: [
        [826.6434680035388, 134],
        [860.6534945443822, 202],
        [744.6192863462106, 210],
        [708.608670008847, 150]
    ]
},
{
    id: "1021",
    status: "available",
    coords: [
        [892.6629312887054, 376],
        [880.6593925095842, 440],
        [714.6104393984076, 426],
        [726.6139781775287, 372]
    ]
},
{
    id: "1041",
    status: "available",
    coords: [
        [198.4582718961958, 612],
        [200.45886169271603, 664],
        [76.4222943084635, 666],
        [76.4222943084635, 614]
    ]
},
{
    id: "1046",
    status: "available",
    coords: [
        [346.5019168386907, 214],
        [346.5019168386907, 268],
        [272.48009436744326, 266],
        [274.4806841639635, 212]
    ]
},
{
    id: "1071",
    status: "available",
    coords: [
        [588.5732822176349, 938],
        [604.5780005897965, 974],
        [514.5514597463875, 982],
        [500.5473311704613, 944]
    ]
},
{
    id: "1094",
    status: "available",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
}
        ],

        1: [
            {
    id: "2062",
    status: "available",
    coords: [
        [264.4777351813624, 486],
        [262.4771453848423, 528],
        [170.450014744913, 530],
        [170.450014744913, 490]
    ]
},
{
    id: "2063",
    status: "available",
    coords: [
        [220.46475965791808, 212],
        [218.46416986139786, 246],
        [160.44706576231192, 246],
        [160.44706576231192, 210]
    ]
},
{
    id: "2090",
    status: "available",
    coords: [
        [116.43409023886761, 410],
        [118.43468003538783, 424],
        [78.42288410498372, 426],
        [78.42288410498372, 412]
    ]
},
{
    id: "2047",
    status: "available",
    coords: [
        [116.43409023886761, 156],
        [118.43468003538783, 176],
        [80.42347390150394, 174],
        [78.42288410498372, 154]
    ]
},
{
    id: "2092",
    status: "unavailable",
    coords: [
        [150.44411677971107, 32],
        [150.44411677971107, 58],
        [78.42288410498372, 56],
        [78.42288410498372, 28]
    ]
},
{
    id: "2094",
    status: "unavailable",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "2087",
    status: "unavailable",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
}
        ],

        2: [
            {
    id: "3034",
    status: "available",
    coords: [
        [366.50781480389264, 570],
        [366.50781480389264, 616],
        [282.4830433500442, 616],
        [282.4830433500442, 568]
    ]
},
{
    id: "3035",
    status: "available",
    coords: [
        [246.47242701268067, 738],
        [250.473606605721, 816],
        [166.44883515187257, 816],
        [170.450014744913, 740]
    ]
},
{
    id: "3017",
    status: "available",
    coords: [
        [372.5095841934533, 894],
        [370.5089943969331, 912],
        [294.4865821291654, 914],
        [294.4865821291654, 900]
    ]
},
{
    id: "3065",
    status: "available",
    coords: [
        [328.49660867000887, 40],
        [328.49660867000887, 68],
        [284.48363314656444, 68],
        [286.48422294308466, 40]
    ]
},
{
    id: "3064",
    status: "unavailable",
    coords: [
        [194.45709230315538, 36],
        [192.45650250663527, 66],
        [170.450014744913, 66],
        [170.450014744913, 38]
    ]
},
{
    id: "3076",
    status: "unavailable",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "3039",
    status: "unavailable",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
}
        ],

        3: [
            {
    id: "4051",
    status: "available",
    coords: [
        [115.4337953406075, 452],
        [115.4337953406075, 470],
        [81.42376879976405, 472],
        [79.42317900324383, 454]
    ]
},
{
    id: "4073",
    status: "available",
    coords: [
        [117.43438513712772, 246],
        [117.43438513712772, 274],
        [79.42317900324383, 274],
        [79.42317900324383, 246]
    ]
},
{
    id: "4074",
    status: "available",
    coords: [
        [115.4337953406075, 142],
        [117.43438513712772, 170],
        [79.42317900324383, 172],
        [79.42317900324383, 140]
    ]
},
{
    id: "4048",
    status: "unavailable",
    coords: [
        [427.5258035977588, 160],
        [423.52462400471836, 188],
        [379.51164848127394, 190],
        [381.51223827779415, 162]
    ]
},
{
    id: "4053",
    status: "unavailable",
    coords: [
        [371.5092892951932, 754],
        [367.50810970215275, 864],
        [301.48864641698617, 864],
        [299.48805662046595, 758]
    ]
},
{
    id: "4058",
    status: "unavailable",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
},
{
    id: "4068",
    status: "unavailable",
    coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
}
        ],

        4: [
            {
                id: "5001A",
                status: "available",
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "5001B",
                status: "available",
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "5001C",
                status: "available",
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "5001D",
                status: "available",
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "5001E",
                status: "available",
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            },
            {
                id: "5002S",
                status: "available",
                coords: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
                ]
            }
        ]
    }
};

let floorMap = null;
let currentFloorIndex = 0;
const FLOORPLAN_ASSET_VERSION = "12";

function getBuildingIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function getFloorImagePath(floorplanPath) {
    return `${floorplanPath}?v=${FLOORPLAN_ASSET_VERSION}`;
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


    function openReservationForm(roomId) {
        document.getElementById("modal-room-id").textContent = roomId;
        document.getElementById("form-room-id").value = roomId;
        document.getElementById("form-date").value = new Date().toISOString().split("T")[0];
        document.getElementById("form-error").hidden = true;
        document.getElementById("reservation-modal").hidden = false;
    }

    document.getElementById("modal-close").addEventListener("click", () => {
        document.getElementById("reservation-modal").hidden = true;
    });

    document.getElementById("reservation-modal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
            e.currentTarget.hidden = true;  // click outside to close
        }
    });

    document.getElementById("form-open-invite").addEventListener("change", function () {
        document.getElementById("toggle-text").textContent = this.checked ? "Open" : "Closed";
    });

    document.getElementById("reservation-form").addEventListener("submit", async function (e) {
        e.preventDefault();

        const roomId   = document.getElementById("form-room-id").value;
        const date     = document.getElementById("form-date").value;
        const start    = document.getElementById("form-start").value;
        const end      = document.getElementById("form-end").value;
        const name     = document.getElementById("form-name").value.trim();
        const umid     = document.getElementById("form-umid").value.trim();
        const isOpen   = document.getElementById("form-open-invite").checked;
        const errorEl  = document.getElementById("form-error");

        if (end <= start) {
            errorEl.textContent = "End time must be after start time.";
            errorEl.hidden = false;
            return;
        }

        const buildingCode = getBuildingIdFromUrl();
        const allBuildings = await getBuildings();
        const matchedBuilding = allBuildings.find(
            b => b.code?.toLowerCase() === buildingCode.toLowerCase()
        );

        if (!matchedBuilding) {
            throw new Error("Could not find backend building.");
        }

        const backendRooms = await getRooms(matchedBuilding.id);
        const backendRoom = backendRooms.find(r => r.room_number === roomId);

        if (!backendRoom) {
            throw new Error(`Could not find backend room for room ${roomId}.`);
        }

        try {
            const res = await fetch("http://127.0.0.1:8001/reservations/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                room_id: backendRoom.id,
                date,
                start_time: start,
                end_time: end,
                reservation_name: name,
                umid: umid,
                open_invite: isOpen
            })
            });

            if (!res.ok) throw new Error(await res.text());

            errorEl.hidden = true;
            errorEl.textContent = "";

            document.getElementById("reservation-modal").hidden = true;
            alert(`Room ${roomId} reserved successfully!`);
            loadBuildingPage();  // refresh statuses

        } catch (err) {
            errorEl.textContent = "Reservation failed: " + err.message;
            errorEl.hidden = false;
        }
    });



function loadLeafletFloor(buildingId, floorplanPath) {
    const floorMapElement = document.getElementById("floor-map");

    if (!floorMapElement) {
        return;
    }

    if (!window.L) {
        floorMapElement.innerHTML = "<p>Floor map could not be loaded.</p>";
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

    const bounds = [[0, 0], [1000, 1000]];
    const imageOverlay = L.imageOverlay(floorplanPath, bounds).addTo(floorMap);

    imageOverlay.on("error", () => {
        floorMap.remove();
        floorMap = null;
        floorMapElement.innerHTML = "<p>Floorplan image could not be loaded.</p>";
    });

    floorMap.fitBounds(bounds);

    const rooms = roomOverlays[buildingId]?.[currentFloorIndex] || [];

    rooms.forEach(room => {
        const color = room.status === "available" ? "blue" : "red";

        const polygon = L.polygon(room.coords, {
            color,
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
                openReservationForm(room.id);
            });
        }
    });

    floorMap.on("click", function (e) {
        console.log(e.latlng);
    });
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
        </section>
    `;

    loadLeafletFloor(buildingId, getFloorImagePath(floorplanPath));

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

async function loadBuildingPage() {
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


    let backendId = null;
    try{
    const allBuildings = await fetch("http://127.0.0.1:8001/buildings/").then(r => r.json());
    const match = allBuildings.find(b => b.name === buildingNames[buildingId]);
    backendId = match?.id;
    } catch (err) {
        console.error("Backend fetch failed:", err);//Bugfinder3000
    }
    
    if (backendId) {
        const backendRooms = await fetch(`http://127.0.0.1:8001/rooms/?building_id=${backendId}`).then(r => r.json());
        const today = new Date().toISOString().split("T")[0];

        for (const floorIndex in roomOverlays[buildingId] || {}) {
            for (const room of roomOverlays[buildingId][floorIndex]) {
                if (room.locked) continue; 
                const backendRoom = backendRooms.find(r => r.room_number === room.id);
                if (backendRoom) {
                    const reservations = await fetch(`http://127.0.0.1:8001/reservations/?room_id=${backendRoom.id}&date=${today}`).then(r => r.json());
                    room.status = reservations.length > 0 ? "unavailable" : "available";
                }
            }
        }
    }

    const floorplans = buildingFloorplans[buildingId];

    if (!floorplans || floorplans.length === 0) {
        floorplanContainer.innerHTML = "<p>No floorplan available for this building.</p>";
    } else {
        currentFloorIndex = 0;
        renderFloorplan(buildingId, floorplans, floorplanContainer);
    }

    try {
        const buildings = await getBuildings();

        const matchedBuilding = allBuildings.find(
             b => b.name === buildingNames[buildingCode]
        );

        if (!matchedBuilding) {
            roomListElement.innerHTML = `<p>Could not match "${buildingId}" to backend building data yet.</p>`;
            return;
        }

        const rooms = await getRooms(matchedBuilding.id);

        if (!rooms.length) {
            roomListElement.innerHTML = "<p>No rooms found for this building.</p>";
            return;
        }

        roomListElement.innerHTML = `
            <p>Rooms from backend:</p>
            <ul>
                ${rooms.map(room => `
                    <li>
                        Room ${room.room_number}
                        ${room.capacity ? ` - Capacity: ${room.capacity}` : ""}
                    </li>
                `).join("")}
            </ul>
        `;
    } catch (error) {
        roomListElement.innerHTML = `<p>Error loading rooms: ${error.message}</p>`;
    }
}

loadBuildingPage();
