import React from 'react'
import { Link } from 'react-router-dom'

export const Dog = ({ name, src }) => (
	<div className="Dog">
		<Link to={`/dog/${name}`}>
			<h1>{name}</h1>
			<img src={`${src}`} alt="" />
		</Link>
	</div>
)
