let boldText = () => {
    document.getElementById('para').style.fontWeight = 'bold';
}
let check = () => {
    let color = document.getElementById('color').value;
    document.body.style.background = color;
    document.getElementById('boldbtn').style.background = color;    
}
setInterval(check,50);