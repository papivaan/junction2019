import React from "react";
import {
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
import { useSearch } from '../contexts/search-context'

const Search = (props) => {
  const { searchQuery, setSearchQuery } = useSearch()

  const handleSearchQuery = (event) => {
    //console.log(event.target.value)
    setSearchQuery(event.target.value)
  }

  return (
    <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <FormGroup className="mb-0">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fas fa-search" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Search" type="text"
          value={searchQuery}
          onChange={handleSearchQuery} />
        </InputGroup>
      </FormGroup>
    </Form>
  )
}
export default Search;