import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage';
import ExploreTimetable from '../exploreTimetable/ExploreTimetable';
import Instructors from '../instructorGrid/InstructorGrid';
import SignIn from '../signIn/SignIn';
import InProgress from '../inProgress/InProgress';
import InstructorAdditionalInfo from '../instructorAdditionalInfo/InstructorAdditionalInfo';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={ LandingPage } exact/>
                <Route path="/exploretimetable" component={ ExploreTimetable } exact/>
                <Route path="/instructors" component={ Instructors } exact/>
                <Route path="/signin" component={ SignIn } exact/>
                <Route path="/instructorAdditionalInfo" component = { InstructorAdditionalInfo } exact/>
                <Route path="/*" component = { InProgress } exact />
            </Switch>
        );
    }
}

export default Routes;