import React  from 'react'

const  Post = (props) => {
	const {query, posts} = props 
	return (
		<div>	
    <div>
			<div className = "heading">
				<p>{query}</p>	 
			</div>
			<div className = "table">
			<div>
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Title</th> 
							<th>Body</th>
						</tr>
					</thead>
					{posts.map((post) => 
					(<tbody key = {post.id}>
						<tr>
							<td>{post.id}</td>
							<td>{post.title}</td> 
							<td> {post.body}</td>
						</tr>
					</tbody>)
				)}
				</table>
				</div> 
			</div>	
		</div>
		</div>
	)
}

export default Post

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }