import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
   < div className="contact_container m-auto">
   <h1>Contact us !</h1>
        <div className="m-auto">
            <div className="p-2">
                <div >
                    <input type="text" id="contact-form-name" className=" rounded-lg  border border-gray-300 w-full py-2 px-4  " placeholder="Name"/>
                    </div>
                </div>
                <div className="p-2">
                    <div>
                        <input type="text" id="contact-form-email" className=" rounded-lg  border border-gray-300 w-full py-2 px-4  focus:border-transparent" placeholder="email"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <label className="text-gray-700" for="name">
                            <textarea className="px-4 py-2 text-base  border border-gray-300 rounded-lg" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div >
                        <button type="submit" className="start__btn  p-2 px-5 ">
                             Send
                        </button>
                    </div>
                </div>
   </div>
   

   
  );
}

export default Contact;
