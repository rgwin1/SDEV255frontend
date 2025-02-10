//make an event listener that will trigger when the DOM is loaded (upon visiting webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://sdev255m4tutorial.glitch.me/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs) {
        html+= `<li>${song.title} - ${song.artist}</li>`

    }

    document.querySelector("#addedsong").innerHTML = html
})


