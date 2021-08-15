import React from 'react'
import './styles.css';
import award1 from '../images/award1.jpg';
import award2 from '../images/award2.jpg';
import award3 from '../images/award3.jpg';
import computerlab from '../images/computerlab.jpg';
import friendlyteaching from '../images/friendlyteaching.jpg';
import kidsgamesroom from '../images/kidsgamesroom.jpg';
import practicles from '../images/practicles.jpg';
const Facilities = () => {
    return (
        <div className='container'>
            <div className='styleforaboutpage'>
                <div className='row'>
                    <h1>Facilities :</h1>
                    <div className='col-sm-12 col-md-12 col-lg-3'>
                        <img src={computerlab} />
                        <label>Computer Lab</label>

                        {/* <p>
                            <label>
                                Acoustics and Noise. ...
            </label> <br />
                            <label>Ventilation and Air Quality. ...</label>  <br />
                            <label>Lighting. ... </label>   <br />
                            <label>Temperature control. ...</label>  <br />
                            <label>Space and size of classrooms.</label>
                        </p> */}
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-3'>
                        <img src={friendlyteaching} />
                        <label>Friendly teaching</label>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-3'>
                        <img src={kidsgamesroom} />
                        <label>Kids Games</label>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-3'>
                        <img src={practicles} />
                        <label>Practicles</label>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Facilities
