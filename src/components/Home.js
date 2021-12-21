import React from 'react'
import WordCloud from './wordCloud/WordCloud'

function Home() {

    
    return ( 
        <div>
            <h1>Home</h1>
            <h2>Richard McGhee</h2>
            <h1>Richard McGhee</h1>
            <div className="bioDiv">Hello, I'm Richard McGhee. I'm a web developer who is passionate about security and the advancement of user friendly technology in all spectra. I have a passion for fitness, science, and knowledge. There's always something new to learn!</div>
            <WordCloud />
        </div>
     );
}

export default Home