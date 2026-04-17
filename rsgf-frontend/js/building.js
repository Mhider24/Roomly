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
                    [403.2622153007592, 194],
                    [403.2622153007592, 214],
                    [387.24871844786185, 216],
                    [387.24871844786185, 194]
                ]
            },
            {
                id: "1015",
                status: "available",
                coords: [
                    [339.2082278891701, 314],
                    [339.2082278891701, 336],
                    [329.19979235610924, 336],
                    [325.1964181428849, 312]
                ]
            },
            {
                id: "1021",
                status: "available",
                coords: [
                    [417.27402504704423, 526],
                    [411.26896372720785, 552],
                    [397.2571539809227, 548],
                    [399.25884108753485, 528]
                ]
            },
            {
                id: "1041",
                status: "available",
                coords: [
                    [315.1879826098241, 1144],
                    [315.1879826098241, 1168],
                    [301.176172863539, 1170],
                    [299.17448575692686, 1148]
                ]
            },
            {
                id: "1046",
                status: "available",
                coords: [
                    [411.26896372720785, 1358],
                    [411.26896372720785, 1382],
                    [397.2571539809227, 1382],
                    [395.2554668743105, 1358]
                ]
            },
            {
                id: "1071",
                status: "available",
                coords: [
                    [727.5355265719292, 828],
                    [727.5355265719292, 846],
                    [713.523716825644, 848],
                    [709.5203426124197, 826]
                ]
            },
            {
                id: "1094",
                status: "available",
                coords: [
                    [623.4477970280968, 1702],
                    [623.4477970280968, 1724],
                    [609.4359872818117, 1724],
                    [605.4326130685873, 1700]
                ]
            }
        ],

        1: [
            {
                id: "2062",
                status: "available",
                coords: [
                    [401.28752189994157, 988],
                    [401.28752189994157, 1008],
                    [391.27908636688073, 1010],
                    [393.2807734734929, 984]
                ]
            },
            {
                id: "2063",
                status: "available",
                coords: [
                    [347.2419700214133, 890],
                    [347.2419700214133, 912],
                    [335.2318473817403, 912],
                    [335.2318473817403, 890]
                ]
            },
            {
                id: "2090",
                status: "available",
                coords: [
                    [405.2908961131659, 1322],
                    [405.2908961131659, 1350],
                    [391.27908636688073, 1350],
                    [393.2807734734929, 1326]
                ]
            },
            {
                id: "2047",
                status: "available",
                coords: [
                    [463.33982220491856, 584],
                    [465.3415093115307, 610],
                    [453.33138667185773, 610],
                    [451.32969956524556, 580]
                ]
            },
            {
                id: "2092",
                status: "unavailable",
                coords: [
                    [409.29427032639023, 1456],
                    [409.29427032639023, 1466],
                    [393.2807734734929, 1466],
                    [387.2757121536564, 1456]
                ]
            },
            {
                id: "2094",
                status: "unavailable",
                coords: [
                    [405.2908961131659, 1492],
                    [407.29258321977807, 1502],
                    [391.27908636688073, 1502],
                    [391.27908636688073, 1492]
                ]
            },
            {
                id: "2087",
                status: "unavailable",
                coords: [
                    [283.1879826098241, 1490],
                    [283.1879826098241, 1498],
                    [267.17448575692686, 1498],
                    [267.17448575692686, 1490]
                ]
            }
        ],

        2: [
            {
                id: "3034",
                status: "available",
                coords: [
                    [386.6471351631951, 258],
                    [385.64629160988903, 282],
                    [374.6370125235221, 282],
                    [374.6370125235221, 261]
                ]
            },
            {
                id: "3035",
                status: "available",
                coords: [
                    [387.65219648303156, 386],
                    [387.65219648303156, 409],
                    [373.64038673674645, 410],
                    [373.64038673674645, 386]
                ]
            },
            {
                id: "3017",
                status: "available",
                coords: [
                    [338.61086237103365, 412],
                    [338.61086237103365, 430],
                    [322.59736551813637, 431],
                    [322.59736551813637, 409]
                ]
            },
            {
                id: "3065",
                status: "available",
                coords: [
                    [350.62098501070665, 926],
                    [351.62182856401273, 949],
                    [335.6083317111154, 950],
                    [335.6083317111154, 926]
                ]
            },
            {
                id: "3064",
                status: "unavailable",
                coords: [
                    [276.5585620660567, 836],
                    [276.5585620660567, 843],
                    [265.5492829796898, 843],
                    [265.5492829796898, 837]
                ]
            },
            {
                id: "3076",
                status: "unavailable",
                coords: [
                    [277.2318473817403, 1160],
                    [277.2318473817403, 1168],
                    [269.2250989552916, 1168],
                    [267.22341184867946, 1162]
                ]
            },
            {
                id: "3039",
                status: "unavailable",
                coords: [
                    [443.37187723054956, 254],
                    [443.37187723054956, 262],
                    [429.36006748426445, 262],
                    [427.3583803776523, 256]
                ]
            }
        ],

        3: [
            {
                id: "4051",
                status: "available",
                coords: [
                    [348.6715982090714, 886],
                    [348.6715982090714, 908],
                    [338.66316267601064, 908],
                    [337.66231912270456, 886]
                ]
            },
            {
                id: "4073",
                status: "available",
                coords: [
                    [405.719680747518, 925],
                    [405.719680747518, 948],
                    [394.7104016611511, 949],
                    [391.7078710012329, 925]
                ]
            },
            {
                id: "4074",
                status: "available",
                coords: [
                    [415.7281162805788, 1022],
                    [415.7281162805788, 1045],
                    [405.719680747518, 1045],
                    [405.719680747518, 1021]
                ]
            },
            {
                id: "4048",
                status: "unavailable",
                coords: [
                    [274.6091752644215, 759],
                    [275.61001881772756, 782],
                    [264.6007397313607, 783],
                    [262.59905262474854, 758]
                ]
            },
            {
                id: "4053",
                status: "unavailable",
                coords: [
                    [274.6091752644215, 907],
                    [274.6091752644215, 928],
                    [266.60242683797287, 929],
                    [266.60242683797287, 908]
                ]
            },
            {
                id: "4058",
                status: "unavailable",
                coords: [
                    [273.6083317111154, 1088],
                    [266.60242683797287, 1110],
                    [266.60242683797287, 1110],
                    [263.5998961780546, 1089]
                ]
            },
            {
                id: "4068",
                status: "unavailable",
                coords: [
                    [274.6091752644215, 1378],
                    [274.6091752644215, 1401],
                    [264.6007397313607, 1401],
                    [264.6007397313607, 1379]
                ]
            }
        ],

        4: [
            {
                id: "5001A",
                status: "available",
                coords: [
                    [527.7179936409059, 635],
                    [528.7188371942119, 661],
                    [512.7053403413147, 663],
                    [513.7061838946207, 633]
                ]
            },
            {
                id: "5001B",
                status: "available",
                coords: [
                    [506.7002790214782, 572],
                    [506.7002790214782, 599],
                    [493.6893128284991, 600],
                    [493.6893128284991, 570]
                ]
            },
            {
                id: "5001C",
                status: "available",
                coords: [
                    [378.59230419829987, 661],
                    [379.59314775160595, 668],
                    [367.583025111933, 668],
                    [366.5821815586269, 662]
                ]
            },
            {
                id: "5001D",
                status: "available",
                coords: [
                    [409.6184543507884, 832],
                    [409.6184543507884, 842],
                    [391.60327039127895, 843],
                    [391.60327039127895, 834]
                ]
            },
            {
                id: "5001E",
                status: "available",
                coords: [
                    [459.677503082214, 871],
                    [459.677503082214, 879],
                    [449.66906754915317, 879],
                    [446.666536889235, 871]
                ]
            },
            {
                id: "5002S",
                status: "available",
                coords: [
                    [394.82441113490364, 628],
                    [394.3239893582506, 634.5],
                    [386.31724093180196, 634.5],
                    [385.3163973784959, 629]
                ]
            }
        ]
    }
};

let floorMap = null;
let currentFloorIndex = 0;
const FLOORPLAN_ASSET_VERSION = "8";

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
