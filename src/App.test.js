import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
const mockData = {
    trigram: { lines: [1, 0, 1, 0, 1, 0] },
    visualDisplay: { visual: 'Yang Yin Yang Yin Yang Yin' },
    explanation: 'Mixed lines indicate balance and harmony.'
};

beforeEach(() => {
    mock.reset();
    mock.onGet('http://localhost:3000/reading').reply(200, mockData);
});

afterAll(() => {
    mock.restore();
});

/**
 * Test suite for the App component.
 */
describe('App Component', () => {
    test('renders loading state initially', async () => {
        render(<App />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
        // Wait for loading to finish to clean up state
        await waitFor(() => {
            expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
        });
    });

    test('renders trigram data after fetching', async () => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText(/1 0 1 0 1 0/i)).toBeInTheDocument();
        });
    });

    test('renders energy visual after fetching', async () => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText(/Yang Yin Yang Yin Yang Yin/i)).toBeInTheDocument();
        });
    });

    test('renders explanation after fetching', async () => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText(/Mixed lines indicate balance and harmony./i)).toBeInTheDocument();
        });
    });

    test('handles API error', async () => {
        mock.reset();
        mock.onGet('http://localhost:3000/reading').networkError();
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText(/Error:/i)).toBeInTheDocument();
        });
    });
});
