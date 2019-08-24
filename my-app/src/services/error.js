import React from 'react'

const Notification = ({ message }) => {
    if (message === null){
        return null
    }

    const errorStyle = {
        position:'fixed',
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        width:'88.5%',
        margin:'auto',
        boxSizing: 'border-box',
        display:'none',
    }

    return (
        <div style={errorStyle}>
            {message}
        </div>
    )
  }

  const Footer = () =>{
    const footerStyle = {
      clear:'both',
      position: 'absolute',
      height:'2.5rem',
      bottom: '0',
      left: '0',
      width: '100%',
      color: 'white',
      fontStyle: 'italic',
      background:'#333',
      textAlign: 'center',
    }
  
    return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Kattenelvis</em>
    </div>)
  } 

  export default {Notification, Footer}