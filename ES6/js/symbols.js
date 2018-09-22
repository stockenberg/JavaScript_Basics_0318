/**
 * Symbols are beeing used as Unique Identifiers
 */

const COLOR_BLUE = Symbol();
let COLOR_RED = Symbol();



console.log(COLOR_RED === COLOR_BLUE);
console.dir(COLOR_RED);
console.log(typeof COLOR_RED);

const WALL_COLOR = 'BLUE';
const WINDOW_COLOR = 'BLUE';

let colors = {
    WALL_COLOR,
    WINDOW_COLOR
}

for(let x in colors){
    switch(colors[x]){
        case WALL_COLOR:
            console.log('hit me');
            break;
        case WINDOW_COLOR:
            console.log('hit me again');
            break;
        default:
            console.log('default');
            break;
    }
}

console.log('SYMBOLS NOW###########')


const symWALL_COLOR = Symbol('blue');
const symWINDOW_COLOR = Symbol('blue');

let symColors = {
    symWALL_COLOR,
    symWINDOW_COLOR
}

for(let y in symColors){
    switch(symColors[y]){
        case symWALL_COLOR:
            console.log('hit me');
            console.log(symColors[y])
            break;
        case symWINDOW_COLOR:
            console.log('hit me again');
            break;
        default:
            console.log('default');
            break;
    }
}

/**
 * Symbols as Property Keys
 */

 const NEW_KEY = Symbol();

 let obj = {}

 obj[NEW_KEY] = 123;
 console.log(obj[NEW_KEY]);