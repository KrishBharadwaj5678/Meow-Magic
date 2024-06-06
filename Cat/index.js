let btn=document.querySelector('button.btn-cat');

let cat=document.querySelector('img.show-cat');

const url = 'https://cat14.p.rapidapi.com/v1/images/search?limit=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c0e897e06bmshf1b07b02427bc79p1edb79jsn0132d0db5ef9',
		'X-RapidAPI-Host': 'cat14.p.rapidapi.com'
	}
};

// let url= "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=live_wSbLJ1bfc2wOPHkI3BwwdEnVIbViLWYVUvMG0sxN2E9sfxoDL8VUhZrHPFK2M973";

btn.addEventListener('click',()=>{
    btn.innerText='Loading...';
    generate();
 
   async function generate(){
        const response = await fetch(url, options);
        const result = await response.json();
        
        if(response.status==200){
            cat.style.display='block';
            cat.src=result[0].url;
            btn.innerText="Get a cat!";
          }
      }
    }
)

window.addEventListener('load',()=>{
    generate();
 
    async function generate(){
        const response = await fetch(url, options);
        const result = await response.json();
        
        if(response.status==200){
            cat.style.display='block';
            cat.src=result[0].url;
        }
      }
    }
)











