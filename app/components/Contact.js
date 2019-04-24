const React = require('react');

function Contact() {
  return (
    <div className='container'>
      <img
        src='https://res.cloudinary.com/moodyappcloudname/image/upload/v1556126996/2400x2400Headshot.jpg'
        alt='Picture of Cody Goss'
        className='avatar'
      />
      <h1 className='header'>Cody Goss</h1>
      <ul>
        <li className='list-item'>
          LinkedIn
          <a
            href='https://www.linkedin.com/in/mudanic/'
            className='btn btn-primary'
            target='_blank'
          >
            <i className='fab fa-linkedin' />
          </a>
        </li>
        <li className='list-item'>
          Twitter
          <a
            href='https://twitter.com/TeaChaboshi?lang=en'
            className='btn btn-primary'
            target='_blank'
          >
            <i className='fab fa-twitter-square' />
          </a>
        </li>
        <li className='list-item'>
          GitHub
          <a
            href='https://github.com/Bioinformatics-Surgeon'
            className='btn btn-primary'
            target='_blank'
          >
            <i className='fab fa-github-square' />
          </a>
        </li>
        <li className='list-item'>Website</li>
        <li className='list-item'>Email</li>
      </ul>
    </div>
  );
}

module.exports = Contact;
