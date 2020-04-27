import React, { useState } from 'react'
import { Container, Row, Col, FormGroup, Label, ListGroup, ListGroupItem } from 'reactstrap'
import RnaInput from './components/RnaInput'
import ProteinResult from './components/ProteinResult'

function App() {

  const [rna, setRna] = useState("AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA")

  return (
    <Container>
      <Row>
        <Col>
          <h1>RNA to Protein converter</h1>

          <RnaInput rna={rna} setRna={setRna} />
          <ProteinResult protein="" />

          <FormGroup>
            <Label>
              Requirements
            </Label>
            <ListGroup>
              <ListGroupItem>Must start with AUG codon.</ListGroupItem>
              <ListGroupItem>Must end with one of UAA, UAG, or UGA codons.</ListGroupItem>
              <ListGroupItem>UAA, UAG, and UGA codons must be at the end.</ListGroupItem>
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
