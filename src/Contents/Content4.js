import React from 'react';
//import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fontAwesomeStyle = {
  'display': 'block',
  fontSize: '45px',
  'padding': '5% 5% 5% 5%',
}
const Content4 = () => {
  return (
    <div className='container'>
      <div className='content-4'>
        <ul className='nav'>
          <li className='nav-item nav-tabs'>
            <a href='#design' className='active tab-item' role='tab' data-toggle='tab'>
              <span id='icon'><FontAwesomeIcon style={fontAwesomeStyle} icon={'desktop'} /></span>
              <span>Responsive Design</span>
            </a>
          </li>
          <li className='nav-item nav-tabs'>
            <a href='#development' className='tab-item' role='tab' data-toggle='tab'>
              <span id='icon'><FontAwesomeIcon style={fontAwesomeStyle} icon={'bolt'} /></span>
              <span>Development</span>
            </a>
          </li>
          <li className='nav-item nav-tabs'>
            <a href='#https' className='tab-item' role='tab' data-toggle='tab'>
              <span id='icon'><FontAwesomeIcon style={fontAwesomeStyle} icon={'lock'} /></span>
              <span>HTTPS</span>
            </a>
          </li>
          <li className='nav-item nav-tabs'>
            <a href='#marketing' className='tab-item' role='tab' data-toggle='tab'>
              <span id='icon'><FontAwesomeIcon style={fontAwesomeStyle} icon={'bullhorn'} /></span>
              <span>Marketing</span>
            </a>
          </li>
        </ul>

        {/* Tab Panes */}

        <div className='tab-content'>
          <div className='active tab-pane' role='tabpanel' id='design'>
            <div className='row justify-content-md-center'>
              <div className='col-md-3 offset-md-1'>
                <h4>Creating a Awesome Website from Scratch</h4>
              </div>
              <div className='col-md-7 text-dark'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className='tab-pane' role='tabpanel' id='development'>
            <div className='row justify-content-md-center'>
              <div className='col-md-3 offset-md-1'>
                <h4>Creating a Awesome Website from Scratch</h4>
              </div>
              <div className='col-md-4'>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
                </p>
              </div>
              <div className='col-md-4'>
                <p>
                  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years
                </p>
              </div>
            </div>
          </div>
          <div className='tab-pane' role='tabpanel' id='https'>
            <div className='row justify-content-md-center'>
              <div className='col-md-4 offset-md-1'>
                <h4>HTTPS Encrypted Security</h4>
              </div>
              <div className='row pt-3'>
                <div className='col-md-10 offset-md-1'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                </div>
              </div>
            </div>
          </div>
          <div className='tab-pane' role='tabpanel' id='marketing'>
            <div className='row'>
              <div className='col-md-4 offset-md-1'>
                <h4>Marketing</h4>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-3 offset-md-1'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
              <div className='col-md-3'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
              <div className='col-md-3'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Content4;
