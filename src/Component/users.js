import React from 'react'

 const users = (props) =>  {
	 const {query, users } = props
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
							<th>Name</th> 
							<th>Email</th>
							<th>Website</th>
						</tr>
					</thead>
					{users.map((post) => 
					(<tbody key = {post.id}>
						<tr>
							<td>{post.id}</td>
							<td>{post.name}</td> 
							<td> {post.email}</td>
							{}
							<td><a href = {'https://www.' + post.website} target="_top">{post.website}</a></td>
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

export default users
