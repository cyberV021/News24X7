import { Link } from "react-router-dom";



export function Header() {
    return (<>
        <header id="site-header" class="fixed-top">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark stroke">
                    <h1><Link class="navbar-brand" to='/'>
                        News 24X7
                    </Link></h1>


                    <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span class="navbar-toggler-icon fa icon-close fa-times"></span>

                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ml-auto mr-5">
                            <li class="nav-item active">
                                <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item @@about__active">
                                <Link class="nav-link" to='/startup'>Startup</Link>
                            </li>
                            <li class="nav-item @@services__active">
                                <Link class="nav-link" to='/sports'>Sports</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/world'>World</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/politics'>Politics</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/business'>Business</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/technology'>Technology</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/bollywood'>Bollywood</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/hollywood'>Science</Link>
                            </li>
                           
                        </ul>
                    </div>
                    {/* <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ml-auto mr-5">
                            <li class="nav-item active">
                                <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item @@about__active">
                                <Link class="nav-link" to= '/startup'>Startup</Link>
                            </li>
                            <li class="nav-item @@services__active">
                                <Link class="nav-link" to='/sports'>Sports</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/world'>World</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/politics'>Politics</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/business'>Business</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/technology'>Technology</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/bollywood'>Bollywood</Link>
                            </li>
                            <li class="nav-item @@contact__active">
                                <Link class="nav-link" to='/hollywood'>Hollywood</Link>
                            </li>

                        </ul>
                    </div> */}

                </nav>
            </div>
        </header >
    </>);
};


export function Footer() {
    return (<>
        <section class="w3l-footer-29-main">
            <div class="footer-29 py-5">
                <div class="container py-lg-4">
                    <div class="row footer-top-29">
                        <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                            <div class="footer-logo mb-4">
                                <Link class="navbar-brand" to="/">
                                    News 24X7 </Link>
                            </div>
                            <p>We are real pros at digital and web design. We work for our clients to provide them with the best service
                                and products. We value every project as we get invaluable experience.</p>
                            <div class="main-social-footer-29 mt-4">
                                <a href="#facebook" class="facebook"><span class="fa fa-facebook"></span></a>
                                <a href="#twitter" class="twitter"><span class="fa fa-twitter"></span></a>
                                <a href="#instagram" class="instagram"><span class="fa fa-instagram"></span></a>
                                <a href="#linkedin" class="linkedin"><span class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">

                            <ul>
                                <h6 class="footer-title-29">Useful Links</h6>
                                <li><Link class="nav-link" to='/'>Home</Link></li>
                                <li><Link class="nav-link" to='/startup'>Startup</Link></li>
                                <li><Link class="nav-link" to='/world'>World</Link></li>
                                <li><Link class="nav-link" to='/politics'>Politics</Link></li>
                            </ul>
                        </div>
                        {/* <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                            <h6 class="footer-title-29">Resources</h6>
                            <ul>
                                <li><a href="#traning">Training</a></li>
                                <li><a href="#marketplace">Marketplace</a></li>
                                <li><a href="#experts">Our Experts</a></li>
                                <li><a href="#platform">Platform</a></li>
                                <li><a href="#customers"> Customers</a></li>
                            </ul>

                        </div> */}
                        <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                            <h6 class="footer-title-29">Instagram posts</h6>
                            <div class="post1">
                                <a href="#url" class="post-title">Practice Safe Design. Always Use...</a>
                                <p>We work for our clients to provide them with the best service</p>
                            </div>
                            <div class="post1 mt-4">
                                <a href="#url" class="post-title">How to Start when You... </a>
                                <p>We work for our clients to provide them with the best service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="w3l-copyright text-center">
                <div class="container">
                    <p class="copy-footer-29">© 2024 Web Service. All rights reserved. Design by <a href="/"
                        target="_blank">
                        Vivek Chhatbar</a></p>
                </div>
            </section>

        </section>
    </>);
}