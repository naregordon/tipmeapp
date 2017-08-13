import React, { Component } from 'react';
import './ProfileForm.css';

class ProfileForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			newProfileName: ''
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.submitProfile = this.submitProfile.bind(this);
	}

	handleUserInput(e){
		this.setState({
			newProfileName: e.target.value,
		})
	}

	submitProfile(){

		this.props.addProfile(this.state.newProfileName);

		// Clear the input on submit
		this.setState({
			newProfileName: ''
		})
	}

	render(){
		return(
			<div className="addProfile__form">
				<div className="form-group">
					<input className="name form-control" 
					placeholder="Write your name" 
					value={this.state.newProfileName}
					onChange={this.handleUserInput}
					/>
				</div>
				<button
				onClick={this.submitProfile} 
				className="btn btn-primary">Add Profile</button> 
			</div>
		)
	}
}

export default ProfileForm;