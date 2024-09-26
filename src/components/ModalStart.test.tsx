import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ModalStart from '../components/ModalStart';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axios);

describe('ModalStart Component', () => {
    beforeEach(() => {
        mockAxios.resetHistory();  
    });

    it('should make a successful login request', async () => {
        mockAxios.onPost('http://localhost:3001/users/login').reply(200, {
            message: 'Login successful',
        });

        render(<ModalStart isOpen={true} onClose={() => { }} />);

        const nomeInput = screen.getByPlaceholderText(/Nome/i);
        fireEvent.change(nomeInput, { target: { value: 'Mateus' } });

        const edvInput = screen.getByPlaceholderText(/EDV/i);
        fireEvent.change(edvInput, { target: { value: '67890' } });

        const button = screen.getByText(/INICIAR/i);
        fireEvent.click(button);

        await waitFor(() => {
            const successMessage = screen.getByText(/Login successful/i);
            expect(successMessage).toBeInTheDocument();
        });

        expect(mockAxios.history.post.length).toBe(1);
        expect(mockAxios.history.post[0].url).toBe('http://localhost:3001/users/login');
        expect(mockAxios.history.post[0].data).toEqual(JSON.stringify({ edv: '67890', username: 'Mateus' }));
    });

    it('should show an error if the login request fails', async () => {
        mockAxios.onPost('http://localhost:3001/users/login').reply(401, {
            message: 'Invalid credentials',
        });

        render(<ModalStart isOpen={true} onClose={() => { }} />);

        const nomeInput = screen.getByPlaceholderText(/Nome/i);
        fireEvent.change(nomeInput, { target: { value: 'Mateus' } });

        const edvInput = screen.getByPlaceholderText(/EDV/i);
        fireEvent.change(edvInput, { target: { value: '67890' } });

        const button = screen.getByText(/INICIAR/i);
        fireEvent.click(button);

        await waitFor(() => {
            const errorMessage = screen.queryByText(/Invalid EDV or username/i);
            expect(errorMessage).toBeInTheDocument();
        }, { timeout: 10000 });

        expect(mockAxios.history.post.length).toBe(1);
        expect(mockAxios.history.post[0].url).toBe('http://localhost:3001/users/login');
        expect(mockAxios.history.post[0].data).toEqual(JSON.stringify({ edv: '67890', username: 'Mateus' }));
    }, 10000);
});
