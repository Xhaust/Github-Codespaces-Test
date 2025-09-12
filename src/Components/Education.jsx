import React from "react";


const Education = ({ education }) => {
    return (
        <section id="education" className="light">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution}</p>
                    <p>{edu.startDate} - {edu.endDate}</p>
                    {edu.details && <p>{edu.details}</p>}
                </div>
            ))}
        </section>
    );
}