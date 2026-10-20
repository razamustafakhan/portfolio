import React from "react";
import "./resume.css";

import Personal from "../../components/resume/personal/Personal";
import Work from "../../components/resume/work/Work";
import Education from "../../components/resume/education/Education";
import Technical from "../../components/resume/technical/Technical";

const Resume = () => {
  return (
    <>
      <div className="resume-container">
        <div className="personal-info-container">
          <Personal />
        </div>
        <div className="resume-main-container">
          <div className="left-container">
            <div className="container-card">
               <Technical />
            </div>
            <Work />

            {/* education-container */}

            <Education />
               <div className="personal-details">
              <h4>Personal Details</h4>
              <ul>
                <li>
                  <strong>DOB:</strong> 03 March 1994
                </li>
                <li>
                  <strong>Gender:</strong> Male
                </li>
                <li>
                  <strong>Marital Status:</strong> Married
                </li>
                <li>
                  <strong>Languages Known:</strong> Hindi & English
                </li>
              </ul>
            </div>

            {/* personal details */}

            {/* work experiences */}
          </div>

         
        </div>
        
      </div>
      
      
    </>
  );
};

export default Resume;
