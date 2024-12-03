import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/GlobalStyles';
import { Home, Profile, Signin, Signup } from './pages';
import { Navbar } from './components';
import ProtectedRoute from './utils/ProtectedRoute';
import AuthRoute from './utils/AuthRoute';

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: 'connexion',
          element: (
            <AuthRoute>
              <Signin />
            </AuthRoute>
          ),
        },
        {
          path: 'inscription',
          element: (
            <AuthRoute>
              <Signup />
            </AuthRoute>
          ),
        },
        {
          path: 'profile',
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
