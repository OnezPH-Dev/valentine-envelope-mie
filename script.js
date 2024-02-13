setInterval(loadindDisplayNone, 5500);
let loadingCon = document.getElementById("loadingCon");
function loadindDisplayNone() {
  loadingCon.style.opacity = "0";
  setInterval(displaynone, 1000);
  function displaynone() {
    loadingCon.style.display = "none";
  }
}

var envelope = document.getElementById("envelope");
var intervalId;

function openEnvi() {
    envelope.classList.add("open");
        envelope.classList.remove("close");
        intervalId = setInterval(displayLetter, 2000);
}

function displayLetter() {
    clearInterval(intervalId);
    document.getElementById('letterId').style.zIndex = '3';
    document.getElementById('letterId').classList.add("openedLetter");
    document.getElementById('letterTextCon').style.display = 'block';
    envelope.onclick = null;
}
function yesMie(){
    let letterCon = document.getElementById('letterId');
    letterCon.innerHTML = '<div class="imgConGift"><img id="gifImg" src="bear-kiss-bear-kisses.gif" alt=""></div><div class="ilyText"><span>Yayyy!! I Love You💗</span></div>';
}
let yesBtn = document.getElementById('yesButton');
function noMie(){
    const gif = ["mimibubu.gif", "milk-mocha.gif", "cry-baby.gif", "dirt-alone.gif", "broken.gif", "sad-bunny.gif", "cry.gif", "cute-sad.gif"];
    const randomIndex = Math.floor(Math.random() * gif.length);
    document.getElementById('gifImg').src = gif[randomIndex];
    yesBtn.style.width = `${yesBtn.offsetWidth + 5}px`;
    yesBtn.style.height = `${yesBtn.offsetHeight + 5}px`;
    const currentFontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentFontSize + 3}px`;
}