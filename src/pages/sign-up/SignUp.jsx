import { useEffect, useRef } from 'react'

import './styles.css'
import '../styles.css'

import {isValidEmail} from '../../utils'

const SignUp = ({ onClickHandler, userData }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (!formRef.current) return;

    formRef.current.elements.name.value = userData.name;
    formRef.current.elements.email.value = userData.email;
    formRef.current.elements.password.value = userData.password;
  }, [userData])

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    const emailInput = formRef.current.elements.email;

    if (isValidEmail(formValues.email)) {
      emailInput.setCustomValidity('');
      emailInput.reportValidity();
    } else {
      emailInput.setCustomValidity('This e-mail format is not accepted. Try something like user@domain.com');
      emailInput.reportValidity();
      return console.error('email not valid')
    }

    onClickHandler(formValues);
  }

  const cancelErrorMessageOnInput = (e) => e.target.setCustomValidity('');

  return (
    <main>
      <h2>SIGN UP</h2>
      <form role='form' ref={formRef} className='column' onSubmit={onSubmitHandler}>
        <input name="name" placeholder="FIRST NAME" required type='text' />
        <input name="email" placeholder="E-MAIL" required type='email' onInput={cancelErrorMessageOnInput} />
        <input name="password" placeholder="PASSWORD" required type='password' minLength={8} />
        <button className='next mt-40' type='submit'>NEXT</button>
      </form>
    </main>
  )
}

export default SignUp;