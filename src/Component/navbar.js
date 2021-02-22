import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faCoffee, faEllipsisH, faEllipsisV}  from '@fortawesome/free-solid-svg-icons'


const  Navbar = () => {
	const [detailsVisible, setDetailsVisible] = useState(false)
	
	

	return (
		<div>
			<div className ="navBar">
				<div className = "left">
					<p>React Hooks</p>
				</div>
				<div className = "right">
				  {/* <p onClick={(detailsVisible) => setDetailsVisible(!detailsVisible)}><FontAwesomeIcon icon={faEllipsisV}
					/></p> */}
					<FontAwesomeIcon icon={faEllipsisV}
					onClick= {() => setDetailsVisible(!detailsVisible)}
					/>	
				</div> 	
			</div>
			{detailsVisible? 
				<div className = "navDetails">
				<p>Posts</p>
				<p>Todos</p>
				<p>Users</p>
			</div> : '' }
			
		</div>
		
	)
}

export default Navbar