
import React from "react";
import './style.css';




// menggunakan regex untuk currency
// const currencyFormat = (num) => {
//   return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
// }

// atau dengan dibawah ini
// const currencyFormat = (x) => {
//   return x.toString()replace.(/\B(?=(\d{3})+(?!\d))g, ".");
// }

const Filter = (filterData) => {
  // console.log(filterData)

    return (

      

  
    <div className="container" >
      <div className="row">
        <div className="col-lg-12">
          <form className="form d-flex" onSubmit={filterData.getData}>

            <div className="kartu col-lg-2">
              <label
                className="d-block"
                htmlFor=""
              >
                Nama Mobil
              </label>
              <input type="text" classname="form-1" ref={filterData.namaMobil} />
            </div>

            <div className="kartu-1 col-lg-2">
              <label className="judul" htmlFor="" >
                Kategory
              </label>
              <select ref={filterData.category} className="form-1">
              <option disabled selected hidden>Masukan Kapasitas Mobil</option>
                <option value="small">2 - 4 Orang</option>
                <option value="medium">4 - 6 Orang</option>
                <option value="large">6 - 8 Orang</option>
              </select>
            </div>

            <div className="kartu-1 col-lg-2">
              <label className="judul" htmlFor="">
                Harga
              </label>
              <select ref={filterData.harga} className="form-1">
                <option disabled selected hidden>Masukan Harga Sewa per Hari</option>
                <option value="small">{'< Rp. 400.000'}</option>
                <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                <option value="large">{'> Rp. 800.000'}</option>
              </select>
            </div>

            <div className="kartu-1 col-lg-2 ">
              <label className="judul" htmlFor="">
                Status
              </label>
              <select ref={filterData.statusOrder} className="form-1">
                <option disabled selected hidden>Disewa</option>
                <option value="true">Tersedia</option>
                <option value="false">Disewa</option>
              </select>
            </div>

            <div  className="col-lg-2 tombol">
              <button className="btn btn-success" type="submit">
                Cari Mobil
              </button>
            </div>

          </form>

          
        </div>
      </div>
      
  </div>
    )
}

export default Filter