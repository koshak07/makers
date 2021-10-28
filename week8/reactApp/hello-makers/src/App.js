import './App.css';
import React from 'react';
import Greet from './components/greet/greet';


// function App() {

// // return React.createElement(
// // 'div', 
// // {id: 'makers', className: 'Bootcamp'}, //передача атрибутов (2-й по счету)
// // React.createElement('h1', null, 'Makers Bootcamp'))

// // return (
// //   <div>
// //     <button className="btn"></button>
// //   </div>
// // )
  
// }



const App = () => {
  const getData = (value)=>{
    console.log(value);
  }
  return (
    <div>
     
      <Greet getData={getData}/>
    </div>
  );
};



export default App;
