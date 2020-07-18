import React from "react"
import { Footer, ContactSection, PhoneArea, ShareBtnArea } from "./style"
import { BeautyLink, Link, NiceBtn } from "../commonStyles"
function Foot() {
  return (
    <Footer>
      <section>
        <img
          style={{ maxWidth: "250px" }}
          src="https://propertysonoma.com/media/logo-footer-e7c151e7079ca0ddaf553459886d307d.jpg"
        />
      </section>

      <ContactSection>
        <div>
          <div>Sitemap</div>
          <BeautyLink dark to="/">
            <span>Home</span>
          </BeautyLink>
          <BeautyLink dark to="/about-us">
            <span>About Us</span>
          </BeautyLink>
          <BeautyLink dark to="/stats">
            <span>Stats</span>
          </BeautyLink>
          <BeautyLink dark to="/property-highlights">
            <span>Gallery</span>
          </BeautyLink>
          <BeautyLink dark to="/gallery">
            <span>Features</span>
          </BeautyLink>
          <BeautyLink dark to="/features">
            <span>Schedule a showing</span>
          </BeautyLink>
          <BeautyLink dark to="/contact">
            <span>Neighborhood</span>
          </BeautyLink>
          <BeautyLink dark to="/map">
            <span>Map and directions</span>
          </BeautyLink>
        </div>
        <div>
          <div>Address</div>
          <p>
            Kirk and Peggy Economos
            <br />
            Compass
          </p>
          <p>
            135 W Napa St #100
            <br />
            Sonoma, CA 95476
          </p>
          <br />
        </div>
        <PhoneArea>
          <div style={{ marginBottom: "10px" }}>
            <Link dark to="tel:4159299046">
              <span>(415) 929-9046</span>
            </Link>
          </div>
          <Link dark to="mailto:Kirk.Economos@Compass.com">
            <span>Kirk.Economos@Compass.com</span>
          </Link>
          <Link dark to="mailto:Peggy.Economos@Compass.com">
            <span>Peggy.Economos@Compass.com</span>
          </Link>
        </PhoneArea>
        <div>
          <div>Company</div>
          <p>
            Kirk and Peggy Economos
            <br />
            Compass
          </p>
          <p style={{ margin: 0 }}>Kirk Economos DRE#: 00649468</p>
          <p>Peggy Economos DRE#: 00978773</p>
        </div>
        <ShareBtnArea>
          <NiceBtn smallX2 normal>
            Contact | Schedule a Showing
          </NiceBtn>
        </ShareBtnArea>
      </ContactSection>

      <section>
        <div>
          <p>
            Kirk and Peggy Economos comprise a team of real estate agents
            affiliated with Compass.{" "}
            <Link dark outline href="https://www.compass.com/" target="_blank">
              <span>Compass</span>
            </Link>{" "}
            is a licensed real estate broker licensed by the state of California
            and abides by equal housing opportunity laws. All material presented
            herein is intended for informational purposes only. Information is
            compiled from sources deemed reliable but is subject to errors,
            omissions, changes in price, condition, sale, or withdrawal without
            notice. No statement is made as to accuracy of any description. All
            measurements and square footages are approximate. This is not
            intended to solicit property already listed. Nothing herein shall be
            construed as legal, accounting or other professional advice outside
            the realm of real estate brokerage.
          </p>
        </div>
        <br />
        <br />
      </section>
      <section>
        <p>
          <img
            src="https://res.cloudinary.com/luxuryp/image/upload/q_auto:good,f_auto,w_80/v1528402391/dark-realtor-logo_x1vczu.png"
            width="40"
          />
          &nbsp;&nbsp;&nbsp;
          <img
            src="https://res.cloudinary.com/luxuryp/image/upload/q_auto:good,f_auto,w_80/v1528402391/dark-equal-logo_gahxpa.png"
            width="40"
          />
          &nbsp;&nbsp;&nbsp;
          <img
            src="https://res.cloudinary.com/luxuryp/image/upload/v1532125647/qdry0nbniqnqpbakrlws.png"
            width="175"
          />
          &nbsp;&nbsp;&nbsp;
        </p>
      </section>
      <section></section>
      <section class="_2EUva3a2rL1Pp_GQI0eHy- _296OM7fNGCnG6QxQbIGCyL ZMQOSI7iYVp1S06AZTEKZ uOSnp-mCdwZm4ghSnSTJD">
        <br />
        Website designed and developed by&nbsp;&nbsp;&nbsp;
        <Link dark outline target="_blank">
          <span>Gora Designs.</span>
        </Link>
        <br />
        <br />© Copyright {new Date().getFullYear()}
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </Footer>
  )
}

export default Foot
