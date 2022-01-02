import React from 'react'
import useWindowDimensions from './WindowDimensions'
import "./WordCloud.css"

function WordCloud() {
    const skills = [
        {word: "JavaScript", weight: 0.0185}, 
        {word: "React/Redux", weight: 0.0186}, 
        {word: "HTML", weight: 0.00375}, 
        {word: "CSS", weight: 0.00375},
        {word: "Git", weight: 0.00315},
        {word: "Github", weight: 0.00315},
        {word: "Netlify", weight: 0.00315},
        {word: "NodeJS", weight: 0.00315},
        {word: "Jest", weight: 0.00315},
        {word: "Cypress", weight: 0.00315},
        {word: "Python", weight: 0.00315},
        {word: "PostgresSQL", weight: 0.00315},
        {word: "SQLite", weight: 0.00315},
        {word: "Heroku", weight: 0.00315}
    ]

    function shuffle(arr) {
        let currentIndex = arr.length,  randomIndex
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
      
            // And swap it with the current element.
            [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]]
        }
        return arr
    }
    shuffle(skills)

    // This function generates colors randomly/dynamically for the WordCloud. It can be changed for new color combos
    function generateColor() {
        let number = Math.random();

        if(number <= 0.10) {
            return "#9BE1DF";
        } else if(number <= 0.20) {
            return "#F94144";
        } else if(number <= 0.30) {
            return "#F3722C";
        } else if(number <= 0.40) {
            return "#F8961E";
        } else if(number <= 0.50) {
            return "#F9844A";
        } else if(number <= 0.60) {
            return "#F9C74F";
        } else if(number <= 0.70) {
            return "#90BE6D";
        } else if(number <= 0.80) {
            return "#43AA8B";
        } else if(number <= 0.90) {
            return "#4D908E";
        } else {
            return"#277DA1";
        }
    }

    const { height, width } = useWindowDimensions()

    return ( 
        <div className="wordCloud">
            {skills.map((skill, idx) => {
                let left = width * Math.random()
                let top = height * Math.random()
                return (
                    <div key={idx} style={{
                        // This lets the color and other features generate randomly
                        color: generateColor(),
                        fontSize: `calc(2rem * (${skill.weight} * 100) + 1vw)`,
                        left: Math.random() < 0.5 ? `-${left}px` : `${left}px`,
                        top: Math.random() < 0.5 ? `-${top}px` : `${top}px`
                    }}>
                        <p>{skill.word}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default WordCloud