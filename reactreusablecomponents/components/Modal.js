import React, { useState, useEffect } from "react";
/*
Our modal component does two things:

It receives a boolean value that determines if it pops up or not
It also receives the message to be displayed when it pops up
To close the modal, we’d need to set the show state to false. We can do that by calling a setTimeout() function in the useEffect() hook after a few seconds.


*/
function Modal(props) {
  const [message] = useState(props.message);
  const [show, setShow] = useState(props.show);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  });
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">{message}</section>
    </div>
  );
}
export default Modal;