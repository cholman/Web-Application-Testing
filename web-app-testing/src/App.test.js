import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as rtl from '@testing-library/react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

test('renders without crashing', () => {
    const page = rtl.render(<App/>)
    expect(page).toBeVisible
})

test('renders display component', () => {
    const { getByText } = rtl.render(<Display />);
    const displayElement = getByText(/strikes/i);
    expect(displayElement).toBeInTheDocument();
})

test('renders dashboard', () => {
    const { getByText } = rtl.render (<Dashboard />);
    const dashboardElement = getByText(/ball/i);
    expect(dashboardElement).toBeInTheDocument();
})

