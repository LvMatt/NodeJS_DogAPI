console.log("dsada");



const dogFinder = document.querySelector('form');
const inputElement = document.querySelector('input')
const imageHolder = document.getElementById('image-dog');

// imageHolder.textContent = 
dogFinder.addEventListener('submit', (event) =>{
    event.preventDefault();
    const dog = inputElement.value;

    fetch('https://dog.ceo/api/breed/' + dog + '/images').then((response) =>{
    response.json().then((data) =>{

     imageHolder.innerHTML = "<img src=" + data.message[0] +"></img>";
    })
    })
})