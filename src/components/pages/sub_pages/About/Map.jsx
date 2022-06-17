import React from 'react'


function Map() {
  return (
    <div className="col-md-12">

        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4119.517578568797!2d3.9052795842095103!3d6.643097141556986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103944ab5f7e6e3b%3A0x98f58a1bf109692a!2sIsiwom%20Road%20Igbodu%20MATER%20ECCLESIAE%20COLLEGE!5e0!3m2!1sen!2sng!4v1655501208840!5m2!1sen!2sng"
         
          height="500"
          width="700"
          //  style={{ border: "0" , width:'100%'}}
            allowfullscreen=""
             loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
        </iframe>

    </div>
  )
}

export default Map