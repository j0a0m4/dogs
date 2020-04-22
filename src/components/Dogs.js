import React from 'react'
import { Dog } from './Dog'
import { v4 as uuid } from 'uuid'

const renderDog = (dog) => <Dog key={uuid()} {...dog} />

export const Dogs = ({ dogs }) => (
	<div className="Dogs">
		<h1>Click a Dog</h1>
		{dogs.map(renderDog)}
	</div>
)
