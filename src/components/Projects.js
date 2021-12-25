import React from 'react'
import styled from 'styled-components'
import cloudgif from '../assets/storycloud.gif'
import heroku from '../assets/HerokuScreen.png'
import templExample from '../assets/TemplateExample.png'
import p3x2 from '../assets/Placeholder3x2.png'

const ProjectStyles = styled.div`
    .titleDiv{
        width: 15%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;   
    }
    .projTitles{
        font-weight: bold;  
    }
    .bigWrapper{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .imgWrapper{
        display: flex;
        align-items: center;
        /* border: 2px solid green; */
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
        border: 2px solid red;
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
    p{
        margin: 0 auto 1% auto;
        padding: 25px 0;
        width: 60%;
        font-size: 2rem;
        text-align: center;
        border: 2px dotted #F1FFFA;
    }
`

function Projects() {
    const myProjects = [
        {Company: "Story Squad/Scribble Stadium", Title: "Story Squad/Scribble Stadium", Position: "Front End Developer", Bullet: "Innovative app for kids to read and write unique stories", Bullet2: "Created multiple components with React to render a dynamic Word Cloud feature", Bullet3: "As a stretch goal, created another component for a Crop Cloud of child’s writing", Bullet4: "Created a function for decoding base64 images from an API in any format", Bullet5: "Collaborated with data scientists to pull complexity metrics from fastAPI", Link: "N/A at the moment", image: cloudgif, alt: "animation of wordcloud"},
        {Company: "Bloom Tech", Title: "Anywhere Fitness Team", Position: "Back End Developer", Bullet: "A signup application for instructors & clients for fitness classes at any location", Bullet2: "Created a server using NodeJS for the front end to connect with", Bullet3: "Used SQLite database to manage and store user information", Bullet4: "Deployed the server to Heroku for live use with the front end application", Link: "https://fitness-collection.herokuapp.com and https://github.com/Anywhere-Fitness-Build-Week-1/Back-End", image: heroku, alt: "heroku page showing deployment"},
        {Company: "Personal", Title: "React Redux Template", Position: "Front End Developer", Bullet: "A template for React projects using Redux, React Router, and/or Complex", Bullet2: "Created an application to show the usage and setup process for the above API’s", Bullet3: "Formatted application with comments so it can be used as an instructive aid", Link: "https://github.com/Richard-McGhee/react-redux-react-router-template", image: templExample, alt: "Home page of template with 3 text sections and links"}
    ]
    const inProgress = [
        {Company: "Personal", Title: "Dark JP Keyboard", Position: "Front End Developer", Bullet: "A Japanese keyboard in a dark theme for ease of use and visibility", Bullet2: "Unique because none exist online at the moment as only white bg boards exist unfortunately", Bullet3: "May implement customizable colors with hex options", Link: "Private for now", image: p3x2, alt: "Placeholder"}
        // {Company: "", Title: "", Position: "", Bullet: "", Bullet2: "", Bullet3: "", Link: "", image: "", alt: ""}
    ]
    return ( 
        <ProjectStyles>
            <div className="titleDiv">
                <h1>Projects</h1>
                <h2>Richard McGhee</h2>
            </div>
            <h1 className="projectH1">Projects</h1>
            <p className="projIntro">
                Some personal and professional projects I've built or am working on.< br/> Take a look at the work I've put in on some unique projects.
            </p>
            <div className="bigWrapper">
                {myProjects.map(proj => (
                    <div className="imgWrapper">
                        <img src={proj.image} alt={proj.alt} />
                        <div className="projDiv">
                            <a href={proj.Link} className="projLinks">Link to Project if Applicable<br /></a><br />
                            <div className="projTitles">Company: {proj.Company}</div>
                            <div className="projTitles">Title: {proj.Title}</div>
                            <div>Position: {proj.Position}</div>
                            <div>- {proj.Bullet}<br />- {proj.Bullet2}<br />- {proj.Bullet3}<br /></div><br />
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="inProgH1">In Progress</h1>
            <div className="bigWrapper">
                {inProgress.map(proj => (
                    <div className="imgWrapper">
                        <img src={proj.image} alt={proj.alt} />
                        <div className="inProgDiv">
                            <a href={proj.Link} className="projLinks">Link to Project if Applicable<br /></a><br />
                            <div className="projTitles">Company: {proj.Company}</div>
                            <div className="projTitles">Title: {proj.Title}</div>
                            <div>Position: {proj.Position}</div>
                            <div>- {proj.Bullet}<br />- {proj.Bullet2}<br />- {proj.Bullet3}<br /></div><br />
                        </div>
                    </div>
                ))}
            </div>
        </ProjectStyles>
    )
}

export default Projects