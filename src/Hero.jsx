import heroImg from "./assets/hero.svg"
const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Leggings stumptown pop-up shoreditch, vice organic butcher. Mustache roof party fingerstache, disrupt solarpunk food truck direct trade sartorial pour-over hoodie pop-up vexillologist cupping XOXO.</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and browser" className="img"/>
            </div>

        </div>
    </section>
  )
}

export default Hero