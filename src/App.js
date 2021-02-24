import { useEffect, useState } from 'react'
// import NavBar from './Component/navbar'
import './App.css';
import './Style/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faEllipsisV}  from '@fortawesome/free-solid-svg-icons'
import Posts from './Component/posts'
import Todos from './Component/todos'
import Users from './Component/users'



function App() {
  const [detailsVisible, setDetailsVisible] = useState(false)
  const [query, setQuery] = useState('Posts')
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const getPost = () => {
		setTimeout(() => {
			fetch(`https://jsonplaceholder.typicode.com/${query}`)
				.then(response => response.json())
				.then(data => {
					const postData = data.slice(0,5)
					setPosts(postData)	
					setLoading()
				})
			.catch(error => console.log(error))
	  })
	}


	
  useEffect(() => {
		setLoading(true)
		getPost()	
	},[query])



  return (
    <div className="App">
      <div>
        <div className ="navBar">
          <div className = "left">
            <p>React Hooks</p>
          </div>
          <div className = "right">
            <FontAwesomeIcon icon={faEllipsisV}
            onClick= {() => setDetailsVisible(!detailsVisible)}
            />	
          </div> 	
        </div>
        {detailsVisible? 
        <div>
          <div className = "modal-background" onClick = {() => setDetailsVisible()}>
          </div>
          <div className = "navDetails">
            <p onClick = {() => setQuery('Posts')}>Posts</p>
            <p onClick = {() => setQuery('Todos')}>Todos</p>
            <p onClick = {() => setQuery('Users')}>Users</p>
          </div> 
        </div>: '' }	
      </div>
      {loading? 
				<div className = "loading"></div> : ''
			}
      {(() => {
        switch (query) {
          /* case 'Posts':
          return (
            <Posts query = {query} posts = {posts}/>
          );
          break; */
          case 'Todos':
          return  (
            <Todos query = {query} todos = {posts}/>
          );
          break;
          case 'Users':
          return  (
            <Users query = {query} users = {posts}/>
          );  
          default:
          return (
            <Posts query = {query} posts = {posts}/>
          )
        }
      })()}
    </div>
  );
}

export default App;


