import {AiFillFacebook} from "react-icons/ai";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

function Footer() {
    return (
        <footer>
<div className="footer-block community-block">
            <h3 className="community-header">Community</h3>
           <a href="#">Become a member</a>
           <a href="#">Our subscription service</a>
           <a href="#">Bonus Offers</a>
            </div>
<div className="footer-block copyright-block">
            <h3 className="copyright-header">Our Team</h3>
            <p>&copy; Carrie Graham, Jasmeet Brar, John Maguss, Lema Azizi, Patrick Neil - Movie Database API website built on react</p>
            </div>
<div className="footer-block social-block">
    <div className="social-text">
            <h3>Social Media</h3>
            <p>Join us now on our social media! You can follow us on:</p><br/>
            </div>
            <div className="icon-container">
            <AiFillFacebook  className="social-icon"/>
            <FaTwitter className="social-icon" />
            <FaInstagram  className="social-icon"/>
            </div>
            </div>

        </footer>
    )
}

export default Footer
