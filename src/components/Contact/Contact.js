import React from 'react'

const Contact = () => {
    return (
        <section id="contact" class="contact-section">
          <div class="contact-section-header">
            <h2 className="fw-bold">Let's work together...</h2>
            <p>How do you take your coffee?</p>
          </div>
          <div class="contact-links">
            <a
              rel="noreferrer"
              id="profile-link"
              href="https://github.com/Tintodd"
              target="_blank"
              class="btn contact-details"
            ><i class="fab fa-github"></i><span style={{color: '#eee'}}> GitHub</span>
            </a>
            <a href="mailto:Tim.Ham88@gmail.com" class="btn contact-details"
            ><i class="fas fa-at"></i><span style={{color: '#eee'}}> Send an email</span>
            </a>
          </div>
        </section>
    )
}

export default Contact
