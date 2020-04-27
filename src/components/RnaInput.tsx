import React, { useState } from 'react'
import { FormGroup, Label, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

interface Props {
  onTranslate: (rna: string) => void
  invalid: boolean
}

const rnaExample = 'AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA'

const RnaInput = ({ onTranslate, invalid }: Props) => {

  const [rna, setRna] = useState(rnaExample)

  return (
    <FormGroup>
      <Label>
        RNA codons
      </Label>
      <InputGroup>
        <Input
          value={rna}
          invalid={invalid}
          onChange={event => setRna(event.target.value)}
          onKeyPress={event => event.key === 'Enter' && onTranslate(rna)}
        />
        <InputGroupAddon addonType="append">
          <Button
            color="primary"
            disabled={rna.trim() === ''}
            onClick={() => onTranslate(rna)}
          >
            Translate
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              setRna(rnaExample)
              onTranslate(rnaExample)
            }}
          >
            Reset to example
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  )
}

export default RnaInput
