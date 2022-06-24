const btn = document.getElementById('btn');
const body = document.getElementsByTagName('body')[0];

const listener = function() {
    btn.addEventListener('click', async () => {
        const {randomColor} = await import('./funcoes.js')
        randomColor(body)
    })
}

listener()