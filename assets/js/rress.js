import { _______________, _______, _____, __________, ___________, ____________, _____________, ______________  } from './crypt.js';

window.counter = 0;

let cipher = `:)\x1FV4Y\x14\x0060B\x07:\x02D1?()\r=2;\b>\x00\x03\x115.) *\v3\x05&<9\x07=\x02*\\8&#\x1A=\x1F\x07\b9\x02\x10\x04=\x19G\x021:\x1C."\x01*\x19&\x18';\x15-5N8[\x10\t<\x19\x15=7?)S9(\x10\x002 \x151<\x12\x14. \x01C[;\t'\f>\x02\x13Q\x10/=8' OV`;
const first = 'C';

function generateRandomArray() {
    const __ = []; __[0] = Math.floor(Math.random() * 2000);
    for (let ___ = 1; ___ < 10; ___++) {
        const ____ = __[___ - 1];
        __[___] = Math.floor(Math.random() * ((10000 - 2 * ___) - ____)) + ____;
    }
    for (let ___ = 10; ___ < 30; ___++) {
        const ____ = __[___ - 1] + 10000;
        __[___] = Math.floor(Math.random() * (10000 - ____)) + ____;
    }
    return __;
}

function make() {
  // animations
  let mod = window.counter % 200;
  if (0 < mod && mod <= 100) document.getElementById('rrlogo')
    .style.opacity = ((100 - mod) * 0.8 + 20) + '%';
  else if (100 < mod && mod <= 200) document.getElementById('rrlogo')
    .style.opacity = ((mod - 100) * 0.8 + 20) + '%';

  // If clicked more than 10000 times?
  if (10000 < window.counter) {
    if (cipher[0] != first)
      alert(_______(`:,%3>,:\n55\x05\x079\x0F!*;\x03\x1FP=53;<\x00H\x1B?\x00).\x1657D7\x11=\x183(&G43'\x1A>\x10\b)#\x126\x01>Q\nR>X)1?\x01\x10^1\b'\b!\x00H\n<[=1:%3\x19!/)S=\x1C*\x0037?/#,>*0?G\x02>5J\x07>*\x1B\x16\x149&\x024\b'\x06>\x049X6Y\x04!?2+:9\x12\x07\x16;[)\x1A:\x1B<:#\x10!$9\x01KZ\x12%\x1D\x1C;->%>\x01"\f86\x15\x009Y=U;:""=\x1B7\x0F;\x12)\x168\x02&\x066\b\x15\x1D),)V'(*\x0F8#\x19\x13;[!\x02"\x1269(";\f;:>\x17;>:'>\t#"%\x01%/\x13/>\x01:#\x15X:*\x17N=<\x18>>\x19BY:<@\x15?/5\\>\v\x1D\x065*5\t;\x1C5&*0\x15-:\x12@\x18=\x01\x14\x024$+"<+)0#(G\x1124<\x030\x039Q<\x03"\x11?\x1B\x15\x13)-)T:[\x00\x0093\x19\x0F2/%8#\x01>[7'K\b`));

    document.getElementById('rrlogo').classList.add('tada');

    let ctx = document.querySelector("canvas").getContext("2d");
    let dashLen = 220;
    let dashOffset = dashLen;
    let speed = 20;
    let x = 35;
    let i = 0;
    let txt = cipher;

    ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 
    ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
    ctx.strokeStyle = ctx.fillStyle = "#1f2f90";

    (function loop() {
      ctx.clearRect(x, 0, 60, 150);
      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
      dashOffset -= speed;                                        
      ctx.strokeText(txt[i], x, 90);                              

      if (dashOffset > 0) requestAnimationFrame(loop);            
      else {
        ctx.fillText(txt[i], x, 90);                              
        dashOffset = dashLen;                                     
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());       
        ctx.rotate(Math.random() * 0.005);                        
        if (i < txt.length) requestAnimationFrame(loop);
      }
    })();

    if (cipher[0] == first)
      alert(_______(`:,%6<,2\x10"\x06B@0\x11:6?[!\x1B>%3;>\x03\x1F\x1B?\f6+\x15\x1B7\x0F+,)\x0F1*\x1C\x124R\x05\n9\x125W78\x10\x06644\x020\x01\x145"\x01*\x19&\x1BJ\x06 \x01\x03T;.\x17'`));
  }
  else {
    document.getElementById('clicks').textContent = 10000 - window.counter;
  }
}

const randomValues = generateRandomArray();
console.log(randomValues);

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('rrlogo').addEventListener('click', function() {
    window.counter += 1;
    make();
    if (window.counter == randomValues[0]) cipher = _____(cipher, ______________);
    if (window.counter == randomValues[14]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[24]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[2]) cipher = _____(cipher, _____________);
    if (window.counter == randomValues[27]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[28]) cipher = _____(cipher, ___________);
    if (window.counter == randomValues[4]) cipher = _____(cipher, ____________);
    if (window.counter == randomValues[18]) cipher = _____(cipher, ___________);
    if (window.counter == randomValues[9]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[6]) cipher = _____(cipher, ___________);
    if (window.counter == randomValues[8]) cipher = _____(cipher, __________);
    if (window.counter == randomValues[3]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[7]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[5]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[11]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[21]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[12]) cipher = _____(cipher, ___________);
    if (window.counter == randomValues[17]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[13]) cipher = _____(cipher, __________);
    if (window.counter == randomValues[19]) cipher = _____(cipher, __________);
    if (window.counter == randomValues[15]) cipher = _____(cipher, ___________);
    if (window.counter == randomValues[1]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[10]) cipher = _____(cipher, ____________);
    if (window.counter == randomValues[25]) cipher = _____(cipher, ____________);
    if (window.counter == randomValues[23]) cipher = _____(cipher, _____________);
    if (window.counter == randomValues[20]) cipher = _____(cipher, _____________);
    if (window.counter == randomValues[29]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[22]) cipher = _______________(cipher, 1);
    if (window.counter == randomValues[16]) cipher = _____(cipher, __________);
    if (window.counter == randomValues[26]) cipher = _____(cipher, ___________);
    
  });
});