import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { DEFAULT_DOC } from '../constants/index'

export const renderWithRouter = <TProps extends object>(
  Component:
    | React.ForwardRefExoticComponent<TProps>
    | React.ComponentType<TProps>,
  { ...props }: TProps,
) => {
  if (!Component) {
    return null
  }

  return render(
    <MemoryRouter initialEntries={[`/${DEFAULT_DOC}`]}>
      <Route path="/:docName">
        <Component {...props} />
      </Route>
    </MemoryRouter>,
  )
}
