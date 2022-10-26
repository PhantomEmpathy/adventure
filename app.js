let input = document.getElementById('text__input');
let answer = document.getElementById('text__answer');

// Store my constants in objects to be able to reduce the use of if, switch and operators when verifying them

const CARDINAL = {
    north: 'north',
    south: 'south',
    east: 'east',
    west: 'west'
}

const COMMAND = {
    go: 'go',
    attack: 'attack',
    take: 'take',
    search: 'search',
    equip: 'equip'
}

// This way, no need to verify each CARDINAL and COMMAND => The object does it for us

const isDirection = dir => {
    
    return CARDINAL[dir]
    ? true
    : false
}

const isCommand = com => {

    return COMMAND[com]
    ? true
    : false
}

// Parse our input, we only need an array with COMMAND, CARDINAL, ITEM and CREATURE

const parseText = event => {

    let input = event.target;

    let words = input.value.toLowerCase().split(' ');

    let keywords = [];
    
    for (let i in words) {

        if (isDirection(words[i]) || isCommand(words[i])) {
            keywords.push(words[i]);
        }
    }

    console.log(keywords);

}

// Everytime we change the input, parse it

input.addEventListener('change', parseText);