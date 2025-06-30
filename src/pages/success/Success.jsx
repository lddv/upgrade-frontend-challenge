import '../styles.css'

const Success = ({ onRestart }) => {
  return (
    <main>
      <h2>Success!</h2>

      <div>
        <div>✅</div>
        <div>You should receive a confirmation email soon.</div>
      </div>
      
      <div className='button-row'>
        <button onClick={onRestart}>Restart</button>
      </div>
    </main>
  )
}

export default Success;