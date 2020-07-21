import Layout from '../layouts/layout'; 

export default function kamera(){
  return(
    <Layout>
    <div>
        <h1>KATALOG KAMERA</h1>
        <p>Silahkan Dipilih Kamera dan Aksesorisnya dijamin Lengkap</p>
        <hr/>
        <center>
        <div class="list-produk">
        <img src="/images/kam.png" width="150px"></img>
        <h4> Sony A6000 </h4>
        <h5> Rp 10.000.000,- </h5>
        
        <a class="tombol tombol-detail" href="#">Detail</a>
        <a class="tombol tombol-beli" href="#">Beli</a>
        </div>

        <div>
        <img src="/images/kam1.png" width="100px"></img>
        <h4> Canon 600D</h4>
        <h5> Rp 7.000.000,- </h5>
        
        <a class="tombol tombol-detail" href="#">Detail</a> 
        <a class="tombol tombol-beli" href="#">Beli</a>
        </div>
        </center>
    </div>
    </Layout>
  );
}