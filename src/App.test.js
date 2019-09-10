import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/react-testing';

import App from './App';
import User from './components/User';

afterEach(rtl.cleanup);

describe('App', () => {
  it ('it renders renders without error', () => {
    const testDOM = rtl.render(<App />);
    // console.log('testDOM ', testDOM.debug());
    // const header = testDOM.queryByText(/learn react/i);
    // console.log(header.textContent);
    
    // <MockedProvider client={[]} >
    //   <User />
    // </MockedProvider>
    
    // expect(header).toBeInTheDocument();
  })
});
