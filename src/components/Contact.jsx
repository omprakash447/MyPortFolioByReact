import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../Firebase';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Firestore
            await addDoc(collection(db, 'contacts'), formData);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message: ', error);
        }
    };

    return (
        <div id='contact'>
            <section>
                <form onSubmit={handleSubmit}>
                    <h2>Contact me</h2>

                    <input type="text"
                        name="name" // added name attribute
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Your Name...'
                        required
                    />
                    <input type="email"
                        name="email" // added name attribute
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Your Email...'
                        required
                    />
                    <input type="text"
                        name="message" // added name attribute
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Your Message...'
                        required
                    />

                    <button type='submit'>Send</button>
                </form>
            </section>
            <aside>
                <img src="https://static.vecteezy.com/system/resources/previews/011/344/354/original/young-boy-and-girl-doing-phone-call-conversation-3d-character-illustration-png.png" alt="graphics" />
            </aside>
        </div>
    );
}

export default Contact;
