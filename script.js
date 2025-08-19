const gifContainer = document.getElementById('gif-container');

const gifs = ['guh.gif', 'guh2.gif', 'guh3.gif', 'guh4.gif', 'guh5.gif', 'guh6.gif', 'guh7.gif', 'guh8.gif', 'guh9.gif', 'guh10.gif', 'guh11.gif', 'guh12.gif', 'guh13.gif', 'guh14.gif', 'guh15.gif'];
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