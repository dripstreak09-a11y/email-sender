import React from 'react'

function TextBox({background, border} : any) {
  return (
    <div 
          className="cursor-pointer w-full h-full" 
          style={{
            background: background,
            borderWidth: border?.isEnabled && border?.borderWidth,
            borderStyle: border?.isEnabled && border?.borderStyle,
            borderColor: border?.isEnabled && border?.borderColor,
            borderRadius: border?.isEnabled && `${border?.borderRadius[0]}px ${border?.borderRadius[1]}px ${border?.borderRadius[2]}px ${border?.borderRadius[3]}px`
          }}
    ></div>
  )
}

export default TextBox