import { useEffect, useState } from 'react'
import NavBar from './Component/navbar'
import './App.css';
import './Style/style.scss'
import Post from './Component/post'


function App() {
  // const [count , setCount] = useState(0)
  // const [todos, setTodo] = useState([{ text: 'Learn Hooks '}]);

//  useEffect(() => {
//    document.title = `You clicked ${count} times`;
//  },[count]);
 //NOTE:  the [count] here allows the re-run of the effect only if the count changes
   

  //  useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //  })
 
  return (
    <div className="App">
      {/* <button onClick = {() => setCount(count + 1)}>
        Increment
      </button> */}
      <NavBar/>
      <Post/>
    </div>
  );
}

export default App;


