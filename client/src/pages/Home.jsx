import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faCircleCheck, faFileWord, faFileShield } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
        <section class="hero">
        {/* <!-- left div hero--> */}
        <h1>AI-Powered Plagiarism Detection</h1>
         <div class="left-div-hero">
            <p>Ensure originality in your work with our advanced AI plagiarism checker.</p>
            <p>Fast, accurate, and easy to use.</p>    
         </div>
        {/* <!-- right div hero --> */}
         <div class="right-div-hero">
            {/* <!-- upload button --> */}
             <div class="hero-upload-bttn">
                <Link to='/upload'>
                    <button>Upload File</button>
                </Link>
                <p>Supported format: PDF, DOC, DOCX</p>
             </div>
         </div>
     </section>
     <section class="features">
        {/* <!-- features heading --> */}
         <div class="features-heading">
            <h2>Key Features</h2>
         </div>
        {/* <!-- features left div --> */}
        <div class="features-content">
        <ul>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faBoltLightning} />
        </a>
        AI-Powered
        <span>Utilizes advanced AI algorithms for accurate plagiarism detection</span>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faCircleCheck} />
        </a>
        Detailed Report
        <span>Supports various file formats including PDF, DOC, and DOCX</span>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faFileWord} />
        </a>
        Multiple Formats
        <span>Provides comprehensive reports with similarity percentages and source links</span>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faFileShield} />
        </a>
        Privacy Focus
        <span>Ensures your content remains private and secure</span>
      </li>
    </ul>
        </div>
     </section>
    </>
  )
}

export default Home