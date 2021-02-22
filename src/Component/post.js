import React, { useState, useEffect } from 'react'

const  Post = () => {
	const [posts, setPost] = useState([])

	const getPost = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
		.then(data => {
			const postData = data.slice(0,10)
		//	console.log(postData)
			setPost(postData)
			
		})
		.catch(error => console.log(error.message))
	}

  useEffect(() => {
		getPost()
	},[])
	
	
	 

	return (
		<div>
		 <div className = "heading">
		   <p>Post</p>
		 </div>
		 <div className = "table">
		  <table>
			  <thead>
					<tr>
						<th>Id</th>
						<th>Title</th> 
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>my name,my name is isaac,my name is isaac</td> 
						<td> my name is isaac,my name is isaac,my name is isaac,my name is isaac,my name is isaac,my name is isaac,my name is isaac</td>
					</tr>
				</tbody>
			</table>
		 </div>	
		 <div className = "loading"></div>
		</div>
	)
}

export default Post