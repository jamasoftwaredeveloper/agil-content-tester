import styled from 'styled-components';
// Fila de la tabla
export const ButtonPrimary = styled.button`
background-color: #0077cc;
color: #fff;
border: none;
border-radius: 5px;
padding: 0.2rem 0.5rem;
cursor: pointer;
font-size:12px;

&:hover {
  background-color: #006bb3;
}

&:active {
  background-color: #005999;
}

&:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 119, 204, 0.5);
}
margin:1px 1px 1px 1px
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0077cc;
  }
`;

export const H2 = styled.div`
  margin: 12px 12px 0px 12px;
  font-size:24px;
  font-weight: bold;
`;

export const StyledSelect = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  appearance: none;
  width: 100%;
  max-width: 300px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #0077cc;
    box-shadow: 0 0 0 2px rgba(0, 119, 204, 0.3);
  }

  &::-ms-expand {
    display: none;
  }
  margin-bottom:20px
`;



