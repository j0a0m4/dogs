import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'
import { v4 as uuid } from 'uuid'

const DogNavbar = ({ dogs, history }) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)

	return (
		<header>
			<Navbar color="info" dark expand="md">
				<NavbarBrand onClick={() => history.push('/dogs')}>
					Dogs
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						{dogs.map(({ name }) => (
							<NavItem key={uuid()}>
								<NavLink
									onClick={() => history.push(`/dog/${name}`)}
								>
									{name}
								</NavLink>
							</NavItem>
						))}
					</Nav>
				</Collapse>
			</Navbar>
		</header>
	)
}

export default withRouter(DogNavbar)
