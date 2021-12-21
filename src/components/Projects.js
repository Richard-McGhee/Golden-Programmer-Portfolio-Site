import React from 'react'

function Projects() {
    const myProjects = [
        {Company: "Story Squad/Scribble Stadium", Title: "Story Squad/Scribble Stadium", Position: "Front End Developer", Bullet: "Innovative app for kids to read and write unique stories", Bullet2: "Created multiple components with React to render a dynamic Word Cloud feature", Bullet3: "As a stretch goal, created another component for a Crop Cloud of child’s writing", Bullet4: "Created a function for decoding base64 images from an API in any format", Bullet5: "Collaborated with data scientists to pull complexity metrics from fastAPI", Link: "N/A at the moment"},
        {Company: "Bloom Tech", Title: "Anywhere Fitness Team", Position: "Back End Developer", Bullet: "A signup application for instructors & clients for fitness classes at any location", Bullet2: "Created a server using NodeJS for the front end to connect with", Bullet3: "Used SQLite database to manage and store user information", Bullet4: "Deployed the server to Heroku for live use with the front end application", Link: "https://fitness-collection.herokuapp.com and https://github.com/Anywhere-Fitness-Build-Week-1/Back-End"},
        {Company: "Personal", Title: "React Redux Template", Position: "Front End Developer", Bullet: "A template for React projects using Redux, React Router, and/or Complex", Bullet2: "Created an application to show the usage and setup process for the above API’s", Bullet3: "Formatted application with comments so it can be used as an instructive aid", Link: "https://github.com/Richard-McGhee/react-redux-react-router-template"}
    ]
    const inProgress = [
        {Company: "Personal", Title: "Dark JP Keyboard", Position: "Front End Developer", Bullet: "", Bullet2: "", Bullet3: "", Link: "Private for now"},
        {Company: "", Title: "", Position: "", Bullet: "", Bullet2: "", Bullet3: "", Link: ""}
    ]
    return ( 
        <div>
            <h1>Projects</h1>
            {myProjects.map(proj => (
                <div>
                    <div>Company: {proj.Company}</div>
                    <div>Title: {proj.Title}</div>
                    <div>Position: {proj.Position}</div>
                    <div>- {proj.Bullet}<br />- {proj.Bullet2}<br />- {proj.Bullet3}<br /></div><br />
                    <a href={proj.Link} className="projLinks">Link to Project if Applicable<br /></a><br />
                </div>
            ))}
            <h1>In Progress</h1>
            {inProgress.map(proj => (
                <div>
                    <div>Company: {proj.Company}</div>
                    <div>Title: {proj.Title}</div>
                    <div>Position: {proj.Position}</div>
                    <div>- {proj.Bullet}<br />- {proj.Bullet2}<br />- {proj.Bullet3}<br /></div><br />
                    <a href={proj.Link} className="projLinks">Link to Project if Applicable<br /></a><br />
                </div>
            ))}
        </div>
    )
}

export default Projects