import logo from "../../assets/MeetupLogo.png"

function About() {
    return (
        <div>
            <h2>What we’re about</h2>
            <img src={logo} />
            <p>
                We&apos;re a group of likeminded hackers, tech and design people
                who love to prototype and do hobby projects to learn and improve
                their Arduino, Raspberry Pi and/or electronics skills.
                <br />
                For now there is no equipment or facility to solder or 3D print etc,
                but we are aspiring to grow towards a makerspace with all facilities. 
            </p>
            <p>
                This initiative was started by Lieke Beelen in January 2023 hence the year in the URL.
            </p>
        </div>
    )
}

export default About