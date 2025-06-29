import React from 'react';
import Banar from './component/Banar';
import WhatWeDo from './component/What_we_do';
import PortfolioShowcase from './component/PortfolioShowcase';

export default function AgencyWebsite() {
  return (
    <div className="pt-20">
      <Banar/>
      <WhatWeDo/>
      <PortfolioShowcase/>
    </div>
  );
}

