//import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//create a react component
const App = function () {
    const buttonText ={text:'Click me'};
    return (
        <div>
            <label className="label" htmlFor="name" >
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonText.text}
            </button>
            
        </div>
    )
}

//Take the react component and show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);