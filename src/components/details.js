import React from 'react';

function Details() {
	return (
		<div className="right">
			<div className="right-inner">
				<div className="introduction">
					<h4>Intro</h4>
					<div className="content">
						<p className="intro-p">I am a fouth year university student studying computer science at the University of Technology, Jamaica and self teaching cyber security</p>
						<p className="intro-p">I enjoy being a bridge between computer science and cyber security because not only do I get to develop apps, software and websites, I also get to develop cyber security tools to keep the cyber world safe.</p>
					</div>
				</div>
				<div className="skills">
					<h4>Skills</h4>
					<div className="content">
						<div className="skill-category">
							<strong>LANGUAGES: </strong>
							<span>JavaScript, Java, Python, Dart, C++, SQL</span>
						</div>
						<div className="skill-category">
							<strong>FRAMEWORK: </strong>
							<span>React Native, ReactJS, Express, DJango, Flutter, NodeJS</span>	
						</div>
						<div className="skill-category">
							<strong>TOOLS: </strong>
							<span>GitHub, GitLab, Windows Command line, Linux Command Line, Postman, Datagrip, Figma</span>	
						</div>
						
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default Details;