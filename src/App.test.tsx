import App from "./App"
import {render, screen} from '@testing-library/react'

describe('<App />', () => {
  it('should render', async() => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is 0/})).toBeVisible()
  })
})