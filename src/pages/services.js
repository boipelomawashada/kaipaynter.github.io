import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import pic01 from '../assets/images/pic01.jpg'
import ServicesNav from '../components/ServicesNav'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }
  render() {
    return (
      <Layout>


        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <ServicesNav sticky={this.state.stickyNav} />

        <div id="main">
        <section id="coaching" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Coaching</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>
          <section id="secrets-to-stardom" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Secrets to Stardom</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>
          <section id="services" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Services</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>    
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>
          <section id="your-career" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Your Career</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>    
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Services
