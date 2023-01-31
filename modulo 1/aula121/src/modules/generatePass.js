const cq1 = document.querySelector('.char-quant');
const charUpper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const charLower = 'qwertyuiopasdfghjklzxcvbnm';
const charSymbol = '!@#$%^';
const charNumber = '1234567890';

export default function generatePass(c1, c2, c3, c4) {
  const choice = [];
  let maxLength = cq1.value - 1 ;
  let pass = '';
  
  if(c1) choice.push(charNumber);
  if(c2) choice.push(charUpper);
  if(c3) choice.push(charLower);
  if(c4) choice.push(charSymbol);
  
  for(let i = 0; i <= maxLength; i++){
    const rand = choice[Math.floor(Math.random() * choice.length)];
    pass += rand.charAt(Math.floor(Math.random() * (rand.length- 0)) + 0);
  }
  return pass;
}
