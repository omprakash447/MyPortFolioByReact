import { motion } from "framer-motion";
import React from 'react';
import { AiFillAndroid, AiFillIeCircle, AiFillWindows } from "react-icons/ai";

function Services() {
    const animations={
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            opacity:0,
            x:"-100%",
        },
        twoAndThree:{
            opacity:0,
            y:"-100%",
        },
        four:{
            opacity:0,
            x:"100%",
        },
    }
    return (
        <div id='services'>
            <h2>Services</h2>
            <section>
                <motion.div className='servicebox1'
                whileInView={animations.whileInView}
                initial={animations.one}
                >
                    <h3>2+</h3>
                    <p>Years Experience</p>
                </motion.div>
                <motion.div className='servicebox2'
                whileInView={animations.whileInView}
                initial={animations.twoAndThree}
                >
                    <AiFillIeCircle />
                    <span>Web Devlopment</span>
                </motion.div>
                <motion.div className='servicebox3'
                whileInView={animations.whileInView}
                initial={animations.twoAndThree}
                transition={{
                    delay:0.2,
                }}
                >
                    <AiFillAndroid />
                    <span>App Devlopment</span>
                </motion.div>
                <motion.div className='servicebox4'
                whileInView={animations.whileInView}
                initial={animations.four}
                >
                    <AiFillWindows />
                    <span>Desktop Devlopment</span>
                </motion.div>
            </section>
        </div>
    )
}

export default Services
