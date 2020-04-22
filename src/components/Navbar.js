import React from 'react'
import { Link } from 'react-router-dom'

const renderLinks = ({ name }) => <Link to={`/dog/${name}`}>{name}</Link>

export const Navbar = ({ dogs }) => (
	<header>
		<h1>Dogs</h1>
		<nav>
			<Link to="/dogs">Dogs</Link>
			{dogs.map(renderLinks)}
		</nav>
	</header>
)
