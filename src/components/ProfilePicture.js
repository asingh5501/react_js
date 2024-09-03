import React from 'react';
import './ProfileCard.css'

function ProfilePicture({ imageUrl }) {
    return (
        <img
            src={imageUrl}
            alt="Profile"
            className='profile-picture'
        />
    );
}

export default ProfilePicture;
