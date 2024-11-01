import "./Footer.css"
const Footer = () => {
    return ` 
        <footer class="container-xl">

            <div class="footer " >
                <div class="footer-top row">

                    <div class="footer-logo col-4" >
                        <img src="../Image/LOGO_MINI.png" alt="">
                        <p class="footer-text" >Empowering education, promoting sustainability, and exploring the future—one game at a time!</p>
                    </div>
                    <div class="footer-item col-2" >
                        <h4>About us</h4>
                        <ul class="footer-item-list">
                            <li>Introduce</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div class="footer-item col-3" > <h4>Contact us</h4>
                        <ul class="footer-contact ">
                            <li>Have questions or feedback? Reach out to us anytime!</li>
                            <li>+84 932 092 302</li>
                        </ul>
                    </div>
                    <div class="footer-item d-flex justify-content-between col-3" >
                        <ul  class="footer-social gap-4" >
                            <li><span><i class="fa-brands fa-facebook fa-2xl"></i></span></li>
                            <li><span><i class="fa-brands fa-instagram  fa-2xl"></i></span></li>
                            <li><span><i class="fa-brands fa-twitter fa-2xl"  ></i></span></li>
                            <li><span><i class="fa-brands fa-linkedin fa-2xl"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <hr>
        <div class="copyright" >
            <p class="copyright-text" >Copyright ® 2024 web5 team</p>
        </div>`
}
export default Footer;
