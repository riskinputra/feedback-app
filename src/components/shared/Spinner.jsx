import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <img src={spinner} alt="Loading..." style={styles.loading} />
  )
}

const styles = {
  loading: {
    width: '100px',
    margin: 'auto',
    display: 'block'
  }
}

export default Spinner
