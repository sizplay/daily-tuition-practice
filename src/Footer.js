import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className='text-center'>
        <h5>Follow Us</h5>
        <div className='d-flex flex-row justify-content-center'>
          <span><FontAwesomeIcon size='lg' className='mr-4' icon={['fab', 'facebook-f']} /></span>
          <span><FontAwesomeIcon size='lg' className='mr-4' icon={['fab', 'twitter']} /></span>
          <span><FontAwesomeIcon size='lg' className='mr-4' icon={['fab', 'linkedin-in']} /></span>
          <span><FontAwesomeIcon size='lg' className='mr-4' icon={['fab', 'instagram']} /></span>
          <span><FontAwesomeIcon size='lg' icon={['fab', 'pinterest-p']} /></span>
        </div>

        <p>Copy Right &copy; By Daily Tuition | All Rights Reserved</p>

      </div>
    </footer>
  );
}

export default Footer;
