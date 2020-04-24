function scrollTo(id){
  let aboutmeEl = document.getElementById(id)
  aboutmeEl.scrollIntoView({behavior: 'smooth'})
}

let widthBar = 0;

// 1 - Criar o Botão
let button = document.createElement('button');
button.innerHTML = 'O quanto você gostou desse site? Dê um joinha';
button.className = 'myButton';

let growthBar = document.createElement('div');
growthBar.style['height'] = '20px';
growthBar.style['width'] = '0%';
growthBar.className = 'growthBar';

let divButton = document.getElementById('container__buttonLike');
console.log(divButton);
divButton.appendChild(button);
divButton.appendChild(growthBar);

button.addEventListener('click', () => {
  widthBar += 10;
  if(widthBar <= 100){
    growthBar.style['width'] = widthBar + '%';
    console.log('Fui clicado!')
  }
})