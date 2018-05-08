import * as Auth from './AuthService'

it('Smoke tests', () => {
  expect(Auth.getCurrentUser).toBeDefined()
  expect(Auth.setCurrentUser).toBeDefined()
})
