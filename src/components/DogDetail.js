import React from 'react'
import { dogs } from '../dogs'
import { v4 as uuid } from 'uuid'
import {
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Row,
	Container,
} from 'reactstrap'

const renderFact = (f) => <li key={uuid()}>{f}</li>

const DogCard = ({ name, age, src, facts, goBack }) => (
	<Col md={{ size: '8', offset: '2' }} lg={{ size: '6', offset: '3' }}>
		<Card>
			<CardImg
				top
				width="100%"
				src={require(`../images/${src}.jpg`)}
				alt="Card image cap"
			/>
			<CardBody>
				<CardTitle
					style={{
						fontWeight: 'bold',
						fontSize: '2rem',
						marginBottom: '0',
					}}
				>
					{name}
				</CardTitle>
				<CardSubtitle
					style={{ fontSize: '1.5rem', marginBottom: '10px' }}
				>
					{age} years old
				</CardSubtitle>
				<CardText>
					<ul>{facts.map(renderFact)}</ul>
				</CardText>
				<Button color="info" onClick={() => goBack()}>
					Go Back
				</Button>
			</CardBody>
		</Card>
	</Col>
)

export const DogDetail = ({ history, match }) => {
	const paramName = match.params.name
	const dog = dogs.find((d) => d.name === paramName)
	return (
		<Container>
			<Row>
				<DogCard {...dog} goBack={history.goBack} />
			</Row>
		</Container>
	)
}
