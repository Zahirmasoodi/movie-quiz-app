import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Register from './components/Register';
import Default from './components/Default';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/play/instructions'
					component={QuizInstructions}
				/>
				<Route exact path='/play/quiz' component={Play} />
				<Route exact path='/play/quizSummary' component={QuizSummary} />
				<Route exact path='/register' component={Register} />
				<Route component={Default} />
			</Switch>
		</Router>
	);
};

export default App;
