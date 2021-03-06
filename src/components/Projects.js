import React from 'react'
import styled from 'styled-components'
import cloudgif3x2 from '../assets/storycloud3x2.gif'
import heroku3x2 from '../assets/heroku3x2.png'
import templExample3x2 from '../assets/template3x2.png'
import keyboard from '../assets/Keyboard.png'
import p3x2 from '../assets/Placeholder3x2.png'

const ProjectStyles = styled.div`
    /* title and header styling  */
    .titleDiv{
        width: 15%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;   
    }
    .projTitles{
        font-weight: bold;  
        color: #C8A659;
    }
    .bigWrapper{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    p{
        margin: 0 auto 1% auto;
        padding: 25px 0;
        width: 60%;
        font-size: 2rem;
        text-align: center;
        border: 5px dotted #93032E;
    }

    /* Styling for images and project area  */
    .imgWrapper{
        display: flex;
        align-items: center;
        width: 100%;
    }
    .imgWrapper img{
        margin: 0 2%;
        width: 20%;
        height: 30vh;
    }
    .projDiv, .inProgDiv{
        font-size: 1.5rem;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        margin: 2% auto;
    }
    .projDiv a, .inProgDiv a{
        margin: 0 auto;
        display: flex;
        border: 2px dashed #8A6552;
        align-items: center;
        justify-content: center;
    }
    .projectH1, .inProgH1{
        margin: 20px auto;
        width: 30%;
        border: 2px solid #F1FFFA;
    }

    /* Media Queries */

    /* Laptops */
    @media (max-width: 1024px){
        .titleDiv{
            margin: 0 auto;
        }
        .titleH1{
            display: none;
        }
    }

    /* Tablets */
    @media (max-width: 768px){

    }

    /* Mobile */
    @media (max-width: 480px){
        p{
            font-size: 1.6rem;
            margin-bottom: 2%;
        }
        .imgWrapper{
            flex-direction: column;
        }
        .imgWrapper img{
            width: 60%;
        }
        .projDiv, .inProgDiv{
            width: 60%;
            font-size: 1.25rem;
        }
        .projectH1, .inProgH1{
            border: none;
        }
    }    
`

function Projects() {
    const myProjects = [
        {Company: "Story Squad/Scribble Stadium", Title: "Story Squad/Scribble Stadium", Position: "Front End Developer", Bullet: "Innovative app for kids to read and write unique stories", Bullet2: "Created multiple components with React to render a dynamic Word Cloud feature", Bullet3: "As a stretch goal, created another component for a Crop Cloud of child???s writing", Bullet4: "Created a function for decoding base64 images from an API in any format", Bullet5: "Collaborated with data scientists to pull complexity metrics from fastAPI", LinkTitle: "N/A ATM", Link: "", image: cloudgif3x2, alt: "animation of wordcloud"},
        {Company: "Bloom Tech", Title: "Anywhere Fitness Team", Position: "Back End Developer", Bullet: "A signup application for instructors & clients for fitness classes at any location", Bullet2: "Created a server using NodeJS for the front end to connect with", Bullet3: "Used SQLite database to manage and store user information", Bullet4: "Deployed the server to Heroku for live use with the front end application", LinkTitle: "Heroku Deployment", Link: "https://fitness-collection.herokuapp.com and https://github.com/Anywhere-Fitness-Build-Week-1/Back-End", image: heroku3x2, alt: "heroku page showing deployment"},
        {Company: "Personal", Title: "React Redux Template", Position: "Front End Developer", Bullet: "A template for React projects using Redux, React Router, and/or Complex", Bullet2: "Created an application to show the usage and setup process for the above API???s", Bullet3: "Formatted application with comments so it can be used as an instructive aid", LinkTitle: "Template Link", Link: "https://github.com/Richard-McGhee/react-redux-react-router-template", image: templExample3x2, alt: "Home page of template with 3 text sections and links"}
    ]
    const inProgress = [
        {Company: "Personal", Title: "Dark JP Keyboard", Position: "Front End Developer", Bullet: "A Japanese keyboard in a dark theme for ease of use and visibility", Bullet2: "Unique because none exist online at the moment as only white bg boards exist unfortunately", Bullet3: "May implement customizable colors with hex options", LinkTitle: "Keyboard Link", Link: "https://darkjpkeyboard.netlify.app/", image: keyboard, alt: "Placeholder"},
        {Company: "Personal", Title: "Portfolio Site (This Site)", Position: "Front End Developer", Bullet: "A portfolio to show off my unique skills and experience", Bullet2: "Features to add:", Bullet3: "Possible carasoul", Bullet4: "Theme switch, maybe with hex choices", LinkTitle: "Home", Link: "/Home", image: p3x2, alt: "Placeholder"}
    ]
    return ( 
        <ProjectStyles>
            <div className="titleDiv">
                <h1 className="titleH1">Projects</h1>
                <h2>Richard McGhee</h2>
            </div>
            <h1 className="projectH1">Projects</h1>
            <p className="projIntro">
                Some personal and professional projects I've built or am working on.< br/> Take a look at the work I've put in on some unique projects.
            </p>
            <div className="bigWrapper">
                {myProjects.map(proj => (
                    <div className="imgWrapper" key={proj.Title}>
                        <img src={proj.image} alt={proj.alt} />
                        <div className="projDiv">
                            <a href={proj.Link} className="projLinks">{proj.LinkTitle}<br /></a><br />
                            <div className="projTitles">Company: {proj.Company}</div>
                            <div className="projTitles">Title: {proj.Title}</div>
                            <div>Position: {proj.Position}</div>
                            <div>- {proj.Bullet}<br />- {proj.Bullet2}<br />- {proj.Bullet3}<br /></div>
                            {proj.Bullet4 ? <div>- {proj.Bullet4}<br /></div> : null}
                            {proj.Bullet5 ? <div>- {proj.Bullet5}<br /></div>: null}
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="inProgH1">In Progress</h1>
            <div className="bigWrapper">
                {inProgress.map(proj => (
                    <div className="imgWrapper" key={proj.Title}>
                        <img src={proj.image} alt={proj.alt} />
                        <div className="inProgDiv">
                            <a href={proj.Link} className="projLinks">{proj.LinkTitle}<br /></a><br />
                            <div className="projTitles">Company: {proj.Company}</div>
                            <div className="projTitles">Title: {proj.Title}</div>
                            <div>Position: {proj.Position}</div>
                            <div>- {proj.Bullet}<br />- {proj.Bullet2}<br />- {proj.Bullet3}<br /></div>
                            {proj.Bullet4 ? <div>- {proj.Bullet4}<br /></div> : null}
                            {proj.Bullet5 ? <div>- {proj.Bullet5}<br /></div>: null}
                        </div>
                    </div>
                ))}
            </div>
        </ProjectStyles>
    )
}

export default Projects