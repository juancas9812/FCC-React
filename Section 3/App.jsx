import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

// const App = () => {
//   function handleClick() {
//     console.log("I was clicked!")
//   }
//   function handleOver() {
//     console.log("I was over!")
//   }
//   function handleEnter() {
//     console.log("I entered")
//   }

//   return (
//     <main className="container">
//       <img
//         src="https://picsum.photos/640/360"
//         alt="Placeholder image from Picsum"
//         // onMouseOver={handleOver}
//         onMouseEnter={handleEnter}
//       />
//       <button onClick={handleClick}>Click me</button>
//     </main>
//   )
// }

// import { useState } from "react";

// const App = () => {
//   const [isImportant, setIsImportant] = useState("Yes");

//   const handleClick = () => {
//     setIsImportant("Definitely");
//   }

//   return(
//     <main>
//       <h1 className="title">Is state important to know?</h1>
//       <button className="value" onClick={handleClick}>{isImportant}</button>
//     </main>
//   )
// }


// import React from "react";

// const App = () => {
//   const [count, setCount] = React.useState(0);

//   const add = () => {
//     setCount(prevCount => prevCount + 1);
//   }

//   const subtract = () => {
//     setCount(prevCount => prevCount -1 );
//   }

//   return (
//     <main className="container">
//       <h1>How many times will Bob say "state" in this section?</h1>
//       <div className="counter">
//         <button className= "minus" aria-label="Decrease count" onClick={subtract}>-</button>
//         <h2 className="count">{count}</h2>
//         <button className="plus" aria-label="IncreaseCount" onClick={add}>+</button>
//       </div>
//     </main>
//   )
// }

// import { useState } from "react";

// const App = () => {
//   const [isGoingOut, setIsGoingOut] = useState(true);

//   return (
//     <main className="container">
//       <h1>Do I feel like going out tonight?</h1>
//       <div className="counter">
//         <h2 className="count">{isGoingOut ? "Yes" : "No"}</h2>
//       </div>
//     </main>
//   )
// }



// import { useState } from "react";

// const App = () => {
//   const [isGoingOut, setIsGoingOut] = useState(true);

//   const flipAnswer = () => {
//     setIsGoingOut(prevGoingOut => !prevGoingOut)
//   }

//   return (
//     <main className="container">
//       <h1>Do I feel like going out tonight?</h1>
//       <div className="counter">
//         <button 
//           className="count"
//           onClick={flipAnswer}
//           aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it`}
//         >
//           {isGoingOut ? "Yes" : "No"}
//         </button>
//       </div>
//     </main>
//   )
// }



// import { useState } from "react";

// const App = () => {
//   // const myFavoriteThings = [];
//   const [myFavoriteThings, setMyFavoriteThings] = useState([]);
//   const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
//   "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"];
//   const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

//   function addFavoriteThing() {
//     setMyFavoriteThings(
//       prevFavThings => [
//         ...prevFavThings, 
//         allFavoriteThings[prevFavThings.length]
//       ]
//     )
//   }

//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">
//         {thingsElements}
//       </section>
//     </main>
//   )
// }

// import React from "react"
// import avatar from "./images/user.png"
// import starFilled from "./images/star-filled.png"
// import starEmpty from "./images/star-empty.png"

// const App = () => {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (212) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false
//   })

//   let starIcon = contact.isFavorite ? starFilled : starEmpty;
//   let starLabel = contact.isFavorite ? "Remove from favorires" : "Add to favorites";
//   let starAlt = contact.isFavorite ? "filled star icon" : "empty star icon";

//   function toggleFavorite() {
//     setContact(prevContact => {
//       return {
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite
//       }
//     })
//   }

//   return (
//     <main>
//       <article className="card">
//         <img
//           src={avatar}
//           className="avatar"
//           alt={`User profile picture of ${contact.firstName} ${contact.lastName}`}
//         />
//         <div className="info">
//           <button
//             onClick={toggleFavorite}
//             aria-pressed={contact.isFavorite}
//             aria-label={starLabel}
//             className="favorite-button"
//           >
//             <img
//               src={starIcon}
//               alt={starAlt}
//               className="favorite"
//             />
//           </button>
//           <h2 className="name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="contact">{contact.phone}</p>
//           <p className="contact">{contact.email}</p>
//         </div>

//       </article>
//     </main>
//   )
// }


// const App = () => {

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formElement = event.currentTarget;
//     const formData = new FormData(formElement);
//     const email = formData.get("email");
//     console.log(email);
//     formElement.reset();
//   }
//   // const signUp = (formData) => {
//   //   const email = formData.get("email");
//   //   const password = formData.get("password");
//   //   const description = formData.get("description");
//   //   const employmentStatus = formData.get("employmentStatus");
//   //   const dietaryRestrictions = formData.getAll("dietaryRestrictions");
//   //   const favColor = formData.get("favColor");
//   //   console.log(email);
//   //   console.log(password);
//   //   console.log(description);
//   //   console.log(employmentStatus);
//   //   console.log(dietaryRestrictions);
//   //   console.log(favColor);
//   // }
//   const signUp = (formData) => {
//     const data = Object.fromEntries(formData);
//     const dietaryRestrictions = formData.getAll("dietaryRestrictions");
//     console.log(data);
//     console.log(dietaryRestrictions );
//     const allData = {
//       ...data,
//       dietaryRestrictions
//     }
//     console.log(allData);
//   }

//   return (
//     <section>
//       <h1>Signup form</h1>
//       {/* <form onSubmit={handleSubmit} method="post"> */}
//         <form action={signUp}>
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" placeholder="joe@shnmoe.com" defaultValue="joe@schmoe.com" />
//         <br />
//         <label htmlFor="password">Password:</label>
//         <input id="password" type="password" name="password" defaultValue="1324354678" />
//         <br />
//         <label htmlFor="description">Description:</label>
//         <textarea id="description" name="description" defaultValue="This is a description"></textarea>
//         <fieldset>
//           <legend>Employment Status:</legend>
//           <label>
//             <input type="radio" name="employmentStatus" value="unemployed"/>
//             Unemployed
//           </label>
//           <label>
//             <input type="radio" name="employmentStatus" value="part-time"/>
//             Part-time
//           </label>
//           <label>
//             <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time"/>
//             Full-time
//           </label>
//         </fieldset>
//         <fieldset>
//           <legend>Dietary restrictions</legend>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
//             Kosher
//           </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
//             Vegan
//           </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free"/>
//             Gluten-free
//           </label>
//         </fieldset>
//         <label htmlFor="favColor">What is your favorite color</label>
//         <select id="favColor" name="favColor" defaultValue="blue">
//           <option value="" disabled>-- Choose a color --</option>
//           <option value="red">Red</option>
//           <option value="orange">Orange</option>
//           <option value="yellow">Yellow</option>
//           <option value="green">Green</option>
//           <option value="blue">Blue</option>
//           <option value="indigo">Indigo</option>
//           <option value="violet">Violet</option>
//         </select>
//         <button>Submit</button>
//       </form>
//     </section>
//   )
// }

// import jokesData from "./data/jokesData"
// import Joke from "./components/Joke"

// const App = () => {
//   const jokeElements = jokesData.map((joke) => {
//     return <Joke setup={joke.setup} punchline={joke.punchline} />
//   })
//   return (
//     <main>
//       {jokeElements}
//     </main>
//   )
// }


// import React from "react";

// const App = () => {
//   const [messages, setMessages] = React.useState(["a", "b"]);

//   function determineText() {
//     if (messages.length === 0) {
//       return "You're all caught up!"
//     } else if (messages.length === 1) {
//       return "You have 1 unread message"
//     } else {
//       return `You have ${messages.length} unread messages`
//     }
//   }

//   return (
//     <div>
//       <h1>{determineText()}</h1>
//     </div>
//   )
// }




////////////////
// Counter pt2 
////////////////
 
// import React from "react";
// import Count from "./components/Count";

// const App = () => {
//   const [count, setCount] = React.useState(0);

//   const add = () => {
//     setCount(prevCount => prevCount + 1);
//   }

//   const subtract = () => {
//     setCount(prevCount => prevCount -1 );
//   }

//   return (
//     <main className="container">
//       <div className="counter">
//         <button className= "minus" aria-label="Decrease count" onClick={subtract}>-</button>
//         {/* <h2 className="count">{count}</h2> */}
//         <Count number={count} />
//         <button className="plus" aria-label="IncreaseCount" onClick={add}>+</button>
//       </div>
//     </main>
//   )
// }





////////////////
// Contact pt2 
////////////////

// import React from "react"
// import avatar from "./images/user.png"
// import Star from "./components/Star";

// const App = () => {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (212) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false
//   })

//   function toggleFavorite() {
//     setContact(prevContact => {
//       return {
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite
//       }
//     })
//   }

//   return (
//     <main>
//       <article className="card">
//         <img
//           src={avatar}
//           className="avatar"
//           alt={`User profile picture of ${contact.firstName} ${contact.lastName}`}
//         />
//         <div className="info">
//           <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
//           <h2 className="name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="contact">{contact.phone}</p>
//           <p className="contact">{contact.email}</p>
//         </div>

//       </article>
//     </main>
//   )
// }


// import React from "react"
// import Header from "./components/Header"
// import Body from "./components/Body"

// function App() {
//   const [userName, setUserName] = React.useState("Joe");

//   return (
//     <main>
//       <Header userName={userName}/>
//       <Body userName={userName}/>
//     </main>
//   )
// }



/////////////////
// Sound pads
/////////////////
// import pads from "./data/pads"
// import { useState } from "react";
// import Pad from "./components/Pad";


// const App = ({darkmode}) => {
//   const [soundPads, setSoundPads] = useState(pads);

//   const toggle = (id) => {
//     setSoundPads(prevSoundPads => prevSoundPads.map((item) => {
//       return item.id === id ? {...item, on: !item.on} : item
//     }))
//   }

//   const buttonElements = soundPads.map(pad => (
//     <Pad backgroundColor={pad.color} id={pad.id} key={pad.id} isOn={pad.on} toggle={toggle}/>
//   ))


//   return (
//     <main>
//       <div className="pad-container">
//         {buttonElements}
//       </div>
//     </main>
//   )
// }


export default App;