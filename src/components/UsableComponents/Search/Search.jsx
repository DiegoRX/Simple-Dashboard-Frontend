import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 30px;
`;

const SearchContainer = styled.div`
    border: 1px solid #d4d4d4;
    border-radius: 15px;
    margin-right: 10px;
    padding-right: 15px;
    width: 48%;
    @media (max-width: 767px){
      width: 100%;
    }
`;

const Form = styled.form`
    margin: 0px;
    display: inline-flex;
    width: 100%;
`;

const Button = styled.div`
    border: 0;
    background-color: transparent;
    cursor: pointer;
    margin: 5px;
`;

const Input = styled.input`
    margin: 0px;
    border: 0;
    height: auto;
    width: 100%;
    appearance: searchfield;
    background: transparent;
    border-radius: 2px;
    outline: #d4d4d4;
    font-size: 16px;
    color: rgba(0,0,0,.87);
`;

const Search = ({ onClick }) => {
  const [keyWord, setKeyWord] = useState('');

  const handleInput = (event) => {
    setKeyWord(
      event.target.value,
    );
    // onClick(keyWord);
  };
  return (
    <SearchRow>
      <SearchContainer>
        <Form>
          <Button
            type='button'
            onClick={() => onClick(keyWord)}
            onKeyPress={() => onClick(keyWord)}
          >
            <SearchIcon style={{ color: '#d4d4d4' }} />
          </Button>
          <Input
            placeholder='Buscar'
            onChange={handleInput}
          />
        </Form>
      </SearchContainer>
    </SearchRow>

  );
};

export default Search;
