import React from 'react';
import './ProfileCard.css'

function ProfileDetails({ name, description }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProfileDetails;
