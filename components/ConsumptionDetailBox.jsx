import React from 'react';

export const ConsumptionDetailBox = ({ title, numericValue, unit }) => {
  return (
    <div className="bg-super-light-grey shadow-2 roundedMore col-6 mr3" data-testid="detail-box">
      <div className="pl2 pr2 pt1 pb1">
        <p data-testid="title" className="h5 darkgray">
          {title}
        </p>
        <p data-testid="numericValue" className="h3 darkgray">
          {numericValue}
        </p>
        <p data-testid="unit" className="h5 darkgray">
          {unit}
        </p>
      </div>
    </div>
  );
};
