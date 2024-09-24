import React from 'react'
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section class="header">
        <header>
            <nav>
                <div class="logo"><a href=""><i class="fa-solid fa-file-shield"></i></a> AI PlagiarismGuard</div>
                 <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><a href="#"></a>Features</li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#"></a>Contacts</li>
                 </ul>
            </nav>
        </header>
    </section>
  )
}

export default Header