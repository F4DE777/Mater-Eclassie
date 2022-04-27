import React from 'react'
import Pex from "../../../../assets/building@2x.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import Rev from "../../../../assets/1632735791._DSC3088rf@2x.png";

function Curriculum() {
  return (
    <>
        <section>
            <div className="header-img">
                <img src={Pex} alt="Header" className="img-fluid" />
            </div>
        </section>
        <CBreadcrumb style={{"--cui-breadcrumb-divider": "'>'"}}>
                <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
                <CBreadcrumbItem active>Student Life</CBreadcrumbItem>
            </CBreadcrumb>

        <section className="container">
                <div className="comments">
                    <div className="intro">
                        <small>HOME </small>
                        <header>Student Life</header>
                    </div>
                    <div className="create">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                        </p>
                        <div>
                            <img src={Rev} alt="" className='house-img' /> 
                            <p>
                            Maryland Comprehensive Secondary School was on the 2nd of October, 2001 returned to the Catholic Mission, headed by Anthony Cardinal Okogie (then Archbishop of the Metropolitan Sea of Lagos), by the Lagos State Government, during the administration of Governor Asiwaju Bola Ahmed Tinubu. The returned MCSS was different from what was taken over. There was infrastructure decay, over-population of students, indiscipline, to mention but a few. Thereafter, the Catholic Mission handed the administration of the School to the founding sisters who began again to practically rebuild from the cradle. From October 2001 to September 2003, the School was headed by Rev. Sr. Mary Crowley, OLA who invariably became the first Administrator in the new dispensation. Rev. Sr. Esther Edeko OLA, was the Administrator of the School from September, 2003 to 2014. In September 2014, the present Administrator, Rev. Sr. Agnes Adepoju, OLA took over the management of the School.                                    </p>
                            
                        </div>
                    </div>
                </div>
            </section>
    
    
    </>
  )
}

export default Curriculum