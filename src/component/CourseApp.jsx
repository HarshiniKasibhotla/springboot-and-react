import React, { Component } from 'react';
import ListStudentsComponent from './ListStudentsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentComponent fr
class CourseApp extends Component
{

   render() {
        return (
            <Router>
                     <h1>Course Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListStudentsComponent} />
                        <Route path="/students" exact component={ListStudentsComponent} />
                        <Route path="/students/:id" component={StudentComponent} />
                    </Switch>
                
            </Router>
        )
    }
}
export default CourseApp;
