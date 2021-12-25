import React from 'react'
import WordCloud from './wordCloud/WordCloud'
import styled from 'styled-components';
import me from '../assets/me.jpg'
import gold from '../assets/Gold.avif'
import p1x1 from '../assets/Placeholder1x1.png'

const HomeStyles = styled.div`
    .titleDiv{
        width: 15%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
    }
    .homeH1{
        color: #D3C422;
    }
    .bioDiv{
        margin: 0 auto 1.5% auto;
        width: 30%;
        font-size: 1.4rem;
    }
    .homeImgs{
    }
    .homeImgs img{
        height: 20vh;
        margin: 0 0 1% 2%;
    }
`

function Home() {

    
    return ( 
        <HomeStyles>
            <div className="titleDiv">
                <h1>Home</h1>
                <h2>Richard McGhee</h2>
            </div>
            <h1 className="homeH1">Richard McGhee</h1>
            <div className="bioDiv">Hello, I'm Richard McGhee. I'm a web developer who is passionate about security and the advancement of user friendly technology in all spectra. I have a passion for fitness, science, and knowledge. There's always something new to learn!</div>
            <div className="homeImgs">
                <img src={me} alt="Me in a red shirt" />
                <img src={gold} alt="Bars of Gold" />
                <img src={p1x1} alt="Placeholder" />
            </div>
            <WordCloud />
        </HomeStyles>
     );
}

export default Home