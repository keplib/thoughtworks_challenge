import React, { useEffect } from 'react';
import { renderChart } from '../utils/chart.js';
import { groupByDay, sortByTime } from '../utils/reading';
import { ConsumptionDetailBox } from './ConsumptionDetailBox.jsx';

export const EnergyConsumption = ({ readings }) => {
  const containerId = 'usageChart';
  useEffect(() => {
    renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
  }, []);

  const consumptionValue = (readings) => {
    const readingValues = readings.map((reading) => {
      return reading.value;
    });

    return Math.round(readingValues.reduce((partialSum, a) => partialSum + a, 0));
  };

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>
      <section className="mb3">
        <button
          className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
        >
          Last 30 days
        </button>
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
      <div className="flex justify-around">
        <ConsumptionDetailBox
          data-testid="detail-box"
          title={'Cost 💰'}
          numericValue={Math.round(consumptionValue(readings) * 0.138)}
          unit={'$'}
        />
        <ConsumptionDetailBox
          data-testid="detail-box"
          title={'Consumption ⚡️'}
          numericValue={consumptionValue(readings)}
          unit={'kWh'}
        />
        <ConsumptionDetailBox
          data-testid="detail-box"
          title={'Footprint 👟'}
          numericValue={(consumptionValue(readings) * 0.0002532).toFixed(4)}
          unit={'$'}
        />
      </div>
    </>
  );
};
