var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 2,
    dragging: false
});

var bounds = [[0, 0], [1000, 2000]];

L.imageOverlay('campus.png', bounds).addTo(map);
map.fitBounds(bounds);

function openBuilding(buildingId) {
    window.location.href = `building.html?id=${buildingId}`;
}

var buildings = [
    {
        id: "cb",
        name: "College of Arts, Sciences, and Letters",
        coords: [
            [733.3529297255207, 746],
            [735.3546168321329, 778],
            [715.3377457660113, 752],
            [709.3326844461749, 762]
        ]
    },
    {
        id: "fhwc",
        name: "Fieldhouse / Wellness Center",
        coords: [
            [721.3428070858478, 434],
            [721.3428070858478, 454],
            [695.3208746998896, 430],
            [693.3191875932775, 452]
        ]
    },
    {
        id: "ml",
        name: "Mardigian Library",
        coords: [
            [677.3056907403802, 1220],
            [671.3006294205438, 1270],
            [637.2719486081371, 1262],
            [643.2770099279735, 1218]
        ]
    },
    {
        id: "ab",
        name: "Administration Building",
        coords: [
            [771.3849847511517, 1552],
            [771.3849847511517, 1576],
            [743.3613652585815, 1548],
            [743.3613652585815, 1572]
        ]
    },
    {
        id: "elb",
        name: "England Engineering Lab Building",
        coords: [
            [645.2786970345857, 1502],
            [645.2786970345857, 1526],
            [615.2533904354033, 1500],
            [615.2533904354033, 1522]
        ]
    },
    {
        id: "pec",
        name: "Professional Education Center",
        coords: [
            [689.3158133800532, 1626],
            [689.3158133800532, 1644],
            [659.2905067808708, 1626],
            [655.2871325676465, 1638]
        ]
    },
    {
        id: "ruc",
        name: "Renick University Center",
        coords: [
            [693.3191875932775, 938],
            [685.3124391668289, 970],
            [643.2770099279735, 968],
            [649.28207124781, 928]
        ]
    },
    {
        id: "nsb",
        name: "Natural Science Building",
        coords: [
            [805.4136655635584, 1390],
            [789.4001687106612, 1388],
            [803.4119784569464, 1410],
            [785.3967944974369, 1410]
        ]
    },
    {
        id: "ssb",
        name: "Social Sciences Building",
        coords: [
            [869.4676529751476, 1572],
            [865.4642787619233, 1600],
            [827.4322237362923, 1564],
            [823.4288495230679, 1596]
        ]
    },
    {
        id: "cis",
        name: "Computer & Information Science",
        coords: [
            [741.3596781519693, 1454],
            [733.3529297255207, 1476],
            [709.3326844461749, 1446],
            [707.3309973395626, 1470]
        ]
    },
    {
        id: "apc",
        name: "Auxiliary Program Center",
        coords: [
            [877.5098306404516, 1266],
            [877.5098306404516, 1286],
            [847.4845240412692, 1286],
            [849.4862111478814, 1258]
        ]
    },
    {
        id: "css",
        name: "Campus Support Services",
        coords: [
            [879.5115177470637, 1782],
            [877.5098306404516, 1814],
            [863.4980208941665, 1786],
            [859.4946466809422, 1810]
        ]
    },
    {
        id: "eic",
        name: "Environmental Interpretive Center",
        coords: [
            [941.5638180520408, 1694],
            [939.5621309454286, 1724],
            [921.5469469859191, 1698],
            [921.5469469859191, 1718]
        ]
    },
    {
        id: "iavs",
        name: "Institute for Advanced Vehicle Systems",
        coords: [
            [663.3293102329505, 1322],
            [663.3293102329505, 1338],
            [649.3175004866654, 1324],
            [645.314126273441, 1340]
        ]
    },
    {
        id: "msel",
        name: "Manufacturing Systems Engineering Lab",
        coords: [
            [693.3546168321329, 1578],
            [691.3529297255207, 1594],
            [675.3394328726234, 1578],
            [673.3377457660113, 1592]
        ]
    },
    {
        id: "mrl",
        name: "Modular Research Lab",
        coords: [
            [861.4963337875544, 1496],
            [861.4963337875544, 1512],
            [843.4811498280449, 1510],
            [845.482836934657, 1488]
        ]
    },
    {
        id: "mps",
        name: "Monteith Parking Structure",
        coords: [
            [825.4659658685355, 1776],
            [823.4642787619233, 1798],
            [805.4490948024138, 1796],
            [805.4490948024138, 1774]
        ]
    },
    {
        id: "nsbs",
        name: "Natural Sciences Building South",
        coords: [
            [793.4035429238855, 1244],
            [793.4035429238855, 1258],
            [781.3934202842125, 1240],
            [771.3849847511517, 1256]
        ]
    },
    {
        id: "sfc",
        name: "Science Faculty Center",
        coords: [
            [877.5098306404516, 1312],
            [877.5098306404516, 1358],
            [851.4878982544935, 1358],
            [851.4878982544935, 1314]
        ]
    },
    {
        id: "gb",
        name: "Grounds Building",
        coords: [
            [831.471027188372, 1880],
            [823.4642787619233, 1934],
            [791.4372850561288, 1928],
            [799.4440334825774, 1868]
        ]
    },
    {
        id: "slrc",
        name: "Science Learning and Research Center",
        coords: [
            [839.4777756148205, 1440],
            [827.4676529751476, 1440],
            [819.460904548699, 1462],
            [835.4744014015962, 1466]
        ]
    },
    {
        id: "hpec",
        name: "Heinz Prechter Engineering Complex",
        coords: [
            [629.2652001816884, 1588],
            [621.2584517552398, 1630],
            [593.2348322626694, 1628],
            [595.2365193692817, 1582]
       ]
    },
    {
        id: "ca",
        name: "CASL Annex",
        coords: [
            [821.4271624164558, 900],
            [825.4305366296801, 926],
            [803.4119784569464, 932],
            [803.4119784569464, 906]
        ]
    },
    {
        id: "flc",
        name: "Fair Lane Cottages",
        coords: [
            [859.4592174420868, 974],
            [857.4575303354746, 1050],
            [825.4305366296801, 1048],
            [829.4339108429044, 972]
        ]
    },
    {
        id: "flpb",
        name: "Fair Lane Pony Barn",
        coords: [
            [863.4625916553111, 1066],
            [863.4625916553111, 1118],
            [829.4339108429044, 1122],
            [831.4355979495166, 1068]
        ]
    }
    ];

buildings.forEach(function (building) {
    L.polygon(building.coords, {
        color: 'blue',
        fillOpacity: 0.2,
        interactive: true 
    })
    .addTo(map)
    .bindTooltip(building.name)
    .on('click', function () {
        openBuilding(building.id);
    });
});

// Debug: click anywhere to get coordinates
map.on('click', function (e) {
    console.log(e.latlng);
});