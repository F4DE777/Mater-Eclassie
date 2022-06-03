import React from 'react'


function Map() {
  return (
    <div className="col-md-12">

        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2705.2810612647922!2d3.3696073465581704!3d6.571635406856072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923100000001%3A0xf4ab17cecb22135a!2sMaryland%20Comprehensive%20Secondary%20School!5e0!3m2!1sen!2sng!4v1650985317549!5m2!1sen!2sng"
         
          height="750"
           style={{ border: "0" , width:'100%'}}
            allowfullscreen=""
             loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  )
}

export default Map