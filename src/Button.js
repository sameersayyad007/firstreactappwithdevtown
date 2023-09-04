import React from 'react'
import styled from 'styled-components'

export default function Button() {
    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    font-size: 15px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 2em 5em;
    padding: 0.55em 2em; `
    
  return (
    <div>

<Button $primary onClick={()=>alert('welcome')}>Primary</Button>
      
    </div>
  )
}
