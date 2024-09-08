import React, { useEffect, useMemo, useState } from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileCard1 from './components/ProfileCard1'
import '../src/components/ProfileCard'
import Header from './components/Header'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import { counterContext } from './context/context'
// import Home from './components/Home'


const nums = new Array(3000000).fill(0).map((_,i)=>{
    return {
        index: i,
        isMagical: i === 2000000
    }
})

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('home')
    const [count, setCount] = useState(0)
    const [numbers, setNumbers] = useState(nums)

    const fetchData = async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        //   first time render when this page is render
        await fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }

    
    useEffect(() => {
        fetchData()
    }, [])
    
  

    // const magical = numbers.find(item => item.isMagical === true)
    
    const magical = useMemo(() => numbers.find(item => item.isMagical === true), [])

    // Render loading, error, or data
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const proImage = [
        'https://as2.ftcdn.net/v2/jpg/06/82/66/07/1000_F_682660728_oG7Ab9N3M1iors5u39puCiSt9qaGO4ZH.jpg',
        "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-348.jpg?w=826",
        "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-p  ersonality_1283595-14000.jpg?w=826",
        'https://img.freepik.com/free-photo/smiling-cute-female-student-casual-shirt_176420-18233.jpg?w=1380&t=st=1725274371~exp=1725274971~hmac=1aa548abebb29afa51f4cec4ea5b66c7e388abc71d05adc0e69a879ca49d3921',
        "https://img.freepik.com/premium-photo/male-portrait-barber-brown-color-suit-isolated-white-background_1029679-133710.jpg?w=826",
    ]

    return (
        <counterContext.Provider value={{count, setCount}}>
            <div className='main-div'>
                <h1>{magical.index}</h1>
                {/* <Home /> */}
                <Header activeTab={activeTab} setActiveTab={setActiveTab} setNumber={setNumbers} />
                {data.map((item, index) => {
                    return (
                        <main>
                            <ProfileCard
                                activeTab={activeTab}
                                key={item.id}
                                name={item.userId}
                                desc={item.title}
                                // title={item.body}
                                imageUrl={proImage[index % proImage.length]}
                            />
                        </main>
                    )
                })}
                <div className='profile-card1'>
                    <ProfileCard1
                        name={'Joe Root'}
                        desc={'The youngest player in the 15-member squad of England in the 2015 World Cup, Root was one of the two English batters.'}
                        imageUrl={proImage[0]}
                    />
                </div>
                {activeTab === 'about' && <Counter />}
                {activeTab === 'contact' && <TodoList />}
                <footer className='footer-content'>
                    <h3>Lorem psum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae</h3>
                </footer>
            </div>
        </counterContext.Provider>
    )
}

export default App