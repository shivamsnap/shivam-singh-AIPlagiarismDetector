import React from 'react'
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
       <p> Copyrigth © 2024 <a href=""><i class="fa-solid fa-file-shield"></i></a>AI PlagiarismGuard All Rights Reserved.</p>
       <ul>
      <li>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
    </footer>
  )
}

export default Footer