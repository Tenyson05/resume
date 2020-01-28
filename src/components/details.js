import React from 'react';

function Details() {
	return (
		<div className="right">
			<div className="intro-card">
				<h3>Intro</h3>
				<hr />
				<p>I am a fouth year university student studying computer science at the University of Technology, Jamaica and self teaching cyber security. I enjoy being a bridge between computer science and cyber security because not only do I get to develop apps, software and websites, I also get to develop cyber security tools to keep the cyber world safe.</p>
			</div>
			<div className="skills-card">
				<h3>skills</h3>
				<hr />
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
			<div className="education-card">
				<h3>Education</h3>
				<hr />
				<div className="edu-left">
					<p>University of Technology, Jamaica <br/> Major: Computer science</p>
					<p id="year">Expected Graduation year: 2020</p>
				</div>
				{/* <div className="edu-right">
					<p>Belair High School</p>
					<p id="year">Graduated: 2016</p>
				</div> */}
			</div>
			<div className="experience-card">
				<h3>Experience</h3>
				<hr />
				<div className="exp-left">
					<p>Hood Daniel Well Co</p>
					<p id="year">Summer of 2012-2018</p>
				</div>
			</div>
		</div>
	);
}

export default Details;