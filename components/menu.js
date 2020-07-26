
function Menu(){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">  
<div className="container">
<a class="navbar-brand" href="#">
    <img src="/images/brand.png" width="60" height="40" alt="zonakamera" ></img>
  </a>
  <form class="form-inline my-3 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Cari Kamera...." aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cari</button>
    </form>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a class="nav-link " href="/">Beranda</a> 
      </li>
      <li className="nav-item active">
        <a class="nav-link " href="/kamera">Kamera</a>
      </li>
      <li className="nav-item active">
        <a class="nav-link " href="/actioncam">Action Cam</a>
      </li>
      <li className="nav-item active">
        <a class="nav-link " href="/feedback">Feedback</a>
      </li>
      <li className="nav-item active">
        <a class="nav-link " href="/tentang">Tentang Kami</a>
      </li>
      <li class="nav-item dropdown" >
        <a class="nav-link dropdown-toggle" href="/akun/index" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Akun
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/akun/daftar">Daftar</a>
          <a class="dropdown-item" href="/akun/login">Masuk</a>
        </div>
      </li>
    </ul>
  </div>
  </div>
</nav>
);
}
export default Menu;
