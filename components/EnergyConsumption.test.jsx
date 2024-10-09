import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EnergyConsumption } from './EnergyConsumption';
import { mockReadings } from '../__mocks__/readings';

describe('EnergyConsumption', () => {
  it('renders three detail boxes on the dashboard', async () => {
    render(<EnergyConsumption readings={mockReadings} />);
    const consumptionDetailBoxes = await screen.findAllByTestId('detail-box');
    expect(consumptionDetailBoxes).toHaveLength(3);
  });

  it('shows the correct value of the consumption', async () => {
    render(<EnergyConsumption readings={mockReadings} />);
    const consumptionValue = await screen.findByText('10');
    expect(consumptionValue).toBeInTheDocument();
  });

  it('shows the correct value of the cost', async () => {
    render(<EnergyConsumption readings={mockReadings} />);
    const costValue = await screen.findByText('1');
    expect(costValue).toBeInTheDocument();
  });

  it('shows the correct value of the footprint', async () => {
    render(<EnergyConsumption readings={mockReadings} />);
    const footprintValue = await screen.findByText('0.0025');
    expect(footprintValue).toBeInTheDocument();
  });
});
