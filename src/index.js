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
  let str = [];
    while (expr.length > 0) {
      let letter = expr.substring(0,10)
      let res = [];
      while (letter.length > 0) {
        switch (letter.substring(0,2)) {
          case '10':
            res.push('.');
            letter = letter.substring(2);
            break;
          case '11':
            res.push('-');
            letter = letter.substring(2);
            break;
          case '00':
            letter = letter.substring(2);
            break;
          case '**':
            str.push(' ');
            letter = letter.substring(10);
            break;
        }
      }
      letter = MORSE_TABLE[res.join('')];
      expr = expr.substring(10);
      str.push(letter);
  }
  return str.join('')
}

module.exports = {
    decode
}
