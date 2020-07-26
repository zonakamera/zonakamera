import Layout from '../layouts/layout'; 
function Beranda(){     
  return (         
  <Layout>
    <div class="jumbotron">
      <h1 class="display-4">Selamat Datang Di Zona Kamera</h1>
      <p class="lead"> Toko Kamera Terlengkap Di Banyuwangi</p>
      <hr class="my-4"></hr>
      <p>Bagi yang belum daftar cukup klik link di bawah ya :)</p>
        <a class="btn btn-primary btn-lg" href="/akun/daftar" role="button">Klik Disini</a>
    </div>

    <div class="container">
    <h4 class="text-center font-weight-bold m-4">REKOMENDASI KAMERA & ACTIONCAM TERBAIK</h4>
    <div className="row">
      <div class="jualan">
        <div class="kum-kamera">
                <img src="/images/kam.png" alt="A6000"/>
                <p1>SONY ALPHA A6000 NEW</p1>
                <h6>Rp 10.250.000,-</h6>
                <a class="tombol tombol-rinci" href="#">Rincian</a> 
                <a class="tombol tombol-tuku" href="#">Beli</a>
      </div>    
      <div class="kum-kamera">
                <img src="/images/act1.png" alt="HERO7"/>
                <p1>GO PRO HERO 7 USA ORI</p1>
                <h6>Rp 7.500.000,-</h6>
                <a class="tombol tombol-rinci" href="#">Rincian</a> 
                <a class="tombol tombol-tuku" href="#">Beli</a>
            </div>
       <div class="kum-kamera">
                <img src="/images/kam1.png" alt="MARK"/>
                <p1>SONY A7 MARK II LENSA FIX</p1>
                <h6>Rp 24.500.000,-</h6>
                <a class="tombol tombol-rinci" href="#">Rincian</a> 
                <a class="tombol tombol-tuku" href="#">Beli</a>
      </div>
      <div class="kum-kamera">
                <img src="/images/kam2.png" alt="EOS5"/>
                <p1>Canon Eos 5D MANTAP LENSA KIT</p1>
                <h6>Rp 8.500.000,-</h6>
                <a class="tombol tombol-rinci" href="#">Rincian</a> 
                <a class="tombol tombol-tuku" href="#">Beli</a>
      </div>
     <div class="kum-kamera">
                <img src="/images/act2.png" alt="itek"/>
                <p1>ITEK ACTIONCAM NEW VERSION</p1>
                <h6>Rp 5.500.000,-</h6>
                <a class="tombol tombol-rinci" href="#">Rincian</a> 
                <a class="tombol tombol-tuku" href="#">Beli</a>
    </div>
      </div>
    </div>
  </div>
  <br></br>
    </Layout>     
    ); 
  } 
export default Beranda;