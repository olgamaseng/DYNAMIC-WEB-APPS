const MAX_NUMBER =15
const MIN_NUMBER = -5
const STEP_AMOUNT = 5 


const number = document.querySelector('[data-keys="number"]')
const subtract =document.querySelector('[data-keys="subtract"]')
const add =document.querySelector('[data-keys="add"]')
const reset =document.querySelector('[data-keys="reset"]')



const subtractHandler= () =>{
   const newValue = parseInt(number.value) - 1
   number.value = newValue

   if(add.disabled ===true)  {
      add.disabled = false
   }

   if (newValue <= MIN_NUMBER) { 
    subtract.disabled = true
 } 
}

const addhandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue

    if (subtract.disabled ===true) { 
        subtract.disabled = false
     } 

    if (newValue >= MAX_NUMBER) { 
       add.disabled = true
    } 

    }

    const resetHandler = () => {
    
      if(number.value) {
      number.value = 0
      window.alert('counter has been reset')
    }
      }
 


subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addhandler)
reset.addEventListener('click', resetHandler)