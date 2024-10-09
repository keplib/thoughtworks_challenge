import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConsumptionDetailBox } from './ConsumptionDetailBox';

describe('ConsumptionDetailBox', () => {
  it('renders the component with the right title and numeric value', async () => {
    render(<ConsumptionDetailBox title={'test-title'} numericValue={'124'} unit={'$'} />);
    const title = await screen.findByTestId('title');
    const numericValue = await screen.findByTestId('numericValue');
    const unit = await screen.findByTestId('unit');

    expect(title).toBeInTheDocument();
    expect(numericValue).toBeInTheDocument();
    expect(unit).toBeInTheDocument();

    expect(title).toHaveTextContent('test-title');
    expect(numericValue).toHaveTextContent('124');
    expect(unit).toHaveTextContent('$');
  });
});
