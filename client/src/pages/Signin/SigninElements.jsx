import styled from 'styled-components';

export const Container = styled.div`
  min-height: 76svh;
  display: grid;
  grid-template-rows: 8rem 1fr 8rem;

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];
`;

export const Title = styled.h1`
  color: #f59e0b;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: calc(2vw + 1.6rem);
`;
export const Form = styled.form`
  grid-row: 2 / 3;
  grid-column: 4 / 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #696969;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  outline: none;
`;

export const Register = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  font-size: 1.5rem;
  padding: 1.1rem;
  margin: 2rem 0 1rem 0;
  border-radius: 0.5rem;
  border: none;
  background-color: #f59e0b;
  cursor: pointer;
`;
