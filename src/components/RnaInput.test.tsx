import React from 'react'
import { render } from '@testing-library/react'
import RnaInput from './RnaInput'

describe('<RnaInput />', () => {
  it('matches snapshot', () => {
    const { container } = render(<RnaInput onTranslate={() => { }} />)
    expect(container).toMatchSnapshot()
  })
})
