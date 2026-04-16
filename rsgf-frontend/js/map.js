var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 2,
    dragging: false
});

var bounds = [[0, 0], [1000, 2000]];

L.imageOverlay('UMCampus.png?v=2', bounds).addTo(map);
map.fitBounds(bounds);

function openBuilding(buildingId) {
    window.location.href = `building.html?id=${buildingId}`;
}

var buildings = [
    {
        id: "cb",
        name: "College of Arts, Sciences, and Letters",
        coords: [
            [654.7334119728694, 502],
            [656.7340017693896, 760],
            [596.7163078737835, 750],
            [594.7157180772633, 494]
        ]
    },
    {
        id: "fhwc",
        name: "Fieldhouse / Wellness Center",
        coords: [
            [618.7393099380714, 220],
            [624.7245650250663, 348],
            [510.6909466234149, 324],
            [510.6909466234149, 182]
        ]
    },
    {
        id: "ml",
        name: "Mardigian Library",
        coords: [
        [666.7369507519905, 1118],
        [682.7416691241522, 1248],
        [604.7186670598644, 1248],
        [586.7133588911826, 1124]
        ]
    },
    {
        id: "ab",
        name: "Administration Building",
        coords: [
        [772.7682099675612, 1464],
        [770.767620171041, 1498],
        [694.7452079032734, 1522],
        [690.744028310233, 1482]
        ]
    },
    {
        id: "elb",
        name: "England Engineering Lab Building",
        coords: [
            [654.7334119728694, 1406],
            [584.7127690946623, 1422],
            [586.7133588911826, 1586],
            [646.7310527867886, 1574]
        ]
    },
    {
        id: "pec",
        name: "Professional Education Center",
        coords: [
[696.7457976997936, 1602],
[654.7334119728694, 1606],
[656.7340017693896, 1648],
[692.7446181067533, 1648]
        ]
    },
    {
        id: "ruc",
        name: "Renick University Center",
        coords: [
[636.7281038041875, 794],
[584.7127690946623, 792],
[578.7109997051017, 958],
[632.7269242111472, 954]
        ]
    },
    {
        id: "nsb",
        name: "Natural Science Building",
        coords: [
[768.7670303745208, 1188],
[750.7617222205839, 1192],
[744.7599528162784, 1392],
[766.7664405780006, 1390]
        ]
    },
    {
        id: "ssb",
        name: "Social Sciences Building",
        coords: [
[828.7847242701268, 1414],
[782.7711589501622, 1422],
[788.7729283397227, 1516],
[826.7841344736066, 1510]
        ]
    },
    {
        id: "cis",
        name: "Computer & Information Science",
        coords: [
[728.7552344441168, 1382],
[728.7552344441168, 1406],
[674.7393099380714, 1422],
[670.738130345031, 1400]
        ]
    },
    {
        id: "apc",
        name: "Auxiliary Program Center",
        coords: [
[808.7788263049248, 1128],
[804.7776467118845, 1158],
[778.7699793571218, 1160],
[780.770569153642, 1138]
        ]
    },
    {
        id: "css",
        name: "Campus Support Services",
        coords: [
[854.7923916248894, 1616],
[834.7864936596875, 1624],
[836.7870834562076, 1692],
[856.7929814214096, 1686]
        ]
    },
    {
        id: "eic",
        name: "Environmental Interpretive Center",
        coords: [
[902.8065467413742, 1518],
[900.805956944854, 1584],
[862.7947508109703, 1584],
[856.7929814214096, 1526]
        ]
    },
    {
        id: "iavs",
        name: "Institute for Advanced Vehicle Systems",
        coords: [
[656.7340017693896, 1276],
[600.717487466824, 1274],
[600.717487466824, 1380],
[650.7322323798289, 1376]
        ]
    },
    {
        id: "msel",
        name: "Manufacturing Systems Engineering Lab",
        coords: [
[690.744028310233, 1544],
[664.7363609554703, 1550],
[662.7357711589501, 1588],
[696.7457976997936, 1584]
        ]
    },
    {
        id: "mrl",
        name: "Modular Research Lab",
        coords: [
[826.7841344736066, 1380],
[822.7829548805662, 1402],
[790.773518136243, 1404],
[792.7741079327632, 1382]
        ]
    },
    {
        id: "mps",
        name: "Monteith Parking Structure",
        coords: [
[770.767620171041, 1632],
[772.7682099675612, 1756],
[834.7864936596875, 1738],
[824.7835446770864, 1626]
        ]
    },
    {
        id: "nsbs",
        name: "Natural Sciences Building South",
        coords: [
[744.7599528162784, 1114],
[718.7522854615158, 1114],
[716.7516956649956, 1206],
[738.7581834267178, 1204]
        ]
    },
    {
        id: "sfc",
        name: "Science Faculty Center",
        coords: [
[808.7788263049248, 1194],
[778.7699793571218, 1200],
[776.7693895606017, 1232],
[804.7776467118845, 1232]
        ]
    },
    {
        id: "gb",
        name: "Grounds Building",
        coords: [
[804.7776467118845, 1770],
[784.7717487466824, 1776],
[784.7717487466824, 1832],
[808.7788263049248, 1830]
        ]
    },
    {
        id: "slrc",
        name: "Science Learning and Research Center",
        coords: [
[786.7723385432025, 1310],
[784.7717487466824, 1392],
[768.7670303745208, 1392],
[772.7682099675612, 1308]
        ]
    },
    {
        id: "hpec",
        name: "Heinz Prechter Engineering Complex",
        coords: [
[640.729283397228, 1586],
[644.7304629902684, 1652],
[598.7168976703038, 1658],
[590.714538484223, 1610]
       ]
    },
    {
        id: "ca",
        name: "CASL Annex",
        coords: [
[722.7534650545562, 710],
[692.7446181067533, 768],
[736.7575936301976, 846],
[768.7670303745208, 794]
        ]
    },
    {
        id: "flc",
        name: "Fair Lane Cottages",
        coords: [
[762.7652609849602, 844],
[734.7570038336773, 874],
[752.7623120023592, 934],
[768.7670303745208, 890]
        ]
    },
    {
        id: "flpb",
        name: "Fair Lane Pony Barn",
        coords: [
[778.7699793571218, 944],
[752.7623120023592, 948],
[756.7634915953996, 1006],
[774.7687997640815, 998]
        ]
    }
    ];

buildings.forEach(function (building) {
    var polygon = L.polygon(building.coords, {
        color: 'blue',
        opacity: 0,
        fillOpacity: 0,
        interactive: true 
    })
    .addTo(map)
    .bindTooltip(building.name)
    .on('mouseover', function () {
        polygon.setStyle({
            opacity: 1,
            fillOpacity: 0.2
        });
    })
    .on('mouseout', function () {
        polygon.setStyle({
            opacity: 0,
            fillOpacity: 0
        });
    })
    .on('click', function () {
        openBuilding(building.id);
    });
});

// Debug: click anywhere to get coordinates
map.on('click', function (e) {
    console.log(e.latlng);
});
