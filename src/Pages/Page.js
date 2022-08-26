import React from "react"
import Btn from "../Components/Button/Button"
import "./Page.css"
import Card from "../Components/Card/Card"
import location_icon from "../Asset/location.svg"
import payment_icon from "../Asset/payment.svg"
import achievement_icon from "../Asset/achievement.svg"
import {IoIosArrowDown} from "react-icons/io"
import {BiSearchAlt} from "react-icons/bi"
import house from "../Asset/Rectangle 2.png"
import house2 from "../Asset/Rectangle 3.png"
import good_icon from "../Asset/good_icon.png"
import play_button from "../Asset/play_button.svg"
import house3 from "../Asset/Rectangle 4.png"
import house4 from "../Asset/Rectangle 4 (1).png"
import house5 from "../Asset/Rectangle 4 (2).png"


const Page = () => {

    const featured = [
        {id: 1, image: house3, property: "The Palace"},
        {id: 2, image: house4, property: "IVY RORY"},
        {id:3, image: house5, property: "REXONA"}
    ]

    return(
        <div>
            <section className="landing_page">
                <div className="landing_wrapper">
                    <div className="write-up">
                        <h1>Helping you find the <br/> property of your <br/> dreams.</h1>
                        <p>Creating quality urban lifestyles, building <br/> stronger communities</p>
                        
                        <div className="icon_div">
                            <Btn content="Learn More" />
                            <img src={play_button} alt="play_button" />
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
                        <Btn icon={<BiSearchAlt />} content="Search"/>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h1>How it works</h1>
                <h4>This is how our products works</h4>

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

            <section className="choose_us">
                <div className="choose_us_parent">
                    <div className="img">
                        <img src={house2} alt="house" />
                    </div>

                    <div className="write_up">
                        <h1>Why you should choose us.</h1>
                        <p>
                            Creating quality urban lifestyles, building stronger <br/>
                            communities
                        </p>
                        <div className="icon_parent">
                            <div className="icon_div">
                                <div className="icon_wrapper">
                                    <div className="img"><img src={good_icon} alt="good_mark" /></div>
                                    <h4>  World class   </h4>
                                </div>
                                <div className="icon_wrapper">
                                    <div className="img"><img src={good_icon} alt="good_mark" /></div>
                                    <h4>Affortable</h4>
                                </div>
                            </div>
                            <div className="icon_div">
                                <div className="icon_wrapper">
                                   <div className="img"><img src={good_icon} alt="good_mark" /></div>
                                    <h4>Trusted</h4>
                                </div>
                                <div className="icon_wrapper">
                                    <div className="img"><img src={good_icon} alt="good_mark" /></div>
                                    <h4>Amenities</h4>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
            </section>

            <section className="featured">
                <div className="featured_wrapper">
                    <h1>Our Featured Properties.</h1>
                    <h4>One of our biggest product to be featured and that has sold <br/> out the most.</h4>

                    <div className="btn-div">
                        <Btn content="View more" />
                    </div>
                    <div className="featured_cards_wrapper">

                        {
                            featured && featured.map((feature => 
                                <div className="featured_cards"  key={feature.id}>
                                    <div className="img">
                                        <img src={feature.image} alt="pictures of houses" />
                                    </div>
                                    <div className="card-content">
                                        <h3>{feature.property}</h3>
                                        <p>Duplex</p>
                                    </div>
                                    <div className="card-content">
                                        <p>Lekki, phase 2</p>
                                        <p>$2,000</p>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                        
                </div>
            </section>
        </div>
    )
}

export default Page


