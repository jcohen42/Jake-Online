// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)
                        
const USERNAME = "Nintendies"; // Put your LastFM username here
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();
    let status

    let isPlaying = json.track['@attr']?.nowplaying || false;

    if(!isPlaying) {
        // Trigger if a song isn't playing
    } else {
        // Trigger if a song is playing
    }

    document.getElementById("listening").innerHTML = `
    <a href="${json.track.url}" target="_blank">
        <img src="${json.track.image[2]['#text']}">
    </a>
    <div id="trackInfo">
        <h3 id="trackName">${json.track.name}</h3>
        <p id="artistName">${json.track.artist['#text']}</p>
    </div>
    `
};

getTrack();
setInterval(() => { getTrack(); }, 60000)