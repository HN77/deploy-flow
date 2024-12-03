import { Navigate } from 'react-router-dom';
import { Container, Content, Title, UserInfo, Text } from './ProfileElements';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);

  if (isLoading) return <p>Loading...</p>;

  if (error || !userInfo) {
    return <Navigate to='/connexion' />;
  }

  return (
    <Container>
      <Content>
        <Title>Profile</Title>
        <UserInfo>
          <Text>Name: {userInfo.username}</Text>
          <Text>Email: {userInfo.email}</Text>
          <Text>Admin: {userInfo.isAdmin ? 'Yes' : 'No'}</Text>
        </UserInfo>
      </Content>
    </Container>
  );
};

export default Profile;
