import React from "react";

const About = () => {
  return (
  <section className="section-news section-t8">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="title-wrap d-flex justify-content-between">
          <div className="title-box">
            <h2 className="title-a">About</h2>
          </div>
        </div>
      </div>
    </div>
    <footer className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-map box">
              <div id="map" className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                  width="100%"
                  height={450}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 section-t8">
            <div className="row">
              <div className="col-md-7">
                <form
                  className="form-a contactForm"
                  action
                  method="post"
                  role="form"
                >
                  <div id="sendmessage">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage" />
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="url"
                          name="subject"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          cols={45}
                          rows={8}
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                          defaultValue={""}
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-a">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5 section-md-t3">
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="ion-ios-paper-plane" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Say Hello</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">
                        Email.
                        <span className="color-a">contact@example.com</span>
                      </p>
                      <p className="mb-1">
                        Phone.
                        <span className="color-a">+54 356 945234</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="ion-ios-pin" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Find us in</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">
                        Manhattan, Nueva York 10036,
                        <br /> EE. UU.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box-icon">
                    <span className="ion-ios-redo" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Social networks</h4>
                    </div>
                    <div className="icon-box-content">
                      <div className="socials-footer">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="fa fa-pinterest-p"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="fa fa-dribbble"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  </section>
  );
};

export default About;
