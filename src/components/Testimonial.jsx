import React from 'react';

function Testimonial() {
    return (
        <div id='testimonial'>
            <h2>Testimonial</h2>
            <section>
                <TestimonialCard name={"Rajkumar"} feedback={"Your Projects are so Ammezing..."} />
                <TestimonialCard name={"Sneha"} feedback={"You have to correct ur writing long code..."} />
                <TestimonialCard name={"Rohit"} feedback={"Ammezing , keep it up..."} />
            </section>
        </div>
    )
};

const TestimonialCard =({name , feedback})=>(
    <article>
        <img src="https://th.bing.com/th/id/R.b74966e366046deda383b0bcfd6e27f7?rik=rQPCKso0YaHEBA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_124200.png&ehk=AK9Eu0tjJY9LafYduYtAv7mmZTQK31ltfqBg0vFy8cw%3d&risl=&pid=ImgRaw&r=0" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial;
