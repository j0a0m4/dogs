import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router'
import { Dogs } from './Dogs'
import { dogs } from '../dogs'
import { DogDetail } from './DogDetail'
import DogNavbar from './DogNavbar'

function App() {
	return (
		<div className="App">
			<DogNavbar dogs={dogs} />
			<Switch>
				<Route
					exact
					path="/dogs"
					render={(routerParams) => (
						<Dogs {...routerParams} dogs={dogs} />
					)}
				/>
				<Route
					exact
					path="/dog/:name"
					render={(routerParams) => <DogDetail {...routerParams} />}
				/>
				<Route exact path="/" render={() => <h1>HOME</h1>} />
				<Route exact render={() => <h1>Error</h1>} />
			</Switch>
		</div>
	)
}

export default App
