// const dog = () => {
//     const  sound = 'woof'
//     return {
//         talk: () => console.log(sound.toUpperCase())
//     }
// }

// const sniffles = dog()
// sniffles.talk()

// // let user = {

// //     firstName: "",
// //     lastName: "",
// //     set first(value){
// //         this.firstName = value.toUpperCase();
// //     },
// //     set last(value){
// //         this.lastName = value.toUpperCase();
// //     },
// //     fullName: function() {
// //         return this.firstName+" " + this.lastName;
// //     }
// // };

// // user.first = "Spongebob";
// // user.last = "Squarepants";

// // console.log(user.fullName())

// // class User {

// //     constructor(first, last){
// //         this.first = first;
// //         this.last = last;
// //     }

// //         set first(value){
// //             this.firstName = value.toUpperCase();
// //         }
// //         set last(value){
// //             this.lastName = value.toUpperCase();
// //         }
// //         get fullName() {
// //             return this.firstName+" " + this.lastName;
// //         }
// //     };

// //     let user = new User("Spongebob", "Squarepants");
    
// //     console.log(user.fullName);

// //Challenge 2.1

//     /* This is the firstname of the user */

// const user = 'John';


// /* This is the lastname of the user */
// const surname = 'Smith';


// console.log(user, surname)

// //Challenge 2.2

// /** (c) ACME Inc. 2010 */

// /*
//  * This is the date that a user created their account 
//  */
// //const date = '10/07/2014'

// console.log(date)

// //Challenge 2.3

// /*It is important to show the following message in order to:
// - to assure users
// - to scare hackers
// - to impress investors
// */

// console.warn('Security scan starting')

// /* It is important to let user know when they can close the page  */

// console.info('Please wait for scan to complete before closing the browser.')

//challenge 4.3

// let date = 2050
// let status = 'parent'
// let count = 0

// if (date = 2050) {
// 	console.log("January", 'New Year’s Day')
// 	console.log("March", 'Human Rights Day')
// 	let date = 'April'
// 	console.log(date, 'Family Day')
// 	console.log(date, 'Freedom Day')
// 	count = count + 3

// 	if (status = "student") {
// 	  console.log('June', 'Youth Day')
// 		 count = count + 1
//   }

// 	console.log('August', 'Women’s Day')
// 	console.log('September', 'Heritage Day')
// 	date = 'December'
// 	console.log(date, 'Day of Reconciliation')
// 	count = count + 3

// 	if (status = "parent") {
// 	  console.log(date, 'Christmas Day')
// 		count = count + 1
//   }

// 	console.log(date, 'Day of Goodwill')
// 	 count = count + 1
// }

// console.log('Your status is:', status)
// console.log('The year is:', date)
// console.log('The total holidays is:', count)

const flyable = {
    isFlying: false,

    liftOff: () => {
        this.isFlying = true
    },

    land: () => {
        this.isFlying = false
    },
};

const metal = {
    material: 'hard',
    tap: () => console.log('clang clang'),
};

const feathers = {
    material: 'soft',
    tap: () => console.log('shhhhhhh shhhhhh'),
};

const airplane = {
    ...flyable,
    ...metal,
}

const duck = {
    ...flyable,
    ...feathers,
};

airplane.liftOff();
airplane.tap();  //Clang clang clang

duck.liftOff();
duck.land();
duck.land();
duck.tap();  // poke poke

