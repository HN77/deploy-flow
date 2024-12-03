import styled from 'styled-components';

export const Container = styled.div`
  min-height: 76svh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 50%;
  width: 20rem;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;
`;
export const UserInfo = styled.div`
  margin-top: 2rem;
`;
export const Text = styled.div`
  font-size: 1.6rem;
  padding: 0.5rem 0;
`;
