import * as React from 'react'
import { render, within } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'

import { DEFAULT_DOC, RELATED_DOCS_VIEWED } from '../../constants'
import { MOCK_RELATED_DOCS } from '../../test-utils/mocks'

import { RelatedDocs } from './RelatedDocs'
