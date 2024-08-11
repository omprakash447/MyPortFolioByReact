import { animate, motion } from "framer-motion";
import React, { useRef } from 'react';
import { BsArrowUpRight, BsChevronBarDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import vg from "../assets/myphoto-removebg-preview.png";


function Home() {


    const clientCount=useRef(null);
    const ProjectCount=useRef(null);


    const animationClientCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed())
        })
    }
    const animationProjectCount=()=>{
        animate(0,40,{
            duration:1,
            onUpdate:(v)=>(ProjectCount.current.textContent=v.toFixed())
        })
    }

    const animation={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hii , I Am<br/>Om Prakash Lenka
                    </motion.h1>
                    <Typewriter options={{
                        strings:["A Devloper","A Designer","A Problem Solver"],
                        autoStart:true,
                        loop:true,
                        cursor:"",
                        wrapperClassName:"typewriterpara",
                    }}/>

                    <div>
                        <a href="mailto:omprakash@gmail.com">Hire Me</a>
                        <a href="#work">Projects <BsArrowUpRight /></a>
                    </div>

                    <article>
                        <p>
                            +<motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                        </p>
                        <span>Clients WorldWide</span>
                    </article>
                    
                    <aside>
                    <article>
                        <p>
                            +<motion.span whileInView={animationProjectCount} ref={ProjectCount}></motion.span>
                        </p>
                        <span>Projects Made</span>
                    </article>

                    <article data-special>
                        <p>Contacts</p>
                        <span>omprakash@gmail.com</span>
                    </article>
                    </aside>
                    
                </div>
            </section>
            <section>
                <img src={vg} alt="Om" />
                <section>
                    <BsChevronBarDown />
                </section>
            </section>
        </div>
    )
}

export default Home
