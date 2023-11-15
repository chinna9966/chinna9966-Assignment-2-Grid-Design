import React, { Component } from 'react'

export default class LatestPost extends Component {
    render() {
        return (
            <div>
                <main>
                <section id="trending-post">
                    <h1>Latest Posts</h1>
                    <p id="categories-container"><i className="fas fa-filter filter-icon"></i>Filter by Category</p>
                    <span className="filter-text all">All</span>
                    <span className="filter-text">Artificial Intelligence</span>
                    <span className="filter-text">Cloud Computing</span>
                    <span className="filter-text">DevOps</span>
                    <span className="filter-text">Programming Languages</span>
                    <span className="filter-text">Mobile Application Development</span>
                    <span className="filter-text">Technology and Tools</span>
                    <span className="filter-text">Get a Job in Tech Company</span>
                    <span className="filter-text">Others</span>
                </section>
                <article className="items">
                    <a href="#">
                    <img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Introducing you all to Edyoda</h3>
                        <div className="author-date-section">
                            <span className="item-author">Arman Ahmed</span>
                            <span className="item-date">05 Jul 2019</span>
                        </div>
                    
                    <p className="item-description">Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of...</p>
                    </div></a>
                </article>
                <article className="items">
                    <a href="#" ><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Amazon Web Services (AWS) Cloud Day...</h3>
                        <div className="author-date-section">
                            <span className="item-author">Kalyan Mahalingam</span>
                            <span className="item-date">05 Jul 2019</span>
                        </div>
                    
                    <p className="item-description">It was indeed a hectic day with back to back session sandwitched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels...</p>
                    </div></a>
                </article>
                <article className="items">
                    <a href="#" ><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/1_G1i7GlRPMGboYZdRhOeWaw.png" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Building the University for 21st Century...</h3>
                        <div className="author-date-section">
                            <span className="item-author">Arman Ahmed</span>
                            <span className="item-date">20 Jul 2019</span>
                        </div>
                    
                    <p className="item-description">The google analytics dashboard was firing up, the whole team, each one of us was on the edges - half elated, half anxious and a little worried. And it happened...</p>
                    </div></a>
                </article>
                <article className="items">
                    <a href="#"><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">What is Income Share Agreement?</h3>
                        <div className="author-date-section">
                            <span className="item-author">Edyoda</span>
                            <span className="item-date">14 Oct 2019</span>
                        </div>
                    
                    <p className="item-description">The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman...</p>
                    </div></a>
                </article>
                <article className="items">
                    <a href="#" ><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/EdYoda_Admission_Test_Image.png" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Your Guide to Edyoda Admission Test</h3>
                        <div className="author-date-section">
                            <span className="item-author">Edyoda</span>
                            <span className="item-date">3 Feb 2020</span>
                        </div>
                    <p className="item-description">All about Edyoda admissions test and how to avail the scholarships upto INR 2,50,000...<br/><br/><br/></p>
                    </div>
                    </a>
                </article>
                <article className="items">
                    <a href="#" ><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Fresh Graduate or IT Professional looking for...</h3>
                        <div className="author-date-section">
                            <span className="item-author">Arman Ahmed</span>
                            <span className="item-date">05 Jul 2019</span>
                        </div>
                    
                    <p className="item-description">If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity...</p>
                    </div></a>
                </article>
            </main>
            </div>
        )
    }
}