"use strict";

// const youWin = new Audio('youwin.wav')

// window.onload = function() {
//     youWin.play();
// }

const youWin = new Audio('youwin.wav'); 
if (typeof youWin.loop == 'boolean')
{
    youWin.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
};

window.onload = function () {
    youWin.play();
};