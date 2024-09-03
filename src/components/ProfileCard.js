import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
// import ProfileCard1 from './ProfileCard1';
import './ProfileCard.css';

class ProfileCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        // first time call when component is render 
    }

    componentDidUpdate(){
        // if any changes in state then update the value if any changes in run time.
    }

    componentWillUnmount(){
        // if any functionality run continusoly when user leave the page then destroy this event or any things....
    }

    render() {
        const { name, desc, imageUrl, activeTab } = this.props;
        return (
            <div>
            {activeTab === 'home' ? <div className='profile-card'>
                <ProfilePicture imageUrl={imageUrl} />
                <ProfileDetails name={name} description={desc} />
            </div> : <div className='profile-card11'>
                <p>about</p>
            {/* <ProfileCard1
                    name={'Joe Root'}
                    desc={'The youngest player in the 15-member squad of England in the 2015 World Cup, Root was one of the two English batters to score more than 200 runs in the'}
                    imageUrl={''}
                /> */}
                </div>}
            </div>
        );
    }
}

export default ProfileCard;

