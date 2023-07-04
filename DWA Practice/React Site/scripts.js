// ReactDOM.render(<h1>Hello,everyone!</h1>, document.getElementById("root"))


// ReactDOM.render(<h2>Hi, my name is Olga!</h2>, document.getElementById("root"))

// ReactDOM.render(<ul>
//     <li>Olga</li>
//     <li>Boity</li>
// </ul>,document.getElementById("root"))



// function mainContent() {
//     return (<h1>I'am learning React!</h1>)
// }
  
// ReactDOM.render(<div>
//     <Navbar />
//     <mainContent />
// </div>, getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent = "What an amazing way to learn React"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSx</h1>
// console.log(element)



// ReactDOM.render(element, document.getElementById("root"))

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)
// ReactDOM.render(
//    page ,
//     document.getElementById("root")
// )

const navbar = (
    <nav>
        <h1>Angel-O's</h1>
        <ul>
            <li>
                Pricing
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
)

ReactDOM.render(navbar,document.getElementById("root"))

