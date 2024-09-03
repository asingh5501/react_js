import React, { useEffect, useState } from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileCard1 from './components/ProfileCard1'
import '../src/components/ProfileCard'
import Header from './components/Header'
import Counter from './components/Counter'
import TodoList from './components/TodoList'

function App() {
    useEffect(() => {
        //   first time render when this page is render

        return () => {
            // second for destroy when user leave the page
        }
    }, ['update']) // when any change in state or props then update is called. if you put the any state then state is changed then it called..................

    const profile = [
        {
            name: 'Shivam Dubey',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: 'https://img.freepik.com/free-photo/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755.jpg?t=st=1725273232~exp=1725276832~hmac=f840a4d154860d21938e976c4ca694fe4881eeca411f3275e1bdd88a1bb00b5a&w=1380'
        },
        {
            name: 'Rohit Sharma',
            description: 'A passionate web developer with a love for React Native and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-348.jpg?w=826"
        },
        {
            name: 'MS Dhoni',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14000.jpg?w=826"
        },
        {
            name: 'Rishab Pant',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: 'https://img.freepik.com/free-photo/smiling-cute-female-student-casual-shirt_176420-18233.jpg?w=1380&t=st=1725274371~exp=1725274971~hmac=1aa548abebb29afa51f4cec4ea5b66c7e388abc71d05adc0e69a879ca49d3921'
        },
        {
            name: 'Subhman Gill',
            description: 'A passionate web developer with a love for React Native and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/male-portrait-barber-brown-color-suit-isolated-white-background_1029679-133710.jpg?w=826"
        },
        {
            name: 'Shivam Dubey',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: 'https://as2.ftcdn.net/v2/jpg/06/82/66/07/1000_F_682660728_oG7Ab9N3M1iors5u39puCiSt9qaGO4ZH.jpg'
        },
        {
            name: 'Rohit Sharma',
            description: 'A passionate web developer with a love for React Native and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-348.jpg?w=826"
        },
        {
            name: 'MS Dhoni',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14000.jpg?w=826"
        },
        {
            name: 'Rishab Pant',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: 'https://img.freepik.com/free-photo/smiling-cute-female-student-casual-shirt_176420-18233.jpg?w=1380&t=st=1725274371~exp=1725274971~hmac=1aa548abebb29afa51f4cec4ea5b66c7e388abc71d05adc0e69a879ca49d3921'
        },
        {
            name: 'Subhman Gill',
            description: 'A passionate web developer with a love for React Native and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/male-portrait-barber-brown-color-suit-isolated-white-background_1029679-133710.jpg?w=826"
        },
        {
            name: 'Shivam Dubey',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: 'https://img.freepik.com/free-photo/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755.jpg?t=st=1725273232~exp=1725276832~hmac=f840a4d154860d21938e976c4ca694fe4881eeca411f3275e1bdd88a1bb00b5a&w=1380'
        },
        {
            name: 'Rohit Sharma',
            description: 'A passionate web developer with a love for React Native and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-348.jpg?w=826"
        },
        {
            name: 'MS Dhoni',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14000.jpg?w=826"
        },
        {
            name: 'Rishab Pant',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: 'https://img.freepik.com/free-photo/smiling-cute-female-student-casual-shirt_176420-18233.jpg?w=1380&t=st=1725274371~exp=1725274971~hmac=1aa548abebb29afa51f4cec4ea5b66c7e388abc71d05adc0e69a879ca49d3921'
        },
        {
            name: 'Subhman Gill',
            description: 'A passionate web developer with a love for React Native and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/male-portrait-barber-brown-color-suit-isolated-white-background_1029679-133710.jpg?w=826"
        },
        {
            name: 'Shivam Dubey',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: 'https://as2.ftcdn.net/v2/jpg/06/82/66/07/1000_F_682660728_oG7Ab9N3M1iors5u39puCiSt9qaGO4ZH.jpg'
        },
        {
            name: 'Rohit Sharma',
            description: 'A passionate web developer with a love for React Native and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-348.jpg?w=826"
        },
        {
            name: 'MS Dhoni',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14000.jpg?w=826"
        },
        {
            name: 'Rishab Pant',
            description: 'A passionate web developer with a love for React and JavaScript.',
            imageUrl: 'https://img.freepik.com/free-photo/smiling-cute-female-student-casual-shirt_176420-18233.jpg?w=1380&t=st=1725274371~exp=1725274971~hmac=1aa548abebb29afa51f4cec4ea5b66c7e388abc71d05adc0e69a879ca49d3921'
        },
        {
            name: 'Subhman Gill',
            description: 'A passionate web developer with a love for React Native and JavaScript.',
            imageUrl: "https://img.freepik.com/premium-photo/male-portrait-barber-brown-color-suit-isolated-white-background_1029679-133710.jpg?w=826"
        },
    ]
    const [activeTab, setActiveTab] = useState('home')
    return (
        <div className='main-div'>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            {profile.map((item, index) => {
                return (
                    <main>
                        <ProfileCard
                            activeTab={activeTab}
                            key={index}
                            name={item.name}
                            desc={item.description}
                            imageUrl={item.imageUrl}
                        />
                    </main>
                )
            })}
            <div className='profile-card1'>
                <ProfileCard1
                    name={'Joe Root'}
                    desc={'The youngest player in the 15-member squad of England in the 2015 World Cup, Root was one of the two English batters to score more than 200 runs in the'}
                    imageUrl={profile[2].imageUrl}
                />
            </div>
            {activeTab === 'about' && <Counter />}
            {activeTab === 'contact' && <TodoList />}
            <footer className='footer-content'>
                <h3>Lorem psum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae</h3>
            </footer>
        </div>
    )
}

export default App