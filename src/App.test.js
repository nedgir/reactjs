import { render, screen } from '@testing-library/react';
import App from './App';
describe('suite1',()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Page/i);
    expect(linkElement).toBeInTheDocument();
  });

})

