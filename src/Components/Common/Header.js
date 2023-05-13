import logo from '/imgs/KRLogo.png';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="./">
                <img src={logo} width="auto" height="50" class="d-inline-block align-top" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">



                    <li class="nav-item">
                        <a class="nav-link" href="./books">Books</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="./about">About</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="./contact">Contact</a>
                    </li>


                </ul>

                <span class="nav-item social-medias">
                    <a class="" href="#"><i class='fa fa-facebook'></i></a>
                    <a class="" href="#"><i class="fa fa-twitter"></i></a>
                    <a class="" href="#"><i class="fa fa-amazon"></i></a>
                </span>

            </div>
        </nav>
    );
}

export default Header;
