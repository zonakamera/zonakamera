import Layout from '../../layouts/layout'; 

export default function Login(){
  return(
    <div>
        <Layout>
        <div className="container">
              <center><h4>LOGIN AKUN</h4></center>
              <br></br>
              <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Alamat Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">kami tidak akan pernah membagikan alamat email anda.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Simpan Akun</label>
  </div>
  <button type="submit" class="btn btn-primary">Masuk</button>
</form>
</div>
<br></br>
<br></br>
        </Layout>
    </div>
  );
}