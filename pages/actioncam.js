import Layout from '../layouts/layout'; 

export default function actioncam(){
  return(
    <div>
      <Layout>
        <h1>KATALOG ACTION CAMERA</h1>
        <p>Silahkan Dipilih Action Camera dan Aksesorisnya dijamin Lengkap</p>
        <hr/>
        <center>
        <div class="list-produk">
        <img src="/images/act.png" width="150px"></img>
        <h4> Bpro Action Cam </h4>
        <h5> Rp 2.000.000,- </h5>
        
        <a class="tombol tombol-detail" href="#">Detail</a>
        <a class="tombol tombol-beli" href="#">Beli</a>
        </div>

        <div>
        <img src="/images/act1.png" width="100px"></img>
        <h4> Xiaomi Yi 5 </h4>
        <h5> Rp 4.000.000,- </h5>
        
        <a class="tombol tombol-detail" href="#">Detail</a> 
        <a class="tombol tombol-beli" href="#">Beli</a>
        </div>
        </center>
      </Layout> 
    </div>
  );
}