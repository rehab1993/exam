
// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);
// getCategoryMeals(urlParams.get('c'))

// const categoryLink = document.getElementById('category');

// const categoryPage = document.getElementById('category-page');


// categoryLink.addEventListener('click',function(){
//     categoryPage.classList.remove('d-none');
//     $('.side-nav-menue').animate({left:'-260px'},500);
//     $('#open').fadeIn(0);
//     $('#close').fadeOut(0);
//     getCategory()
    


// })




// let categorieMeals=[]
// async function getCategoryMeals(query){
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
//     const finalResponse = await response.json();
//      categorieMeals = finalResponse.meals
    
//     console.log(categorieMeals);
//     displayMealsByCategory()
   
// }

// const catMeals = document.getElementById('category-meals')

// function displayMealsByCategory(){
//     let cols = '';
//     for(let i = 0 ; i<categorieMeals.length ; i++){
//         cols += `<div class="col-md-3 ">
//         <div class="inner position-relative overflow-hidden">
    
        
//           <img src="${categorieMeals[i].strMealThumb}" alt="" class="w-100">
//           <div class="layer position-absolute text-black">
//           <h6 class="text-uppercase text-center">${categorieMeals[i].strMeal}</h6>
        
          

          
//         </div>
//       </div>
          
//       </div>`}

//       catMeals.innerHTML = cols;

// }