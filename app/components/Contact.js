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

      <ul className='cone-list'>
        <li className='list-item'>
          LinkedIn
          <a
            href='https://www.linkedin.com/in/mudanic/'
            className='btn btn-primary'
            target='_blank'
          >
            <i className='fab fa-linkedin linkedin-icon' />
          </a>
        </li>

        <li className='list-item'>
          Twitter
          <a
            href='https://twitter.com/TeaChaboshi?lang=en'
            className='btn btn-primary'
            target='_blank'
          >
            <i className='fab fa-twitter-square twitter-icon' />
          </a>
        </li>

        <li className='list-item'>
          Website
          <a
            href='https://www.mudanic.com/'
            className='btn btn-primary'
            target='_blank'
          >
            <i className='fas fa-apple-alt website-icon' />
          </a>
        </li>

        <li className='list-item'>
          GitHub
          <a
            href='https://github.com/Bioinformatics-Surgeon'
            className='btn btn-primary'
            target='_blank'
          >
            <i className='fab fa-github-square github-icon' />
          </a>
        </li>

        <li className='list-item'>
          Email
          <a className='btn btn-primary'>
            <div className='tooltip'>
              {' '}
              <span className='tooltiptext' id='myTooltip'>
                mudanic@mudanic.com{' '}
              </span>
              <i className='far fa-envelope email-icon' />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

module.exports = Contact;
