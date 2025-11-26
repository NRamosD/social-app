import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
//https://fullstackopen.com/es/part5/probando_aplicaciones_react
afterEach(() => {
  cleanup()
})