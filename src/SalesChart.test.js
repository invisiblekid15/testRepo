import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesChart from './SalesChart';
import axios from 'axios';

jest.mock('axios');

test('loads and displays sales data', async () => {
  const salesData = [{ date: '2021-01-01', amount: 100 }, { date: '2021-01-02', amount: 150 }];
  axios.get.mockResolvedValueOnce({ data: salesData });

  render(<SalesChart />);

  expect(await screen.findByText('100')).toBeInTheDocument();
  expect(await screen.findByText('150')).toBeInTheDocument();
});
