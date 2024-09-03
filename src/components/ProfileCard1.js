import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import './ProfileCard.css';

class ProfileCard extends Component {
    render() {
        const { name, desc, imageUrl } = this.props;
        return (
            <div className='profile-card'>
                <ProfilePicture imageUrl={imageUrl} />
                <ProfileDetails name={name} description={desc} />
            </div>
        );
    }
}

export default ProfileCard;

