import Layout from '../layouts/layout'; 

export default function feedback(){
  return(
      <Layout>
        <center><h4>Feedback Rate</h4></center>
        <br></br>
        <center><label for="customRange1">Rate 0 - 10</label></center>
        <input type="range" class="custom-range" min="0" max="10" id="customRange2"></input>
        <center><button type="submit" class="btn btn-primary">Kirim Feedback</button></center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Layout>    
  );
}

