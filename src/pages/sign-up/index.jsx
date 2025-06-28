import { useRef } from 'react';
import './styles.css'

const SignUp = ({ onClickHandler }) => {
  const ref = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    const formValues = {
      name: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    };
    console.log({formData, formValues});

    onClickHandler(formValues);
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form className='column' onSubmit={onSubmitHandler}>
        <input name="username" placeholder="First Name" />
        <input name="email" placeholder="E-mail" />
        <input name="password" placeholder="Password" type='password' />
        <button className='next' type='submit'>Next</button>
      </form>
    </div>
  )
}

export default SignUp;