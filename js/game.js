// Global variables
var scenes = [{
        heading: 'Demo 0',
        scene: 'Background',
        name: 'Narrator',
        text: 'The world...',
        choices: undefined
    },
    {
        heading: 'Demo 1',
        scene: 'Background',
        name: 'Narrator',
        text: 'is broken now.',
        choices: undefined
    },
    {
        heading: 'Demo 2',
        scene: 'Background',
        name: 'Narrator',
        text: '...',
        choices: undefined
    },
    {
        heading: 'Demo 3',
        scene: 'Background',
        name: 'Narrator',
        text: 'What more can I say? The inception was a small local war.',
        choices: undefined
    },
    {
        heading: 'Demo 4',
        scene: 'Background',
        name: 'Narrator',
        text: 'Then fires, bombs, viruses, and of course, bodies, non-walking and walking ones.',
        choices: undefined
    },
    {
        heading: 'Demo 5',
        scene: 'Background',
        name: 'Narrator',
        text: 'The walking bodies, or zombies, have dominated most of the planet, known as the wasteland. The remaining army built several fortresses around the world. The fortress, also known as the safe zone (SZ), is controlled by the military.',
        choices: undefined
    },
    {
        heading: 'Demo 6',
        scene: 'About you',
        name: 'Narrator',
        text: 'Since there are still survivors outside the fortresses, the military government regularly send a search party by plane.',
        choices: undefined
    },
    {
        heading: 'Demo 7',
        scene: 'About you',
        name: 'Narrator',
        text: 'You are a recruit of the third search party also known as "Team Hacker" led by Captain Hacker. Your name is...',
        choices: undefined
    },
    {
        heading: 'Demo 8',
        scene: 'About you',
        name: 'Game',
        text: 'Your Name',
        choices: undefined
    },
    {
        heading: 'Demo 9',
        scene: 'Inside plane',
        name: 'Narrator',
        text: 'You are now in a transport plane with your teammates. Your mission is to search for survivors on wasteland.',
        choices: undefined
    },
    {
        heading: 'Demo 10',
        scene: 'Inside plane',
        name: 'Captain',
        text: 'Wake up, girls. Squad B, hold the ground. Squad A and squad C, follow me, enter this building. Find the living, shoot the dead!',
        choices: undefined
    },
    {
        heading: 'Demo 11',
        scene: 'Entry',
        name: 'Captain',
        text: ['And you, ', me, ', stay close. Now move!'],
        choices: undefined
    },
    {
        heading: 'Demo 12',
        scene: 'Entry',
        name: 'Members',
        text: 'Yes, Sir!',
        choices: undefined
    },
    {
        heading: 'Demo 13',
        scene: 'Entry',
        name: 'Hermes',
        text: 'Hello, rookie. You don\'t know we once lost half the people in Atlantic City, do you?',
        choices: undefined
    },
    {
        heading: 'Demo 14',
        scene: 'Entry',
        name: 'Hermes',
        text: 'Once those roaring monsters run to you, you are gonna piss your pants. Wanna bet on that?',
        choices: undefined
    },
    {
        heading: 'Demo 15',
        scene: 'Inside',
        name: 'Frank',
        text: 'Concentrate! And Shut the fuck up, Hermes. Everyone knows you were the pants pisser in Team Hacker.',
        choices: ['That\'s alright. We all know Hermes is a kid', 'Thanks, Frank']
    },
    {
        heading: 'Demo 16',
        scene: 'Inside',
        name: 'Hermes',
        text: 'Hey, we talked about this!',
        choices: undefined
    },
    {
        heading: 'Demo 17',
        scene: 'Inside',
        name: 'Narrator',
        text: 'Suddenly, something came out of the shadows. You know that\'s not a human.',
        choices: ['Got a situation here', 'Oh my god, a zombie, help!']
    },
    {
        heading: 'Demo 18',
        scene: 'A zombie',
        name: 'Zombie',
        text: '(Roaring...)',
        choices: undefined
    },
    {
        heading: 'Demo 19',
        scene: 'A zombie',
        name: 'Captain',
        text: 'Calm down and open fire!',
        choices: undefined
    },
    {
        heading: 'Demo 20',
        scene: 'A zombie',
        name: 'Sarah',
        text: 'Got it, boss.',
        choices: undefined
    },
    {
        heading: 'Demo 21',
        scene: 'Before finding',
        name: 'Captain',
        text: 'Well done, Sarah. Everyone stays close. There should be more.',
        choices: undefined
    },
    {
        heading: 'Demo 22',
        scene: 'Before finding',
        name: 'Hermes',
        text: 'Guys, I heard something.',
        choices: undefined
    },
    {
        heading: 'Demo 23',
        scene: 'Before finding',
        name: 'Narrator',
        text: 'Everyone held their breath immediately. But there\'s only silence. About ten seconds later, they all heard it.',
        choices: undefined
    },
    {
        heading: 'Demo 24',
        scene: 'Before finding',
        name: 'Hermes',
        text: 'The corner!',
        choices: undefined
    },
    {
        heading: 'Demo 25',
        scene: 'Before finding',
        name: 'Sarah',
        text: 'Ready to shoot.',
        choices: ['...', 'I\'m ready, too!']
    },
    {
        heading: 'Demo 26',
        scene: 'Before finding',
        name: 'Captain',
        text: 'Hold on, Sarah!',
        choices: undefined
    },
    {
        heading: 'Demo 27',
        scene: 'Before finding',
        name: 'Captain',
        text: ['Hold on, Sarah and ', me, '!'],
        choices: undefined
    },
    {
        heading: 'Demo 28',
        scene: 'Find them',
        name: 'Survivor',
        text: 'Don\'t shoot! We are not them!',
        choices: undefined
    },
    {
        heading: 'Demo 29',
        scene: 'Find them',
        name: 'Captain',
        text: 'You\'re safe now, lady. What\'s your name?',
        choices: undefined
    },
    {
        heading: 'Demo 30',
        scene: 'Find them',
        name: 'Violet',
        text: 'My name is Violet, sir.',
        choices: undefined
    },
    {
        heading: 'Demo 31',
        scene: 'Find them',
        name: 'Captain',
        text: 'Violet, you know how many lives are in this building?',
        choices: undefined
    },
    {
        heading: 'Demo 32',
        scene: 'Find them',
        name: 'Violet',
        text: 'It\'s all here, sir. We are a family, and we\'ve hidden here for six monthes. The one, the one you just killed (sobbing), he was my brother. The food run out, so he went out... and got bitten.',
        choices: undefined
    },
    {
        heading: 'Demo 33',
        scene: 'Find them',
        name: 'Captain',
        text: 'I\'m sorry to hear that. You\'re bleeding. Alexa, bind her wounds.',
        choices: undefined
    },
    {
        heading: 'Demo 34',
        scene: 'Find them',
        name: 'Alexa',
        text: 'But sir...',
        choices: undefined
    },
    {
        heading: 'Demo 35',
        scene: 'Find them',
        name: 'Captain',
        text: 'We still have some sedatives. Just do what I said.',
        choices: undefined
    },
    {
        heading: 'Demo 36',
        scene: 'Find them',
        name: 'Narrator',
        text: '現在公開可能な情報<br>The sedative are useful when people are about to turn into zombies, for an easier execution.',
        choices: undefined
    },
    {
        heading: 'Demo 37',
        scene: 'Find him',
        name: 'Narrator',
        text: 'Another half an hour later...',
        choices: undefined
    },
    {
        heading: 'Demo 38',
        scene: 'Find him',
        name: 'Captain',
        text: 'Alright, everyone. Prepare to leave.',
        choices: undefined
    },
    {
        heading: 'Demo 39',
        scene: 'Find him',
        name: 'Narrator',
        text: 'At one moment, you\'re pretty sure that there was someone hiding in the shadow. You could feel his/her/its tension.',
        choices: ['Who\'s there?', '(Just ignore it and leave)']
    },
    {
        heading: 'Demo 40',
        scene: 'Find him',
        name: 'Stranger',
        text: '...',
        choices: ['Who are you?', 'What are you?']
    },
    {
        heading: 'Demo 41',
        scene: 'Find him',
        name: 'Narrator',
        text: 'The stranger walked slowly out of the shadow. Now you saw his face, yes, HIS face. He got badly wounded. And He\'s a freak, a kind of people whose genes\'ve got mutated because of nuclear pollution. They\'re ugly, feeble, and miserable. You rarely saw them in the safe zone.',
        choices: ['You good?']
    },
    {
        heading: 'Demo 42',
        scene: 'Find him',
        name: 'Freak',
        text: '...',
        choices: ['...', 'We are here to help', 'Can you hear me? I\'m talking to you!']
    },
    {
        heading: 'Demo 43',
        scene: 'Find him',
        name: 'Freak',
        text: '...',
        choices: ['Don\'t be afraid. I can help you', 'Can\'n you say something?!']
    },
    {
        heading: 'Demo 44',
        scene: 'Find him',
        name: 'Freak',
        text: '...',
        choices: ['God damn it! Cap, got a situation here', 'Are you fucking deaf?']
    },
    {
        heading: 'Demo 45',
        scene: 'Find him',
        name: 'Freak',
        text: '...',
        choices: ['Go to hell (shoot him)', '(Leave him alone)']
    },
    {
        heading: 'Demo 46',
        scene: 'Find him',
        name: 'Narrator',
        text: 'You shot. He died.',
        choices: ['(Frisk him)', '(Leave)']
    },
    {
        heading: 'Demo 47',
        scene: 'Find him',
        name: 'Narrator',
        text: 'You found a ring.',
        choices: ['(Take it and leave)']
    },
    {
        heading: 'Demo 48',
        scene: 'Back to team',
        name: 'Captain',
        text: [me, ', what took you so long?'],
        choices: ['Nothing, sir']
    },
    {
        heading: 'Demo 49',
        scene: 'Back to team',
        name: 'Captain',
        text: [me, ', you shot? What happened?'],
        choices: ['It\'s a zombie, sir']
    },
    {
        heading: 'Demo 50',
        scene: 'Back to team',
        name: 'Captain',
        text: 'Watch yourself. Board the plane. We go home.',
        choices: ['Yes, sir']
    },
    {
        heading: 'Demo 51',
        scene: 'Find him',
        name: 'Freak',
        text: 'Get me... out of here, please...',
        choices: ['Let\'s go (carry him)']
    },
    {
        heading: 'Demo 52',
        scene: 'Find him',
        name: 'Narrator',
        text: 'He trembled, staring at you with frightened eyes. Then he ran away.',
        choices: ['What the hell? (Leave)']
    },
    {
        heading: 'Demo 53',
        scene: 'Find him',
        name: 'Freak',
        text: 'Take... this. Take this ring... as a pledge of... friendship.',
        choices: ['Oh, how can I... Thank you (Take the ring)']
    },
    {
        heading: 'Demo 54',
        scene: 'Back to team',
        name: 'Captain',
        text: [me, ', where have you... Gosh... Alexa, give ', me, ' a hand!'],
        choices: undefined
    },
    {
        heading: 'Demo 55',
        scene: 'Back to team',
        name: 'Captain',
        text: 'Everyone, board the plane. We are going home.',
        choices: undefined
    },
    {
        heading: 'Demo 56',
        scene: 'Inside plane',
        name: 'Frank',
        text: 'Cap, the sky, look outside!',
        choices: undefined
    },
    {
        heading: 'Demo 57',
        scene: 'Flying monster',
        name: 'Narrator',
        text: 'People looked out of the window. To everyone\'s surprise, they saw a huge monster flying near the plane.',
        choices: undefined
    },
    {
        heading: 'Demo 58',
        scene: 'Flying monster',
        name: 'Hermes',
        text: 'We can outrun it, can\'t we?',
        choices: undefined
    },
    {
        heading: 'Demo 59',
        scene: 'Flying monster',
        name: 'Captain',
        text: 'Speed up!',
        choices: undefined
    },
    {
        heading: 'Demo 60',
        scene: 'Flying monster',
        name: 'Narrator',
        text: '現在公開可能な情報<br>Escape from the monster! Guide your plane to avoid obstacles by clicking your mouse. You can\'t die in here, can you?',
        choices: undefined
    },
    {
        heading: 'Demo 61',
        scene: 'Flying monster',
        name: 'Game',
        text: 'Fly Bird',
        choices: undefined
    },
    {
        heading: 'Demo 62',
        scene: 'Back to SZ',
        name: 'Narrator',
        text: 'You successfully returned to the safe zone.',
        choices: undefined
    },
    {
        heading: 'Demo 63',
        scene: 'About you',
        name: 'Narrator',
        text: 'One week later, Team Hacker started to carry out a new task that is to search for supplies on wasteland.',
        choices: undefined
    },
];
// Global variables
var dic = {
    'Narrator': 'img/旁白.png',
    'Captain': 'img/队长.png',
    'Members': 'img/众队员.png',
    'Frank': 'img/队员1.jpg',
    'Hermes': 'img/队员2.jpg',
    'Sarah': 'img/队员3.png',
    'Zombie': 'img/丧尸1.jpg',
    'Survivor': 'img/幸存者.jpg',
    'Violet': 'img/幸存者.jpg',
    'Alexa': 'img/队员4.png',
    'Stranger': 'img/畸形人阴影.png',
    'Freak': 'img/畸形人.png'
}
var dic2 = {
        'Background': 'img/末世背景.jpg',
        'About you': 'img/机库.jpg',
        'Inside plane': 'img/机舱.jpg',
        'Entry': 'img/大厦门口.jpg',
        'Inside': 'img/遇丧尸前.jpg',
        'A zombie': 'img/丧尸来袭.jpg',
        'Before finding': 'img/杀丧尸后.jpg',
        'Find them': 'img/遇幸存者.jpg',
        'Find him': 'img/遇畸形人.jpg',
        'Back to team': 'img/归队.jpg',
        'Flying monster': 'img/飞天怪物来袭.jpg',
        'Back to SZ': 'img/末世背景.jpg',
    }
    // Global variables
var graph = [
    1, // 0
    2, // 1
    3, // 2
    4,
    5,
    6, // 5
    7,
    8,
    9,
    10,
    11, // 10
    12,
    13,
    14,
    15, [16, 16], // 15
    17, [18, 18],
    19,
    20,
    21, // 20
    22,
    23,
    24,
    25, [26, 27], // 25
    28,
    28,
    29,
    30,
    31, // 30
    32,
    33,
    34,
    35,
    36, // 35
    37,
    38,
    39, [40, 48],
    [41, 41], // 40
    [42],
    [43, 43, 44],
    [51, 44],
    [52, 45],
    [46, 48], // 45
    [47, 48],
    [49],
    [50],
    [50],
    [62], // 50
    [53],
    [48],
    [54],
    55,
    56, // 55
    57,
    58,
    59,
    60,
    61, // 60
    62,
]
var getBody = document.body;

function display(n) {
    if (scenes[n].scene != undefined) {
        getBody.style.backgroundImage = 'url(' + dic2[scenes[n].scene] + ')';
        getBody.style.backgroundSize = '100%';
    }
    if (scenes[n].name == 'Game') {
        if (scenes[n].text == 'Fly Bird') {
            fly_bird();
        } else if (scenes[n].text == 'Your Name') {
            enter_name();
        } else if (scenes[n].text == 'Treasure Hunter') {
            clearScreen();
            start();
        }
    } else {
        if (n == 47 || n == 53) hasRing = 1;
        var name = document.getElementById('name');
        var text = document.getElementById('text');
        var triangle = document.getElementById('triangle');
        var choice1 = document.getElementById('choice1');
        var choice2 = document.getElementById('choice2');
        var choice3 = document.getElementById('choice3');
        if (name.innerHTML != scenes[n].name) {
            name.innerHTML = scenes[n].name;
            var profile = document.getElementById('profile');
            profile.style.background = 'url(' + dic[name.innerHTML] + ')';
            profile.style.backgroundSize = '100%';
        }
        if (typeof scenes[n].text != 'object') {
            text.innerHTML = scenes[n].text;
        } else {
            text.innerHTML = '';
            for (var i = 0; i < scenes[n].text.length; i++) {
                if (scenes[n].text[i] != undefined) {
                    text.innerHTML += scenes[n].text[i];
                } else {
                    text.innerHTML += me;
                }
            }
        }
        if (scenes[n].choices == undefined) {
            triangle.style.display = 'block';
            choice1.style.display = 'none';
            choice2.style.display = 'none';
            choice3.style.display = 'none';
        } else {
            triangle.style.display = 'none';
            switch (scenes[n].choices.length) {
                case 1:
                    choice1.innerHTML = scenes[n].choices[0];
                    choice1.style.display = 'block';
                    choice2.style.display = 'none';
                    choice3.style.display = 'none';
                    break;
                case 2:
                    choice1.innerHTML = scenes[n].choices[0];
                    choice2.innerHTML = scenes[n].choices[1];
                    choice1.style.display = 'block';
                    choice2.style.display = 'block';
                    choice3.style.display = 'none';
                    break;
                case 3:
                    choice1.innerHTML = scenes[n].choices[0];
                    choice2.innerHTML = scenes[n].choices[1];
                    choice3.innerHTML = scenes[n].choices[2];
                    choice1.style.display = 'block';
                    choice2.style.display = 'block';
                    choice3.style.display = 'block';
                    break;
            }
        }
    }
}

function clearScreen() {
    chatBox.style.display = 'none';
}

function recoverScreen() {
    chatBox.style.display = 'block';
}

function fly_bird() {
    clearScreen();
    var wrapBg = document.getElementById('wrapBg');
    wrapBg.style.display = 'block';
}

function enter_name() {
    clearScreen();
    yourNameBox.style.display = 'block';
}
// Player information
var me;
var currentScene = 0;
var hasRing = 0;
//yy
var saved = [
    8,
    36,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
]
var mode;
display(0);
var textBox = document.getElementById('textBox');
var button1 = document.getElementById('choice1');
var button2 = document.getElementById('choice2');
var button3 = document.getElementById('choice3');
var saveButton = document.getElementById('save');
var loadButton = document.getElementById('load');
var saveBox = document.getElementById('saveBox');
var cross = document.getElementById('x1');
var location1 = document.getElementById('location1');
var location2 = document.getElementById('location2');
var location3 = document.getElementById('location3');
var location4 = document.getElementById('location4');
var location5 = document.getElementById('location5');
var location6 = document.getElementById('location6');
var location7 = document.getElementById('location7');
var location8 = document.getElementById('location8');
var location9 = document.getElementById('location9');
var location10 = document.getElementById('location10');
var yourNameBox = document.getElementById('yourNameBox');
var button4 = document.getElementById('go');
textBox.onclick = function() {
    if (typeof graph[currentScene] == "number") {
        currentScene = graph[currentScene];
        display(currentScene);
    }
}
button1.onclick = function() {
    if (typeof graph[currentScene] == "object") {
        if (graph[currentScene][0] != undefined) {
            currentScene = graph[currentScene][0];
            display(currentScene);
        } else {
            // need something here
        }
    }
}
button2.onclick = function() {
    if (typeof graph[currentScene] == "object") {
        currentScene = graph[currentScene][1];
        display(currentScene);
    }
}
button3.onclick = function() {
    if (typeof graph[currentScene] == "object") {
        currentScene = graph[currentScene][2];
        display(currentScene);
    }
}

function load() {
    mode = 'load';
    saveBox.style.display = 'block';
}
saveButton.onclick = function() {
    mode = 'save';
    saveBox.style.display = 'block';
}
loadButton.onclick = function() {
    load();
}
cross.onclick = function() {
    saveBox.style.display = 'none';
}
location1.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[0] = currentScene;
    } else {
        if (saved[0] != undefined) {
            currentScene = saved[0];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(1, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location2.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[1] = currentScene;
    } else {
        if (saved[1] != undefined) {
            currentScene = saved[1];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(2, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location3.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[2] = currentScene;
    } else {
        if (saved[2] != undefined) {
            currentScene = saved[2];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(3, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location4.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[3] = currentScene;
    } else {
        if (saved[3] != undefined) {
            currentScene = saved[3];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(4, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location5.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[4] = currentScene;
    } else {
        if (saved[4] != undefined) {
            currentScene = saved[4];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(5, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location6.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[5] = currentScene;
    } else {
        if (saved[5] != undefined) {
            currentScene = saved[5];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(6, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location7.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[6] = currentScene;
    } else {
        if (saved[6] != undefined) {
            currentScene = saved[6];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(7, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location8.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[7] = currentScene;
    } else {
        if (saved[7] != undefined) {
            currentScene = saved[7];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(8, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location9.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[8] = currentScene;
    } else {
        if (saved[8] != undefined) {
            currentScene = saved[8];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(9, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}
location10.onclick = function() {
    if (mode == 'save') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        this.innerHTML = scenes[currentScene].heading + ' ' + dateTime;
        saved[10] = currentScene;
    } else {
        if (saved[10] != undefined) {
            currentScene = saved[10];
            display(currentScene);
            saveBox.style.display = 'none';
        }
    }
    save_data(10, currentScene, scenes[currentScene].heading + ' ' + dateTime, hasRing);
}

button4.onclick = function() {
    var yourName = document.getElementById('yourName');
    me = yourName.value;
    console.log(me);
    yourNameBox.style.display = 'none';
    recoverScreen();
    currentScene = graph[currentScene];
    display(currentScene);
}