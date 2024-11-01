import "./Header.css"
import Swiper from 'swiper';

import 'swiper/css';
const Header = () => {
    
    return `  <header class="header">
        <div class="row header_top scrolled">
            <div class="logo col-3 ">
                <img src="../Image/Trang/LOGO_MINI.png" alt="">
            </div>
            <div class="navbar col-4">
                <nav class="navbar navbar-expand-lg ">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link " href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/introduce" >Introduce</a>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <a class=" nav-link btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Games
                                      </a>
                                    <ul class="dropdown-menu">
                                      <li><a class="dropdown-item" href="#">Action</a></li>
                                      <li><a class="dropdown-item" href="#">Another action</a></li>
                                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                  </div>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            <div class="header_right col-5">
                <div class="search_game">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" placeholder=" Search for games">
                </div>
                <div class="favourites">
                    <span><i class="fa-solid fa-heart" style="color: #FFFFFF;"></i></span>
                </div>
                <div class="profile">
                    <div class="dropdown">
                        <a class=" " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../Image/Trang/Profile.png" style="width: 40px;"  alt="" />
                         
                        </a>
                      
                        <ul class="dropdown-menu" style="margin-top: 30px;">
                          <li><a class="dropdown-item" href="#">Profile</a></li>
                          <li><a class="dropdown-item" href="#">Settings</a></li>
                        </ul>
                      </div>
                </div>
            </div>
        </div>

       
    </header>`
}

export default Header;
