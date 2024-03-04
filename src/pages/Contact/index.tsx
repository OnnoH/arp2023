import Discord from "../../assets/discord.png"
import Meetup from "../../assets/meetup.png"

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <p>We hang out on the following channels:</p>
            <p><a href="https://www.meetup.com/den-haag-arduino-raspberry-pi/" target="_blank"><img src={Meetup} width="100" alt="Meetup"/></a></p>
            <p><a href="https://discord.com/login" target="_blank"><img src={Discord} width="100" alt="Discord"/></a></p>
            <p><a href="https://discord.gg/C7H7aepVss" target="_blank">Click here for an invite!</a></p>
        </div>
    )
}

export default Contact