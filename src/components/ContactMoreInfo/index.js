import React from "react"
import { Card } from "semantic-ui-react"
import { ContactMoreInfoView } from "./style"
import { Link } from "../commonStyles"
const ContactMoreInfo = () => (
  <Card>
    <Card.Content>
      <ContactMoreInfoView>
        <section>
          <p>
            Kirk and Peggy Economos
            <br />
            Compass
          </p>
          <p>
            1699 Van Ness Avenue
            <br />
            San Francisco, CA 94109
          </p>
          <Link dark href="mailto:Kirk.Economos@Compass.com">
            <span>Kirk.Economos@Compass.com</span>
          </Link>
          <br />
          <Link dark href="mailto:Peggy.Economos@Compass.com">
            <span>Peggy.Economos@Compass.com</span>
          </Link>
        </section>
        <section>
          <p>
            <Link dark href="tel:4152716390">
              <span>(415) 271-6390</span>
              <br />
            </Link>
            <Link dark href="tel:7079319841">
              <span>(707) 931-9841</span>
            </Link>
          </p>
          <p>Kirk DRE#: 00649468</p>
          <p>Peggy DRE#: 00978773</p>
        </section>
      </ContactMoreInfoView>
    </Card.Content>
  </Card>
)

export default ContactMoreInfo
