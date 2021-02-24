import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Angular Training" where="Online University" from="Now" to="Future"/>
            
            </div>
            )
        }
    }
    
export default Education
    