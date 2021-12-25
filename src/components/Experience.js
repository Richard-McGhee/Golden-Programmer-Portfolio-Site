import React from 'react'
import styled from 'styled-components'

const ExperienceStyles = styled.div`
    .titleDiv{
        width: 15%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
    }
    p{
        margin: 0 auto;
        padding: 25px 0;
        width: 60%;
        font-size: 2rem;
        text-align: center;
        border: 2px dotted #F1FFFA;
    }
    .expH1{
        margin: 20px auto;
        width: 30%;
        border: 2px solid #F1FFFA;
    }
    .pvtExpDiv, .mltryExpDiv{
        font-size: 1.5rem;
    }
    .expTitles{
        font-weight: bold;
    }
`
function Experience() {
    const pvtExp = [
        {Company: "Integrity Restoration", Title: "Lead Restoration Technician", Dates: "Sep 2019 – Mar 2020", Job: "Performed tasks related to alleviating water damage and mold remediation", Job2: "Supervised temp employees", Job3: "Documented daily notes of activities performed to present to insurance companies", Job4: "Operated a company box van and managed equipment loading and removal"},
        {Company: "WellStar West Georgia Hospital", Title: "OR Nursing Assistant", Dates: "Nov 2018 – Aug 2019", Job: "Performed custodial duties around the operating room", Job2: "Assisted with pre-surgery patient care, medical supplies, & transportation"},
        {Company: "Swift Transportation/WEL Companies", Title: "Professional Driver", Dates: "Jul 2015 – Dec 2017", Job: "Communicated with shippers and receivers to ensure their safe and timely arrival", Job2: "Drove a Class A transport truck to deliver company products"}
    ]
    const mltryExp = [
        { USMC: "Special Intellignece", Title: "System Administrator", Job: "Managed millions of dollars of Marine Corps equipment and facilities", Job2: "Provided secure communications for American and Japanese military officials", Job3: "Performed other tasks related to providing military security"},
        {USMC: "Ground Training", Title: "Database Manager", Job: "Coordinated air space and flight times for American and Japanese military officials", Job2: "Provided various other services for military personnel", Job3: "Recorded training statistics created training networks/programs for 200+ Marines"}
    ]
    return ( 
        <ExperienceStyles>
            <div className="titleDiv">
                <h1>Experience</h1>
                <h2>Richard McGhee</h2>
            </div>
            <p className="expIntro">
                I've learned much in many areas over the years.< br/> Here's a quick breakdown of the most relevant areas I've worked.
            </p>
            <h1 className="expH1">Private Experience</h1>
            {pvtExp.map(exp => (
                <div className="pvtExpDiv">
                    <div className="expTitles">Company: {exp.Company}</div>
                    <div className="expTitles">Title: {exp.Title}</div>
                    <div>Dates: {exp.Dates}</div>
                    <div>- {exp.Job} <br /> - {exp.Job2}</div><br />
                </div>
            ))}
            <br />
            <h1 className="expH1">Military Experience</h1>
            {mltryExp.map(exp => (
                <div className="mltryExpDiv">
                    <div className="expTitles">Job: {exp.USMC}</div>
                    <div className="expTitles">Title: {exp.Title}</div>
                    <div>- {exp.Job}<br />- {exp.Job2}<br />- {exp.Job3}</div><br />
                </div>
            ))}
        </ExperienceStyles>
     );
}

export default Experience