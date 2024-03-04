function Rentakit() {
  return (
    <div>
        <h2>Rent-a-Kit</h2>
      <p>
        <b>
          You want to learn, but you don&apos;t have a microcontroller at your
          disposal?
        </b>
      </p>
      <p>
        We&apos;ve got a few spare ones and put them in a kit. Still in the
        process of working out the details. It'll probably look something like
        this:
      </p>
      <div>
        <h1 id="rent-a-kit">Keep your distance!</h1>
        <p>No. 1234567</p>
        <h2 id="contents">Contents</h2>
        <ul>
          <li>USB-A to MicroUSB cable</li>
          <li>USB-C to USB-A adapter</li>
          <li>ESP32 WROOM-32 microcontroller</li>
          <li>170 points mini breadboard (2 x5 x 17)</li>
          <li>HC-SR04 ultrasonic range sensor</li>
          <li>5V RGB LED Ring (compatible with WS2812B 12-Bit Neopixel)</li>
        </ul>
        <h2 id="projects">Projects</h2>
        <h3 id="proximity-warning-system">Proximity warning system</h3>
        <p>
          Based on the distance measured by the sensor the leds will light up,
          indicating the warning level.
        </p>
      </div>
    </div>
  );
}

export default Rentakit;
