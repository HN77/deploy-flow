import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useLoginMutation } from '../../redux/slices/userApiSlice';
import { setCredentials } from '../../redux/slices/authSlice';
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Register,
  Button,
} from './SigninElements';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get('redirect') || '/profile';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
      toast.success('Vous êtes connecté avec succès!');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Title>Connexion</Title>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </FormGroup>
        <Button type='submit' disabled={isLoading}>
          Connexion
        </Button>
        <Register>
          New Customer?{' '}
          <Link
            to={redirect ? `/inscription?redirect=${redirect}` : '/inscrition'}
          >
            Inscription
          </Link>
        </Register>
      </Form>
    </Container>
  );
};

export default Signin;
