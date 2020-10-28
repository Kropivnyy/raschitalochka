import React from 'react';

import Dashboard from '../../components/Dashboard';
import Currency from '../Currency';

import Media from 'react-media';

export default function HomePage() {
  return (
    <>
      <Dashboard />
      <Media
        queries={{
          tablet: '(min-width: 768px) and (max-width: 1279px)',
        }}
      >
        {matches => <>{matches.tablet && <Currency />}</>}
      </Media>
    </>
  );
}
