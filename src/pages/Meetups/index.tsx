function Meetups() {
    return (
        <div>
            <h2>Meetups</h2>
            <ul><p>The Hague</p>
                <ul><p className="meetupYear">2024</p>
                    <li>December 14th</li> 
                    <li>November 23rd <sup>*</sup></li>
                    <li>October 26th</li>
                    <li>September 14th</li>
                    <li>March 30th</li>
                    <li>February 17th</li>
                </ul>
                <p><sup>*</sup>Meetup @ <a href="https://www.bibliotheekdenhaag.nl/bibliotheken/detail.199343.html/bibliotheek-loosduinen/">Bibliotheek Loosduinen</a></p>
                <ul><p className="meetupYear">2023</p>
                    <li>November 25th</li>
                    <li>October 28th</li>
                    <li>October 7th</li>
                    <li>September 9th</li>
                    <li>August 5th</li>
                    <li>July 22th</li>
                    <li>June 24th</li>
                    <li>April 29th</li>
                    <li>March 25th</li>
                    <li>February 24th</li>
                    <li>January 27th (Kick-off)</li>
                </ul>
            </ul>
        </div>
    )
}

export default Meetups