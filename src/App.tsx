import React, { useState } from 'react'
import { Container, Row, Col, FormGroup, Label, InputGroup, Input, InputGroupAddon, Button, ListGroup, ListGroupItem } from 'reactstrap'

function App() {

  const [rna, setRna] = useState("AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA")

  return (
    <Container>
      <Row>
        <Col>
          <h1>RNA to Protein converter</h1>

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
                <Button disabled={rna.trim() === ''}>Translate</Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <Label>
              Protein
            </Label>
            <Input readOnly />
          </FormGroup>

          <FormGroup>
            <Label>
              Requirements
            </Label>
            <ListGroup>
              <ListGroupItem>AAAA</ListGroupItem>
              <ListGroupItem>AAAA</ListGroupItem>
              <ListGroupItem>AAAA</ListGroupItem>
              <ListGroupItem>AAAA</ListGroupItem>
            </ListGroup>
          </FormGroup>

        </Col>
      </Row>
    </Container>
  )
}

export default App
