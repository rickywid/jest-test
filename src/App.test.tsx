import React from 'react';
import { render, fireEvent, waitFor, act} from '@testing-library/react';
import App from './App';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

test('increment count', () => {
  const { getByTestId } = render(<App />);
  const addBtn = getByTestId('add');
  const count = getByTestId('counter');
  fireEvent.click(addBtn);
  expect(count).toHaveTextContent(1)
});

test('decrement count', () => {
  const { getByTestId } = render(<App />);
  const addBtn = getByTestId('minus');
  const count = getByTestId('counter');
  fireEvent.click(addBtn);
  expect(count).toHaveTextContent(-1)
});

test('show dog image when fetching', async () => {
  const { getByTestId } = render(<App />);
  const fetchBtn = getByTestId('fetch');

  fetchMock.mockResponseOnce(JSON.stringify({ fileSizeBytes: 464493, url: "https://random.dog/84cd21fe-6185-4b55-b075-7bc1418bf731.mp4" }));

  fireEvent.click(fetchBtn);
  
  await waitFor(() => expect(getByTestId('error')).toHaveTextContent('invalid file type'));
  
});




