import React from "react"
import house from "../Asset/Rectangle 2.png"
import Btn from "../Components/Button/Button"
import "./Page.css"
import Card from "../Components/Card/Card"
import location_icon from "../Asset/location.svg"
import payment_icon from "../Asset/payment.svg"
import achievement_icon from "../Asset/achievement.svg"
import {IoIosArrowDown} from "react-icons/io"

const Page = () => {

    return(
        <div>
            <section className="landing_page">
                <div className="landing_wrapper">
                    <div className="write-up">
                        <h1>Helping you find the <br/> property of your <br/> dreams.</h1>
                        <p>Creating quality urban lifestyles, building <br/> stronger communities</p>
                        
                        <div>
                            <Btn content="Learn More" />
                            <p>icon</p>
                        </div>
                    </div>
                    <div className="img">
                        <img src={house} alt="house" />
                    </div>
                </div>
            </section>

            <section className="search-section">
                <div className="search-div">
                    <div className="search-item">
                        <div className="drop-icon-div">
                            <h4>Location</h4>
                            <i><IoIosArrowDown /></i> 
                        </div>
                        <p>Lekki</p>
                    </div>
                    <div className="search-item">
                        <div className="drop-icon-div">
                            <h4>Property Type</h4>
                            <i><IoIosArrowDown /></i> 
                        </div>
                        <p>Duplex</p>
                    </div>
                    <div className="search-item">
                        <div  className="drop-icon-div">
                            <h4>Max price</h4>
                            <i><IoIosArrowDown /></i> 
                        </div>
                        <p>$10000</p>
                    </div>
                    <div className="search-item">
                        <Btn content="Search"/>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h1>How it works</h1>
                <h4>Thsi is how our products works</h4>

                <div className="card-div">
                    <Card 
                        icon = {location_icon}
                        title="Find Home" 
                        body="Our properties are located at 
                        prime areas where by there, won't be problem with transportation"
                    />
                    <Card 
                        icon={payment_icon}
                        title="Make payments" 
                        body="Our estates comes with good network, 
                        portable water, 24hrs light and round the clock security"
                    />
                    <Card 
                        icon ={achievement_icon}
                        title="Make it Official" 
                        body="We have been in business for over 32 years, 
                        for client outside the country you can trust us to deliver well."
                    />
                </div>
            </section>
        </div>
    )
}

export default Page


