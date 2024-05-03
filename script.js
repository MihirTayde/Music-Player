let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let backwardBtn = document.getElementById("backward");
let forwardBtn = document.getElementById("forward");

song.onloadedmetadata = function(){
    progress.max = song.duration;
}

function playPause(){
    if(song.paused){
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

song.addEventListener('timeupdate', function() {
    progress.value = song.currentTime;
});

progress.oninput = function(){
    song.currentTime = progress.value;
}

backwardBtn.addEventListener('click', function(){
    song.currentTime -= 5;
});

forwardBtn.addEventListener('click', function(){
    song.currentTime += 5;
});
