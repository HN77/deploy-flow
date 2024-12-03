import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from '../redux/slices/authSlice';
import { useFetchUserInfoQuery } from '../redux/slices/userApiSlice';

// eslint-disable-next-line react/prop-types
const AuthRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { data, isLoading } = useFetchUserInfoQuery();

  useEffect(() => {
    if (data && !userInfo) {
      dispatch(setCredentials(data)); // Set user info if fetched
    }
  }, [data, userInfo, dispatch]);

  if (isLoading) return null; // Optionally, show a loading spinner

  return data ? <Navigate to='/profile' /> : children;
};

export default AuthRoute;
