import React, { useState } from 'react'
import { Container, Row, Col, FormGroup, Label, ListGroup, ListGroupItem } from 'reactstrap'
import RnaInput from './components/RnaInput'
import ProteinResult from './components/ProteinResult'
import { rnaToProtein, TranslationResult } from "./logic/translate"
import Requirement from './components/Requirement'

function App() {

  const [translationResult, setTranslationResult] = useState<TranslationResult | undefined>(undefined)

  return (
    <Container>
      <Row>
        <Col>
          <h1>RNA to Protein converter</h1>

          <RnaInput
            onTranslate={rna => setTranslationResult(rnaToProtein(rna))}
            invalid={!!(translationResult && translationResult.kind !== 'valid')}
          />

          <ProteinResult protein={
            translationResult?.kind === 'valid' ? translationResult.protein : ''
          } />

          <FormGroup>
            <Label>
              Requirements
            </Label>
            <ListGroup>
              <Requirement invalid={translationResult?.kind === 'invalidStart'} >Must start with AUG codon.</Requirement>
              <Requirement invalid={translationResult?.kind === 'invalidStop'} >Must end with one of UAA, UAG, or UGA codons.</Requirement>
              <Requirement invalid={translationResult?.kind === 'stopInside'}>UAA, UAG, and UGA codons cannot be in the middle of RNA.</Requirement>
              <Requirement invalid={translationResult?.kind === 'notTriplet'}>All codons are triplets.</Requirement>
              <Requirement invalid={translationResult?.kind === 'invalidCodon'}>Codons consist only of letters A, C, G, and U.</Requirement>
            </ListGroup>
          </FormGroup>

        </Col>
      </Row>
    </Container>
  )
}

export default App
