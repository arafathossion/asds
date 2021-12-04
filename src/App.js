

function App() {
  return (
    <div className="App">
      <div class="header_link pt-5">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <a class="navbar-brand" href="#" >
                        <img src="./img/logotop.svg" alt="Brand_loge"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-md navbar-light ">
        <div class="container">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Best moments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">family</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>


                </ul>
                <div class="social_link">
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""> <i class="fab fa-discord"></i></a>
                    <a href=""> <i class="fas fa-ship"></i></a>
                </div>
                <a href="#" class="pain_link">disconnected</a>
            </div>
        </div>
    </nav>

    <section id="banner">
        <div class="container">
            <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-6">
                    <div class="banner_img">
                        <img src="./img/top-img.gif" alt=""/>

                        <div class="banner_border">
                        </div>

                    </div>
                </div>

                <div class="col-xxl-4 col-xl-4 col-lg-8 col-md-9 col-sm-12 col-12">
                    <div class="banner_heading">
                        <img src="./img/logo.svg" alt=""/>
                    </div>

                    <p class="banner_text">8,888 unique collectible Penguins with proof of ownership stored on the
                        Ethereum blockchain.
                        Featured on New York Times, CNBC, and Bloomberg. Pudgy Penguins are "Non-Fungible Tokens" on
                        Ethereum, and each Pudgy Penguin was created as an ERC-721 standard token, that powers most
                        digital art and collectibles.</p>
                </div>
            </div>
        </div>
    </section>


    <section id="number_counter">
        <div class="container pa">
            <div class="row">
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="number_bg">
                        <h5>items</h5>
                        <p class="m-0">8,800</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="number_bg">
                        <h5>owners</h5>
                        <p class="m-0">4,716</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="number_bg">
                        <h5>floor</h5>
                        <p class="m-0">1.089 ETH</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="number_bg">
                        <h5>volume traded</h5>
                        <p class="m-0">42,271 ETH</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="slider">
        <div class="container pa">

            <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <img src="./img/penguin.svg" alt="" class="ar"/>
                </div>
                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
                    <div class="pain_heading">
                        <h4 class="m-0">WHAT ABOUT</h4>
                        <h1 class="m-0">THE PROJECT</h1>
                    </div>
                </div>
            </div>



            <div class="row pa">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./img/1.jpg" class="d-inline-block w-10" alt="..."/>
                                <img src="./img/2.jpg" class="d-inline-block w-10 ps-4" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="./img/3.jpg" class="d-inline-block w-10" alt="..."/>
                                <img src="./img/4.jpg" class="d-inline-block w-10 ps-4" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="./img/5.jpg" class="d-inline-block w-10" alt="..."/>
                                <img src="./img/6.jpg" class="d-inline-block w-10 ps-4" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="./img/7.jpg" class="d-inline-block w-10" alt="..."/>
                                <img src="./img/8.jpg" class="d-inline-block w-10 ps-4" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5 pt-xxl-0 pt-xl-0 pt-lg-0 pt-md-5 pt-sm-5 pt-5">
                    <p>Pudgy Penguins launched on July 22, 2021. <strong>Each penguin is unique</strong> and no two are
                        exactly alike. The combination of a Pudgy Penguins aesthetics was <strong>randomly generated
                            from over 150 hand drawn traits</strong>.

                        There are 5 Pudgy Penguins that were created by the artist and do not have randomly generated
                        traits. These <strong>5 Pudgy Penguins are known as the most rare</strong> and include a Pudgy
                        Penguin in a banana suit, a shark costume, a pineapple suit, a ghost costume, and one of them is
                        even facing the opposite direction of all other Penguins.</p>
                </div>
            </div>
        </div>
    </section>



    


    <section id="matemask">
        <div class="container pa">
            <div class="row">
                <div class="col-4">
                    <img src="./img/penguin.svg" alt="" class="ar"/>
                </div>
                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                    <div class="pain_heading">
                        <h4 class="m-0">MIAMI BEACH</h4>
                        <h1 class="m-0">EXCLUSIVE MERCH</h1>
                    </div>
                </div>
            </div>

            <div class="row matemask_content pa">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <img src="./img/PP_MIAMI_FINAL.jpg" alt="" class="a2"/>


                    <div class="matemask_content_footer pt-5">
                        <h4 class="m-0">GENERATE YOUR SPECIAL CODE</h4>
                        <h6 class="mb-4">You need to connect to metamask</h6>
                        <a href="#" class="pain_link">connect to matemask</a>
                    </div>

                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-xxl-0 pt-xl-0 pt-lg-0 pt-md-5 pt-sm-5 pt-5">
                    <p>We are releasing <strong>120 Miami Beach Tee</strong> to celebrate our event during Art Basel.
                        <br/>
                        To receive a Tee, you must attend the <strong>Pudgy Penguins Miami Beach 2021 Event</strong> on
                        <strong>December 3</strong> at the <strong>Rudolf Budja Gallery</strong>.
                    </p>

                    <p> The Merch is first come first serve so <strong class="text-color">the first</strong> 120 Pudgy
                        Penguins to arrive will receive a free exclusive <strong class="text-color">Tee and
                            Sticker</strong>. In order to prove you are a Pudgy Penguin holder at the live
                        event, you will need to show a <strong class="text-color">unique passcode</strong>.
                        You can <strong class="text-color">generate your unique passcode</strong> on our website to
                        receive your exclusive merch in Miami.
                        After claiming your passcode, keep record of this code in order to redeem it at the event in
                        Miami on December 3. You may only claim this Special Code once per holder. No more than one Tee
                        and sticker will be given out to each individual at the event, therefore the quantity of Pudgy
                        Penguins you hold will not be relevant.</p>

                    <p> <strong class="text-color">See ya there!</strong> Make sure to get there on time, at <strong
                            class="text-color">8 PM EST</strong> for the best chance of receiving one
                        of the <strong class="text-color">120 Tees</strong>.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="best_moments">
        <div class="container pa">
            <div class="row">
                <div class="col-4">
                    <img src="./img/penguin.svg" alt="" class="ar"/>
                </div>
                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                    <div class="pain_heading">
                        <h4 class="m-0">OUR</h4>
                        <h1 class="m-0">BEST MOMENTS</h1>
                    </div>
                </div>
            </div>

            <div class="row pa awq">

                <div class="col-12 mb-5">
                    <div class="row">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div class="best_info">
                                <div class="best_moment_content">
                                    <h6>AUGUST 12 2021</h6>
                                    <h5>LAUNCHING INTO  THE METAVERSE</h5>
                                </div>

                                <div class="best_icon">
                                    <i class="fas fa-square-full"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 col-9">
                            <div class="best_content">
                                <p>8888 Pudgy Penguins were available to mint on July 22 for 0.03 ETH and sold out in
                                    less than 20 minutes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 mb-5">
                    <div class="row">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div class="best_info">
                                <div class="best_moment_content">
                                    <h6>AUGUST 12 2021</h6>
                                    <h5>GOING VIRAL</h5>
                                </div>

                                <div class="best_icons">
                                    <i class="fas fa-caret-down"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 col-9">
                            <div class="best_content">
                                <p>Pudgy Penguins were featured in the <a href="#">New York Times</a>. Throughout the
                                    year of 2021, Pudgy Penguins were showcased on CNBC, Bloomberg, and other popular
                                    news networks. Professional NBA player, Steph Curry, joined The Huddle this year and
                                    acquired a Pudgy Penguin.</p>

                                <img src="./img/nytimes.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 mb-5">
                    <div class="row">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div class="best_info">
                                <div class="best_moment_content">
                                    <h6>SEPTEMBER 6 2021</h6>
                                    <h5>PUDGY PENGUINS <br/> RADIO</h5>
                                </div>

                                <div class="best_icons">
                                    <i class="fas fa-caret-down"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 col-9">
                            <div class="best_content">
                                <p>Pudgy Penguins have a dedicated <a href="#">24/7 live radio on Youtube</a> for people
                                    to listen to chill LoFi music and relax to some winter animations.</p>

                                <img src="./img/music.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 mb-5">
                    <div class="row">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div class="best_info">
                                <div class="best_moment_content">
                                    <h6>AUGUST 30 2021</h6>
                                    <h5>PUDGY PRESENTS</h5>
                                </div>

                                <div class="best_icons">
                                    <i class="fas fa-caret-down"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 col-9">
                            <div class="best_content">
                                <p>Pudgy Presents we’re claimed by Pudgy Penguin holders. Each Pudgy Present was
                                    handcrafted for each Huddle member. What will be inside of your present? Find out on
                                    Christmas Day!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section id="family">
        <div class="container pa">
            <div class="row">
                <div class="col-4">
                    <img src="./img/penguin.svg" alt="" class="ar"/>
                </div>
                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                    <div class="pain_heading">
                        <h4 class="m-0">PUDGY</h4>
                        <h1 class="m-0">FAMILY</h1>
                    </div>
                </div>
            </div>


            <div class="row pa">

                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                    <div class="row">
                        <div class="col-6">
                            <img src="./img/mrtubby.png" alt="" class="family_img"/>
                        </div>
                        <div class="col-6">
                            <div class="family_content">
                                <h4>MRTUBBY</h4>
                                <p>Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and
                                    Computer Science Student.</p>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                    <div class="row">
                        <div class="col-6">
                            <img src="./img/micah.png" alt="" class="family_img"/>
                        </div>
                        <div class="col-6">
                            <div class="family_content">
                                <h4>MRTUBBY</h4>
                                <p>Co-Founder of PP. Design Lead and Managing Member. Senior in College, Metaverse
                                    Explorer.</p>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                    <div class="row">
                        <div class="col-6">
                            <img src="./img/jonah.png" alt="" class="family_img"/>
                        </div>
                        <div class="col-6">
                            <div class="family_content">
                                <h4>MRTUBBY</h4>
                                <p>Co-Founder of PP. Positions Manager, and Sophomore in College.</p>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                    <div class="row">
                        <div class="col-6">
                            <img src="./img/cole.png" alt="" class="family_img"/>
                        </div>
                        <div class="col-6">
                            <div class="family_content">
                                <h4>MRTUBBY</h4>
                                <p>Co-Founder of PP. Lead Community Manager & Marketing Specialist. NFT Collector and
                                    Digital Entrepreneur</p>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                    <div class="row">
                        <div class="col-6">
                            <img src="./img/miinded.png" alt="" class="family_img"/>
                        </div>
                        <div class="col-6">
                            <div class="family_content">
                                <h4>MRTUBBY</h4>
                                <p>Team of 4. We develop smart contracts and websites.</p>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <footer>
        <div class="container">
            <div class="row asw">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">

                    <div class="footer_logo">
                        <h6>Home</h6>
                        <a href="#">Smart Contract</a>
                    </div>

                    <div class="social_link">
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""> <i class="fab fa-discord"></i></a>
                        <a href=""> <i class="fas fa-ship"></i></a>
                    </div>
                </div>

                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                    <a class="navbar-brand" href="#">
                        <img src="./img/logo.svg" alt="Brand_loge"/>
                    </a>

                    <p class="pt-3">©2021 Pudgy Penguins. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    </div>
  );
}

export default App;
