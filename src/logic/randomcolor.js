
function RandomColor() {
    const min = 0;

    const tailwindcolor = [
        'slate', 'gray', 'zinc',
        'neutral', 'stone', 'red',
        'orange', 'amber', 'yellow',
        'lime', 'green', 'emerald',
        'teal', 'cyan', 'sky',
        'blue', 'indigo', 'violet',
        'purple', 'fuchsia', 'pink',
        'rose',
    ];

    let tamanho = tailwindcolor.length;
    let randomNumber = Math.floor(Math.random() * (tamanho - min) + min);
    let cor = tailwindcolor[randomNumber];

    return { start : `${cor}-300`, middle : `${cor}-600`, finish : `${cor}-900` }
}

export default RandomColor;