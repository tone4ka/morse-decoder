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
   
     //разбиваем аргумент на массив из строк по 10 букв каждая(соответствует одному декодированному символу)
     let exprArr10=[];
     for (i=0; i<expr.length; i+=10){
         exprArr10.push(expr.substr(i, 10))
     }
     
   // убираем лишние нули
   for(let i=0; i<exprArr10.length; i++){
       let letterCombination=exprArr10[i];
       while(letterCombination.indexOf('00')>=0){
           
           letterCombination=letterCombination.substr(2);
       }
       exprArr10[i]=letterCombination;
   }
 let exprArrTrim=exprArr10;
 console.log("exprArrTrim="+exprArrTrim);
 
   //преобразуем элементы в код морзе
   let morseCombinationArr=[];
 for(let i=0; i<exprArrTrim.length; i++){
     let morseCombination=''
     let binaryСombination;
     for (let j=0; j<exprArrTrim[i].length; j+=2){
         binaryСombination=exprArrTrim[i].substr(j,2);
         if(binaryСombination=='10') morseCombination+='.';
         if(binaryСombination=='11') morseCombination+='-';
     }
     morseCombinationArr.push(morseCombination);
 }
 console.log(morseCombinationArr);
 
 //декодируем
 let result=[];
 for (let i=0; i<morseCombinationArr.length; i++){
     let letter;
     if(morseCombinationArr[i]==''){
         letter=' ';
     }else{
         letter=MORSE_TABLE[morseCombinationArr[i]];	
     }
 result.push(letter);
 }
 
 console.log("result="+result);
 
 return result.join('');
 }

module.exports = {
    decode
}