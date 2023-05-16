
function RandomColor() {
    const min = 0;

    const gradient = [
        'linear-gradient(90deg, rgba(181,80,0,1) 0%, rgba(255,132,0,1) 50%, rgba(255,209,0,1) 100%)',
        'linear-gradient(90deg, rgba(195,186,0,1) 0%, rgba(255,209,0,1) 50%, rgba(245,255,0,1) 100%)',
        'linear-gradient(90deg, rgba(171,0,0,1) 0%, rgba(255,55,0,1) 50%, rgba(255,115,0,1) 100%)',
        'linear-gradient(90deg, rgba(12,171,0,1) 0%, rgba(0,255,25,1) 50%, rgba(0,255,128,1) 100%)',
        'linear-gradient(90deg, rgba(0,171,91,1) 0%, rgba(0,255,196,1) 50%, rgba(0,250,255,1) 100%)',
        'linear-gradient(90deg, rgba(0,18,171,1) 0%, rgba(98,0,255,1) 50%, rgba(179,0,255,1) 100%)',
        'linear-gradient(90deg, rgba(157,0,171,1) 0%, rgba(255,0,241,1) 50%, rgba(255,0,172,1) 100%)',
        'linear-gradient(90deg, rgba(6,171,0,1) 0%, rgba(147,255,0,1) 50%, rgba(250,255,0,1) 100%)',
        'linear-gradient(90deg, rgba(0,130,171,1) 0%, rgba(25,0,255,1) 50%, rgba(0,255,235,1) 100%)',
        'linear-gradient(90deg, rgba(171,0,116,1) 0%, rgba(255,0,112,1) 50%, rgba(255,0,241,1) 100%)',
    ];

    let tamanho = gradient.length;
    let randomNumber = Math.floor(Math.random() * (tamanho - min) + min);
    let cor = gradient[randomNumber];

    return cor;
}

export default RandomColor;