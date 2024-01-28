
/// <reference types="../@types/jquery" />




$(function(){
    $('.loader').fadeOut(900,function(){
        $('.loading').slideUp(1000,function(){
            $('body').css('overflow','auto');
            $('.loading').remove()

        })
    })
    

})


$('#open').on('click',function(){
    $('.side-nav-menue').animate({left:'0px'},400);
    $('#open').fadeOut(0);
    $('#close').fadeIn(0);
    // $('li a #search').fadeIn(300)


    $('#search').fadeIn(500,function(){
      $('#category').fadeIn(100,function(){
        $('#area').fadeIn(100,function(){
          $('#ingredients').fadeIn(100,function(){
            $('#contact').fadeIn(100)

          })

        })

      })

    })

})

$('#close').on('click',function(){
    $('.side-nav-menue').animate({left:'-260px'},1000);
    $('#open').fadeIn(0);
    $('#close').fadeOut(0)

    
})

const searchLink = document.getElementById('search');
const searchInputs = document.getElementById('inputs');

searchLink.addEventListener('click',function(){
    searchInputs.classList.remove('d-none');
    categoryPage.classList.add('d-none');
    areaPage.classList.add('d-none');
    ingredientsPage.classList.add('d-none');
    contactPage.classList.add('d-none');
    categryDta.classList.add('d-none');
    mealsByArea.classList.add('d-none');
    mealsByIngredients.classList.add('d-none');
    $('.side-nav-menue').animate({left:'-260px'},1000);
    $('#open').fadeIn(0);
    $('#close').fadeOut(0)
    


})

// search by meal name.....

const input1 = document.getElementById('input-1');



 input1.addEventListener('keyup',function(e){
   
    if(e.key=='Enter'){
       
        getMealByName(input1.value);
        clrInputs()

    }
  
 
 })
//  getMealByName('fish');
let data =[]
async function getMealByName(query){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const finalResponse = await response.json();
    data = finalResponse.meals
    console.log(data)
    displayMeals()

}
const rowData = document.getElementById('rowData');


function displayMeals(){

    let cols = '';
    for(let i = 0 ; i<data.length ; i++){
        cols += ` <div class="col-md-3">
        <div class="inner position-relative overflow-hidden">
          <img src="${data[i].strMealThumb}" alt="" class="w-100">
        
          <div class="layer position-absolute">
            <h6 class="text-uppercase text-center text-white">${data[i].strMeal}</h6>
            <h6 class="text-uppercase text-center text-dark d-none">${data[i].idMeal}</h6>
            <a href="#" class="btn bg-danger card-btn" id="view-recipe" data-bs-toggle="modal" data-bs-target="#exampleModal">view recipe</a>
          </div>
        </div>
      </div>`}

     rowData.innerHTML = cols; 
     const cardBtn = document.querySelectorAll('.card-btn');
     for(let i = 0 ; i<cardBtn.length;i++){
       cardBtn[i].addEventListener('click',function(e){
        
         let x = e.target
         console.log(x);
         let m = data[i].idMeal;
         console.log(m)
       
        getMealsById(m)
         
       })
      
 
     }
     

}


const modalContent = document.querySelector('.modal-body')
function displayRecipes(){
  modalContent.innerHTML = `<img src="${myMeal[0].strMealThumb}" alt="" >
  <h4 class="text-info fw-bold">${myMeal[0].strMeal}</h4>
  <h4 class="text-success fw-bold">Category is: ${myMeal[0].strCategory}</h4>
  
  <h4 class="text-warning fw-bold">Area is :${myMeal[0].strArea}</h4>
  <h4 class="fw-bold text-danger">Ingredients : </h4>
  <ul class="d-flex list-unstyled g-2">
  <li>${myMeal[0].strIngredient1}</li>
  <li>${myMeal[0].strIngredient2}</li>
  <li>${myMeal[0].strIngredient3}</li>
  <li>${myMeal[0].strIngredient4}</li>
  <li>${myMeal[0].strIngredient5}</li>
  <li>${myMeal[0].strIngredient6}</li>
  <li>${myMeal[0].strIngredient7}</li>
  <li>${myMeal[0].strIngredient8}</li>
</ul>
<div class="d-flex">
  <a href="${myMeal[0].strSource}" target="_blank" class="btn btn bg-success mx-2">Source</a>
  <a href="${myMeal[0].strYoutube}" target="_blank" class="btn btn bg-danger">Youtube</a>

</div>
 
  `
  
}
let myMeal =[]
async function getMealsById(rId){
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${rId}`);
    const finalResponse = await response.json();
    
    console.log(finalResponse.meals)
    myMeal = finalResponse.meals
    displayRecipes()

}

// search by firsr letter

const input2 = document.getElementById('input-2');
input2.addEventListener('input',function(){
   
    
        getMealByFirstLetter(input2.value);
        
        
       
     
 })

 async function getMealByFirstLetter(query){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`);
    const finalResponse = await response.json();
    data = finalResponse.meals
    console.log(data);
    displayMeals()
  

}

function clrInputs(){
    input1.value='';
    input2.value='';

}

// Category 

const categoryLink = document.getElementById('category');

const categoryPage = document.getElementById('category-page');


categoryLink.addEventListener('click',function(){
    categoryPage.classList.remove('d-none');
    searchInputs.classList.add('d-none');
    areaPage.classList.add('d-none');
    ingredientsPage.classList.add('d-none');
    contactPage.classList.add('d-none');
    rowData.classList.add('d-none');
    mealsByArea.classList.add('d-none');
    mealsByIngredients.classList.add('d-none');
    

    $('.side-nav-menue').animate({left:'-260px'},500);
    $('#open').fadeIn(0);
    $('#close').fadeOut(0);
    getCategory()
    


})
let categories=[]
async function getCategory(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const finalResponse = await response.json();
     categories = finalResponse.categories
    
    console.log(categories);
    displayCategory()
   
}
const categryDta = document.getElementById('categry-data')
function displayCategory(){
    let cols = '';
    for(let i = 0 ; i<categories.length ; i++){
        cols += `<div class="col-md-3 categore">
        <div class="inner position-relative overflow-hidden">
    
        
          <img src="${categories[i].strCategoryThumb}" alt="" class="w-100">
          <div class="layer position-absolute text-black categry-card">
          <h6 class="text-uppercase text-center">${categories[i].strCategory}</h6>
          <p>${categories[i].strCategoryDescription
          }</p>
          

          
        </div>
      </div>
          
      </div>`}

      categryDta.innerHTML = cols;
      const categore = document.querySelectorAll('.categore')
      console.log(categore)
      const card = document.querySelectorAll('.categry-card');
      for(let m = 0 ; m<card.length;m++){
        card[m].addEventListener('click',function(e){
         
          let x = e.currentTarget
          console.log(x.children[0].innerHTML);
        
        let currentCard = x.children[0].innerHTML;
        console.log(currentCard);
        getCategoryMeals(currentCard)

          
        })
       
  
      }


}
let categorieMeals=[]
async function getCategoryMeals(query){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
    const finalResponse = await response.json();
     categorieMeals = finalResponse.meals
    
    console.log(categorieMeals);
    displayMealsByCategory()
    categoryPage.classList.add('d-none');
   
}

const catMeals = document.getElementById('category-meals')

function displayMealsByCategory(){
    let cols = '';
    for(let i = 0 ; i<categorieMeals.length ; i++){
        cols += `<div class="col-md-3 ">
        <div class="inner position-relative overflow-hidden">
    
        
          <img src="${categorieMeals[i].strMealThumb}" alt="" class="w-100">
          <div class="layer position-absolute text-black">
          <h6 class="text-uppercase text-center">${categorieMeals[i].strMeal}</h6>
          <a href="#" class="btn bg-danger card-btn" id="view-recipe" data-bs-toggle="modal" data-bs-target="#exampleModal">view recipe</a>
        
          

          
        </div>
      </div>
          
      </div>`}

      catMeals.innerHTML = cols;
     


      const cardBtn = document.querySelectorAll('.card-btn');
      for(let i = 0 ; i<cardBtn.length;i++){
        cardBtn[i].addEventListener('click',function(e){
         
          let x = e.target
          console.log(x);
          let m = categorieMeals[i].idMeal;
          console.log(m)
        
         getMealsById(m)
          
        })
       
  
      }

}

// Area

const areaLink = document.getElementById('area');
const areaPage = document.getElementById('Area-page');
areaLink.addEventListener('click',function(){
    areaPage.classList.remove('d-none');
    categoryPage.classList.add('d-none');
    ingredientsPage.classList.add('d-none');
    searchInputs.classList.add('d-none');
    contactPage.classList.add('d-none');
    rowData.classList.add('d-none');
    categryDta.classList.add('d-none');
    mealsByIngredients.classList.add('d-none');
    $('.side-nav-menue').animate({left:'-260px'},500);
    $('#open').fadeIn(0);
    $('#close').fadeOut(0);
    getArea()
      
})
let areas = []
async function getArea(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    const finalResponse = await response.json();
     areas = finalResponse.meals
    
    console.log(areas);
    displayArea()
   
   
}

const areaData =document.getElementById('area-data')
function displayArea(){

    let cols = '';
    for(let i = 0 ; i<areas.length ; i++){
        cols += `<div class="col-md-3">
        <div class="area-content">
          <i class="fa-solid fa-house-laptop fa-4x "></i>
          <h3>${areas[i].strArea}</h3>
        </div>
       
      </div>`}

      areaData.innerHTML = cols;

      const araeContent = document.querySelectorAll('.area-content');
      for(let m = 0 ; m<araeContent.length;m++){
        araeContent[m].addEventListener('click',function(e){
         
          let x = e.currentTarget
          console.log(x.children[1].innerHTML);
          let currentArea = x.children[1].innerHTML
          getAreaMeals(currentArea)
        
       
        })
       
  
      }

}

let areaMeals=[]
async function getAreaMeals(query){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`)
    const finalResponse = await response.json();
     areaMeals = finalResponse.meals
    
    console.log(areaMeals);
    displayMealsByArea()
    areaPage.classList.add('d-none')
   
   
}


const mealsByArea = document.getElementById('area-meals')
function displayMealsByArea(){
    let cols = '';
    for(let i = 0 ; i<areaMeals.length ; i++){
        cols += `<div class="col-md-3 ">
        <div class="inner position-relative overflow-hidden">
    
        
          <img src="${areaMeals[i].strMealThumb}" alt="" class="w-100">
          <div class="layer position-absolute text-black">
          <h6 class="text-uppercase text-center">${areaMeals[i].strMeal}</h6>
          <a href="#" class="btn bg-danger card-btn" id="view-recipe" data-bs-toggle="modal" data-bs-target="#exampleModal">view recipe</a>
        
          

          
        </div>
      </div>
          
      </div>`}

      mealsByArea.innerHTML = cols;
      const cardBtn = document.querySelectorAll('.card-btn');
      for(let i = 0 ; i<cardBtn.length;i++){
        cardBtn[i].addEventListener('click',function(e){
         
          let x = e.target
          console.log(x);
          let m = areaMeals[i].idMeal;
          console.log(m)
        
         getMealsById(m)
          
        })
       
  
      }
    

}

// Ingredients

const ingredientsLink = document.getElementById('ingredients');
const ingredientsPage = document.getElementById('Ingredients-page');
ingredientsLink.addEventListener('click',function(){
    ingredientsPage.classList.remove('d-none');
    searchInputs.classList.add('d-none');
    categoryPage.classList.add('d-none');
    areaPage.classList.add('d-none');
    contactPage.classList.add('d-none');
    rowData.classList.add('d-none');
    categryDta.classList.add('d-none');
    mealsByArea.classList.add('d-none');
    $('.side-nav-menue').animate({left:'-260px'},500);
    $('#open').fadeIn(0);
    $('#close').fadeOut(0);
    getIngredient()
      
})

let ingredient = []
async function getIngredient(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    const finalResponse = await response.json();
     ingredient = finalResponse.meals
    
    console.log(ingredient);
    displayIngredients()
    
   
   
}

const ingredientData =document.getElementById('ingredient-Data')
function displayIngredients(){

    let cols = '';
    for(let i = 0 ; i<20 ; i++){
        cols += ` <div class="col-md-3 ingred-card">
        <div class="ingredient-content">
         <i class="fa-solid fa-drumstick-bite fa-4x py-2"></i>
         <h3>${ingredient[i].strIngredient}</h3>
         <p class="ing-parag py-2">${ingredient[i].strDescription}</p>
 
        </div>
       </div>`}

      ingredientData.innerHTML = cols;

      const ingredientContent = document.querySelectorAll('.ingredient-content');
      for(let m = 0 ; m<ingredientContent.length;m++){
        ingredientContent[m].addEventListener('click',function(e){
         
          let x = e.currentTarget
          console.log(x.children[1].innerHTML);
          let currentIngredient = x.children[1].innerHTML
          getMealsByIngredient(currentIngredient)
          
        
       
        })
       
  
      }

}

let ingredientMeals=[]
async function getMealsByIngredient(query){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
    const finalResponse = await response.json();
     ingredientMeals = finalResponse.meals
    
    console.log(ingredientMeals);
    displayMealsByIngredients();
    ingredientsPage.classList.add('d-none')
   
   
   
}

const mealsByIngredients = document.getElementById('meal-ingredients')
function displayMealsByIngredients(){
    let cols = '';
    for(let i = 0 ; i<ingredientMeals.length ; i++){
        cols += `<div class="col-md-3 ">
        <div class="inner position-relative overflow-hidden">
    
        
          <img src="${ingredientMeals[i].strMealThumb}" alt="" class="w-100">
          <div class="layer position-absolute text-black">
          <h6 class="text-uppercase text-center">${ingredientMeals[i].strMeal}</h6>
          <a href="#" class="btn bg-danger card-btn" id="view-recipe" data-bs-toggle="modal" data-bs-target="#exampleModal">view recipe</a>
        
          

          
        </div>
      </div>
          
      </div>`}

      mealsByIngredients.innerHTML = cols;
      const cardBtn = document.querySelectorAll('.card-btn');
      for(let i = 0 ; i<cardBtn.length;i++){
        cardBtn[i].addEventListener('click',function(e){
         
          let x = e.target
          console.log(x);
          let m = ingredientMeals[i].idMeal;
          console.log(m)
        
         getMealsById(m)
          
        })
       
  
      }

}



// contact
const contactLink = document.getElementById('contact');
const contactPage = document.getElementById('Contact-page');
contactLink.addEventListener('click',function(){
    contactPage.classList.remove('d-none');
    searchInputs.classList.add('d-none');
    categoryPage.classList.add('d-none');
    areaPage.classList.add('d-none');
    ingredientsPage.classList.add('d-none');
    rowData.classList.add('d-none');
    categryDta.classList.add('d-none');
    mealsByArea.classList.add('d-none');
    mealsByIngredients.classList.add('d-none');
    $('.side-nav-menue').animate({left:'-260px'},500);
    $('#open').fadeIn(0);
    $('#close').fadeOut(0);
})

const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const ageInput = document.getElementById('ageInput');
const passwordInput = document.getElementById('passwordInput');
const rePasswordInput = document.getElementById('rePasswordInput');
const form = document.getElementById('form');
const nameAlert = document.getElementById('nameAlert');
const emailAlert = document.getElementById('emailAlert');
const phoneAlert = document.getElementById('phoneAlert');
const ageAlert = document.getElementById('ageAlert');
const passwordAlert = document.getElementById('passwordAlert');
const repasswordAlert = document.getElementById('rePasswordAlert');
const submitBtn = document.getElementById('submitBtn');



nameInput.addEventListener('blur',function(e){
  if(nameInput.value =="" || validateNameInput()==false){
    e.preventDefault();
    nameAlert.classList.remove('d-none')
 
   }else{
     nameAlert.classList.add('d-none')
   }

chekAllInputs()
  
})
emailInput.addEventListener('blur',function(e){

  if(emailInput.value ==""|| validateEmailInput()==false){
    e.preventDefault();
    emailAlert.classList.remove('d-none')

   }else{
    emailAlert.classList.add('d-none')
   }
   chekAllInputs()

})
phoneInput.addEventListener('blur',function(e){
  if(phoneInput.value =="" || validatePhoneInput()==false){
    e.preventDefault();
    phoneAlert.classList.remove('d-none')

  }else{
    phoneAlert.classList.add('d-none')

  }
  chekAllInputs()

})
ageInput.addEventListener('blur',function(e){
  if(ageInput.value ==""|| validateAgeInput()==false){
    e.preventDefault();
    ageAlert.classList.remove('d-none')
    

  }else{
    ageAlert.classList.add('d-none')

  }
  chekAllInputs()

})
passwordInput.addEventListener('blur',function(e){
  if(passwordInput.value ==""|| validatePasswordInput()==false){
    e.preventDefault();
    passwordAlert.classList.remove('d-none')

  }else{
    passwordAlert.classList.add('d-none')

  }
  chekAllInputs()

})
rePasswordInput.addEventListener('blur',function(e){
  if(rePasswordInput.value ==""|| validaterePasswordInput()==false){
    e.preventDefault();
    repasswordAlert.classList.remove('d-none')

  }else{
    repasswordAlert.classList.add('d-none')

  }
  chekAllInputs()

})

function chekAllInputs(){
  let status = !(validateNameInput()&&validateEmailInput()&&validatePasswordInput()&&validatePhoneInput&&validateAgeInput()&&validaterePasswordInput())
  if(status==true){
    submitBtn.disabled = true

  }else{
    submitBtn.disabled = false
  }
}


function validateNameInput(){
  let regex = /^[A-Z][a-z]{3,8}$/
  return regex.test(nameInput.value)

}

function validateEmailInput(){
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(emailInput.value)

}
function validatePhoneInput(){
  let regex = /^(010|011|012|015)[0-9]{8}$/;
  return regex.test(phoneInput.value)

}
function validateAgeInput(){
  let regex = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/;
  return regex.test(ageInput.value)

}
function validatePasswordInput(){
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(passwordInput.value)

}
function validaterePasswordInput(){
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(rePasswordInput.value)

}































