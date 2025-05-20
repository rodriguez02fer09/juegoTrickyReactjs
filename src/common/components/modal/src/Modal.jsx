// src/common/components/modal/src/Modal.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import '../style/desktop.scss'

const Modal = ({children}) => {
  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modal">{children}</div>
    </div>,
    document.body, // monta SIEMPRE en el body, nunca dentro de #root ni en otro div
  )
}

export default Modal
