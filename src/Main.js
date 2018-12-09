import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import { css } from 'glamor';

const styles = {
  btnSub1: css({
    '&:hover': {
      backgroundColor: 'transparent',
      paddingRight: '30px',
      '& > span': {
        transition: 'all 500ms ease',
        marginLeft: '10px'
      }
    }
  }),
  btnSub2: css({
    '&:hover': {
      border: '1px solid #EDF2F4',
      backgroundColor: '#352C31',
      paddingRight: '30px',
      '& > span': {
        transition: 'all 500ms ease',
        marginLeft: '10px'
      }
    }
  })
};

class Main extends Component {

  render() {

    return (
      <div className='site-wrapper'>
        <Nav />
        <div className='d-flex justify-content-center'>
          <div className='site-title'>
            <h2>Design Which
          <span style={{ color: 'red' }}> You Love...!</span></h2>
            <p className='title-text my-4'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
          </p>
            <button type='submit'
              className='btn-sub1 mx-3 my-4'
              {...styles.btnSub1}
            >
              Get Now<span><FontAwesomeIcon icon={'angle-right'} /></span>
            </button>
            <button type='button'
              className='btn-sub2 my-4'
              {...styles.btnSub2}
            >
              Learn More<span><FontAwesomeIcon icon={'angle-double-right'} /></span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
