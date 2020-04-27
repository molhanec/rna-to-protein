import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

interface Props {
  protein: string
}

const ProteinResult = ({ protein }: Props) => (
  <FormGroup>
    <Label>
      Protein
    </Label>
    <Input readOnly value={protein} />
  </FormGroup>
)

export default ProteinResult
