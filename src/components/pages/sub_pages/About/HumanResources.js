import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import Rev from "../../../../assets/Rev@2x.png";
import { CBreadcrumbItem } from '@coreui/react';
import { CBreadcrumb } from '@coreui/react';
import { Link } from 'react-router-dom';

import './Style.css';


function HumanResources() {
  return (
    <>
        <section>
            <div className="header-img">
                <img src={Pex} alt="Header" className="img-fluid" />
            </div>
        </section>
        <CBreadcrumb style={{"--cui-breadcrumb-divider": "'>'"}}>
                <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
                <CBreadcrumbItem href="/about/administrators-message">About</CBreadcrumbItem>
                <CBreadcrumbItem active>Proprietor’s Message</CBreadcrumbItem>
        </CBreadcrumb>

        <section className="container">
                <div className="comments">
                    <div className="intro">
                        <small>About </small>
                        <header>Proprietor’s Message</header>
                    </div>
                    <div className=" create">
                    <div className='sub-cover'>
                                    <ul className='sub-menu'>
                                        <li>
                                            <Link to={'/'}>
                                                Home
                                            </Link>
                                        </li>
                                        <li >
                                            <Link  to={'/about/administrators-message'}>
                                                Administrator’s Message
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="active" to={'/about/proprietors-message'}>
                                                Proprietor’s Message
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/about/history'}>
                                                History Of The School
                                            </Link>
                                           
                                        </li>
                                        <li>
                                            <Link to={'contact-us'}>
                                                Contact Us
                                            </Link>
                                            
                                        </li>
                                    </ul>
                    </div>
                                <img src={Rev} alt="" className='principals-img' /> 
                                <h4 className='bio'>
                                    BIOGRAPHY
                                </h4>
                                <p style={{padding:'0', margin:'0'}}>HIS EARLY LIFE:</p>
                                <p style={{paddingTop:'0', margin:'0'}}>
                                     Monday, 1st day of June 1959 was a day of great joy in the family of Gregory Obasola and Victoria Oluremi Martins (both of blessed memory). That day witnessed the birth of their third child, the second son of the family. He was christened Alfred Anthony Adewale. His parents who were both teachers hailed from Ake and ljemo in Abeokuta South Local Government Area of Ogun State. The young Alfred Martins had his primary education at St. Augustine Roman Catholic Mission School, ltesi.                                </p>
                                <h4 className='bio'>
                                    SEMINARY LIFE
                                </h4>
                                <p>
                                    Alfred was admitted to St. Theresa Minor
                                     Seminary, Oke-Are, lbadan for his 
                                     secondary education from 1971-1976.
                                      During this period, the seminary motto:
                                       AD ALTARE DEl must have made a deep impression on
                                        his tender mind as he tried to discern the genuineness
                                         of the call to the priesthood. At the end of his formation
                                          in the minor seminary, the young Dewale’, as he was
                                           fondly called then, signified his intention to continue 
                                           the programme of formation for the priesthood in the major
                                            seminary
                                </p>
                                <p>
                                    under the auspices of the ‘Archdiocese of Lagos. He was therefore admitted to the Seminary of SS. Peter and Paul, Bodija, lbadan in 1976. While in the seminary, he bagged a Diploma in Religious Studies from the University of Ibadan in 1978 and a Bachelor’s degree in Theology from the Pontifical Urban University, Rome in 1983. In the classroom, the young seminarian Alfred showed great maturity in learning, with a quiet, reflective mien, which made him every lecturer’s delight. On the field of play, he exhibited great skills in the game of basketball. In prayer and liturgy he showed great disposition for positive growth, and his interpersonal relationship was excellent. Owing to these resounding good qualities cum leadership skills, he won the confidence of the formation team and was appointed the Senior Prefect, a primus inter pares for the 1982/1983 academic session, and graduated with first-class honors in his Bachelor of Theology degree examinations. Having fulfilled the requirements, he was ordained a deacon at the Holy Cross Cathedral, Lagos on the 18th of September, 1983 with seven of his classmates popularly known as “the class of eight” by His Grace, Most Revd. Anthony Olubunmi Okogie.
                                </p>
                                <h4 className='bio'>
                                    SEMINARY LIFE
                                </h4>
                                <p>
                                    The newly ordained Revd. Fr. Alfred Martins was assigned to work after his ordination as an Assistant Administrator at Holy Cross Cathedral from October 1983 to August 1984. He was later transferred to St. Gregory’s College, Obalende, Lagos, where he worked as a teacher and chaplain from September 1984 to September 1986. During his stay at St Gregory’s College, he doubled as the priest in-charge of St Theresa’s Catholic Church Maroko as well as chaplain to Holy Child College, Obalende. The natural flair for teaching which Fr. Martins had imbibed from his parents was discovered through these assignments. He was then seconded to the SS Peter and Paul Major Seminary, Bodija, to assist in the formation of future priests as Graduate Assistant in September, 1986 where he taught courses in the Department of Philosophy. His ardent devotion to studies spurred him to the status of a Lecturer in 1988 having bagged a Master’s degree in Philosophy at the University of Ibadan. The humble and gentle Fr. Martins occupied various positions that distinguished him in the Seminary Community. He was the Bursar of the Seminary (1988-1994). He was the Registrar (1994-1996), and also the Secretary, Appointments and Promotions Committee (1994 – 1996) To further enrich his knowledge in his field of specialization, Fr. Martins secured admission to the University of St. Andrews, Scotland, where he bagged a Master of Letters degree in Philosophy in 1997. He immediately enrolled on the PhD programme of the University of Edinburgh and had just submitted his Proposal when the Holy Father appointed him the first bishop of the newly created Diocese of Abeokuta. EPISCOPAL MINISTRY: On the 24th of November 1997, the creation of the Catholic diocese of Abeokuta was announced as well as the appointment of Revd. Fr. Alfred Martins by the Holy Father, Blessed John Paul II as the first Bishop of the new diocese excised from the Archdiocese of Lagos. He received Episcopal consecration at the hands of the Papal Nuncio, Archbishop Carlo Maria Vigano assisted by the Most Revd. Anthony Okogie, the Archbishop of Lagos and The Most Revd. Albert Fasina, Bishop of Ijebu-Ode diocese, at the M. K. O. Abiola Stadium Abeokuta on the 24th of January, 1998. Bishop Adewale Martins had the privilege of leading the people of God in Abeokuta from the inception of the diocese, building up a young and struggling local Church with only nine (9) parishes and eight (8) incardinated priests to a vibrant and dynamic church, with a rich stock of about sixty (60) priests out of which about forty-four (44) are incardinated priests of the diocese. In the same vein, the parishes of the diocese now number over thirty, and they are steadily growing into faith-rich communities full of possibilities and a flora of beauty. The diocese has also grown in the area of health provision, with the establishment of a second Sacred Heart Hospital in Aiyetoro and Primary Health Clinics in many of the Parishes within the Diocese. The Sacred Heart Hospital Lantoro has continued in its stride as a major health care provider for the teeming population of Ogun State residents and beyond. The education sector of Ogun State has also been enhanced by the establishment by Bishop Martins, of Sacred Heart Catholic College Abeokuta, in 1999 and St. Patrick’s Catholic College, lmeko in 2006. He also contributed immensely to discussions leading to the return of secondary schools to original owners in Ogun State, a development which led to the return of St. Peter’s College, Olomore Abeokuta and Catholic Comprehensive High School, lbara Abeokuta to the Diocese of Abeokuta in 2009. Primary education has also grew tremendously within the period of the stewardship of Bishop Martins as Bishop of Abeokuta with the establishment of St. Bernadette of Lourdes Nursery/Primary School, Abeokuta and the relocation of St. Luke Nursery/Primary School, lwoye. Within the fourteen years of his Episcopal ministry in Abeokuta, Bishop Martins also played a significant role in the Nigerian Church. He was elected Assistant Secretary of the Catholic Bishop’s Conference for two terms (2002-2008). He was elected Secretary of the same body for two terms (2008-2012). He was Co-Chairman of the Nigerian Anglican-Roman Catholic Commission in 2001 till 2008. He was Episcopal Chairman of the CBCN committee on Ecumenism from 1999- 2008. He was a delegate of the Nigerian Church to the 2nd Ordinary Special Assembly for Africa of the Synod of Bishops in Rome (4-25 October 2009). Following the retirement of His Eminence, Anthony Cardinal Okogie of Lagos having reached the canonical age, the Holy Father Pope Benedict XVI on May 25, 2012 appointed Bishop Alfred Adewale Martins as his successor to the See of Lagos. He becomes the fourth Archbishop of the See of Lagos after Late Archbishop Leo Hale Taylor SMA (1950-1965); Late Archbishop Kwao Amusu Aggey (1965-1972) and Anthony Cardinal Okogie (1973-2012). Most Revd Alfred Martins was installed as the Archbishop of Lagos on the 4th of August 2012 at the Holy Cross Cathedral Lagos by the Apostolic Nuncio to Nigeria, Most Revd Augustine Kasujja. Welcome to Maryland Comprehensive Secondary School, a co-educational home for learning and culture. The burning desire of the Sisters of Our Lady of Apostles to offer a world-class institution of learning as well as contribute to the educational sector of the nation gave birth to this noble School project. In line with the desire of the universal church for catholic education, our School develops the spiritual, intellectual, moral and socio-cultural dimensions of her students. With an understanding of today and a look at tomorrow, we prepare students for purposeful living in whatever society they find themselves. MCSS students crave for excellence. Filled with dedication and commitment, the programme of studies fosters steady understanding of self and the world. With a team of dedicated staff, we journey along with all our students to make them the best of themselves. Life-long skills are incorporated into the learning experience to explore and enhance the creative skills and abilities of our students.
                                </p>

                        </div> 
                        
                </div>
            </section>
    </>
  )
}

export default HumanResources