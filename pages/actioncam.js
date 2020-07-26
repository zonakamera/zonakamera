import Layout from '../layouts/layout'; 

export default function actioncam(){
  return(
      <Layout>
        <div class="container">
    <h4 class="text-center font-weight-bold m-4">KATALOG ACTION CAM</h4>
    <h6 class="text-center m-4">Silahkan Dipilih Actioncamnya</h6>
    
    <div className="row">
      <div class="jualan">
      <div class="kum-kamera">
                <img src="/images/act.png" alt="HERO4"/>
                <p1>GO PRO HERO 4 BEKAS ORI</p1>
                <h6>Rp 4.500.000,-</h6>
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
                <img src="/images/act2.png" alt="itek"/>
                <p1>ITEK ACTIONCAM NEW VERSION</p1>
                <h6>Rp 5.500.000,-</h6>
                <a class="tombol tombol-rinci" href="#">Rincian</a> 
                <a class="tombol tombol-tuku" href="#">Beli</a>
      </div>
      <div class="kum-kamera">
                <img src="/images/act3.png" alt="Kogan"/>
                <p1>KOGAN ULTRA HD WIFI JERNIH</p1>
                <h6>Rp 3.500.000,-</h6>
                <a class="tombol tombol-rinci" href="#">Rincian</a> 
                <a class="tombol tombol-tuku" href="#">Beli</a>
      </div>
     <div class="kum-kamera">
                <img src="/images/act4.png" alt="Xiaomi"/>
                <p1>XIAOMI YI 6 WIFI PLUS MEMORYCARD</p1>
                <h6>Rp 2.500.000,-</h6>
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