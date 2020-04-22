import React from 'react'
import { dogs } from '../dogs'
import { v4 as uuid } from 'uuid'

const renderFact = (f) => <li key={uuid()}>{f}</li>

const DogCard = ({ name, age, src, facts }) => (
	<div className="Dog-Card">
		<h1>{name}</h1>
		<h2>{age}</h2>
		<ul>{facts.map(renderFact)}</ul>
	</div>
)

export const DogDetail = ({ match }) => {
	const paramName = match.params.name
	const dog = dogs.find((d) => d.name === paramName)
	return <DogCard {...dog} />
}
