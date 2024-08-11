import React, { useState } from 'react'
import Contact from './components/Contact'
import Footer from "./components/Footer"
import Header, { Headerphone } from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Timeline from './components/Timeline'
import Work from './components/Work'

function App() {

    const [menuOpen, setmenuOpen] = useState(false);
    return ( <
        >
        <
        Headerphone menuOpen = { menuOpen }
        setmenuOpen = { setmenuOpen }
        /> <
        Header menuOpen = { menuOpen }
        setmenuOpen = { setmenuOpen }
        /> <
        Home / >
        <
        Work / >
        <
        Timeline / >
        <
        Services / >
        <
        Testimonial / >
        <
        Contact / >
        <
        Footer / >
        <
        />
    )
}

export default App;