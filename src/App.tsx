import React, { useState } from 'react'
import { Container, Row, Col, FormGroup, Label, ListGroup, ListGroupItem } from 'reactstrap'
import RnaInput from './components/RnaInput'
import ProteinResult from './components/ProteinResult'
import { rnaToProtein, TranslationResult } from "./logic/translate"

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
              <ListGroupItem>Must start with AUG codon.</ListGroupItem>
              <ListGroupItem>Must end with one of UAA, UAG, or UGA codons.</ListGroupItem>
              <ListGroupItem>UAA, UAG, and UGA codons cannot be in the middle of RNA.</ListGroupItem>
              <ListGroupItem>All codons are triplets.</ListGroupItem>
              <ListGroupItem>Codons consist only of letters A, C, G, and U.</ListGroupItem>
            </ListGroup>
          </FormGroup>

        </Col>
      </Row>
    </Container>
  )
}

export default App
