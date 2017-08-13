import React, { Component } from 'react';
import Profile from './Profile/Profile';
import AddProfileModal from './AddProfileModal/AddProfileModal';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.addProfile = this.addProfile.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('profiles');

    // Set up React state of our component
    this.state = {
      profiles: [],
    }
  }

  componentWillMount() {
    const currentProfiles = this.state.profiles;
    var _this = this;

    // Date snapshot from database
    this.db.on('child_added', snap => {

      currentProfiles.push({
        id: snap.key,
        profileName: snap.val().profileName,
        profileImg: snap.val().profileImg,
        profileDesc: snap.val().profileDesc
      });

      this.setState({
        profiles: currentProfiles
      });
    });

  }

  addProfile(profile){
    const currentProfiles = this.state.profiles;

    this.db.push().set({
      profileName: profile, 
      profileImg: 'http://www.math.uni-frankfurt.de/~person/_4170854.jpg', 
      profileDesc: 'cvcxf'    
    });

    this.setState({
      profiles: currentProfiles
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Tipme</a>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <button type="button" className="btn btn-success navbar-btn pull-right" data-toggle="modal" data-target="#addProfileModal">Add Profile</button>
              </div>
            </div>
        </nav>

        <main>
          <div className="container-fluid">
            <div className="listWrapper row">
              {

                this.state.profiles.map((profile) => {

                  return (
                    <Profile 
                    profileId={profile.id} 
                    profileName={profile.profileName} 
                    profileImg={profile.profileImg} 
                    profileDesc={profile.profileDesc}
                    key={profile.id}/>
                  )
                })
              }
            </div>
          </div>
        </main>

        <AddProfileModal addProfile={this.addProfile}/>
      </div>
    );
  }
}

export default App;
