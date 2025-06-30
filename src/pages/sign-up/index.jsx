import './styles.css'
import '../../components/styles.css'

const SignUp = ({ onClickHandler }) => {
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
        <input name="name" placeholder="FIRST NAME" />
        <input name="email" placeholder="E-MAIL" />
        <input name="password" placeholder="PASSWORD" type='password' />
        <button className='next' type='submit'>NEXT</button>
      </form>
    </main>
  )
}

export default SignUp;