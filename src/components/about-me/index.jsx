import React from 'react'
import Avatar from '../../assets/img/avatar2.png'
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const Aboutme = () => {
    let iconStyles = { color: "grey", fontSize: "2rem", marginRight: "1rem" };
    return (
        <div className="about">
            <section className="about__intro">
                <a href="https://github.com/hwinng" rel="noreferrer" target="_blank">
                    <img className="about__intro___avatar" src={Avatar} alt="avatar" width="128" height="128" />
                </a>
                <div><span>Phillip Nguyen</span></div>
                <div className="about__intro___text">
                    <p>Hi! My name is Nguyen Van Huyen, just call me as Phillip. I am currently studying at Hanoi University as third-year student. I architect and build client-side applications with Angular, React, and TypeScript.</p>
                </div>
            </section>

            <section className="about__media">
                <a href="https://github.com/hwinng" rel="noreferrer" target="_blank"><AiFillGithub className="icon" style={iconStyles} /></a>
                <a href="https://www.facebook.com/moc.huyenn.3/" rel="noreferrer" target="_blank"><AiFillFacebook className="icon" style={iconStyles} /></a>
                <a href="https://www.instagram.com/?hl=en" rel="noreferrer" target="_blank"><AiFillInstagram className="icon" style={iconStyles} /></a>
            </section>

            <section className="about__footer">
                <div>
                    <p style={{fontStyle: 'italic'}}>Made with love from Hanu.</p>
                </div>
            </section>
        </div>
    )
}

export default Aboutme
