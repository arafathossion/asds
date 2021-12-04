

function App() {
    return (
        <div className="App">
            <div className="header_link pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <a className="navbar-brand" href="#" >
                                <img src="./img/logotop.svg" alt="Brand_loge" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-md navbar-light ">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#slider">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#best_moments">Best moments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#family">family</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li>


                        </ul>
                        <div className="social_link">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""> <i className="fab fa-discord"></i></a>
                            <a href=""> <i className="fas fa-ship"></i></a>
                        </div>
                        <a href="#" className="pain_link">disconnected</a>
                    </div>
                </div>
            </nav>

            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-6">
                            <div className="banner_img">
                                <img src="./img/top-img.gif" alt="" />

                                <div className="banner_border">
                                </div>

                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-9 col-sm-12 col-12">
                            <div className="banner_heading">
                                <img src="./img/logo.svg" alt="" />
                            </div>

                            <p className="banner_text">8,888 unique collectible Penguins with proof of ownership stored on the
                                Ethereum blockchain.
                                Featured on New York Times, CNBC, and Bloomberg. Pudgy Penguins are "Non-Fungible Tokens" on
                                Ethereum, and each Pudgy Penguin was created as an ERC-721 standard token, that powers most
                                digital art and collectibles.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="number_counter">
                <div className="container pa">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="number_bg">
                                <h5>items</h5>
                                <p className="m-0">8,800</p>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="number_bg">
                                <h5>owners</h5>
                                <p className="m-0">4,716</p>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="number_bg">
                                <h5>floor</h5>
                                <p className="m-0">1.089 ETH</p>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="number_bg">
                                <h5>volume traded</h5>
                                <p className="m-0">42,271 ETH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="slider">
                <div className="container pa">

                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                            <img src="./img/penguin.svg" alt="" className="ar" />
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
                            <div className="pain_heading">
                                <h4 className="m-0">WHAT ABOUT</h4>
                                <h1 className="m-0">THE PROJECT</h1>
                            </div>
                        </div>
                    </div>



                    <div className="row pa">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="./img/1.jpg" className="d-inline-block w-10" alt="..." />
                                        <img src="./img/2.jpg" className="d-inline-block w-10 ps-4" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./img/3.jpg" className="d-inline-block w-10" alt="..." />
                                        <img src="./img/4.jpg" className="d-inline-block w-10 ps-4" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./img/5.jpg" className="d-inline-block w-10" alt="..." />
                                        <img src="./img/6.jpg" className="d-inline-block w-10 ps-4" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./img/7.jpg" className="d-inline-block w-10" alt="..." />
                                        <img src="./img/8.jpg" className="d-inline-block w-10 ps-4" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5 pt-xxl-0 pt-xl-0 pt-lg-0 pt-md-5 pt-sm-5 pt-5">
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
                <div className="container pa">
                    <div className="row">
                        <div className="col-4">
                            <img src="./img/penguin.svg" alt="" className="ar" />
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="pain_heading">
                                <h4 className="m-0">MIAMI BEACH</h4>
                                <h1 className="m-0">EXCLUSIVE MERCH</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row matemask_content pa">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src="./img/PP_MIAMI_FINAL.jpg" alt="" className="a2" />


                            <div className="matemask_content_footer pt-5">
                                <h4 className="m-0">GENERATE YOUR SPECIAL CODE</h4>
                                <h6 className="mb-4">You need to connect to metamask</h6>
                                <a href="#" className="pain_link">connect to matemask</a>
                            </div>

                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-xxl-0 pt-xl-0 pt-lg-0 pt-md-5 pt-sm-5 pt-5">
                            <p>We are releasing <strong>120 Miami Beach Tee</strong> to celebrate our event during Art Basel.
                                <br />
                                To receive a Tee, you must attend the <strong>Pudgy Penguins Miami Beach 2021 Event</strong> on
                                <strong>December 3</strong> at the <strong>Rudolf Budja Gallery</strong>.
                            </p>

                            <p> The Merch is first come first serve so <strong className="text-color">the first</strong> 120 Pudgy
                                Penguins to arrive will receive a free exclusive <strong className="text-color">Tee and
                                    Sticker</strong>. In order to prove you are a Pudgy Penguin holder at the live
                                event, you will need to show a <strong className="text-color">unique passcode</strong>.
                                You can <strong className="text-color">generate your unique passcode</strong> on our website to
                                receive your exclusive merch in Miami.
                                After claiming your passcode, keep record of this code in order to redeem it at the event in
                                Miami on December 3. You may only claim this Special Code once per holder. No more than one Tee
                                and sticker will be given out to each individual at the event, therefore the quantity of Pudgy
                                Penguins you hold will not be relevant.</p>

                            <p> <strong className="text-color">See ya there!</strong> Make sure to get there on time, at <strong
                                className="text-color">8 PM EST</strong> for the best chance of receiving one
                                of the <strong className="text-color">120 Tees</strong>.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="best_moments">
                <div className="container pa">
                    <div className="row">
                        <div className="col-4">
                            <img src="./img/penguin.svg" alt="" className="ar" />
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="pain_heading">
                                <h4 className="m-0">OUR</h4>
                                <h1 className="m-0">BEST MOMENTS</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row pa awq">

                        <div className="col-12 mb-5">
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="best_info">
                                        <div className="best_moment_content">
                                            <h6>AUGUST 12 2021</h6>
                                            <h5>LAUNCHING INTO  THE METAVERSE</h5>
                                        </div>

                                        <div className="best_icon">
                                            <i className="fas fa-square-full"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 col-9">
                                    <div className="best_content">
                                        <p>8888 Pudgy Penguins were available to mint on July 22 for 0.03 ETH and sold out in
                                            less than 20 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mb-5">
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="best_info">
                                        <div className="best_moment_content">
                                            <h6>AUGUST 12 2021</h6>
                                            <h5>GOING VIRAL</h5>
                                        </div>

                                        <div className="best_icons">
                                            <i className="fas fa-caret-down"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 col-9">
                                    <div className="best_content">
                                        <p>Pudgy Penguins were featured in the <a href="#">New York Times</a>. Throughout the
                                            year of 2021, Pudgy Penguins were showcased on CNBC, Bloomberg, and other popular
                                            news networks. Professional NBA player, Steph Curry, joined The Huddle this year and
                                            acquired a Pudgy Penguin.</p>

                                        <img src="./img/nytimes.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mb-5">
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="best_info">
                                        <div className="best_moment_content">
                                            <h6>SEPTEMBER 6 2021</h6>
                                            <h5>PUDGY PENGUINS <br /> RADIO</h5>
                                        </div>

                                        <div className="best_icons">
                                            <i className="fas fa-caret-down"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 col-9">
                                    <div className="best_content">
                                        <p>Pudgy Penguins have a dedicated <a href="#">24/7 live radio on Youtube</a> for people
                                            to listen to chill LoFi music and relax to some winter animations.</p>

                                        <img src="./img/music.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mb-5">
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="best_info">
                                        <div className="best_moment_content">
                                            <h6>AUGUST 30 2021</h6>
                                            <h5>PUDGY PRESENTS</h5>
                                        </div>

                                        <div className="best_icons">
                                            <i className="fas fa-caret-down"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 col-9">
                                    <div className="best_content">
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
                <div className="container pa">
                    <div className="row">
                        <div className="col-4">
                            <img src="./img/penguin.svg" alt="" className="ar" />
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="pain_heading">
                                <h4 className="m-0">PUDGY</h4>
                                <h1 className="m-0">FAMILY</h1>
                            </div>
                        </div>
                    </div>


                    <div className="row pa">

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <img src="./img/mrtubby.png" alt="" className="family_img" />
                                </div>
                                <div className="col-6">
                                    <div className="family_content">
                                        <h4>MRTUBBY</h4>
                                        <p>Co-Founder of PP. Co-Creative Director and Operations Manager. NFT Collector and
                                            Computer Science Student.</p>
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <img src="./img/micah.png" alt="" className="family_img" />
                                </div>
                                <div className="col-6">
                                    <div className="family_content">
                                        <h4>MRTUBBY</h4>
                                        <p>Co-Founder of PP. Design Lead and Managing Member. Senior in College, Metaverse
                                            Explorer.</p>
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <img src="./img/jonah.png" alt="" className="family_img" />
                                </div>
                                <div className="col-6">
                                    <div className="family_content">
                                        <h4>MRTUBBY</h4>
                                        <p>Co-Founder of PP. Positions Manager, and Sophomore in College.</p>
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <img src="./img/cole.png" alt="" className="family_img" />
                                </div>
                                <div className="col-6">
                                    <div className="family_content">
                                        <h4>MRTUBBY</h4>
                                        <p>Co-Founder of PP. Lead Community Manager & Marketing Specialist. NFT Collector and
                                            Digital Entrepreneur</p>
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <img src="./img/miinded.png" alt="" className="family_img" />
                                </div>
                                <div className="col-6">
                                    <div className="family_content">
                                        <h4>MRTUBBY</h4>
                                        <p>Team of 4. We develop smart contracts and websites.</p>
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="faq">

                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src="./img/penguin.svg" alt="" className="ar" />
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="pain_heading">
                                <h4 className="m-0">FREQUENTLY ASKED</h4>
                                <h1 className="m-0">QUESTIONS</h1>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1.
                                        WHAT IS A PUDGY PENGUIN ?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Pudgy Penguins are randomly generated, non-fungible tokens, also known as an "NFT." There is 8888 different Pudgy Penguins and each Penguin is completely unique. No two Pudgy Penguins are the same. The Pudgy Penguins were generated from a smart contract using over 150 different hand drawn traits. Pudgy Penguins are minted, stored, and traded on the Ethereum blockchain.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        2.
                                        HOW DO I PURCHASE A PENGUIN ?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        You can purchase a Pudgy Penguin from our verified collection on the OpenSea marketplace
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        3.
                                        HOW MANY PUDGY PENGUINS EXISTS ?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        8,888 Pudgy Penguins
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                        4.
                                        WHEN DID PUDGY PENGUINS LAUNCH ?
                                    </button>
                                </h2>
                                <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        The launch date was July 22, 2021 at 4 P.M. EST
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                        5.
                                        ARE SOME PUDGY PENGUINS MORE RARE THAN OTHERS ?
                                    </button>
                                </h2>
                                <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Every Pudgy Penguin has unique traits/attributes, but some traits are more rare than others. For example, 357 Pudgy Penguins have Headbands, but only 58 have a Crown. You can see the traits for a Pudgy Penguin under "properties" on OpenSea OR you can look at a third party tool such as Rarity Tools. Rarity Tools takes into account how rare the combination of traits on Pudgy Penguins are and scores them with a "Rarity Score." Check it on Rarity Tool
                                    </div>
                                </div>
                            </div>


                           
                        </div>
                    </div>
                </div>

            </section>

            <footer>
                <div className="container">
                    <div className="row asw">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">

                            <div className="footer_logo">
                                <h6>Home</h6>
                                <a href="#">Smart Contract</a>
                            </div>

                            <div className="social_link">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""> <i className="fab fa-discord"></i></a>
                                <a href=""> <i className="fas fa-ship"></i></a>
                            </div>
                        </div>

                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                            <a className="navbar-brand" href="#">
                                <img src="./img/logo.svg" alt="Brand_loge" />
                            </a>

                            <p className="pt-3">©2021 Pudgy Penguins. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
