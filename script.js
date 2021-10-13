console.log("page loaded...");

var x = document.getElementById("video_1");
var playing = false;

function playVideo() {    
    if (playing == false) {
        playing = true;
        console.log(playing);
        x.play();
    }else {
        playing = false;
        console.log(playing);
        x.pause()
    } 
}

