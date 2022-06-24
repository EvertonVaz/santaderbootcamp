function choice(arr){
    let n = Math.floor(Math.random() * arr.length);
    return arr[n]
}


export function randomColor(element){
    let colors = ['red', 'blue', 'black', 'white', 'gray']
    element.style.backgroundColor = choice(colors)
}

