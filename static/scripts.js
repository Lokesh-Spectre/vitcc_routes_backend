const originalConsoleError = console.error;

console.error = function() {
};
        var map = L.map('map',{zoomControl: false}).setView([13.0827, 80.2707], 12); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/021/815/780/small_2x/transparent-circle-icon-background-png.png',
                iconSize: [75,75],
                className: 'vitc-background'
            })
        }).addTo(map);

        L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/018/887/506/small_2x/shapes-vintage-labels-png.png',
                iconSize: [60,60],
                className: 'vitc-background-2'
            })
        }).addTo(map);

        L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://rohan-debayan.github.io/Personal_Website_DM/images/vitlogo.png',
                iconSize: [35,35],
                className: 'vitc-background-2'
            })
        }).addTo(map);

        function getWeight(zoom) {
            return zoom >= 15 ? 5 : zoom >= 10 ? 3 : 2;
        }

        function getOpacity(zoom) {
            return zoom >= 15 ? 0.8 : zoom >= 10 ? 0.6 : 0.4;
        }

        function getFontSize(zoom) {
            return zoom >= 15 ? '16px' : zoom >= 10 ? '14px' : '12px';
        }
        const colors = ["#00ff00", "#ffff00", "#00ffff","#00ff8c","#ff4800","#fc538c"]; 
        function getRandomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function defRoutes() {
        var routes = [
            {
                name: "[1]Padi Saravana",
                waypoints: [
                    [13.101187, 80.190106],
                    [13.130509, 80.136220],
                    [13.130723, 80.132870],
                    [13.127724, 80.122824],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[1A]THIRUMANGALAM",
                waypoints: [
                    [13.087246, 80.194301],
                    [13.088254, 80.179354],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[2]CMBT",
                waypoints: [
                    [13.068509, 80.207417],
                    [13.065017, 80.211314],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[3]SENTHIL NAGAR",
                waypoints: [
                    [13.122398, 80.200658],
                    [13.093978, 80.198732],
                    [13.088585, 80.171794],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[5]MOOLAKADAI",
                waypoints: [
                    [13.130829, 80.238964],
                    [13.136440, 80.231117],
                    [13.144026, 80.220624],
                    [13.085897, 80.161759],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[6]Purasaiwalkam",
                waypoints: [
                    [13.125081, 80.007877],
                    [13.078727, 80.253299],
                    [13.075324, 80.232378],
                    [13.060979, 80.243023],
                    [13.034843, 80.212195],
                    [13.029440, 80.208865],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[12]REDHILLS",
                waypoints: [
                    [13.193086, 80.184116],
                    [13.171357, 80.198832],
                    [13.158956, 80.203621],
                    [13.132634, 80.173357],
                    [13.131188, 80.160785],
                    [13.119765, 80.149916],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[14]ASHOK PILLAR",
                waypoints: [
                    [13.035081, 80.212283],
                    [13.029440, 80.208865],
                    [13.022618, 80.206392],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[15]THIRUVOTTIYUR",
                waypoints: [
                    [13.166269, 80.308079],
                    [13.124940, 80.294644],
                    [13.116883, 80.292946],
                    [13.092236, 80.291661],
                    [12.998555, 80.256115],
                    [12.968324, 80.257407],
                    [12.891855, 80.246055],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[15B]Parrys",
                waypoints: [
                    [13.089135, 80.290525],
                    [13.080525, 80.288336],
                    [13.057546, 80.282076],
                    [13.039083, 80.278840],
                    [13.021826, 80.271129],
                    [12.979846, 80.252707],
                    [12.965159, 80.247392],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[19]KK NAGAR",
                waypoints: [
                    [13.035839, 80.205416],
                    [13.041105, 80.205163],
                    [13.040591, 80.172196],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[20]MANDAVELI",
                waypoints: [
                    [13.030570, 80.266794],
                    [13.027099, 80.255847],
                    [13.031081, 80.239962],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[23]Nathamuni",
                waypoints: [
                    [13.103515, 80.202120],
                    [13.100237, 80.210338],
                    [13.092634, 80.219484],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[24]Madipakkam",
                waypoints: [
                    [12.971763, 80.212344],
                    [12.968173, 80.196242],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[28]Avadi",
                waypoints: [
                    [13.120566, 80.101591],
                    [13.125472, 80.118042],
                    [13.098380, 80.135828],
                    [13.101622, 80.161917],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[28A]Ramapuram Junction",
                waypoints: [
                    [13.041043, 80.173606],
                    [13.038807, 80.168658],
                    [13.031957, 80.164275],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[29]Madhyakailash",
                waypoints: [
                    [13.026822, 80.266107],
                    [13.006651, 80.245983],
                    [12.968338, 80.189613],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[30]Perambur",
                waypoints: [
                    [13.107919, 80.245538],
                    [13.108974, 80.241831],
                    [13.119735, 80.232346],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[31]Ayanavaram",
                waypoints: [
                    [13.099026, 80.231813],
                    [13.091270, 80.240961],
                    [13.088678, 80.241874],
                    [13.083571, 80.240059],
                    [13.083032, 80.227623],
                    [13.043789, 80.149763],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            },
            {
                name: "[40]Natraja Theatere",
                waypoints: [
                    [13.092658, 80.269212],
                    [13.081132, 80.271951],
                    [13.072041, 80.259712],
                    [12.840309, 80.152963] // VIT Chennai
                ]
            }
        ];
        
        routes = routes.map(route => ({ ...route, color: getRandomColor() }));
        return routes;
        }

        var nonac_routes = [
    // THIRUMULLAIVAYAL
    {
        name: "[22]THIRUMULLAIVAYAL",
        waypoints: [
            [13.130768, 80.133600],
            [13.119696, 80.102060],
            [13.119464, 80.094997],
            [13.119208, 80.073924],
            [12.952555, 80.167958],
            [13.014433, 80.224255]
        ]
    },
    // Kolathur
    {
        name: "[22A]Kolathur",
        waypoints: [
            [13.126509, 80.218813],
            [13.124183, 80.221908],
            [13.072164, 80.187922],
            [13.014433, 80.224255]
        ]
    },
    // Power house
    {
        name: "[20A]Power house",
        waypoints: [
            [13.047955, 80.219132],
            [13.046514, 80.218794],
            [13.047447, 80.198149],
            [13.014433, 80.224255]
        ]
    },
    {
        name: "[11A]Avichi School",
        waypoints: [
            [13.047510, 80.197811],
            [13.014433, 80.224255]
        ]
    },
    // STERLING ROAD
    {
        name: "[13A]STERLING ROAD",
        waypoints: [
            [13.068504, 80.226216],
            [13.041199, 80.229301],
            [13.040883, 80.230266],
            [13.014433, 80.224255]
        ]
    },
    // AMBATTUR ORAGADAM
    {
        name: "[8A]AMBATTUR ORAGADAM",
        waypoints: [
            [13.127108, 80.153826],
            [13.124647, 80.152077],
            [13.120137, 80.149646],
            [13.014433, 80.224255]
        ]
    },
    // GUINDY
    {
        name: "[27A]GUINDY",
        waypoints: [
            [13.007855, 80.213159],
            [12.997918, 80.207318],
            [13.014433, 80.224255]
        ]
    },
    // BALAJI DENTAL COLLEGE
    {
        name: "[41]BALAJI DENTAL COLLEGE",
        waypoints: [
            [12.944412, 80.208447],
            [12.921337, 80.197170],
            [12.902995, 80.184418],
            [13.014433, 80.224255]
        ]
    },
    // Triplicane
    {
        name: "[16A]Triplicane",
        waypoints: [
            [13.058356, 80.276794],
            [13.053835, 80.264145],
            [13.014433, 80.224255]
        ]
    },
    // VELACHERY
    {
        name: "[18B]VELACHERY",
        waypoints: [
            [12.976106, 80.221581],
            [12.869841, 80.174863],
            [13.014433, 80.224255]
        ]
    },
    // SANTHOME
    {
        name: "[34]SANTHOME",
        waypoints: [
            [13.032755, 80.277551],
            [13.016396, 80.259865],
            [12.987888, 80.255883],
            [12.970158, 80.257986],
            [12.963145, 80.256530],
            [12.945423, 80.253879],
            [12.826358, 80.240292],
            [12.820592, 80.240333],
            [13.014433, 80.224255]
        ]
    },
    // BESANT NAGAR
    {
        name: "[25]BESANT NAGAR",
        waypoints: [
            [13.000434, 80.266368],
            [12.987812, 80.255048],
            [12.949979, 80.254924],
            [12.926238, 80.251339],
            [13.014433, 80.224255]
        ]
    },
    // VGP
    {
        name: "[25A]VGP",
        waypoints: [
            [12.914339, 80.250407],
            [12.905784, 80.207052],
            [12.899919, 80.183327],
            [13.014433, 80.224255]
        ]
    },
    // TANSI NAGAR
    {
        name: "[17A]TANSI NAGAR",
        waypoints: [
            [12.978256, 80.225086],
            [12.973833, 80.220154],
            [13.014433, 80.224255]
        ]
    },
    // SKYWALK
    {
        name: "[12A]SKYWALK",
        waypoints: [
            [13.074224, 80.221903],
            [13.076773, 80.212166],
            [13.075487, 80.196954],
            [13.014433, 80.224255]
        ]
    },
    // SRP TOOLS
    {
        name: "[35]SRP TOOLS",
        waypoints: [
            [12.978458, 80.252458],
            [12.905063, 80.228205],
            [12.835814, 80.228546],
            [12.926639, 80.230965],
            [13.014433, 80.224255]
        ]
    },
    // MUDICHUR
    {
        name: "[13B]MUDICHUR",
        waypoints: [
            [12.909121, 80.068882],
            [12.928152, 80.119195],
            [12.925485, 80.116910],
            [12.870493, 80.107129],
            [13.014433, 80.224255]
        ]
    },
    // Sholinganallur
    {
        name: "[15A]Sholinganallur",
        waypoints: [
            [12.900098, 80.227950],
            [12.871077, 80.226689],
            [12.801429, 80.223614],
            [12.786360, 80.220400],
            [13.014433, 80.224255]
        ]
    },
    // MADIPAKKAM (KEELKATALAI)
    {
        name: "[24A]MADIPAKKAM (KEELKATALAI)",
        waypoints: [
            [12.958779, 80.187081],
            [12.946663, 80.184006],
            [12.931686, 80.181710],
            [13.014433, 80.224255]
        ]
    },
    // SITHALAPAKKAM (RAJAKILPAKKAM)
    {
        name: "[36]SITHALAPAKKAM (RAJAKILPAKKAM)",
        waypoints: [
            [12.922905, 80.152455],
            [12.919116, 80.173938],
            [12.899926, 80.183319],
            [12.883474, 80.171137],
            [12.837424, 80.169205],
            [13.014433, 80.224255]
        ]
    },
    // SANTHOSAPURAM
    {
        name: "[37]SANTHOSAPURAM",
        waypoints: [
            [12.918722, 80.175140],
            [12.923546, 80.157506],
            [12.923468, 80.158461],
            [12.900889, 80.161489],
            [13.014433, 80.224255]
        ]
    },
    // THIRUVALLUR
    {
        name: "[5A]THIRUVALLUR",
        waypoints: [
            [13.140288, 79.908011],
            [13.133613, 79.938441],
            [13.129712, 79.966665],
            [13.124773, 80.006256],
            [13.124636, 80.026829],
            [13.125089, 80.043709],
            [13.014433, 80.224255]
        ]
    },
    // THIRUVANMIYUR
    {
        name: "[14B]THIRUVANMIYUR",
        waypoints: [
            [12.985203, 80.259703],
            [12.971572, 80.258230],
            [12.963054, 80.256535],
            [12.947027, 80.254168],
            [12.832854, 80.240548],
            [12.784306, 80.245336],
            [13.014433, 80.224255]
        ]
    },
    // VIJAYANAGAR JUNCTION
    {
        name: "[26A]VIJAYANAGAR JUNCTION",
        waypoints: [
            [12.962993, 80.215672],
            [12.970152, 80.218577],
            [12.958789, 80.187072],
            [13.014433, 80.224255]
        ]
    },
    // KAIVELI
    {
        name: "[25B]KAIVELI",
        waypoints: [
            [12.962908, 80.215791],
            [12.944382, 80.208429],
            [12.897694, 80.182209],
            [13.014433, 80.224255]
        ]
    },
    // COLLECTOR NAGAR
    {
        name: "[47]COLLECTOR NAGAR",
        waypoints: [
            [13.087736, 80.189476],
            [13.088144, 80.178583],
            [13.043703, 80.149752],
            [13.014433, 80.224255]
        ]
    },
    // RETTERI
    {
        name: "[48]RETTERI",
        waypoints: [
            [13.134297, 80.215896],
            [13.087982, 80.184041],
            [13.014433, 80.224255]
        ]
    },
    // NANGANALLUR
    {
        name: "[10A]NANGANALLUR",
        waypoints: [
            [12.976106, 80.183261],
            [12.981372, 80.185524],
            [13.014433, 80.224255]
        ]
    },
    // DLF APTS
    {
        name: "[33]DLF APTS",
        waypoints: [
            [12.935391, 80.219175],
            [12.926459, 80.238133],
            [12.916370, 80.235414],
            [13.014433, 80.224255]
        ]
    },
    // THILLAI GANGA NAGAR SUBWAY
    {
        name: "[42]THILLAI GANGA NAGAR SUBWAY",
        waypoints: [
            [12.992536, 80.193506],
            [12.981700, 80.195768],
            [13.014433, 80.224255]
        ]
    },
    // PUZHAL CAMP
    {
        name: "[18A]PUZHAL CAMP",
        waypoints: [
            [13.158216, 80.203912],
            [13.145246, 80.219329],
            [13.134297, 80.215896],
            [13.087736, 80.189476],
            [13.088585, 80.171794],
            [13.085897, 80.161759],
            [13.043703, 80.149752],
            [13.014433, 80.224255]
        ]
    },
    // PORUR LAKSHMINAGAR PHASE 1
    {
        name: "[43]PORUR LAKSHMINAGAR PHASE 1",
        waypoints: [
            [13.035153, 80.169512],
            [13.035910, 80.205204],
            [12.961626, 80.187403],
            [13.014433, 80.224255]
        ]
    },
    // TTK ROAD
    {
        name: "[44]TTK ROAD",
        waypoints: [
            [13.028963, 80.249888],
            [13.033561, 80.251191],
            [13.040849, 80.232410],
            [13.014433, 80.224255]
        ]
    },
    // ADAMBAKKAM POLICE BOOTH
    {
        name: "[26]ADAMBAKKAM POLICE BOOTH",
        waypoints: [
            [12.989588, 80.201782],
            [13.014433, 80.224255]
        ]
    },
    // NANGANALLUR PETROL BUNK
    {
        name: "[14A]NANGANALLUR PETROL BUNK",
        waypoints: [
            [12.994691, 80.186972],
            [12.971811, 80.151328],
            [12.968633, 80.149762],
            [13.014433, 80.224255]
        ]
    },
    // KOVUR
    {
        name: "[2A]KOVUR",
        waypoints: [
            [13.009945, 80.119918],
            [12.997434, 80.096211],
            [12.993637, 80.088237],
            [13.014433, 80.224255]
        ]
    },
    // VELAPPANCHAVADI
    {
        name: "[4]VELAPPANCHAVADI",
        waypoints: [
            [13.061643, 80.138418],
            [13.062096, 80.148432],
            [13.061553, 80.151733],
            [13.014433, 80.224255]
        ]
    },
    // VIRUGAMBAKKAM SIGNAL
    {
        name: "[4A]VIRUGAMBAKKAM SIGNAL",
        waypoints: [
            [13.044906, 80.186167],
            [13.014433, 80.224255]
        ]
    },
    // KALPAKKAM
    {
        name: "[6A]KALPAKKAM",
        waypoints: [
            [12.526339, 80.165077],
            [12.614773, 80.171699],
            [12.722090, 80.187276],
            [12.862868, 80.126721],
            [13.014433, 80.224255]
        ]
    },
    // KANCHIPURAM
    {
        name: "[7]KANCHIPURAM",
        waypoints: [
            [12.834479, 79.703752],
            [12.791064, 79.817712],
            [12.648549, 80.037448],
            [12.895144, 80.052115],
            [12.891539, 80.069290],
            [13.014433, 80.224255]
        ]
    },
    // CHENGALPATTU
    {
        name: "[7A]CHENGALPATTU",
        waypoints: [
            [12.678088, 79.979611],
            [12.759425, 80.002991],
            [12.804161, 80.026027],
            [12.821058, 80.037368],
            [12.867151, 80.075333],
            [13.014433, 80.224255]
        ]
    },
    // NOLAMBUR
    {
        name: "[8]NOLAMBUR",
        waypoints: [
            [13.069220, 80.161120],
            [13.080560, 80.161833],
            [13.082787, 80.170599],
            [13.061231, 80.163398],
            [13.014433, 80.224255]
        ]
    },
    // MADRAS CHRISTIAN COLLEGE (MCC)
    {
        name: "[8A]MADRAS CHRISTIAN COLLEGE (MCC)",
        waypoints: [
            [12.923324, 80.121059],
            [12.907680, 80.142680],
            [13.014433, 80.224255]
        ]
    },
    // ICF
    {
        name: "[9]ICF",
        waypoints: [
            [13.099588, 80.214448],
            [13.092844, 80.218384],
            [13.084713, 80.215424],
            [13.014433, 80.224255]
        ]
    },
    // MAHENDRA CITY
    {
        name: "[9A]MAHENDRA CITY",
        waypoints: [
            [12.740250, 79.989936],
            [12.820882, 80.037242],
            [12.846576, 80.062151],
            [12.867962, 80.075639],
            [13.014433, 80.224255]
        ]
    },
    {
        name: "[10]PORUR JUNCTION",
        waypoints: [
            [13.034263, 80.155570],
            [13.014433, 80.224255]
        ]
    },
    // AYODHYA MANDAPAM
    {
        name: "[11]AYODHYA MANDAPAM",
        waypoints: [
            [13.039111, 80.221242],
            [12.971099, 80.219082],
            [12.945130, 80.208714],
            [12.917116, 80.194431],
            [13.014433, 80.224255]
        ]
    },
    // GANDHIMANDAPAM
    {
        name: "[13]GANDHIMANDAPAM",
        waypoints: [
            [13.007477, 80.236799],
            [12.993103, 80.218504],
            [12.990986, 80.219434],
            [13.014433, 80.224255]
        ]
    },
    // KUTCHERY ROAD
    {
        name: "[16]KUTCHERY ROAD",
        waypoints: [
            [13.034390, 80.273282],
            [13.036407, 80.268694],
            [13.034047, 80.267975],
            [13.023235, 80.264042],
            [13.014433, 80.224255]
        ]
    },
    // ADYAR AAVIN
    {
        name: "[17]ADYAR AAVIN",
        waypoints: [
            [12.997030, 80.259346],
            [13.000225, 80.256378],
            [12.934325, 80.233261],
            [12.845553, 80.226730],
            [12.810940, 80.228072],
            [13.014433, 80.224255]
        ]
    },
    // IRUMBULIYUR
    {
        name: "[18]IRUMBULIYUR",
        waypoints: [
            [12.917353, 80.107843],
            [12.905322, 80.095661],
            [12.894538, 80.117721],
            [12.847127, 80.145856],
            [13.014433, 80.224255]
        ]
    },
    // ALANDUR METRO
    {
        name: "[19A]ALANDUR METRO",
        waypoints: [
            [13.004331, 80.201184],
            [12.953243, 80.186607],
            [13.014433, 80.224255]
        ]
    },
    // CHROMPET
    {
        name: "[21]CHROMPET",
        waypoints: [
            [12.956257, 80.143281],
            [12.951380, 80.140308],
            [12.945969, 80.136319],
            [13.014433, 80.224255]
        ]
    },
    // RAJENDRA PRASAD ROAD
    {
        name: "[21A]RAJENDRA PRASAD ROAD",
        waypoints: [
            [12.910999, 80.196193],
            [13.014433, 80.224255]
        ]
    },
    // IYYAPANTHANGAL
    {
        name: "[23A]IYYAPANTHANGAL",
        waypoints: [
            [13.038109, 80.135114],
            [13.039633, 80.131070],
            [13.043052, 80.122746],
            [13.014433, 80.224255]
        ]
    },
    // RAJAKILPAKKAM
    {
        name: "[27]RAJAKILPAKKAM",
        waypoints: [
            [12.915361, 80.152676],
            [12.910298, 80.156736],
            [12.903486, 80.158571],
            [13.014433, 80.224255]
        ]
    },
    // AMMA NANA
    {
        name: "[32]AMMA NANA",
        waypoints: [
            [13.029033, 80.249224],
            [13.022156, 80.242481],
            [13.006774, 80.246755],
            [12.965069, 80.247459],
            [12.940630, 80.236140],
            [13.014433, 80.224255]
        ]
    },
    // POONAMALLEE BYPASS
    {
        name: "[38]POONAMALLEE BYPASS",
        waypoints: [
            [13.057315, 80.106107],
            [13.060727, 80.155167],
            [13.014433, 80.224255]
        ]
    },
    // ANAGAPUTHUR BUS STAND
    {
        name: "[39]ANAGAPUTHUR BUS STAND",
        waypoints: [
            [12.985069, 80.123064],
            [12.967573, 80.127484],
            [12.948432, 80.150386],
            [13.014433, 80.224255]
        ]
    },
    // LIGHT HOUSE
    {
        name: "[45]LIGHT HOUSE",
        waypoints: [
            [13.039735, 80.279093],
            [12.998587, 80.256115],
            [13.006774, 80.246849],
            [12.899073, 80.227992],
            [12.809551, 80.227347],
            [13.014433, 80.224255]
        ]
    },
    // SECRETARIAT
    {
        name: "[46]SECRETARIAT",
        waypoints: [
            [13.079489, 80.288120],
            [13.029966, 80.276820],
            [12.989220, 80.251002],
            [12.923763, 80.251208],
            [13.014433, 80.224255]
        ]
    },
    // MADHANANDAPURAM
    {
        name: "[49]MADHANANDAPURAM",
        waypoints: [
            [13.026196, 80.149807],
            [13.019754, 80.143159],
            [13.014433, 80.224255]
        ]
    },
    // MEENAMBAKKAM
    {
        name: "[50]MEENAMBAKKAM",
        waypoints: [
            [12.989541, 80.179100],
            [12.966341, 80.148683],
            [13.014433, 80.224255]
        ]
    },
    // VARATHARAJAN THEATRE
    {
        name: "[51]VARATHARAJAN THEATRE",
        waypoints: [
            [12.937403, 80.138864],
            [12.922565, 80.143429],
            [13.014433, 80.224255]
        ]
    }
];
let flag = true;
const nonac_commonColor = "#141414";
let routeControls = [];


function initializeMap() {
    if (map) {
        map.remove(); 
        userLocationMarker = null; 
    }

    map = L.map('map',{zoomControl: false}).setView([13.0827, 80.2707], 12); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/021/815/780/small_2x/transparent-circle-icon-background-png.png',
                iconSize: [75,75],
                className: 'vitc-background'
            })
        }).addTo(map);

        L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/018/887/506/small_2x/shapes-vintage-labels-png.png',
                iconSize: [60,60],
                className: 'vitc-background-2'
            })
        }).addTo(map);

        L.marker([12.840309, 80.152963],{
            icon:L.icon({
                iconUrl: 'https://rohan-debayan.github.io/Personal_Website_DM/images/vitlogo.png',
                iconSize: [35,35],
                className: 'vitc-background-2'
            })
        }).addTo(map);
}
function removeCommonWaypoints(routes1, routes2) {
    let waypointsToRemove = new Set(routes2.flatMap(route => route.waypoints.map(JSON.stringify)));


    for (let route of routes1) {
        route.waypoints = route.waypoints.filter(waypoint => !waypointsToRemove.has(JSON.stringify(waypoint)));
    }
}

function offsetLatLng(latlng, offset) {
    return [latlng[0] + offset, latlng[1] + offset];
}

function retryFetchRoute(route, delay, index) {
    return new Promise((resolve, reject) => {
        function attempt() {
            const offset = index * 0.00005;
            const waypoints = route.waypoints.map(latLng => offsetLatLng(latLng, offset));

            var control = L.Routing.control({
                waypoints: waypoints.map(latLng => L.latLng(latLng[0], latLng[1])),
                createMarker: function() { return null; },
                lineOptions: {
                    fitSelectedRoutes: false,
                    addWaypoints: false,
                    draggableWaypoints: false,
                    styles: [{ color: route.color, weight: getWeight(map.getZoom()), opacity: getOpacity(map.getZoom()) }]
                }
            }).addTo(map);

            routeControls.push(control);

            control.on('routesfound', function(e) {
                var polylineLatLngs = e.routes[0].coordinates;
                var routePolyline = L.polyline(polylineLatLngs, {
                    color: route.color,
                    weight: getWeight(map.getZoom()) - (index * 0.5), 
                    opacity: 1, 
                    smoothFactor: 1,
                    className: 'animated-path' 
                }).addTo(map);

                if (typeof routePolyline.snakeIn === 'function') {
                    routePolyline.snakeIn({ duration: 3000 }); 
                } else {
                    var zoom = map.getZoom();
                    routePolyline.setStyle({
                        color: route.color,
                        weight: getWeight(zoom) - (index * 0.5),
                        opacity: 1
                    });
                }
                var routeNameIcon = L.divIcon({
                    className: 'route-name',
                    html: `<div style="font-weight: bold; background-color: ${route.color}; color: gray;">${route.name}</div>`
                });
                L.marker(waypoints[0], { icon: routeNameIcon }).addTo(map);
                route.polyline = routePolyline;
                route.nametag = routeNameIcon;
                resolve(); 
            });

            control.on('routingerror', function(err) {
                setTimeout(attempt, delay);
            });
        }

        attempt();
    });
}
function plotAll() {
    if (flag) {
        flag = false;
        var routes = defRoutes();
        let tbox = document.getElementById('route-text');
        tbox.textContent = 'Fetching All Routes...';
        document.getElementById('loading-screen').style.display = 'flex';
        nonac_routes = nonac_routes.map(route => ({ ...route, color: getRandomColor() }));
    routes = routes.concat(nonac_routes);
        const button = document.getElementById("all-routes");
        button.disabled = true;
        const button2 = document.getElementById("AC-routes");
        button2.disabled = true;
        const button3 = document.getElementById("NON-AC-routes");
        button3.disabled = true;

        initializeMap();
        
        const routePromises = routes.map((route, index) => retryFetchRoute(route, 500, index));
        Promise.allSettled(routePromises)
            .then(results => {
                const allSucceeded = results.every(result => result.status === 'fulfilled');
                button.disabled = false;
                button2.disabled = false;
                button3.disabled = false;
                flag = true;
                document.getElementById('loading-screen').style.display = 'none';
                tbox.textContent = 'All Routes'
                map.flyTo([13.014433, 80.224255], 11)
            })
            .catch(err => {

            });

        map.on('zoomend', function() {
            var zoom = map.getZoom();

            routes.forEach((route, index) => {
                if (route.polyline) {
                    route.polyline.setStyle({
                        weight: getWeight(zoom) - (index * 0.5),
                        opacity: 1
                    });
                }
            });

            var nametags = document.querySelectorAll('.route-name div');
            nametags.forEach(Routename => {
                Routename.style.fontSize = (zoom - 2.5) + "px";
            });
        });
    }
}
function plotAllAC() {
    if (flag) {
        flag = false;
        let tbox = document.getElementById('route-text');
        tbox.textContent = 'Fetching AC Routes...';
        document.getElementById('loading-screen').style.display = 'flex';
        var routes = defRoutes();
        const button = document.getElementById("all-routes");
        button.disabled = true;
        const button2 = document.getElementById("AC-routes");
        button2.disabled = true;
        const button3 = document.getElementById("NON-AC-routes");
        button3.disabled = true;
        initializeMap();
        
        const routePromises = routes.map((route, index) => retryFetchRoute(route, 500, index));

        Promise.allSettled(routePromises)
            .then(results => {
                const allSucceeded = results.every(result => result.status === 'fulfilled');

                button.disabled = false;
                button2.disabled = false;
                button3.disabled = false;
                flag = true;
                document.getElementById('loading-screen').style.display = 'none';
                tbox.textContent = 'AC Routes';
                clgcenter();
            })
            .catch(err => {

            });

        map.on('zoomend', function() {
            var zoom = map.getZoom();

            routes.forEach((route, index) => {
                if (route.polyline) {
                    route.polyline.setStyle({
                        weight: getWeight(zoom)  - (index * 0.5),
                        opacity: 1
                    });
                }
            });

            var nametags = document.querySelectorAll('.route-name div');
            nametags.forEach(Routename => {
                Routename.style.fontSize = (zoom - 2.5) + "px";
            });
        });
    }
}

function plotAllNONAC() {
    if (flag) {
        flag = false;
        document.getElementById('loading-screen').style.display = 'flex';
        let tbox = document.getElementById('route-text');
        tbox.textContent = 'Fetching NON-AC Routes...';
        nonac_routes = nonac_routes.map(route => ({ ...route, color: getRandomColor() }));
        var routes = nonac_routes;
        const button = document.getElementById("all-routes");
        button.disabled = true;
        const button2 = document.getElementById("AC-routes");
        button2.disabled = true;
        const button3 = document.getElementById("NON-AC-routes");
        button3.disabled = true;
        initializeMap();
        const routePromises = routes.map((route, index) => retryFetchRoute(route, 500, index));
        Promise.allSettled(routePromises)
            .then(results => {
                const allSucceeded = results.every(result => result.status === 'fulfilled');
                button.disabled = false;
                button2.disabled = false;
                button3.disabled = false;
                flag = true;
                document.getElementById('loading-screen').style.display = 'none';
                tbox.textContent = 'NON-AC Routes...';
                clgcenter();
            })
            .catch(err => {

            });

        map.on('zoomend', function() {
            var zoom = map.getZoom();

            routes.forEach((route, index) => {
                if (route.polyline) {
                    route.polyline.setStyle({
                        weight: getWeight(zoom) - (index * 0.5),
                        opacity: 1
                    });
                }
            });

            var nametags = document.querySelectorAll('.route-name div');
            nametags.forEach(Routename => {
                Routename.style.fontSize = (zoom - 2.5) + "px";
            });
        });
    }
}
function clgcenter()
{
    if(flag)
{
    map.flyTo([13.059314, 80.202711], 11)
}
}
document.getElementById("all-routes").onclick = function() {
    plotAll();
};

document.getElementById("AC-routes").onclick = function() {
    plotAllAC();
};

document.getElementById("NON-AC-routes").onclick = function() {
    plotAllNONAC();
};
document.getElementById("clg-locate").onclick = function() {
    clgcenter();
};
var userLocationMarker = null;

        document.getElementById('user-locate').addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;

                    if (userLocationMarker) {
                        userLocationMarker.setLatLng([lat, lng]);
                    } else {
                        userLocationMarker = L.marker([lat, lng], {
                            icon: L.divIcon({
                                className: 'user-location-icon',
                                iconSize: [24, 24],
                            })
                        }).addTo(map);
                    }
                }, function() {
                    alert('Unable to retrieve your location.');
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        });