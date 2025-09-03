import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router";

export const HeroSection=()=>{
    return (
        <>
        
              <section className="home-section">
            <div className="hero-container">
                <div className="hero-content">
<h1 className="hero-heading">Explore the World, One Country at a Time.</h1>
<p>Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
   <button className="btn"><NavLink to="/country" className="link">Start Exploring <BsArrowRight className="arrow" /></NavLink></button>
                </div>

                <div className="hero-image">
                    <img src="/world.png" alt="world image" />
                </div>
            </div>
        </section>
        </>
    )
}