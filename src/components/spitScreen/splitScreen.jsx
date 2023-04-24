import React from 'react'
import "./splitScreen.css"
import Randomtext from '../Randomtext'
export default function SplitScreen
() {
  return (
    <div>
        <div class="split left">
  <div class="centered">
  
    <Randomtext/>
  </div>
</div>

<div class="split right">
  <div class="centered">
    <img src="img_avatar.png" alt="Avatar man"/>
    <h2>John Doe</h2>
    <p>Some text here too.</p>
  </div>
</div>
    </div>
  )
}
