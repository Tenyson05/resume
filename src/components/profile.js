import React from 'react';
import BGimg from '../img/bg-img.jpg';
import '../style.css'

function Profile() {
	return (
		<div className="left">
			<h3>My name</h3>
			<img src={ BGimg }/>
		</div>
	)

}

export default Profile;