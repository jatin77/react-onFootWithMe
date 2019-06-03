import React from 'react';
import './generic.css';
import beach from './beach.jpg';
import vohoo from './vohoo.jpg';
import happyBeach from './happyBeach.jpg';
import coconut from './coconut.jpg';
import closer from './closer.jpg';
import roll from './roll.jpg';
import fade from './fade.jpg';
function Generic() {
  return (
    <div className='generic'>
      {/* generic one */}
      <section className='generic-one'>
        <div className='generic-one-inner'>
          <div className='generic-one-content'>
            <div className='generic-one-text'>
              <h2>Seminyak Beach</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti saepe at animi ex, eligendi , itaque unde, officiis
                earum repellendus placeat ullam. Cumque.
              </p>
              <div className='learn-more'>
                <button>
                  <i className='fas fa-chevron-right' />
                </button>
                <span>Learn More</span>
              </div>
            </div>
            <div className='generic-one-content-image'>
              <img src={beach} alt='' />
            </div>
          </div>
        </div>
      </section>
      {/* generic two */}
      <section className='generic-two'>
        <div className='generic-two-inner'>
          <div className='generic-two-content'>
            <div className='generic-one-content-image'>
              <img src={vohoo} alt='' />
            </div>
            <div className='generic-two-text'>
              <h2>Jimbaran Bay</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti saepe at animi ex, eligendi , itaque unde, officiis
                earum repellendus placeat ullam. Cumque.
              </p>
              <div className='learn-more'>
                <button>
                  <i className='fas fa-chevron-right' />
                </button>
                <span>Learn More</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* generic three */}
      <section className='generic-three'>
        <div className='generic-three-inner'>
          <div className='generic-three-content'>
            <div className='generic-three-text'>
              <h2>Balangan Beach</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti saepe at animi ex, eligendi , itaque unde, officiis
                earum repellendus placeat ullam. Cumque.
              </p>
              <div className='learn-more'>
                <button>
                  <i className='fas fa-chevron-right' />
                </button>
                <span>Learn More</span>
              </div>
            </div>
            <div className='generic-one-content-image'>
              <img src={happyBeach} alt='' />
            </div>
          </div>
        </div>
      </section>
      {/*palets */}
      <section className='palets'>
        <div className='palets-inner'>
          <div className='palets-about'>
            <div className='palets-intro'>
              <h2>Cool tropical vibes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                debitis neque qui in placeat vitae perferendis possimus animi,
                necessitatibus quas aliquid sit dolorem dolor excepturi quaerat
                non impedit tempore sed?
              </p>
            </div>
            <div className='palet-cards'>
              <div className='palet-cards-one'>
                <div className='palet-cards-one-image'>
                  <img src={coconut} alt='' />
                </div>
                <div className='palet-cards-one-content'>
                  <h3>Best for seafood sunsets</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet tempore repellendus aperiam sequi et, itaque quis
                    porro quibusdam fuga explicabo?
                  </p>
                  <div className='learn-more'>
                    <button>
                      <i className='fas fa-chevron-right' />
                    </button>
                    <span>Learn More</span>
                  </div>
                </div>
              </div>
              <div className='palet-cards-one'>
                <div className='palet-cards-one-image'>
                  <img src={closer} alt='' />
                </div>
                <div className='palet-cards-one-content'>
                  <h3>Best for seafood sunsets</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet tempore repellendus aperiam sequi et, itaque quis
                    porro quibusdam fuga explicabo?
                  </p>
                  <div className='learn-more'>
                    <button>
                      <i className='fas fa-chevron-right' />
                    </button>
                    <span>Learn More</span>
                  </div>
                </div>
              </div>
              <div className='palet-cards-one'>
                <div className='palet-cards-one-image'>
                  <img src={fade} alt='' />
                </div>
                <div className='palet-cards-one-content'>
                  <h3>Best for seafood sunsets</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet tempore repellendus aperiam sequi et, itaque quis
                    porro quibusdam fuga explicabo?
                  </p>
                  <div className='learn-more'>
                    <button>
                      <i className='fas fa-chevron-right' />
                    </button>
                    <span>Learn More</span>
                  </div>
                </div>
              </div>
              <div className='palet-cards-one'>
                <div className='palet-cards-one-image'>
                  <img src={roll} alt='' />
                </div>
                <div className='palet-cards-one-content'>
                  <h3>Best for seafood sunsets</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet tempore repellendus aperiam sequi et, itaque quis
                    porro quibusdam fuga explicabo?
                  </p>
                  <div className='learn-more'>
                    <button>
                      <i className='fas fa-chevron-right' />
                    </button>
                    <span>Learn More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* .form */}
      <section className='form'>
        <div className='form-inner'>
          <div className='form-header'>
            <h1>Get In Touch</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              similique impedit nostrum alias modi harum deleniti magnam esse
              ipsa. Reiciendis corrupti saepe doloribus illo incidunt, expedita
              repudiandae totam dolorem numquam.
            </p>
          </div>
          <div className='form-main'>
            <form>
              <div className='form-group'>
                <label className='label' htmlFor='name'>
                  Name
                </label>
                <input type='text' id='name' />
              </div>
              <div className='form-group'>
                <label className='label' htmlFor='email'>
                  Email
                </label>
                <input type='text' id='email' />
              </div>
              <div className='form-group'>
                <label className='label' htmlFor='message'>
                  Message
                </label>
                <textarea  id='message' />
              </div>
              <button>Send Message</button>
            </form>
          </div>
             {/* contact */}
          <section className="contact">
        <div className="contact-inner">
          <div className="contact-field">
            <div className="contact-field-icon">
            <i className="fas fa-home"></i>
            </div>
            <div className="contact-field-text">
        <p>Untitled Inc</p>
        <p>1234 Somewhere Road Suite #123</p>
        <p>Nashville, TN 77777-343</p>
            </div>
          </div>
          <div className="contact-field">
            <div className="contact-field-icon">
            <i className="fas fa-phone"></i>
            </div>
            <div className="contact-field-text">
        <p>(000) 000-0000</p>
        
            </div>
          </div>
          <div className="contact-field">
            <div className="contact-field-icon">
            <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-field-text">
        <p>example@tome.com</p>
        
            </div>
          </div>
          <div className="contact-field">
            <div className="contact-field-icon">
            <i className="fab fa-twitter"></i>
            </div>
            <div className="contact-field-text">
        <p>twitter@me.id</p>
        
            </div>
          </div>
          <div className="contact-field">
            <div className="contact-field-icon">
            <i className="fab fa-facebook-f"></i>
            </div>
            <div className="contact-field-text">
        <p>facebook@me.id</p>
        
            </div>
          </div>
          <div className="contact-field">
            <div className="contact-field-icon">
            <i className="fab fa-instagram"></i>
            </div>
            <div className="contact-field-text">
        <p>instagram@me.id</p>
        
            </div>
          </div>
        </div>
      </section>
        </div>
        <footer>
        <p><small>&copy; acid 2019</small></p>
      </footer>
      </section>
   
      
    </div>
  );
}

export default Generic;
