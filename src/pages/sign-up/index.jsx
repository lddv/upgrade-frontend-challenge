import './styles.css'

const SignUp = ({ onClickHandler }) => {
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
    <main>
      <h2>SIGN UP</h2>
      <form className='column' onSubmit={onSubmitHandler}>
        <input name="username" placeholder="FIRST NAME" />
        <input name="email" placeholder="E-MAIL" />
        <input name="password" placeholder="PASSWORD" type='password' />
        <button className='next' type='submit'>NEXT</button>
      </form>
    </main>
  )
}

export default SignUp;