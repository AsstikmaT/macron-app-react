import './Title.scss';

import React from 'react';

const Title = ({menuOpen}) => {

  let titleClass = "title";

  if (menuOpen) {
    titleClass += " open";
  }

  return (
    <div className="boxTitle">
      <div className={titleClass}>
        Macron the Epidemiologist !
      </div>
    </div>
  );
}

export default Title;