import React from 'react'

const  todos = (props) => {
	const {query, todos} = props
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
					{todos.map((post) => 
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

export default todos
