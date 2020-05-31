import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'All Microsoft Courses' },
            { id: 2, title: 'All Apple courses' },
            { id: 3, title: 'All google courses' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link 
                                    key={course.id} 
                                    to={{
                                        pathname: this.props.match.url + '/' + course.id,
                                        search: '?title=' + course.title
                                    }}>
                                    <article className="Course">{course.title}</article>
                                </Link>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:courseId'} component={Course} />
            </div>
        );
    }
}

export default Courses;