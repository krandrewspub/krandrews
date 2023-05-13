import './App.css';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';


function App() {
  return (
    <div>
      <Header />



      <div class="top-content">

        <div class="container-fluid content-row">
          <div class="row max-width-center">
            <div class="col-lg-4">
              <div class="card text-center h-100">
                <div class="card-body">
                  <h4 class="card-title garamond">Catch Up On The Latest Release</h4>
                  <p><strong>Up In Ashes</strong>: A gripping psychological thriller you don't want to miss out on! <br /><br />Coming Fall 2023</p>
                  <br />
                  <a href="#" class="btn btn-dark btn-lg">Check It Out!</a>
                </div>
              </div>
            </div>


            <div class="col-lg-8 lg-top-margin">
              <div class="card h-100">

                <div class="row books-show">
                  <div class="col-sm-4">
                    <img class="top-content-img" src={require("../imgs/book.png")} />
                  </div>
                  <div class="col-sm-8 text-center">
                    <div class="card-body">
                      <h4 class="card-title garamond"> Up in Ashes </h4>
                      <p>Just when Abigail thinks her life is finally on the right tracks, she finds herself in the middle of a murder investigation.</p>
                      <p>Anonymous threats, betrayal, and a shady past. Who else can Abigail turn to but herself to find her way out of the mess?</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>


          </div>
        </div>



      </div>






      <div class="email-sign-up">
        <div class="text-center">


          <h3 class="garamond">Keep In Touch</h3>

          <p>Sign up to receive exclusive news, deals, and more!</p>
          <p></p>
          <br />


          <form class="text-center">


            <div class="form-group form-row justify-content-center">

              <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

            </div>


            <button type="submit" class="btn btn-dark btn-lg">Subscribe</button>

          </form>


        </div>



      </div>







      <div class="author-info">
        <div class="text-center">
          <h3 class="garamond">Thanks For Visting</h3>

          <div class="container">

            <div class="row">

              <div class="col-md-2"></div>

              <div class="col-md-3 author-pic">
                <img src={require("../imgs/AuthorPic.png")} />
                <h6 class="garamond">K.R. Andrews</h6>
                <p class="garamond">Lorem ipsum glara fernto sdfadf sadf dsfasdf asdf </p>
              </div>

              <div class="col-md-5 md-top-margin">
                <h5 class="garamond">Check Out My <br /> Amazon Store Front</h5> <br />
                <p class="garamond">Thanks for vising my site. You can find links to all my individual books under the Books tab in the navigation bar at the top of the screen. <br /><br /> I also suggest you check out my Amazon Store Front to see all of my books there! If you've already read one, make sure to check out the others! <br /><br /> <strong>Please be sure to leave a review! I appreciate all feedback!</strong></p><br />
                <a href="#" class="btn btn-dark btn-lg"><i class="fa fa-amazon"></i> Amazon Store</a>
              </div>

              <div class="col-md-2"></div>

            </div>





          </div>

        </div>


      </div>


      <Footer />
    </div>
  );
}

export default App;
