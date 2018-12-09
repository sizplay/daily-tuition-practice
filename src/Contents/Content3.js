import React from 'react';

const Content3 = () => {
  return (
    <div className='content-3'>
      <div className='row text-center pt-4'>
        <div className='col-md-12'>
          <p>PACKAGES</p>
          <h3>Our Pricing</h3>
        </div>
      </div>
      <div className='row' style={{ justifyContent: 'center' }}>
        <div className='col-md-3 m-3'>
          <div className='basic text-center pro'>
            <p>Basic</p>
            <div className='price'>
              <h1>
                <span className='dollar'>$</span>10/
                <span style={{ fontSize: '13px' }}>Month</span>
              </h1>
            </div>
            <div style={{ 'padding': '5% 20%' }}>
              <hr />
              <h6>20 GB of Storage</h6>
              <h6>1 Email Account</h6>
              <h6>24/7 Support</h6>
              <h6>300 GB Bandwidth</h6>
              <h6>User Management</h6>
            </div>
            <a href='/'>Order Now</a>
          </div>
        </div>
        <div className='col-md-3 m-3'>
          <div className='pro text-center'>
            <p>Pro</p>
            <div className='price'>
              <h1>
                <span className='dollar'>$</span>29/
                <span style={{ fontSize: '13px' }}>Month</span>
              </h1>
            </div>
            <div style={{ 'padding': '5% 20%' }}>
              <hr />
              <h6>50 GB of Storage</h6>
              <h6>2 Email Account</h6>
              <h6>24/7 Support</h6>
              <h6>Unlimited Bandwidth</h6>
              <h6>User Management</h6>
            </div>
            <a id='pro-button' href='/'>Order Now</a>
          </div>
        </div>
        <div className='col-md-3 m-3'>
          <div className='pro enterprise text-center'>
            <p>Enterprise</p>
            <div className='price'>
              <h1>
                <span className='dollar'>$</span>45/
                <span style={{ fontSize: '13px' }}>Month</span>
              </h1>
            </div>
            <div style={{ 'padding': '5% 20%' }}>
              <hr />
              <h6>Unlimited Storage</h6>
              <h6>5 Email Account</h6>
              <h6>24/7 Support</h6>
              <h6>Unlimited Bandwidth</h6>
              <h6>User Management</h6>
            </div>
            <a id='pro-button' href='/'>Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content3;
