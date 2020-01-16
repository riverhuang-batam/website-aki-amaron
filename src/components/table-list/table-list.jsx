import React from 'react'
import {Table} from 'reactstrap'
const TableList= () =>(
    <div className="mb-4">
        <h1 className="text-center mt-4 mb-4">List Harga Aki Amaron</h1>
         <Table bordered className="text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Jenis Aki Amaron</th>
          <th>Ah</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Amaron Go 38B20 R/L</td>
          <td>35</td>
          <td>Rp 810.000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Amaron Go 46B24 R/L</td>
          <td>45</td>
          <td>Rp 940.000</td>
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Amaron Go 55D23L</td>
          <td>60</td>
          <td>Rp 1.210.000</td>
          
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Amaron Go 65D26 R/L</td>
          <td>65</td>
          <td>Rp 1.260.000</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Amaron Go 95D31 R/L</td>
          <td>75</td>
          <td>Rp 1.580.000</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Amaron HI-LIFE 42B20 R/L</td>
          <td>35</td>
          <td>Rp 940.000</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Amaron HI-LIFE 55B24 R/L/RS/LS</td>
          <td>45</td>
          <td>Rp 1.090.000</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Amaron HI-LIFE 85D23 R/L</td>
          <td>60</td>
          <td>Rp 1390.000</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Amaron HI-LIFE 95D20 R/L</td>
          <td>65</td>
          <td>Rp 1.450.000</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>Amaron HI-LIFE 105D31 R/L</td>
          <td>80</td>
          <td>Rp 1.830.000</td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td>Amaron HI-LIFE 95D31 R/L (HITAM)</td>
          <td>90</td>
          <td>Rp 1.880.000</td>
        </tr>
      </tbody>
    </Table>
    </div>
)
export default TableList;