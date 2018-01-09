import React, { Component } from 'react';
import LandingHeader from './landing-header';
import LandingSectionSeparator from './landing-section-separator';
import Description from './page_description';
import LandingHowSection from './landing-how-section';
import LandingWhySection from './landing-why-section';

class LandingPage extends Component {

  render() {
    return (
      <div className="page-wrapper">
        <LandingHeader />
        <Description text={"Studio description"} />
        <LandingSectionSeparator text={"How it works"} />
        <LandingHowSection />
        <LandingSectionSeparator text={"Giving isn't a one way street"} />
        <LandingWhySection />
        <LandingSectionSeparator text={"The world isn't waiting for you to graduate"} callToAction={true} />
      </div>
    );
  }
}

export default LandingPage;