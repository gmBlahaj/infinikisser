const gifContainer = document.getElementById('gif-container');

const gifs = ['assets/guh.gif', 'assets/guh10.gif', 'assets/guh11.gif', 'assets/guh12.gif', 'assets/guh13.gif', 'assets/guh14.gif', 'assets/guh15.gif', 'assets/guh2.gif', 'assets/guh3.gif', 'assets/guh4.gif', 'assets/guh5.gif', 'assets/guh6.gif', 'assets/guh7.gif', 'assets/guh8.gif', 'assets/guh9.gif'];
const numGifsInitial = 200;
const numGifsToAdd = 20;
const maxGifs = 300;

function createGif() {
    const gif = document.createElement('img');
    gif.src = gifs[Math.floor(Math.random() * gifs.length)];
    gif.className = 'gif';
    gifContainer.appendChild(gif);
}

for (let i = 0; i < numGifsInitial; i++) {
    createGif();
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        for (let i = 0; i < numGifsToAdd; i++) {
            createGif();
        }

        const currentGifs = document.querySelectorAll('.gif');
        if (currentGifs.length > maxGifs) {
            for (let i = 0; i < numGifsToAdd; i++) {
                currentGifs[i].remove();
            }
        }
    }
});
