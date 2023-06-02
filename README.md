``` THIS PROJECT WAS DONE FOR AN INTERVIEW ```

# Getting Started with Create React App
# THEORY OF REACT.JS

React is a JavaScript library used to build user interfaces (UI) for web applications. One of the key features of React is its `virtual DOM` (Document Object Model), which is a representation of the actual DOM that allows React to automatically update and render UI components when there are changes. These UI components that can be reused across pages and web applications is a benefit for developers as they are easier to maintain and can be composed to build a larger and scalable application. 
Also, it uses declarative programing and `JSX` that is a syntax extension for JavaScript that allows developers to write `HTML-like code` within their JavaScript code. For example:

```
    function HelloWorld() {

        return (
            <div>Hello World!</div>
        )
    }
```
Also you can use `Array Methods` to display `HTML-like code`:

```
import React from 'react'

function DisplayList() {

    const pets = [
        { name: "Fluffy", type: "cat"},
        { name: "Max", type: "dog"},
        { name: "Nibbles", type: "hamster"},
        { name: "Buddy", type: "dog"},
        { name: "Sassy", type: "cat"}
      ];
      
  return (
    <div>
        <p>Since I was 5 until I left my parents house I had 5 pets</p>
        <p>Let me introduce them: </p>
        {pets.map(pet => {
            return(
                <ul>
                    <li>{pet.name} was a {pet.type}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default DisplayList
```

Furthermore, React uses a one-way data binding model, where data flows in on direction from parent component to children. “Props”, short for properties, are used for data that is passed from parent component to its children, they are read-only and cannot be modified by the component itself. 
The way to manage data that can be changed within a component is using ‘State’. When the state of a component changes, React automatically re-renders the component and its child components to reflect the new state. Finally, to manage state in a centralize and predictable way we can use a state management library like Redux. Redux provides a global store that holds the application state which can be accessed by any component in the application. In addition, another way to manage a ‘global state or context’ and to share data across components even when they are not directly related and without having to pass props down is using Context. 

As the number of components and views start growing, a popular routing library for React.js is React Router that allows developers to add dynamic routing and users can navigate through different views without having to change the URL in the address bar.  

One great evolution of React.js is the switch from class components to functional components. Functional components implemented through React Hooks provide a way to use state and other React features in a way code is more concise and easier to reason about. 
Within the different components available in React, higher-order components (HOC) are useful as they allow you to reuse code across different components and avoid duplication. HOC are functions that take a component and returns a new component with more functionality. For example, can be used to wrap components that require authentication to access, to fetch data from an API and pass it down as props to the wrapped component, or/and can be used to add or pass CSS styles to a component.

An example of functional components is: 

```
import React, { useState } from 'react'

function Form() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <form>
        <label for='name'>
          <input type='email' name='email' id='email' placeholder='Email' 
            value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label for='name'>
          <input type='password' name='password' id='password' placeholder='Password' 
            value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
    </form>
  )
}

export default Form
```
This App is build with `REACT HOOKS` and using `Firebase functions` and `Firebase Hosting`. 
`React-Redux` is used to manage global state and `React-Router` to navigate between different views. 

To view the app go to [DOOSE](https://doose-manager.web.app/)

It's a simple app to add and edit To Dos and Task Management

![](https://res.cloudinary.com/dgamncxcz/image/upload/v1683807731/Screen_Shot_2023-05-11_at_13.21.31_hvjahu.png)


Finally, React has two different approaches to rendering a web page. In server-side rendering the HTML is generated on the server and sent to the clients as a complete document, along with the CSS and JavaScript files. The initial page load is faster as the browser doesn't need to wait for JavaScript to download and execute before rendering the page. However, server-side rendering can be slower for subsequent navigation within the application, as it requires a full page refresh each time the user navigates to a new page. 
On the other hand, in client-side rendering, the HTML, CSS, and JavaScript are downloaded to the client's browser, and the JavaScript code is responsible for rendering the page, this can result in a slower load of the initial page. Subsequent navigation within the application is faster because only the necessary data is fetched from the server, and the page doesn't need to be fully refreshed.
In conclusion, client-side rendering is preferable for dynamic web applications with significant interactivity and server-side rendering is better for static websites or websites with relatively minimal interactivity.
When the web page becomes too big there some ways to optimize the performance of the application. Some common approaches are:

1.	React.memo to prevent re-rendering when props or state haven’t change
2.	Use asynchronous rendering with React.lazy and Suspense: React.lazy and Suspense allow you to lazily load components and data, improving the initial load time of your application. 
3.	Optimize network requests with caching and lazy loading: You can optimize network requests by implementing caching and lazy loading.


The last project using React Hooks I worked on was a Social Media App that target manly gamers or anyone that wanted to participate. Users could upload post, comment, like, unlike, share, create share interest groups and connect. One of the main challenges I faced was to make every data of the logged user available in vast number of components that were not directly related. I manage this creating a Context with all the user information. And making API calls in a HOC to then pass the data to its children components. Another issue was to see possibility to see a dynamic update of the post when making a new post or editing an existing. I approach this issue using Redux to manage each post. 
A bigger issue was maintaining a good communication with the team and making sure that we were all working under the same line and using the same logic. Code organization was the first thing we worked on, naming conventions for components, functions, variables and for styling. Also, commenting and explaining code so other developers would understand what each one was working on, and making it easier to understand for the testing team. 
