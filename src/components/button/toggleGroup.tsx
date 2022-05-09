import React, { useEffect, useState } from "react"
import ToggleButton from './toggleButton'

interface ToggleGroup {
  className?: string,
  value?: string,
  onChange?: (event: any, isActive: boolean) => void,
  children: any
}

const ToggleGroup: React.FunctionComponent<ToggleGroup> = ({ onChange, className, value = '', children}) => {

  const [currentButton, setCurrentButton] = useState<string | number | undefined>(value);

  const setChildState = (e: React.MouseEvent<HTMLButtonElement>, isActive: boolean) => {
    let data = e.currentTarget.dataset;
    setCurrentButton(data.type === 'number' ? data.value && Number(data.value) : data.value);
    onChange && onChange(data.value, isActive);
  }

  const getStatus = (val: any) => {
    let status = currentButton === val;
    return status;
  }

  return (
    <div
      className={`${className}`}
    >
      {children.map((x: any, i:number) => {
        return <ToggleButton 
          key={i + x.props.value} 
          value={x.props.value} 
          className={x.props.className}
          activeClass={x.props.activeClass}
          onClick={(e, isActive) => setChildState(e, isActive)}
          selected={getStatus(x.props.value)}
        >
          {x.props.children}
        </ToggleButton>
      })}
    </div>
  )

}
export default ToggleGroup
