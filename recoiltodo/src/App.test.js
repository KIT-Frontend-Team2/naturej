import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	render(<App />)
	// const linkElement = screen.getByText(/learn react/i); // 이때는 에러
	const linkElement = screen.getByText(/HEADER/i)
	expect(linkElement).toBeInTheDocument()
})
