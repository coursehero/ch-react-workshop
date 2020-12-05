import * as React from 'react'
import {
  render,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route } from 'react-router-dom'

import { DocLanding } from './DocLanding'
import { MOCK_DOCS } from '../../test-utils/mocks'
import { DEFAULT_DOC } from '../../constants'
