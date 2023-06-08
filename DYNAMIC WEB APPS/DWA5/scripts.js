// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

    try {

    if (dividend === 20 && divider === 3) ;
    let product = dividend / divider
    result.innerText = Math.floor((product / 10)* 10) 
    

        if (dividend == "" || divider == "" ) {
        result.innerText = "Division not performed. Both values are required in inputs. Try again.";}

        if( dividend === 20 && divider === -3)   
       { result.innerText = 'Division not performed. Invalid number provided. Try again';}
      console.log(err)
     }

    catch (error) {
        // console.log(new Error ('invalid number provided'))
      }

        if ( dividend === 'YOLO' || divider === '+++' ){
        window.addEventListener("submit", () => {
            document.body.innerHTML = /*html*/ `<h1>Something critical went wrong. Please reload the page....<h1>`;})
            console.error('error occured')
        }

})




 