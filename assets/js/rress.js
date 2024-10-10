import { _______ } from './crypt';

let t = `:)\x1FV4Y\x14\x0060B\x07:\x02D1?()\r=2;\b>\x00\x03\x115.) *\v3\x05&<9\x07=\x02*\\8&#\x1A=\x1F\x07\b9\x02\x10\x04=\x19G\x021:\x1C."\x01*\x19&\x18';\x15-5N8[\x10\t<\x19\x15=7?)S9(\x10\x002 \x151<\x12\x14. \x01C[;\t'\f>\x02\x13Q\x10/=8' OV`;
let c, counter = 0;
const first = 'C';
const _______________ = (________, _________) => _________ ? atob(________) : btoa(________)
const __________ = _______________('andsZWU=', 1);
const ___________ = _______________('dGpkZ2hrczk5NA==', 1);
const ____________ = _______________('ZXN0aGVy', 1);
const _____________ = _______________('a2FydS1ycmVzcw==', 1);
const ______________ = _______________('c2hwYXJr', 1);

function _____(________, _________) {
    let __ = "";
    for (let ___ = 0; ___ < ________.length; ___++) {
        __ += String.fromCharCode(________.charCodeAt(___) ^ _________.charCodeAt(___ % _________.length));
    }
    return __;
}

function make() {
  // animations
  mod = counter % 200;
  if (0 < mod && mod <= 100)
    document.getElementById('rrlogo').style.opacity = ((100 - mod) * 0.8 + 20) + '%';
  else if (100 < mod && mod <= 200)
    document.getElementById('rrlogo').style.opacity = ((mod - 100) * 0.8 + 20) + '%';

  if (10000 < counter) {
    if (t[0] != first)
      alert('편법은 안 돼요 ㅎㅎ 정직하게 10000번 클릭합시다 ^^\n - Karu');

    document.getElementById('rrlogo').classList.add('tada');
    let ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220; dashOffset = dashLen; speed = 20; x = 35; i = 0; txt = t;

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

    if (t[0] == first)
      alert('축하합니다!');
  }
  else {
    document.getElementById('clicks').textContent = 10000 - counter;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('rrlogo').addEventListener('click', function() {
    counter += 1;
    make();
    if (counter % 1000 == 0 || counter == 9900) {
      if (counter == 1000) c = _____(t, ______________);
      else if (counter == 2000) c = _______________(c, 1);
      else if (counter == 3000) c = _____(c, _____________);
      else if (counter == 4000) c = _______________(c, 1);
      else if (counter == 5000) c = _____(c, ____________);
      else if (counter == 6000) c = _______________(c, 1);
      else if (counter == 7000) c = _____(c, ___________);
      else if (counter == 8000) c = _______________(c, 1);
      else if (counter == 9000) c = _____(c, __________);
      else if (counter == 9900) t = _______________(c, 1);
    }
  });
});