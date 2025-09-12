import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          <div className="box">
            <h3 style={{ flexBasis: "40px" }}>Barnett Technical University</h3>
            <p className="small">UI/UX Student (2022 - Present)</p>
            <p className="small">
              Currently studying user interface and user experience design with a focus on
              accessibility and inclusivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;