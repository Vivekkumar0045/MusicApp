console.log("Welcome to my MusicApp");

let songIndex = 0;
let masterplay = document.getElementById("playbtn");
let myprogressbar = document.getElementById('progress')
let songitems = Array.from(document.getElementsByClassName('album'));
let songs =
    [
        { songname: "kinni", songpath: 'songs/1.mp3' },
        { songname: "softly", songpath: 'songs/2.mp3' }
    ]
let audioelement = new Audio('songs/1.mp3');
// audioelement.play();


audioelement.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;



})

masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
    }
    else {
        audioelement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");

    }

})


myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})

// songitems.forEach((element, i)=>{ 
//     // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("musicname")[0].innerText = songs[i].songname; 
// })


Array.from(document.getElementsByClassName('album')).forEach((element) => {
    element.addEventListener('click', (e) => {

        songIndex = parseInt(e.target.id);
        console.log("eis", e);
    

        audioelement.src = `songs/${songIndex + 1}.mp3`;
        // masterSongName.innerText = songs[songIndex].songName;
        audioelement.currentTime = 0;
        audioelement.play();

        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})



document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioelement.src = `songs/${songIndex + 1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioelement.src = `songs/${songIndex + 1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})


function onkeydown(event) {

    switch (event.keyCode) {
        case 32:
            if (audioelement.paused || audioelement.currentTime <= 0) {
                audioelement.play();
                masterplay.classList.remove("fa-play");
                masterplay.classList.add("fa-pause");
            }
            else {
                audioelement.pause();
                masterplay.classList.remove("fa-pause");
                masterplay.classList.add("fa-play");

            }
            break;
    }
    return false;
}
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32 && e.target == this.document.body) {
        e.preventDefault();
    }

})

// back

function leftback(event) {

    switch (event.keyCode) {
        case 27:
            if (songIndex <= 0) {
            songIndex = 0
        }
        else {
            songIndex -= 1;
        }
        audioelement.src = `songs/${songIndex + 1}.mp3`;
        // masterSongName.innerText = songs[songIndex].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        break;   
            
    }
    return false;
}
window.addEventListener("keydown", leftback, false);

window.addEventListener("keydown", function (e) {
    if (e.keyCode == 27 && e.target == this.document.body) {
        e.preventDefault();
    }

})

