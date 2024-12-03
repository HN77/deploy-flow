import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid #000;
  font-family: 'Josefin Sans', sans-serif;

  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f59e0b;
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  cursor: pointer;
`;

export const Auth = styled.div`
  display: flex;
  align-items: center;
`;

export const Login = styled.div`
  height: 100%;
  font-size: 1.7rem;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease-in;

  &:hover {
    color: #44a0f6;
  }

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const Register = styled.div`
  height: 100%;
  font-size: 1.7rem;
  margin-left: 3rem;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;

  &:hover {
    color: #44a0f6;
  }

  position: relative;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const Username = styled.div`
  height: 100%;
  font-size: 1.7rem;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;

  &:hover {
    color: #44a0f6;
  }

  @media screen and (max-width: 968px) {
    font-size: 1.6rem;
    grid-column: 8 / 9;
    justify-content: flex-end;
  }
`;

export const Dropdown = styled.div`
  color: #fff;
  width: 14rem;
  padding: 2rem 3rem;
  font-size: 1.6rem;
  font-weight: 300;
  background-color: #1b9c85;
  border-radius: 1rem;
  position: absolute;
  top: 6.5rem;
  right: 4.6vw;
  z-index: 999;
`;

export const Profile = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const Logout = styled.div`
  cursor: pointer;
`;
