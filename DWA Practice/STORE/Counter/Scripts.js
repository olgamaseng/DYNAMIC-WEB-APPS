import{LitElement, html} from "./lit.html.js";

class appCounter extends LitElement {
    constructor(){
        super();
        this.value = 0;
    }

    handleIncrement(){
        this.value += 1;
        this.requestUpdate()
        console.log(this.value)
    }

    
    handleDecrement(){
        this.value -= 1;
        this.requestUpdate()
        console.log(this.value)
    }

    

   render(){
    return html `<h1> Counter ${this.value} </h1>
    <button @click= "${this.handleIncrement}"> Add </button>
    <button @click= "${this.handleDecrement}"> minus </button>`;
   } 
}

window.customElements.define("app-counter", appCounter)