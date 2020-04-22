import React from 'react'
import { Col } from 'reactstrap'
import { withRouter } from 'react-router'

const Dog = ({ name, src, history }) => (
	<Col
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			paddingLeft: '60px',
			paddingTop: '10px',
			paddingBottom: '10px',
		}}
		onClick={() => history.push(`dog/${name}`)}
	>
		<h1>{name}</h1>
		<img
			style={{ height: 'auto', width: '300px', borderRadius: '50%' }}
			src={require(`../images/${src}.jpg`)}
			alt=""
		/>
	</Col>
)

export default withRouter(Dog)
