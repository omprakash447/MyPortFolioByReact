import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineArrowUp } from 'react-icons/ai';
import vg from "../assets/myphoto-removebg-preview.png";

function Footer() {
    return (
        <footer>
            <div>
                <img src={vg} alt="profile" />
                <h1>Om prakash lenka</h1>
                <p>Cheasing the Dreams and Debugging the Life </p>
            </div>
            <aside>
                <h2>Social media</h2>

                <article>
                    <a href="/">
                        <AiFillInstagram />
                    </a>
                    <a href="/">
                        <AiFillGithub />
                    </a>
                    <a href="/">
                        <AiFillTwitterSquare />
                    </a>
                    <a href="/">
                        <AiFillLinkedin />
                    </a>
                </article>
            </aside>
            <a href="#home"><AiOutlineArrowUp /></a>
        </footer>
    )
}

export default Footer;
