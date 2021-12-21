import React from 'react'
// import WordCloud from './wordCloud/WordCloud'

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
        <div>
            <h1>Private Experience</h1>
            {pvtExp.map(exp => (
                <div>
                    <div>Company: {exp.Company}</div>
                    <div>Title: {exp.Title}</div>
                    <div>Dates: {exp.Dates}</div>
                    <div>- {exp.Job} <br /> - {exp.Job2}</div><br />
                </div>
            ))}
            <br />
            <h1>Military Experience</h1>
            {mltryExp.map(exp => (
                <div>
                    <div>Job: {exp.USMC}</div>
                    <div>Title: {exp.Title}</div>
                    <div>- {exp.Job}<br />- {exp.Job2}<br />- {exp.Job3}</div><br />
                </div>
            ))}
            {/* <WordCloud /> */}
        </div>
     );
}

export default Experience