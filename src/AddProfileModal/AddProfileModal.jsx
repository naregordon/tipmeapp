import React, { Component } from 'react';
import './AddProfileModal.css';
import ProfileForm from '../ProfileForm/ProfileForm';

class AddProfileModal extends Component {

	render(props){
		return(
		    <div className="modal fade" id="addProfileModal" tabIndex="-1" role="dialog" aria-labelledby="addProfileModal">
		      <div className="modal-dialog" role="document">
		        <div className="modal-content">
		          <div className="modal-header">
		            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		            <h4 className="modal-title">Create a profile</h4>
		          </div>
		          <div className="modal-body">
			        <div className="addProfile">
			          <ProfileForm addProfile={this.props.addProfile}/>
			        </div>
		          </div>
		        </div>
		      </div>
		    </div>
		)
	}
}

export default AddProfileModal;