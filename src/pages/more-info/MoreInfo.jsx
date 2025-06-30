import { useRef, useEffect } from 'react';

import ColorSelect from './components/ColorSelect';
import { useGetColors } from './data/useGetColors'

import './styles.css'
import '../styles.css'

const MoreInfo = ({ backHandler, nextHandler, userData }) => {
  const formRef = useRef(null);

  const {isLoading, colors, error } = useGetColors();

  useEffect(() => {
    if (!formRef.current) return;

    formRef.current.elements.terms.checked = userData.terms;
  }, [userData]);

  useEffect(() => {
    if (!formRef.current) return;

    if (!isLoading && !error && userData.color)
      formRef.current.elements.colors.value = userData.color;
  }, [userData, isLoading, error]);

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

  const isNextDisabled = isLoading || error;

  return (
    <main>
      <h2>ADDITIONAL INFO</h2>
      <form ref={formRef} className='column' onSubmit={onSubmitHandler}>
        <ColorSelect isLoading={isLoading} colors={colors} error={error} />

        <div className='terms-row'>
          <input type='checkbox' name="terms" />
          <label htmlFor="terms">I AGREE TO <a href="http://upgrade.com">TERMS AND CONDITIONS</a></label>
        </div>
        
        <div className='button-row'>
          <button type='button' className='previous' onClick={backHandler}>Back</button>
          <button className='next' type='submit' disabled={isNextDisabled}>Next</button>
        </div>
      </form>
    </main>
  )
}

export default MoreInfo;