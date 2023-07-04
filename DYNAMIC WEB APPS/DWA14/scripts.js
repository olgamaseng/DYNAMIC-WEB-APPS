import{LitElement, html,css} from "./lit.html.js";

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

class TallyApp extends LitElement{
    static styles = css`
    :host {
      -color-green: #31C48D;
      -color-white: #fff;
      -color-dark-grey: #333d;
      -color-medium-grey: #424250;
      -color-light-grey: #8D97A7;
    }
    * {
      box-sizing: border-box;
    }
    html {
      height: 100vh;
    }
    body {
      margin: 0;
      background: var(--color-medium-grey);
      color: var(--color-white);
      font-family:  Arial, Helvetica, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    /* header */
    .header {
      text-align: center;
    }
    .header__title {
      font-size: 3rem;
      font-weight: 900;
      color: var(--color-light--grey);
    }
    /* controls */
    .controls {
      background: yellow;
    }
    /* counter */
    .counter {
      background: var(--color-dark-grey);
    }
    .counter__value {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 6rem;
      font-weight: 900;
      background: none;
      color: var(--color-white);
      border-width: 0;
      border-bottom: 1px solid var(--color-light--grey);
    }
    .counter__actions {
      display: flex;
    }
    .counter__button {
      background: none;
      width: 50%;
      border: 0;
      color: var(--color-white);
      font-size: 3rem;
      height: 10rem;
      border-bottom: 1px solid var(--color-light--grey);
      transition: transform 0.3s;
      transform: translateY(0);
    }
    .counter__button:disabled {
      opacity: 0.2;
    }
    .counter__button:active {
      background: var(--color-medium-grey);
      transform: translateY(2%);
    }
    .counter__button_first {
      border-right: 1px solid var(--color-light--grey);
    }
    .footer {
      background: var(--color-dark-grey);
      color: var(--color-light--grey);
      padding: 2rem;
      font-size: 0.8rem;
      text-align: center;
    }
    .footer__link {
      color: var(--color-white);
    }
  `;
    constructor(){
        super();
        this.value = 0;
    

    }

    // handleIncrement(){
    //     this.value += STEP_AMOUNT;
    //     if (this.value >= MAX_NUMBER) {
    //         this.value = MAX_NUMBER;
    //     if (this.count < this.constructor.constraints.MAX_COUNT) {
    //         this.count++;
    //       }
    //     this.requestUpdate()
    //     console.log(this.value)
    // }

    handleIncrement() {
        if (this.value < MAX_NUMBER) {
          this.value += STEP_AMOUNT;
          if (this.value >= MAX_NUMBER) {
            this.value = MAX_NUMBER;
            this.state = 'Maximum Reached';
          } else {
            this.state = 'Normal';
          }
          this.requestUpdate();
          console.log(this.value);
        }
      }
    
    // handleDecrement(){
    //     // this.value -= STEP_AMOUNT;
    //     // if (this.value <= MIN_NUMBER) {
    //     //     this.value = MIN_NUMBER;
    //         if (this.count > this.constructor.constraints.MIN_COUNT) {
    //             this.count--;
    //       }
    //     this.requestUpdate()
    //     console.log(this.value)
    // }

    handleDecrement() {
        if (this.value > MIN_NUMBER) {
          this.value -= STEP_AMOUNT;
          if (this.value <= MIN_NUMBER) {
            this.value = MIN_NUMBER;
            this.state = 'Minimum Reached';
          } else {
            this.state = 'Normal';
          }
          this.requestUpdate();
          console.log(this.value);
        }
      }
    

   render(){
    return html `
    <h1> Tally App </h1> 
    <p>${this.state}</p>
    <button @click= "${this.handleIncrement}"> Add </button>
    ${this.value} 
    <button @click= "${this.handleDecrement}"> minus </button>`;
   } 
}

window.customElements.define("tally-app", TallyApp)


