import React from 'react'
import { FormGroup, Label, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

interface Props {
  rna: string
  setRna: (rna: string) => void
}

const RnaInput = ({ rna, setRna }: Props) => <FormGroup>
  <Label>
    RNA codons
  </Label>
  <InputGroup>
    <Input
      value={rna}
      onChange={event => setRna(event.target.value)}
    />
    <InputGroupAddon addonType="append">
      <Button disabled={rna.trim() === ''}>Translate</Button>
    </InputGroupAddon>
  </InputGroup>
</FormGroup>

export default RnaInput
