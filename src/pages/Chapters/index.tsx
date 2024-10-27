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
            <p>
                The library in <a href="https://www.bibliotheekdenhaag.nl/bibliotheken/detail.199343.html/bibliotheek-loosduinen/">Loosduinen</a> (southern part of The Hague) has a <a href="https://www.bibliotheekdenhaag.nl/activiteiten/activiteiten/loosduinen/maakplaats-loosduinen-sept2024.09112024.html">'maakplaats'</a> (=Makerspace) and
                they have bi-weekly walk-in sessions. It's on our radar and we're going to check it out.
                Address : <a href="https://maps.app.goo.gl/ZLp7t5Jyg5GacCLB8">Loosduinse Hoofdstraat 555, 2552 AE 's-Gravenhage</a>
            </p>
            <img src={logo} width="300" height="300" />
            <p>
                If you want to start a chapter in your area, please <a href="/contact">reach out to us</a>.
            </p>
        </div>
    )
}

export default Chapters