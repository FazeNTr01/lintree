const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songNameElement = document.getElementById('song-name');
const artistNameElement = document.getElementById('artist-name');
const albumArtElement = document.getElementById('album-art');

const playlist = [
    {
        src: 'img/sound/music1.mp3',
        songName: 'New Opp',
        artistName: 'Sha Gz',
        albumArt: 'img/newopppp.jpg'
    },
    {
        src: 'img/sound/music2.mp3',
        songName: 'WNA',
        artistName: 'Sdot Go',
        albumArt: 'img/wnapp.jpeg'
    },
    {
        src: 'img/sound/music3.mp3',
        songName: '6locc 6a6y remix',
        artistName: 'Lil Loaded',
        albumArt: 'img/lilload.png'
    }
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio(playlist[currentSongIndex].src);

const updatePlayer = () => {
    songNameElement.textContent = playlist[currentSongIndex].songName;
    artistNameElement.textContent = playlist[currentSongIndex].artistName;
    albumArtElement.src = playlist[currentSongIndex].albumArt;
    audio.src = playlist[currentSongIndex].src;
};

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = '<i class="bi bi-play-fill"></i>';
    } else {
        audio.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }
    isPlaying = !isPlaying;
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    updatePlayer();
    if (isPlaying) {
        audio.play();
    }
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    updatePlayer();
    if (isPlaying) {
        audio.play();
    }
});
//buraları fazla elleşme

updatePlayer();