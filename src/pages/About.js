import React from 'react'
import './styles.css';
import award1 from '../images/award1.jpg';
import award2 from '../images/award2.jpg';
import award3 from '../images/award3.jpg';
import computerlab from '../images/computerlab.jpg';
import friendlyteaching from '../images/friendlyteaching.jpg';
import kidsgamesroom from '../images/kidsgamesroom.jpg';
import practicles from '../images/practicles.jpg';
const About = () => {
    return (
        <div className='container'>
            <div className='styleforaboutpage'>
                <div className='row'>
                    <div className='col-lg-12'>

                        <h1>About :</h1>
                        <p>A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers. Most countries have systems of formal education, which is sometimes compulsory. In these systems, students progress through a series of schools.</p>
                    </div>
                </div>

               
                <div className='row'>
                    <h1>Awards :</h1>
                    <div className='col-sm-4 col-md-4 col-lg-4'>
<img src={award1}/>
                        
                       
                    </div>
                    <div className='col-sm-4 col-md-4 col-lg-4'>
<img src={award2}/>
                        
                       
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-4'>
<img src={award3}/>
                        
                       
                    </div>
                </div>

             
            </div>
        </div>
    )
}

export default About
