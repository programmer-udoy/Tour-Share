import React from "react";
import useAuth from "../../../hooks/useAuth";
import emailjs from "emailjs-com";
const SendMessage = (props) => {
  const { user } = useAuth();
  const createUserEmail = props?.createUserEmail;
  

  const clickvalue = props?.clickvalue;
  console.log(clickvalue);

  // const handleSendMessage = (e) => {
  //   e.preventDefault()

  //  const submitButton= document.getElementById("myForm");

  //   const value = e.target;
  //   console.log(value);

  //   if(clickvalue!=null){

  //     handleWithoutOnclick()
  //   }

  //   // };
  // const handleWithoutOnclick=()=>{

  //     const submitButton= document.getElementById("myForm");

  //      const buttonClick=document.getElementById("submit-message");
  //      buttonClick.click()
  //    console.log(submitButton)

  // }
  const handleClick = () => {
    // e.preventDefault()

    if (clickvalue != null) {
      const submitButton = document.getElementById("myForm");

      const buttonClick = document.getElementById("submit-message");
      // buttonClick.click()
      console.log(submitButton);
      emailjs.sendForm(
        "service_g2nbfvv",
        "template_lpf2qmn",
        submitButton,
        "user_bndQ9O0D342clJRF4qvJP"
      ).then(res=>{
        console.log(res)
      }).catch(err=>console.log(err));
    }
  };
  return (
    <div style={{display:"none"}}>
      <form id="myForm">
     
        <input
          type="email"
          name="user_email"
          value={createUserEmail || ""}
          readOnly
        />
        <input type="text" name="name" value={user.displayName} readOnly />
        <input
          type="text"
          name="message"
          value={`${user.displayName} wants to join your group`}
          readOnly
          id=""
        />
        <input
          type="submit"
          id="submit-message"
          onClick={handleClick()}
          value="submit"
        />
      </form>
    </div>
  );
};

export default SendMessage;
