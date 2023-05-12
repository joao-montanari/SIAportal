
function RandomColor() {
    const min = 0;

    const gradient = [
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%)',
        'linear-gradient(90deg, rgba(23,36,0,1) 0%, rgba(36,121,9,1) 50%, rgba(1,255,0,1) 100%)',
        'linear-gradient(90deg, rgba(23,36,0,1) 0%, rgba(121,112,9,1) 50%, rgba(255,252,0,1) 100%)',
        'linear-gradient(90deg, rgba(23,36,0,1) 0%, rgba(114,9,121,1) 50%, rgba(255,0,250,1) 100%)',
        'linear-gradient(90deg, rgba(23,36,0,1) 0%, rgba(121,9,9,1) 50%, rgba(255,0,52,1) 100%)',
        'linear-gradient(90deg, rgba(23,36,0,1) 0%, rgba(9,109,121,1) 50%, rgba(0,220,255,1) 100%)',
        'linear-gradient(90deg, rgba(121,59,9,1) 0%, rgba(255,132,0,1) 50%, rgba(255,209,0,1) 100%)',
        'linear-gradient(90deg, rgba(23,36,0,1) 0%, rgba(62,121,9,1) 50%, rgba(181,255,0,1) 100%)',
        'linear-gradient(90deg, rgba(82,9,121,1) 0%, rgba(183,0,255,1) 50%, rgba(255,0,215,1) 100%)',
        'linear-gradient(90deg, rgba(9,121,91,1) 0%, rgba(0,255,188,1) 50%, rgba(0,255,209,1) 100%)',
    ];

    let tamanho = gradient.length;
    let randomNumber = Math.floor(Math.random() * (tamanho - min) + min);
    let cor = gradient[randomNumber];

    return cor;
}

export default RandomColor;