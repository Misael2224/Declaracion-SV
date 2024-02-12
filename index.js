const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    Swal.fire({
        title: "¡TE GANASTE UN FRAPPÉ! ❤️",
        text: "Sabia que ibas a decir que sí, nos vemos este miércoles 14 de febrero :3",
        imageUrl: "https://img.wattpad.com/66b7cba68742b4e57656578436135445e0ea4dc9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f516d524454576e4b494f425454773d3d2d3232392e313633356637353331333365613537653731323435383738313135302e6a7067?s=fit&w=720&h=720",
        imageWidth: 300,
        imageHeight: 320,
        imageAlt: "Meme romanticon"
      });
    
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})