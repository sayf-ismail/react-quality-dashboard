import React from 'react'
import logo from './logo.svg'

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'roboto'
    }}>
    <img src={logo} alt="Quality Logo" />
      <h1 style={{
        color: '#6EC177',
        margin: 0
      }}>What's up, Coming Soon</h1>
      <p>Be seeing you! </p>
    </div>
  )
}

export default App
