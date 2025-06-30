import '../styles.css'

const Error = ({ onRestart }) => {
  return (
    <main>
      <h2>Error</h2>

      <div>
        <div>❌</div>
        <div>Uh oh, something went wrong. Please try again later.</div>
      </div>
      
      <div className='button-row'>
        <button onClick={onRestart}>Restart</button>
      </div>
    </main>
  )
}

export default Error;