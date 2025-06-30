import './styles.css'
import '../../components/styles.css'

const MoreInfo = ({ backHandler, nextHandler }) => {
  const colors = ['black', 'green', 'blue'];

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    const formValues = {
      color: formData.get('colors'),
      terms: formData.get('terms') === 'on',
    };

    console.log({formData, formValues});

    nextHandler(formValues);
  }

  return (
    <main>
      <h2>ADDITIONAL INFO</h2>
      <form className='column' onSubmit={onSubmitHandler}>

        <select name="colors">
          <option value="">SELECT YOUR FAVORITE COLOR</option>
          {colors.map((color) => (<option key={color} value={color}>{color}</option>))}
        </select>

        <div className='terms-row'>
          <input type='checkbox' name="terms" />
          <label htmlFor="terms">I AGREE TO <a href="http://google.com">TERMS AND CONDITIONS</a></label>
        </div>
        
        <div className='button-row'>
            <button type='button' className='previous' onClick={backHandler}>Back</button>
            <button className='next' type='submit'>Next</button>
        </div>
      </form>
    </main>
  )
}

export default MoreInfo;