const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';

const btn = document.getElementById('change-cat');
const img = document.getElementById('cat');

async function getCats(url){
    try {
        const data = await fetch(url);
        const json = await data.json();
        return json[0].url
    } catch (e) {
        console.log(e.message)
    }
};

const loadImg = async () => {
    const img = document.getElementById('cat')
    img.src = await getCats(BASE_URL);
}

btn.addEventListener('click', loadImg)

loadImg();

