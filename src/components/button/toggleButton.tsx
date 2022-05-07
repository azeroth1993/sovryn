import React, { useState, useEffect } from "react"

interface ToggleButton {
  className?: string,
  activeClass?: string,
  value?: string | number,
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, isActive: boolean) => void,
  selected?: boolean,
}

const ToggleButton: React.FunctionComponent<ToggleButton> = ({ className, value = '', children, onClick, selected = false, activeClass }) => {

  const [isActive, setIsActive] = useState(selected);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(!isActive);
    onClick && onClick(e, isActive);
  }

  useEffect(() => {
    selected === false && setIsActive(false);
  }, [selected])


  return (
    <button
      type="button"
      data-value={value}
      data-type={typeof(value) === 'number' ? 'number' : 'string'}
      className={`flex justify-center items-center outline-none focus:outline-none h-10 ${isActive ? activeClass : ''} ${className}`}
      onClick={handleToggle}
    >
      {children}
    </button>
  )

}
export default ToggleButton
