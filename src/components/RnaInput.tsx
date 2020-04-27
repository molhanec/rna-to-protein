import React, { useState } from 'react'
import { FormGroup, Label, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

interface Props {
  onTranslate: (rna: string) => void
}

const RnaInput = ({ onTranslate }: Props) => {

  const [rna, setRna] = useState("AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA")

  return (
    <FormGroup>
      <Label>
        RNA codons
      </Label>
      <InputGroup>
        <Input
          value={rna}
          onChange={event => setRna(event.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button
            disabled={rna.trim() === ''}
            onClick={() => onTranslate(rna)}
          >
            Translate
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  )
}

export default RnaInput
