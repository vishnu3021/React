import React, { useState } from "react";
import MyVerticallyCenteredModal from "./FormBoot"
function Formstwo() {
    const [modalShow, setModalShow] = React.useState(false);
  const [currentText, updateText] = useState({
    name: "",
    mobileNumber: "",
    mail: "",
  });

  const handleInput = (e) => {
    // updateText(e.target.value);
    console.log(e.target.value)
    const { name, value, type } = e.target;

    updateText((a) => {
       console.log(a)
      return {
        ...a,
        [name]:value,
      };
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    setModalShow(true)
    // alert(currentText.name+ ' '+ currentText.mobileNumber + ' '+ currentText.mail);
  };

  return (
    <div>
      {/* <h1>hello{}</h1> */}
      <form onSubmit={submitData}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={currentText.name}
          onChange={handleInput}
        />
        <br />
        <input
          type="phnoeNo"
          name="mobileNumber"
          placeholder="mobile number"
          value={currentText.mobileNumber}
          onChange={handleInput}
        />
        <br />
        <input
          type="mail"
          name="mail"
          placeholder="mail i'd "
          value={currentText.mail}
          onChange={handleInput}
        />
        <br />
        <input type="submit" />
        <br />
      </form>
      <h1>{currentText.name}</h1>
      <h1>{currentText.mobileNumber}</h1>
      <h1>{currentText.mail}</h1>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name= {currentText.name}
        mail={currentText.mail}
        mobileNumber={currentText.mobileNumber}
      />
    </div>
  );
}
export default Formstwo;
