const aPIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPaTH = "https://image.tmdb.org/t/p/w1280";

const SEaRCHaPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  //image,title,rating,overview
  let search=document.getElementById('search')
  let img=document.querySelectorAll('#img')
  let title=document.getElementsByTagName('h2')
  let moviebox=document.querySelector('#movie-box')
    let getMovies=async(api)=>{
      let response=await fetch(api)
      let data=await response.json()
      console.log(data.results)
      showMovies(data.results)
    }
    let showMovies=(data)=>{
      moviebox.innerHTML=''
        data.forEach((item) => {
          let box=document.createElement('div')
          box.classList.add('box')
          box.innerHTML=`
          <img id="img" src="${IMGPaTH+item.poster_path}" alt="loading">
            <div class="overlay">
                <div class="title">
            <h2>${item.title}</h2>
            <span>${item.vote_average}</span>
            </div>
          <h3>Overview</h3>
          <p>${item.overview}</p>
          </div>
          `
          moviebox.appendChild(box)
        });
      }
      search.addEventListener('keyup',(e)=>{
        if(e.target.value !=''){
          getMovies(SEaRCHaPI+e.target.value)
        }else{
          getMovies(aPIURL)
        }
      })
      getMovies(aPIURL)
    