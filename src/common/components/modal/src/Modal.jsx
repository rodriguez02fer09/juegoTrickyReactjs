// src/common/components/modal/src/Modal.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import '../style/desktop.scss'

const Modal = ({children, containerId = 'modal'}) => {
  const mount = document.getElementById(containerId)
  if (!mount) return null
  return ReactDOM.createPortal(
    <>
      <div className="modalBackground" />
      <div className="modal">{children}</div>
    </>,
    mount,
  )
}

export default Modal
