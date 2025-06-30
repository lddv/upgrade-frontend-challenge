import './styles.css'
import '../../components/styles.css'
import { useEffect, useRef } from 'react'

const SignUp = ({ onClickHandler, userData }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  useEffect(() => {
    nameRef.current.value = userData.name;
    emailRef.current.value = userData.email;
    passwordRef.current.value = userData.password;
  }, [userData])

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    onClickHandler(formValues);
  }

  return (
    <main>
      <h2>SIGN UP</h2>
      <form className='column' onSubmit={onSubmitHandler}>
        <input ref={nameRef} name="name" placeholder="FIRST NAME" />
        <input ref={emailRef} name="email" placeholder="E-MAIL" />
        <input ref={passwordRef} name="password" placeholder="PASSWORD" type='password' />
        <button className='next' type='submit'>NEXT</button>
      </form>
    </main>
  )
}

export default SignUp;