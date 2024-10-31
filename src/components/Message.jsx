import { useContext } from "react";
import { MessageContext } from "../store/messageStore";

function Message() {
    // message 對照的是 initState dispatch是他的方法
  const [message] = useContext(MessageContext)
  return (
    <>
        <div className='toast-container position-fixed' style={{ top: '15px', right: '15px' }}>
          {message.title && (<div
            className='toast show'
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
            data-delay='3000'
          >
            <div className={`toast-header text-white bg-${message.type}`}>
              <strong className='me-auto'>{message.title}</strong>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='toast'
                aria-label='Close'
              />
            </div>
            <div className='toast-body'>{message.text}</div>
          </div>)}

        </div>
    </>

  );
}

export default Message;