import React from "react";

export default function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.969422290014!2d-0.14237872606700183!3d5.57153903349544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf855aa5f0c627%3A0x668794f16b7724cd!2sLa-South%20SDA%20Church!5e0!3m2!1sen!2sgh!4v1682357267964!5m2!1sen!2sgh"
        style={{
          width: "400",
          height: "300",
          //  style="border:0;",
          allowfullscreen: "",
          loading: "lazy",
          referrerpolicy: "no-referrer-when-downgrade",
        }}
      ></iframe>
    </div>
  );
}
