import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'
import { describe, expect, test, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('DASHBOARD TEST', () => {
  test('renders content', () => {
  
    render(<Dashboard  />)
    screen.debug()
    const element = screen.getByText('texto prueba')
    screen.debug(element)
    expect(element).toBeDefined()
  })
  
  test('click button', async() => {
    // mock de window.alert
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    render(<Dashboard />)
    
    const user = userEvent.setup()
    const button = screen.getByText("Button")

    await user.click(button)

    // aseguramos que alert se llamó
    expect(alertMock).toHaveBeenCalledTimes(1)

    // restauramos el mock
    alertMock.mockRestore()
    
    })

})
