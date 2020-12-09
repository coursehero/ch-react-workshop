import * as React from 'react'
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route } from 'react-router-dom'

import { MOCK_DOCS } from '../../test-utils/mocks'
import { DEFAULT_DOC } from '../../constants'

import { DocLanding } from './DocLanding'
