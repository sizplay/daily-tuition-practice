import React from 'react';
import member1 from '../member-images/Member_1.jpeg';
import member2 from '../member-images/Member_2.jpg'
import member3 from '../member-images/Member_3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Content5 = () => {
  return (
    <div className='container'>
      <hr />
      <div className='content-5'>
        <div className='text-center pt-4'>
          <h6 style={{ 'color': '#EF233C' }}>Our Team</h6>
          <h3>Creators</h3>
        </div>
        <div className='row text-center'>
          <div className='col-md-4'>
            <div className='member-1'>
              <div className='avatar'>
                <span><img src={member1} alt='Avatar' className='circle' /></span>
              </div>
              <div className='desc'>
                <h5>Harry Adams</h5>
                <h6 className='text-dark'>Website Designer</h6>
                <p className='info text-dark'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
                <p className='social-icon text-center'>
                  <span><FontAwesomeIcon size='lg' icon={['fab', 'facebook-f']} /></span>
                  <span><FontAwesomeIcon size='lg' icon={['fab', 'twitter']} /></span>
                  <span><FontAwesomeIcon size='lg' icon={['fab', 'linkedin-in']} /></span>
                  <span><FontAwesomeIcon size='lg' icon={['fab', 'instagram']} /></span>
                  <span><FontAwesomeIcon size='lg' icon={['fab', 'pinterest-p']} /></span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='avatar'>
              <span><img src={member2} alt='Avatar' className='circle' /></span>
            </div>
            <div className='desc'>
              <h5>Jessica Mitch</h5>
              <h6 className='text-dark'>Web developer</h6>
              <p className='info text-dark'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
              <p className='social-icon text-center'>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'facebook-f']} /></span>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'twitter']} /></span>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'linkedin-in']} /></span>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'instagram']} /></span>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'pinterest-p']} /></span>
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='avatar'>
              <span><img src={member3} alt='Avatar' className='circle' /></span>
            </div>
            <div className='desc'>
              <h5>Dave M.</h5>
              <h6 className='text-dark'>Front-End Developer</h6>
              <p className='info text-dark'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
              <p className='social-icon text-center'>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'facebook-f']} /></span>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'twitter']} /></span>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'linkedin-in']} /></span>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'instagram']} /></span>
                <span><FontAwesomeIcon size='lg' icon={['fab', 'pinterest-p']} /></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content5;
