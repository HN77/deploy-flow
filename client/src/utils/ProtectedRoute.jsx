import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { userInfo, isLoading, isError } = useSelector((state) => state.auth);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !userInfo) return <Navigate to='/connexion' />;

  return children;
};

export default ProtectedRoute;
