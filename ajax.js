var xhr  = new XMLHttpRequest();

xhr.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// xhr.onload = function(){
//   var data = JSON.parse(this.response);
//   if(xhr.status >= 200 && xhr.status < 400){
//     cardRender(data);
//   } else  {
//       const errorMessage = document.createElement('marquee');
//       errorMessage.textContent = "Gah, it's not working!";
//       app.appendChild(errorMessage); 
//   }
// };

// 改写响应处理
xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.response);
    cardRender(data);
  }
};

xhr.send();

const app = document.getElementById('app');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

function cardRender(data){
  data.forEach(movie => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = movie.title;

    const p = document.createElement('p');
    p.textContent = `${movie.description.substring(0, 300)}...`

    container.appendChild(card);

    card.appendChild(h1);
    card.appendChild(p);
  })
}

const declaration = document.createElement('p');
declaration.innerHTML = `参照：
<a href = "https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/" target = "_blank">
https://www.taniarascia.com
</a>`;
app.appendChild(declaration);
