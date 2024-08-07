// import { Link } from "react-router-dom";
import { Footer, Header } from "./common";
import { useEffect, useState } from "react";

export default function Home() {

    return (<>
        <Header />
        <Banner />
        <News />
        <Footer />
    </>);
}



function FatchAPI() {
    const [data, setData] = useState([]);
    const apiget = () => {
        fetch("https://inshortsapi.vercel.app/news?category=all")
            .then((response) => response.json())
            .then((json) => {
                setData(json.data)
            })
    }
    useEffect(
        () => {
            apiget();
            const interval = setInterval(
                () => {
                    apiget();
                }, 10000
            )
            return () => clearInterval(interval);
        }, []
    )
    return (<>
        {
            data.map((items, i) =>
            (
                <div class="col-lg-4 col-md-6 mt-md-4 mt-sm-4">
                    <div class="grids5-info">
                        <a href="/" class="d-block zoom">
                            <img src={items.imageUrl} alt="" class ="img-fluid news-image" style={{width:"100%", height:"350px" }} />
                        </a>
                        <div class="blog-info">
                            <h4 style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}><a href="/">{items.title}</a></h4>
                            <p class="date"><span class="fa fa-calendar mr-2"></span> {items.date},{items.time}</p>
                            <p style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }}>{items.content}</p>
                            <a href={items.readMoreUrl} class="btn btn-news mt-4">Read More</a>
                        </div>
                    </div>
                </div>
            ))
        }
    </>)
}


function Banner() {

    return (<>
        <section id="home" class="w3l-banner py-5">
            <div class="container py-lg-5 mt-lg-5">
                <div class="py-lg-4 my-2">
                    <div class="banner-info-grid mt-lg-5">
                        <h3 class="mb-4">Top News for You</h3>
                        <section id="bottom" class="demo">
                            <a href="#bottom"><span></span>Scroll</a>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

function News() {
    return (<>
        <div class="w3l-news" id="news">
            <section id="grids5-block" class="py-5">
                <div class="container py-lg-5 py-md-4 py-2">
                    <h3 class="title-big text-center">Top News</h3>
                    <div class="row mt-lg-5 mt-4" id="news api">
                        <FatchAPI />

                    </div>
                </div>
            </section>
        </div>
    </>)
}