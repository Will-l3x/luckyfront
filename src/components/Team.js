import React from 'react'
import '../App.css';

function Team() {
    return (
        <div>
        <section id="team" className="team mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title">
                <h2>Team</h2>
                <p>Our Amazing hardworking and enthusiastic team.
                  Our Amazing hardworking and enthusiastic team
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="member">
                    <div className="image"><img src="images/doc-3.jpg" className="img-fluid" alt /></div>
                    <div className="member-info">
                      <h4>Jessica Chang</h4>
                      <span> Executive Officer</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <div className="social">
                        <a href><i className="fab fa-twitter" /></a>
                        <a href><i className="fab fa-facebook" /></a>
                        <a href><i className="fab fa-instagram" /></a>
                        <a href> <i className="fab fa-linkedin" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="member">
                    <div className="image"><img src="images/doc-3.jpg" className="img-fluid" alt /></div>
                    <div className="member-info">
                      <h4>Jacqueline Chang</h4>
                      <span>Medicine Department</span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className="social">
                        <a href><i className="fab fa-twitter" /></a>
                        <a href><i className="fab fa-facebook" /></a>
                        <a href><i className="fab fa-instagram" /></a>
                        <a href> <i className="fab fa-linkedin" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <div className="member">
                    <div className="image"><img src="images/doc-2.jpg" className="img-fluid" alt /></div>
                    <div className="member-info">
                      <h4>John Doe</h4>
                      <span>MS</span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className="social">
                        <a href><i className="fab fa-twitter" /></a>
                        <a href><i className="fab fa-facebook" /></a>
                        <a href><i className="fab fa-instagram" /></a>
                        <a href> <i className="fab fa-linkedin" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <div className="member">
                    <div className="image">
                      <img src="images/doc-2.jpg" className="img-fluid" alt /></div>
                    <div className="member-info">
                      <h4>Jade Joe</h4>
                      <span>Accountant</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <div className="social">
                        <a href><i className="fab fa-twitter" /></a>
                        <a href><i className="fab fa-facebook" /></a>
                        <a href><i className="fab fa-instagram" /></a>
                        <a href> <i className="fab fa-linkedin" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </div>
    )
}

export default Team
