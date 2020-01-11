import React from 'react'
import amaronpeople from '../../images/akiamaronpeople.jpg'
import amaronpeople1 from '../../images/akiamaronpeople1.jpg'
import akiamaron from '../../images/amaron.jpg'
import akiamaron1 from '../../images/amaron1.jpg'
import {Row, Col, Container} from 'reactstrap'
const Amaron = () => (
    <div>
        <Container className="mt-4">
            <div className="text-center">
                <h1>About Amaron</h1>
            </div>
            <Row>
                <Col md="6" className="mt-4">
                    <img src={amaronpeople} alt={amaronpeople} width="100%"/>
                </Col>
                <Col md="6" className="mt-4">
                    <img src={amaronpeople1} alt={amaronpeople1} width="100%"/>
                </Col>
                <Container>
                <p>Produsen aki asal India, Amaron, resmi meluncurkan aki untuk sepeda motor
                    setelah sebelumnya memasarkan aki mobil. Amaron menjamin spesifikasi produk
                    dengan kualitas terbaik namun dengan harga yang kompetitif. 
                </p>
                </Container>
                <Col md="8">
                <h4 className="text-center mt-2 mb-4">Why Use Amaron?</h4>
                <p className='mt-4'>
                    Kenapa memakai Aki Amaron?
                Apa kelebihan aki
                    ini?
                    Dari segi teknologi aki motor, Amaron menggunakan valve regulated tertutup untuk
                    menjaga elektrolit agar tidak bergerak. Pada aki konvensional, elektrolit yang
                    terbentuk cair. kelebihan lainnya aki amaron menghasilkan tenaga yang besar, CCA
                    360, RC 75. (compare yuasa basah CCA 300) juga dalam Bentuk, design yang unik
                    dan warna yang eye-catching, awet dan cepat recharge juga tidak perlu isi air
                    aki
                </p>
                <p>
                    Aki Amaron menggunakan teknologi VRLA yang bekerja dengan prinsip rekombinasi
                    oksigen. Oksigen yang terbentuk pada lempengan positif akan rekombinasi kembali
                    dengan hidrogen pada lempengan negatif yang menghasilkan air maka mengurangi
                    kemungkinan berkurangnya cairan dalam aki.
                </p>
                <p>
                    Untuk keamanan, aki Amaron diberikan Valve (katup) untuk melepaskan tekanan
                    berlebih yang terbentuk dalam aki.
                </p>
                <p>
                    Fitur khusus yang terdapat pada produk aki Amaron yaitu bahan lead calcium tin
                    alloy, desain lempengan radial grid, AGM Separator, desain casing kokoh, flame
                    arrestor, automated COS Design. 
                </p>
                
                
                </Col>
                <Col md="4">
                <img src={akiamaron1} alt={akiamaron1} width="100%"/>
                    <img className="mt-2" src={akiamaron} alt={akiamaron} width="100%"/>
                    
                </Col>
            </Row>
        </Container>
    </div>
)
export default Amaron;