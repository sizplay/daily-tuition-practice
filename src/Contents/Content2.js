import React from 'react';

class Content2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPosition: 0
    }
  }
 
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollPosition: window.scrollY });
    this.progressBar();
  }

  progressBar = () => {
    var pro1 = document.getElementById('pro-1');
    var pro2 = document.getElementById('pro-2');
    var pro3 = document.getElementById('pro-3');

    if (this.state.scrollPosition > 900) {
      pro1.setAttribute('style', 'width: 90%');
      pro2.setAttribute('style', 'width: 94%');
      pro3.setAttribute('style', 'width: 89%');
    }

    if (this.state.scrollPosition < 800) {
      pro1.setAttribute('style', 'width: 0%');
      pro2.setAttribute('style', 'width: 0%');
      pro3.setAttribute('style', 'width: 0%');
    }
  }

  render() {

    return (
      <div className='content-2'>
        <div className='row'>
          <div className='col-md-6 col-1'></div>
          <div className='col-md-6'>
            <h6 className='m-3'>About Company</h6>
            <h3 className='m-3'>We Make Fresh and Clean Design</h3>
            <p className='m-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <h5 className='m-3'>Skills</h5>
            <div className='progress-bars'>
              <h6 className='m-3'>Website Design</h6>
              <div className='progress m-3'>
                <div className='progress-bar bg-danger pro-1' aria-valuenow='90' aria-valuemin='0'
                  aria-valuemax='100' role='progressbar' id='pro-1'>90%</div>
              </div>
              <h6 className='m-3'>Animation</h6>
              <div className='progress m-3'>
                <div className='progress-bar bg-danger pro-2' aria-valuenow='94' aria-valuemin='0'
                  aria-valuemax='100' role='progressbar' id='pro-2'>94%</div>
              </div>
              <h6 className='m-3'>Development</h6>
              <div className='progress m-3'>
                <div className='progress-bar bg-danger pro-3' aria-valuenow='89' aria-valuemin='0'
                  aria-valuemax='100' role='progressbar' id='pro-3'>89%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content2;
