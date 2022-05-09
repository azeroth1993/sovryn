import React, { useState, useEffect } from "react"

interface Message {
  text: string,
  className?: string,
  visible: boolean,
  custom?: boolean,
}

const Message: React.FunctionComponent<Message> = ({ text, className, visible = false, custom }) => {

  // states
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
  }, [visible])

  return <span className={`${show ? 'block' : 'hidden'} ${custom ? '' : 'text-sm text-cream capitalize mt-2 rounded-sm'} ${className}`}>{text}</span>
}
export default Message
