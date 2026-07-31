import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Seeking Software Engineer and Java Backend Developer opportunities.</p>
        <p>Let's connect and discuss how I can contribute to your team.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:chaitanykhandare789@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:chaitanykhandare789@gmail.com">chaitanykhandare789@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919623989644"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919623989644">(+91) 9623989644</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
