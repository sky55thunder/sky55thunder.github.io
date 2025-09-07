// Load Spotify playlist into iframe
function loadSpotify() {
    const link = document.getElementById("spotify-link").value;
    const frame = document.getElementById("spotify-frame");
    
    if (link.includes("spotify.com")) {
        frame.src = link.replace("open.spotify.com", "open.spotify.com/embed");
    } else {
        alert("⚠️ Please enter a valid Spotify playlist link!");
    }
}
