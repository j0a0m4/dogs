import React from 'react'
import Dog from './Dog'
import { v4 as uuid } from 'uuid'
import { Row, Container } from 'reactstrap'

const renderDog = (dog) => <Dog key={uuid()} {...dog} />

export const Dogs = ({ dogs }) => (
	<Container
		style={{
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			flexDirection: 'column',
		}}
	>
		<h1 className="display-4">Dog List</h1>
		<Row>{dogs.map(renderDog)}</Row>
	</Container>
)
