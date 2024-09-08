import React from 'react';
import './ProfileCard.css'

function ProfileDetails({ name, description, tit }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>{tit}</h4>
        </div>
    );
}

export default ProfileDetails;
