import Layout from '../../layouts/layout'; 

export default function daftar(){
return(
<Layout>
<div className="container">
              <center><h4>DAFTAR AKUN</h4></center>
              <br></br>
              <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Alamat</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Jl.K.Mahfud ..."/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Kota</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Kecamatan</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Kode Pos</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Daftar</button>
</form>
</div>
<br></br>
</Layout>
);
}
