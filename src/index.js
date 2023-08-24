const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',

};

function decode(expr) {
    let arr = [];
    let letter = [];
    let word;
    let breakExpr = expr.match(/.{10}/g)
    for(let i = 0; i < breakExpr.length; i++) {
        breakExpr[i] = breakExpr[i].replace('**********',' ');
        };
    for (let item of breakExpr) {
        morseCodeArr = arr.push(item.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')); 
                                                                //['....', '.', '.-..', '.-..', '---', ' ', '.--', '---', '.-.', '.-..', '-..']
    }
    let index = arr.length;
    for (let i = 0; index-- > 0; i++){
        for (let key in MORSE_TABLE) {
            if (MORSE_TABLE.hasOwnProperty(key) && arr[i] === key) { 
                letter[i] = MORSE_TABLE[arr[i]];
                letter.push(word);
            }                                                   //['h', 'e', 'l', 'l', 'o', undefined, 'w', 'o', 'r', 'l', 'd', undefined]
            if (letter[i] === undefined) {
                letter[i] = arr[i];
            }
        }
    }
    let result = letter.join('');
    return result;
}


module.exports = {
    decode
}