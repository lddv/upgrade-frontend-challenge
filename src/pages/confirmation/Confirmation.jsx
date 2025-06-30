import '../styles.css'

const Confirmation = ({ userData, backHandler, submitHandler }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    const formValues = {
      color: formData.get('colors'),
      terms: formData.get('terms') === 'on',
    };
    console.log({formData, formValues});

    submitHandler(formValues);
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
          <button className='next' type='submit'>SUBMIT</button>
        </div>
      </form>
    </main>
  )
}

export default Confirmation;