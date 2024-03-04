import logo from '../../assets/LogoArduinoRaspberryPiMeetupDenHaag.png';

function Chapters() {
    return (
        <div>
            <h2>Chapters</h2>
            <p>
                Currently we have one chapter and it&apos;s located in Den Haag (The Hague).
                We meet (usually in Lab B) in the <a href="https://www.bibliotheekdenhaag.nl/bibliotheken/detail.199336.html/centrale-bibliotheek/">Central Library</a> of The Hague. 
                Address : <a href="https://maps.app.goo.gl/gm9axvGsBEavfJ4P7">Spui 68, 2511 BT Den Haag</a>.
            </p>
            <img src={logo} width="300" height="300" />
            <p>
                If you want to start a chapter in your area, please <a href="/contact">reach out to us</a>.
            </p>
        </div>
    )
}

export default Chapters