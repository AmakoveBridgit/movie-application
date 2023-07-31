import React from "react";
import './style.css'


const Foot = () =>{
    return(
        <footer>

            <div class="footer">

        <div class="footer-div-1">
          <h3>Download Our App</h3>
          <h1>M<b>oo</b>vie </h1>
        </div>

        <div class="footer-div-3">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>My List</p>
            <p>About Us</p>
        </div>
        

        <div class="footer-div-3">
            <h3>Legal</h3>
            <p>General info</p>
            <p>Terms of Service</p>
            <p>Privacy policy</p>
        </div>
    
           
        <div class="footer-div-3">
            <h3>Contact Us:</h3>
            <p>support@egymoviees.com</p>
            <p>tel: +254716-251-989</p>
            <p>Or By Using:</p>
            <div className="icons">
                

            </div>
        </div>

        <div class="footer-div-3">
            <h3>Share Website Via:</h3>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
        </div>
        <hr/>
        <p className="Copyright"> 2023 Moovie. All Rights Reserved.</p>
    </footer>    
    );
}

export default Foot;


