import { useNavigate } from "react-router";
import '../styles.css'
import { useFormSubmit } from './data/useFormSubmit';

const Confirmation = ({ userData, backHandler, submitHandler }) => {
  const navigate = useNavigate();
  const { isLoading, error, formSubmitAction } = useFormSubmit();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const hasError = await formSubmitAction(userData);

    if (hasError) {
      submitHandler.onError();
    } else {
      submitHandler.onSuccess();
    }
  }

  return (
    <main>
      <h2>CONFIRMATION</h2>
      <form className='column' onSubmit={onSubmitHandler}>
        <ul>
          <li>FIRST NAME: {userData.name}</li>
          <li>E-MAIL: {userData.email}</li>
          <li>PASSWORD: *****</li>
          <li>FAVORITE COLOR: {userData.color}</li>
          <li>TERMS AND CONDITIONS: AGREED</li>
        </ul>

        <div className='button-row'>
          <button className='previous' onClick={backHandler} type="button">BACK</button>
          <button className='next' type='submit' disabled={isLoading}>SUBMIT</button>
        </div>
      </form>
    </main>
  )
}

export default Confirmation;