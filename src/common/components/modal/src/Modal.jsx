import React from 'react'
import ReactDOM from 'react-dom'
import '../style/desktop.scss'
import ReportGame from '../../reportGame/src/ReportGame'

const Modal = ({children}) => {
  return ReactDOM.createPortal(
    <>
      <div className="modalBackground"></div>
      <div className="modal">{children}</div>
    </>,
    document.getElementById('modal'),
  )
}

export default Modal
