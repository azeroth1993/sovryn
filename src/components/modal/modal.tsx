import React, { useState, useEffect } from "react"

interface Modal {
  className?: string,
  title: string,
  children?: React.ReactNode,
  open: boolean,
  onClose?: any,
}

const Modal: React.FunctionComponent<Modal> = ({ title, className, children, open = false, onClose }) => {

  const [isOpen, setIsOpen] = useState(open)

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  }

  const toggleModal = (open: boolean) => {
    open ? setIsOpen(true) : setIsOpen(false);
  }

  useEffect(() => {
    toggleModal(open);
  }, [open])

  return (
    <div className={`justify-center items-center absolute top-0 bottom-0 left-0 right-0 w-screen h-screen max-w-3xl mx-auto ${isOpen ? 'flex' : 'hidden'} ${className}`}>
      <div
        className={`absolute w-full h-full top-0 bottom-0 bg-slate-400 bg-opacity-30 z-20`}
        onClick={closeModal}
      ></div>
      <div className="block relative shadow-md bg-white w-[90%] h-auto rounded-md z-20">
        <header className="flex justify-between items-center w-full border-b h-16 pl-6 pr-3">
          <span className="text-xl font-bold capitalize">{title}</span>
          <svg className="w-14 h-14 p-3 cursor-pointer" onClick={closeModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z" /></svg>
        </header>
        <main className="">
          {children}
        </main>
      </div>
    </div>
  )
}
export default Modal

