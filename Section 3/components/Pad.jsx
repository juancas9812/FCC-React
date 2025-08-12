import { useState } from "react";

const Pad = (props) => {
  return (
    <button 
      style={{backgroundColor: props.backgroundColor}}
      className={props.isOn ? "on" : undefined}
      onClick={() => props.toggle(props.id)}
    >
    </button>
  )
}

export default Pad;