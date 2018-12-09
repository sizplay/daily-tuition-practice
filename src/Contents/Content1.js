import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Content1 = () => {
  return (
    <div className='container'>
      <div className='content-1 mb-4'>
        <div className='row m-4'>
          <div className='col-md-12 text-center'>
            <h6 style={{color: '#EF233C' }}>Amazing Features</h6>
            <h2>Creative Web Design Template</h2>
            <span className='title-border'></span>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
          </div>
        </div>
        <div className='row text-center'>
          <div className='col-md-4'>
            <div className='circle'>
              <FontAwesomeIcon size='3x' className='mt-4' icon={'mobile-alt'} />
            </div>
            <div className='description'>
              <NavLink to='/'>
                <h5 className='p-3'>Fully Responsive</h5>
              </NavLink>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='circle'>
              <FontAwesomeIcon size='3x' className='mt-4' icon={'cog'}  spin />
            </div>
            <div className='description'>
              <NavLink to='/'>
                <h5 className='p-3'>Customizable</h5>
              </NavLink>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='circle'>
              <FontAwesomeIcon size='3x' className='mt-4' icon={'pencil-alt'} />
            </div>
            <div className='description'>
              <NavLink to='/'>
                <h5 className='p-3'>Modern Design</h5>
              </NavLink>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
