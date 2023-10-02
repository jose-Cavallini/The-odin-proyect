const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add("content");
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const contentP = document.createElement('p');
contentP.classList.add("parrafo")
contentP.textContent = 'Oye, soy rojo!'
contentP.style.cssText = 'color: red; background: #Afff; margin: 10px;'

container.appendChild(contentP);

const contentH3 = document.createElement('h3');
contentH3.classList.add("titulo3")
contentH3.textContent = 'Soy un h3 azul!'
contentH3.style.cssText = 'color: blue; background: #5672; margin: 10px; padding: 5px;'

container.appendChild(contentH3);


const contentDiv = document.createElement('div');
contentDiv.classList.add("bloque2");
contentDiv.style.cssText = 'background:rgb(202, 26, 178) ; margin: 10px; padding: 5px; border: 1px solid black;';

container.appendChild(contentDiv);

const contentDivSelector = document.querySelector('.bloque2');

const pushH1 = document.createElement('h1');
pushH1.classList.add("bloque2_h1");
pushH1.textContent = "estoy en un div";

contentDivSelector.appendChild(pushH1);


const pushP = document.createElement('p');
pushP.classList.add("bloque2_p");
pushP.textContent = "YO TAMBIEN!!";

contentDivSelector.appendChild(pushP);

// metodo 2 event button

const btn = document.querySelector('#btn');
btn.onclick = () => alert('hello method 2');

// method 3 - event button

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => alert("Hello Method 3") );

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function(e){console.log(e.target)});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function (e) {
    if(btn5.style.background =='blue'){
        e.target.style.background = 'red';
    }else{
        e.target.style.background = 'blue';
    }
  });
