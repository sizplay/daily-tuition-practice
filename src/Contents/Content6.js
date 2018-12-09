import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Content6 = () => {
  return (
    <div className='container'>
      <div className='content-6'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <hr />
            <h6 style={{ 'color': '#EF233C', marginTop: '4%' }}>Contact Us</h6>
            <h3>Get in Touch</h3>
            <p style={{ fontSize: '12px', marginTop: '4%', marginBottom: '6%' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div className='row contact'>
          <div className='col-md-4 text-center'>
            <span><FontAwesomeIcon size='3x' className='mt-4' icon={'mobile-alt'} /></span>
            <h5 style={{ marginTop: '8%' }}>Phone</h5>
            <p style={{ fontSize: '13px' }}>+9248 (492) 498 123</p>
          </div>
          <div className='col-md-4 text-center'>
            <span><FontAwesomeIcon size='3x' className='mt-4' icon={'mobile-alt'} /></span>
            <h5 style={{ marginTop: '8%' }}>Address</h5>
            <p style={{ fontSize: '13px' }}>4 Goldfield Road, San Francisco, USA</p>
          </div>
          <div className='col-md-4 text-center'>
            <span><FontAwesomeIcon size='3x' className='mt-4' icon={'mobile-alt'} /></span>
            <h5 style={{ marginTop: '8%' }}>Email</h5>
            <p style={{ fontSize: '13px' }}>Example@gmail.com</p>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-md-10 offset-md-1'>
            <form action=''>
              <div className='form-row'>
                <div className='col'>
                  <input type='text' id='name' className='form-control' placeholder='Name' />
                </div>
                <div className='col'>
                  <input type='text' id='email' className='form-control' placeholder='Email *' />
                </div>
              </div>
              <div className='form-row py-3'>
                <div className='col'>
                  <input type='text' id='subject' className='form-control' placeholder='Subject' />
                </div>
              </div>
              <div className='form-row'>
                <div className='col'>
                  <textarea type='text' id='comment' cols='1' rows='5' className='form-control' placeholder='Messages *' />
                </div>
              </div>
              <div className='form-row py-3'>
                <div className='col'>
                  <button className='form-control btn-submit' type='submit'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content6;
