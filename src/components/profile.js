import React from 'react';
import '../style.css'
import profileimg  from '../img/teny.jpg'

function Profile() {
	return (
		<div className="left">
			<div className="left-top">
				<img src={ profileimg } alt="Tenyson"/>

			</div>
			<div className="left-bottom">
				<h2>Rojah Lewis</h2>
				<h5>Junior Software, Mobile & Web developer. Cyber security enthusiast</h5>
				<br />
				<h5>Email: Rojahog@Hotmail.com</h5>
				<div className="social-links">
					<a href='https://twitter.com/Tenyson05_' target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
					<a href="https://twitter.com/Tenyson05_" target="_blank" rel="noopener noreferrer"><i className="fa fa-gitlab"></i></a>
					<a href="https://twitter.com/Tenyson05_" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
					<a href="https://twitter.com/Tenyson05_" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>

				</div>

			</div>
		
		</div>
	)

}

export default Profile;