import React from 'react'
import { render } from '@testing-library/react'
import Requirement from './Requirement'

describe('<Requirement />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Requirement invalid={true}>Msg</Requirement>)
    expect(container).toMatchSnapshot()
  })
})
