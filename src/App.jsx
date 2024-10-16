import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Todo } from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'



function App() {
  const actors = ["Sakib Khan", "Salman Khan", "Shoriful Raj", "Rubel"];

  const singers = [
    {name:"Hero Alom", age: 35, id: 1},
    {name:"Dr Mahfuz", age: 72, id: 2},
    {name:"Runa Layla", age: 70, id: 3},
  ]

  const books = [
    {id: 1, name: "Physics", price: 320},
    {id: 2, name: "Chemistry", price: 320},
    {id: 3, name: "Bangla", price: 120},
    {id: 4, name: "English", price: 400}
  ]

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <BookStore books={books}></BookStore>
      {/* {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}



      {/* <Todo task="Learn ReactJS" isDone={true}></Todo>
      <Todo task="Explore core concept" isDone={false} ></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <MyInfo></MyInfo> */}
      {/* <MyFriend></MyFriend>
      <MyFamily></MyFamily>
      <Products name='Laptop' quantity='50'></Products>
      <Products name='Mobile' quantity='25'></Products>
      <Products name='Mouse' quantity='100'></Products>
      <Products name='Monitor' quantity='11'></Products>
      <Student grade="10" result="4.45"></Student>
      <Student grade="12" result="3.83"></Student>
      <Student grade="12" result="5.00"></Student> */}
    
      
    </>
  )
}

function MyInfo (){
  const name = 'Abu Bokkor';
  const age = 26;
  const address = 'Dhaka';

  return (
    <div className='custom-class'>
      <h3>My name is {name} </h3>
      <p>I am {age} years old</p>
      <p>I live in {address}</p>
    </div>
  )
}

function MyFriend () {
  const friends = {
    friend1: "Sakil",
    friend2: 'Alamin'
  }
  return (
    <>
    <h3>my friends are {friends.friend1} and {friends.friend2}</h3>
    </>
  )
}

function MyFamily () {
  const familyStyle = {
    margin: '5px',
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "10px",
    backgroundColor: 'gray'
  }

  return (
    <div style={familyStyle}>
      <p>My Family member is 5</p>
      <p>i have two little sisters</p>
    </div>
  )
}

// const {} = {
//   "name": "Laptop",
//   "quantity": "50"
// }
function Products (props) {
  const productStyle = {
    padding: '10px',
    border: '2px solid brown',
    borderRadius: '10px',
    margin: '5px'
  }
  // console.log(props);
  return (
    <div style={productStyle}>
      <h4>Product Name: {props.name}, Quantity: {props.quantity}</h4>
    </div>
  )
}


const {grade, result} = {grade: '12', result: '3.83'}
function Student ({grade, result}) {
  console.log(grade, result);
  return (
    <div className='custom-class'>
      <h4>This is a student</h4>
      <p>Class: {grade} </p>
      <p>Result: {result}</p>
    </div>
  )
}

export default App
