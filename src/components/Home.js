import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
	<Fragment>
		<Helmet>
			<title>Quiz App - Home</title>
		</Helmet>
		<div id='home'>
			<section id='home-section'>
				<div style={{ textAlign: 'center' }}>
					<span className='mdi mdi-cube-outline cube'></span>
				</div>
				<h1 id='home-h1'>Quiz App</h1>
				<div className='play-button-container'>
					<ul>
						<li>
							<Link to='/play/instructions' className='home-play-button'>
								Play
							</Link>
						</li>
					</ul>
				</div>
				<div className='auth-container'>
					<Link to='/register' id='login-button' className='auth-buttons'>
						Login
					</Link>
					<Link to='/register' id='signup-button' className='auth-buttons'>
						Register
					</Link>
				</div>
			</section>
		</div>
	</Fragment>
);

export default Home;
