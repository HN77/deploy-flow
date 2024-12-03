import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../../redux/slices/userApiSlice';
import { setLogout } from '../../redux/slices/authSlice';
import { toast } from 'react-toastify';
import {
  Container,
  Content,
  Logo,
  Auth,
  Login,
  Register,
  Dropdown,
  Username,
  Profile,
  Logout,
} from './NavbarElements';

const Navbar = () => {
  const { userInfo, refetch } = useSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(setLogout());
      refetch(); // Refresh `userInfo` after logout
      navigate('/connexion');
      toast.success('Vous êtes déconnecté avec succès !!');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <Container>
      <Content>
        <Logo>
          <Link to='/'>Art.</Link>
        </Logo>
        {userInfo ? (
          <>
            <Username
              onMouseEnter={() => setCollapsed(true)}
              onMouseLeave={() => setCollapsed(false)}
            >
              Bonjour, {userInfo.username}
            </Username>
            {collapsed && (
              <Dropdown
                onMouseEnter={() => setCollapsed(true)}
                onMouseLeave={() => setCollapsed(false)}
              >
                <Profile>
                  <Link to='/profile'>Profile</Link>
                </Profile>
                <Logout onClick={logoutHandler}>Déconnexion</Logout>
              </Dropdown>
            )}
          </>
        ) : (
          <Auth>
            <Login>
              <Link to='/connexion'>Connexion</Link>
            </Login>
            <Register>
              <Link to='/inscription'>Inscription</Link>
            </Register>
          </Auth>
        )}
      </Content>
    </Container>
  );
};

export default Navbar;
