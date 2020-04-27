import React, { ReactNode } from 'react'
import { ListGroupItem } from 'reactstrap'

interface Props {
  invalid: boolean
  children: ReactNode
}

const Requirement = ({ invalid, children }: Props) => (
  <ListGroupItem color={invalid ? 'danger' : ''} >
    {children}
  </ListGroupItem>
)

export default Requirement
