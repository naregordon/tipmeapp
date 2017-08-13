import React, { Component } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

class Profile extends Component {

	constructor(props) {
		super(props);
		this.id = props.profileId;
		this.name = props.profileName;
		this.desc = props.profileDesc;
		this.imageSrc = props.profileImg;
		this.bitcoinWallet = props.btcWlt;
		this.litecoinWallet = props.ltcWlt;
	}

	render(props){
		return(
			<div className="profile col-md-3 col-sm-4 text-center" style={{backgroundImage: 'url(' + this.imageSrc + ')'}}>
				<div className="profile__content">
					<h3 className="name">{this.name}</h3>
					<p className="desc">{this.desc}</p>
					<ul className="coins list-unstyled">
						<li>Bitcoin address: {this.bitcoinWallet}</li>
						<li>Litecoin address: {this.litecoinWallet}</li>
					</ul>
				</div>
			</div>
		)
	}
}

Profile.propTypes = {
	profileId: PropTypes.string,
	profileName: PropTypes.string,
	profileDesc: PropTypes.string,
	profileImg: PropTypes.string,
	btcWlt: PropTypes.string,
	ltcWlt: PropTypes.string
}

export default Profile;