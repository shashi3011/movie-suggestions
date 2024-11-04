let api = 'https://www.omdbapi.com/?apikey=708c565a&t='

let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let genre = document.querySelector('#genre');
let actors = document.querySelector('#actors');
let directors = document.querySelector('#directors');
let awards = document.querySelector('#awards');
let collection = document.querySelector('#collection');
let ln = document.querySelector('#ln');
let poster = document.querySelector('#poster');
let ratings = document.querySelector('#ratings')
let container = document.querySelector('#container')
let error = document.querySelector('#error')
let suggestion = document.querySelector('.suggestion')
container.classList.add('hidden')

function search(){
    let movieInput = document.querySelector('#movieName');
    let query = api + movieInput.value;
    fetch(query).then(data=> data.json()).then(data=>{
        error.innerText = "";
        if(data.Error === 'Movie not found!'){
            error.innerText = 'Movie not found!'
        }
       else{
        container.classList.remove('hidden')
        title.innerText=data.Title;
        desc.innerText=data.Plot;
        actors.innerText=data.Awards;
        directors.innerText=data.Director;
        genre.innerText=data.Genre;
        awards.innerText=data.Awards;
        collection.innerText=data.BoxOffice;
        ln.innerText=data.Language;
        ratings.innerText = data.imdbRating;
        poster.src = data.Poster;
        if(data.imdbRating > 7){
            suggestion.innerText = 'worth watching'
        }
        else if(data.imdbRating > 6 && data.imdbRating<7){
            suggestion.innerText = 'Can watch'
        }
        else{
            suggestion.innerText = 'Time waste'
        }
       }
    })
}
