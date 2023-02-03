import React from 'react'

const Blog = () => {
  return (
  <section className="section-news section-t8">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="title-wrap d-flex justify-content-between">
          <div className="title-box">
            <h2 className="title-a">Blogs</h2>
          </div>
          <div className="title-link">
            <a href="blog-grid.html">All Blogs
              <span className="ion-ios-arrow-forward" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container-card__property">
      <div className="carousel-item-c">
        <div className="card-box-b card-shadow news-box">
          <div className="img-box-b">
            <img src="https://res.cloudinary.com/dppmjy7uj/image/upload/v1675458141/assets_CRM/post-1.jpg" alt className="img-b img-fluid" />
          </div>
          <div className="card-overlay">
            <div className="card-header-b">
              <div className="card-category-b">
                <a href="#" className="category-b">House</a>
              </div>
              <div className="card-title-b">
                <h2 className="title-2">
                  <a href="blog-single.html">House is comming
                    <br /> new</a>
                </h2>
              </div>
              <div className="card-date">
                <span className="date-b">18 Sep. 2017</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item-c">
        <div className="card-box-b card-shadow news-box">
          <div className="img-box-b">
            <img src="https://res.cloudinary.com/dppmjy7uj/image/upload/v1675458141/assets_CRM/post-2.jpg" alt className="img-b img-fluid" />
          </div>
          <div className="card-overlay">
            <div className="card-header-b">
              <div className="card-category-b">
                <a href="#" className="category-b">Travel</a>
              </div>
              <div className="card-title-b">
                <h2 className="title-2">
                  <a href="blog-single.html">Travel is comming
                    <br /> new</a>
                </h2>
              </div>
              <div className="card-date">
                <span className="date-b">18 Sep. 2017</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Blog;