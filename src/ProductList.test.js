import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';
import axios from 'axios';

jest.mock('axios');

test('loads and displays products', async () => {
  const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
  axios.get.mockResolvedValueOnce({ data: products });

  render(<ProductList />);

  expect(await screen.findByText('Product 1')).toBeInTheDocument();
  expect(await screen.findByText('Product 2')).toBeInTheDocument();
});

test('loads more products on scroll', async () => {
  const products = Array.from({ length: 20 }, (_, i) => ({ id: i, name: `Product ${i}` }));
  axios.get.mockResolvedValue({ data: products });

  render(<ProductList />);

  fireEvent.scroll(window, { target: { scrollingElement: { scrollHeight: 2000, scrollTop: 1000, clientHeight: 1000 } } });

  expect(await screen.findByText('Product 19')).toBeInTheDocument();
});
