import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  it ('it renders header with the text Learn React', () => {
    const testDOM = rtl.render(<App />);
    // console.log('testDOM ', testDOM.debug());
    const header = testDOM.queryByText(/learn react/i);
    // console.log(header.textContent);
    expect(header).toBeInTheDocument();
  })
});
