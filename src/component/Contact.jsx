import { Form } from "react-router"

export const Contact=()=>{
   


    return (<>
<Form method="POST" action="/contact" className="form">

    <h1 className="contact-heading">Contact us</h1>

<div className="input">

    <input type="text" placeholder="Enter your name..." name="name"required className="input-name"/>
    <input type="text" placeholder="Enter your email..." name="email" required/>
    <textarea  id="textarea" rows={10} cols={35} name="message" placeholder="Enter Your message..."></textarea>
<button className="btn">Submit</button>
</div>





</Form>
    </>)
}