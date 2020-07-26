import Layout from '../layouts/layout'; 

export default function kamera(){
  return(
    <Layout>
    <div class="container">
    <h4 class="text-center font-weight-bold m-4">KATALOG KAMERA</h4>
    <h6 class="text-center m-4">Silahkan Dipilih Kameranya</h6>
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
                <img src="/images/kam3.png" alt="Fuji"/>
                <p1>FUJIFILM XA3 WIFI LAYAR FLIP</p1>
                <h6>Rp 23.300.000,-</h6>
                <a class="tombol tombol-rinci" href="#">Rincian</a> 
                <a class="tombol tombol-tuku" href="#">Beli</a>
      </div>
     <div class="kum-kamera">
                <img src="/images/kam4.png" alt="Nikon"/>
                <p1>NIKON D550 DLSR BODY ONLY</p1>
                <h6>Rp 4.000.000,-</h6>
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