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
							<th>S/N</th>
							<th>Title</th> 
							<th>completed</th>
						</tr>
					</thead>
					{todos.map((post) => 
					(<tbody key = {post.id}>
						<tr>
							<td>{post.id}</td>
							<td>{post.title}</td> 
							{post.completed? 
							<td> Completed</td> : 
							<td> Not completed</td>
							}	
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
