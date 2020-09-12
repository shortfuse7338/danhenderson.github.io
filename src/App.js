import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Daniel Henderson',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Be Bold',
        subTitle: 'Showing of my Creativity',
        text:'Check out my projects below'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      },
    }
  }
  render(){
    return (
        <Router>
          <Container className="p-0" fluid={true}>

              <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>Daniel Henderson</Navbar.Brand>

                <Navbar.Toggle className="border-0" aria-controls="navbar-topggle"/>
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
              <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
              <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
              <Footer />


          </Container>
        </Router>
      );
  }
}

export default App;
