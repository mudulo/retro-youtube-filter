window.onload=function(){
    const players = document.getElementsByClassName("html5-video-player")
    for(const player of players){
        player.style.visisbility = "hidden"
        player.style.filter = "grayscale(1)"
        player.style.filter = "grayscale(100%)"
    }
}


