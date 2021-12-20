import React from 'react';
import useAuth from '../../../hooks/useAuth';
import emailjs from "emailjs-com";
const JoinSendMessage = (props) => {

    const JoinUserEmail=(props.JoinUserEmail)
    const clickvalue = props?.clickvalue;
    const { user } = useAuth();
    console.log(JoinUserEmail,clickvalue)
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
          value={JoinUserEmail || ""}
          readOnly
        />
        <input type="text" name="name" value={user.displayName} readOnly />
        <input
          type="text"
          name="message"
          value={`${user.displayName} accepted your request`}
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

export default JoinSendMessage;