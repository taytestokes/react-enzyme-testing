import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Testing our React Components', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });
});