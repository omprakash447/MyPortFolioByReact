import React from 'react';
import data from "../assets/data.json";

function Timeline() {
    return (
        <div id='timeline'>
            <div className="timelinebox">
                {
                    data.projects.map((item , index)=>(
                        <Timelineitem
                        heading={item.title}
                        text={item.date}
                        index={index}
                        key={item.title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const Timelineitem=({heading,text,index})=>(
    <div className={`timelineItem ${
        index%2===0? "leftTimeline" : "rightTimeline"
        }`}>
            <div>
            <h2>{heading}</h2>
            <p>{text}</p>
            </div>
    </div>
);


export default Timeline
