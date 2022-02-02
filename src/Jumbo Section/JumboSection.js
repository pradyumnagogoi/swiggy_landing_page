import React from 'react'
import "../Jumbo Section/JumboSection.css";

const JumboSection = () =>  {
   
    return (
        <div class="jumboSection">
            <div class="jumbo">
                <div class="login-Bar">
                    <div><img class="logo" src="https://seeklogo.com/images/S/swiggy-logo-E7548BE9FF-seeklogo.com.png" alt="swiggy-logo" /></div>
                    <div class="login-Bar-button">
                        <button class="btn-login">Login</button>
                        <button class="btn-signup">Sign up</button>
                    </div>
                </div>
                <h1 class="display-msg">Cooking gone wrong?</h1>
                <h2 class="display-text">Order food from favourite restaurants near you.</h2>
                <div>
                    <div>
                        <div class="search-part">
                            <input type="text" class="input-location" name="location" id="location" maxlength="30" placeholder="Enter your delivery location" />
                            <button class="ff-btn">FIND FOOD</button>
                        </div>
                        <h3 class="_1nQLS">Popular cities in India</h3>
                        <ul class="_3TE0x">
                            <li class="_1jdR4">Ahmedabad</li>
                            <li class="_1jdR4">Bangalore</li>
                            <li class="_1jdR4">Chennai</li>
                            <li class="_1jdR4">Delhi</li>
                            <li class="_1jdR4">Gurgaon</li>
                            <li class="_1jdR4">Hyderabad</li>
                            <li class="_1jdR4">Kolkata</li>
                            <li class="_1jdR4">Mumbai</li>
                            <li class="_1jdR4">Pune</li>
                            <li class="_1jdR4"> &amp; more.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="image1">
                <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq' alt='error' />
            </div>
        </div>  
    )
    
}

export default JumboSection
