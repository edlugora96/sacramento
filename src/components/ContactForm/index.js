import React, { useRef, useState } from "react"
import { Card, Button, Checkbox, Form } from "semantic-ui-react"
import { useStaticQuery, graphql } from "gatsby"
import { useInputValues } from "../../lib/hooks"
import {
  name as nameScheme,
  email as emailScheme,
  message as messageScheme,
  phone as phoneScheme,
  contactSchemas,
} from "../../lib/schemas"
import Recaptcha from "react-recaptcha"
import app from "../../lib/utils/socketClient"

const ContactForm = () => {
  const recaptcha = useRef(null)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          googleRecaptchaKey
        }
      }
    }
  `)
  // const name = useInputValues()
  const [checkInputs, setCheckInputs] = useState(false)
  const [suscribe, setSuscribe] = useState(true)
  const [recaptchaLoad, setRecaptchaLoad] = useState(false)
  const [recaptchaVerify, setRecaptchaVerify] = useState(false)
  const name = useInputValues("", nameScheme, checkInputs)
  const email = useInputValues("", emailScheme, checkInputs)
  const message = useInputValues("", messageScheme, checkInputs)
  const phone = useInputValues("", phoneScheme, checkInputs)
  const handlerSubmit = () => {
    const resolve = {
      origin: "3439sacramento.com",
      name: name.value,
      email: email.value,
      message: message.value,
      phone: phone.value,
      suscribe,
    }
    if (!recaptchaLoad || !recaptchaVerify) {
      alert("Are you a human? Please verify it.")
    } else if (
      recaptchaLoad &&
      recaptchaVerify &&
      !contactSchemas.validate(resolve).error
    ) {
      recaptcha.current.reset()
      setRecaptchaVerify(false)
      app
        .service("messages")
        .create(resolve)
        .then(() => alert("Thank you, we have received your message"))
        .catch(() => alert("500 Server Error. Please try again."))
    }
  }
  return (
    <Card>
      <Card.Content>
        <Card.Header>Schedule a Showing.</Card.Header>
        <br />
        <Form onSubmit={handlerSubmit}>
          <Form.Group widths="equal">
            <Form.Input required placeholder="Name *" name="name" {...name} />
            <Form.Input placeholder="Phone" name="phone" {...phone} />
          </Form.Group>
          <Form.Input required placeholder="Email *" name="email" {...email} />
          <Form.Field
            required
            placeholder="Message *"
            name="message"
            control="textarea"
            rows="3"
            {...message}
          />
          <Recaptcha
            ref={recaptcha}
            sitekey={data.site.siteMetadata.googleRecaptchaKey}
            onloadCallback={() => setRecaptchaLoad(true)}
            verifyCallback={() => setRecaptchaVerify(true)}
            size="compact"
          />
          <br />
          <Form.Group inline>
            <Button type="submit" onClick={() => setCheckInputs(!checkInputs)}>
              CONTACT
            </Button>
            <Form.Field>
              <Checkbox
                checked={suscribe}
                label="Suscribe me"
                onClick={() => setSuscribe(!suscribe)}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default ContactForm
