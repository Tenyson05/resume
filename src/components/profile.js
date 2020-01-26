import React from 'react';
import '../style.css'

function Profile() {
	return (
		<div className="left">
			<div className="bg-img"></div>
			<div className="left-inner">
				<div className="info">
					<h2 className="name">Tenyson</h2>
					<div className="subtext">Junior Software, Mobile & Web developer. <br /> Cyber security enthusiast</div>
					<div className="social-links">
					<a href='https://twitter.com/Tenyson05_' target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
					<a href="https://twitter.com/Tenyson05_" target="_blank" rel="noopener noreferrer"><i className="fa-github-square"></i></a>
					<a href="https://twitter.com/Tenyson05_" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
					<a href="https://twitter.com/Tenyson05_" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Profile;