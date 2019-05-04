import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Content from './Content';
import About from './About';
import Project from './Projects';

const Main = () => (
        <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper">
            <Route exact path="/" component={Content} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/about" component={About} />
        </AnimatedSwitch>
);

export default Main;