import * as React from 'react'

import { BASE_URL } from '../constants'

export const Header = () => (
  <header id="ch-header" className="text-center py-3">
    <a href={`${BASE_URL}/`}>
      <img
        src={`${BASE_URL}/static/images/ch_white_logo.svg`}
        className="logo"
        alt="logo"
      />
    </a>
  </header>
)
