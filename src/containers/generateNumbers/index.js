import React from 'react'
import {
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";


export const Input = ({ newNumberRage, generateNumbers }) => {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Amount / Number of contacts to generate"
          aria-label="Amount / Number of contacts to generate"
          aria-describedby="basic-addon2"
          onChange={newNumberRage}
          name="range"
          id="numberChange"
        />
        <InputGroup.Append>
          <Button onClick={generateNumbers} variant="dark">
            New Numbers
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
}
