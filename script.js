const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('click',sumarInputValues);

function sumarInputValues(event){
  event.preventDefault();
  const sumaInput = input1.value + input2.value;
  pResult.innerText = "Resultado " + sumaInput;
}

    /*
        const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const parrafito = document.querySelector('.parrafito');
    const pid = document.querySelector('#pid');
    const input = document.querySelector('input');
   
    console.log({
     h1,
     p,
     parrafito,
     pid,
     input,
    });


    h1.innerHTML = 'patito <hr> hi';
    h1.innerText = 'patito hi';
    console.log(p.setAttribute('class','rojo'));

h1.classList.add('purple');
h1.classList.remove('title');

input.value = "456"

const img = document.createElement('img')

img.setAttribute('src','https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg');

pid.append(img)*/

