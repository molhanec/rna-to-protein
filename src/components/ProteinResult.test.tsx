import React from 'react'
import { render } from '@testing-library/react'
import ProteinResult from './ProteinResult'

describe('<ProteinResult />', () => {
  it('matches snapshot', () => {
    const { container } = render(<ProteinResult protein="protein" />)
    expect(container).toMatchSnapshot()
  })
})
