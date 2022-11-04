import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { fireEvent } from '@testing-library/react'

test('renders two message elements', () => {
  const app = render(<App />);
  const inputHeadings = app.getAllByText(/message:/i);
  expect(inputHeadings.length).toBe(2);
});

test('has a GreetingComponent', () => {
  const app = render(<App />);

  const greetingComponent = app.getByText(/Anonymous/i);

  expect(greetingComponent).toBeInTheDocument();
})

test('changing the input updates the message', () => {
  const app = render(<App />);

  const input = app.getByLabelText(/user name/i);

  fireEvent.change(input, { target: { value: 'Ada Lovelace '}});

  const message1 = app.getByText(/Hello, Ada Lovelace/i);
  expect(message1).toBeInTheDocument();

  const clearButton = app.getByText(/clear/i);

  fireEvent.click(clearButton);

  const message2 = app.getByText(/Hello, Anonymous/i);
  expect(message2).toBeInTheDocument();
})
