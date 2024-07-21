import React, { useEffect, useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../img/bootstrap-logo.png'
import nav_out_img from '../img/navOut.png'
export default function Home() {
  const displayNav = () => {
    document.getElementById('home-nav').style.display = "block";
    document.getElementById('homeNavBtn').style = "display:none";
    document.getElementById('close-nav').style.display = "block";
  }
  const closeNav = () => {
    if (window.innerWidth <= 720) {
    document.getElementById('home-nav').style.display = "none";
    document.getElementById('homeNavBtn').style = "display:block";
    document.getElementById('close-nav').style.display = "none";
    }
  }
  const [buttonText, setButtonText] = useState('<i class="fa-solid fa-clipboard"></i>');
  const codeRef = useRef();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeRef.current.textContent)
      .then(() => {
        setButtonText('Copied to Clipboard!');
        setTimeout(() => {
          setButtonText('<i class="fa-solid fa-clipboard"></i>');
        }, 2000); // Reset button text after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 720) {
        // Add styles or enable functionality for larger screens
        document.getElementById('home-nav').style.display = "block";
        const homeNavButton = document.getElementById('homeNavBtn');
        if (homeNavButton) {
          homeNavButton.style = "display:none";
        }
        const closeButton = document.getElementById('close-nav');
        if (closeButton) {
          closeButton.style = "display:none";
        }
      } else {
        document.getElementById('home-nav').style.display = "none";
        const homeNavButton = document.getElementById('homeNavBtn');
        if (homeNavButton) {
          homeNavButton.style = "display:block";
        }
        const closeButton = document.getElementById('close-nav');
        if (closeButton) {
          closeButton.style = "display:none";
        }
      }
    }

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <div className='main container-fluid'>
      <div className='home-nav' id='home-nav'>
        <div className="navbar nav-underline flex-column" id="homeNav">
          <button className="navbar-toggler ms-auto mx-2" id='close-nav' type="button" onClick={closeNav}>
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <ul className="navbar-nav me-auto mx-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink
                onClick={closeNav}
                style={{ "cursor": "pointer" }}
                className="nav-link"
                to="bootstrap-overview"
                smooth={true}
                duration={100}
                offset={-120} // Adjust for fixed navbar height
              >
                Bootstrap Overview
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                onClick={closeNav}
                style={{ "cursor": "pointer" }}
                className="nav-link"
                to="download"
                smooth={true}
                duration={100}
                offset={-70}
              >
                Download
              </ScrollLink>
            </li>
            <hr />
            <li>
              <ScrollLink
                onClick={closeNav} className="nav-link mx-2 disabled" aria-disabled="true" to='/'>Components</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                onClick={closeNav}
                style={{ "cursor": "pointer" }}
                className="nav-link"
                to="navbar"
                smooth={true}
                duration={100}
                offset={-120}
              >
                Navbar
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                onClick={closeNav}
                style={{ "cursor": "pointer" }}
                className="nav-link"
                to="forms"
                smooth={true}
                duration={100}
                offset={-70}
              >
                Forms
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='header'>
        <button id="homeNavBtn" className="btn btn-primary mx-2 mt-2" type="button" onClick={displayNav}>
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
      <div className='main-content'>
        {/* Overview */}
        <div id="bootstrap-overview" className='container mx-2 mt-5'>
          <h2 className='mx-3'>
            Bootstrap 5 Get Started -- Overview
          </h2>
          <hr />
          <h4 className='mt-4'>What is Bootstrap?</h4>
          <img className="img-fluid float-start my-2 mx-5" src={logo} width="150" alt="Bootstrap" />
          <div className="grid gap-3">
            <div className="p-2 g-col-6">
              <li>Bootstrap is a free front-end framework for faster and easier web development</li>
            </div>
            <div className="p-2 g-col-6">
              <li>Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins</li>
            </div>
            <div className="p-2 g-col-6">
              <li>Bootstrap also gives you the ability to easily create responsive designs</li>
            </div>
          </div>
          <hr />

          <div className="row mx-3 mt-2">
            <div className='col-md-4'>
              <h4 className='p-3 text-info text-info'>Options</h4>
              <p>
                Customize Bootstrap with built-in variables to easily
                toggle global CSS preferences.
              </p>
            </div>
            <div className='col-md-4'>
              <h4 className='p-3 text-info'>Color</h4>
              <p>
                Learn about and customize the color systems that
                support the entire toolkit.
              </p>
            </div>
            <div className='col-md-4'>
              <h4 className='p-3 text-info'>Components</h4>
              <p>
                Learn how we build nearly all our components
                responsively and with base and modifier classes.
              </p>
            </div>
          </div>
          <div className="row mx-3 mt-1">
            <div className='col-md-4'>
              <h4 className='p-3 text-info'>Optimize</h4>
              <p>
                Keep your projects lean, responsive, and maintainable
                so you can deliver the best experience.
              </p>
            </div>
            <div className='col-md-4'>
              <h4 className='p-3 text-info'>CSS variables</h4>
              <p>
                Use Bootstrap's CSS custom properties for fast and
                forward-looking design and development.
              </p>
            </div>
          </div>

        </div>

        {/* Download */}
        <hr />
        <div id="download" className='container mx-2 mt-2'>
          <h2>Download</h2>
          <p className="h4 fw-light mt-4">
            Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more
          </p>

          <h3 className='mt-4'>
            Compiled CSS and JS <a href="https://getbootstrap.com/docs/5.3/getting-started/download/#compiled-css-and-js">#</a>
          </h3>
          <p className='p-2'>
            Download ready-to-use compiled code for Bootstrap v5.3.3 to easily drop into your project, which includes:
            <ul>
              <li>Compiled and minified CSS bundles (see <a href='https://getbootstrap.com/docs/5.3/getting-started/contents/#css-files'>CSS files comparison</a></li>
              <li>Compiled and minified JavaScript plugins (see <a href='https://getbootstrap.com/docs/5.3/getting-started/contents/#js-files'>JS files comparison</a></li>
            </ul>
            This doesn’t include documentation, source files, or any optional JavaScript dependencies like Popper.
            <br />
            <a href='https://github.com/twbs/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-dist.zip'><button className='btn btn-primary  mt-3'>Download</button></a>
          </p>

          <h3 className='mt-4'>
            CDN via jsDelivr <a href="https://getbootstrap.com/docs/5.3/getting-started/download/#cdn-via-jsdelivr">#</a>
          </h3>
          <p className='p-3'>
            Skip the download with <a href='https://www.jsdelivr.com/'>jsDelivr</a> to deliver cached version of Bootstrap’s compiled CSS and JS to your project
          </p>

          <div className="code-snippet-container p-3" style={{ backgroundColor: '#f5f5f5', borderRadius: '5px', position: 'relative' }}>
            <pre ref={codeRef} className="p-3" style={{ overflow: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-all', marginBottom: '0' }}>
              <code>
                &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" /&gt;
                <br />
                &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
              </code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="position-absolute btn btn-info"
              style={{ top: '10px', right: '10px' }}
              dangerouslySetInnerHTML={{ __html: buttonText }}
            />
          </div>


        </div>

        {/* NavBar */}
        <hr />
        <div id="navbar" className='container mx-2 mt-2'>
          <h2>Navbar</h2>
          <p className="h4 fw-light mt-4">
            Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
          </p>

          <h3 className='mt-4'>
            Supported content <a href="https://getbootstrap.com/docs/5.3/getting-started/download/#compiled-css-and-js">#</a>
          </h3>
          <p className='p-2'>
            Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:
            <ul>
              <li><span className='text-primary'>.navbar-brand</span> for your company, product, or project name.</li>
              <li><span className='text-primary'>.navbar-nav</span> for a full-height and lightweight navigation (including support for dropdowns).</li>
              <li><a href="https://getbootstrap.com/docs/5.3/getting-started/download/#compiled-css-and-js">Click To See More...</a> </li>
            </ul>
          </p>

          <p className='p-3'>
            Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.
          </p>

          <div className="code-snippet-container p-3" style={{ backgroundColor: '#f5f5f5', borderRadius: '5px', position: 'relative' }}>
            <img src={nav_out_img} alt='Code Output' className='img-fluid' />
            <hr />
            <pre ref={codeRef} className="p-3" style={{ overflow: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-all', marginBottom: '0' }}>
              <code>
                &lt;nav class="navbar navbar-expand-lg bg-body-tertiary"&gt;
                <br />
                &nbsp;&nbsp;&lt;div class="container-fluid"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="navbar-brand" href="#"&gt;Navbar&lt;/a&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="collapse navbar-collapse" id="navbarSupportedContent"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul class="navbar-nav me-auto mb-2 mb-lg-0"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li class="nav-item"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="nav-link active" aria-current="page" href="#"&gt;Home&lt;/a&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li class="nav-item"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li class="nav-item dropdown"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dropdown
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul class="dropdown-menu"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li class="nav-item"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a class="nav-link disabled" aria-disabled="true"&gt;Disabled&lt;/a&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;form class="d-flex" role="search"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btn btn-outline-success" type="submit"&gt;Search&lt;/button&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&lt;/div&gt;
                <br />
                &lt;/nav&gt;
              </code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="position-absolute btn btn-info mt-4"
              style={{ top: '10px', right: '10px' }}
              dangerouslySetInnerHTML={{ __html: buttonText }}
            />
          </div>


        </div>

        {/* Forms */}
        <hr />
        <div id="forms" className='container mx-2 mt-2' style={{height:680}}>
          <h3>Forms</h3>
          <p className='p-3'>
            Some Snippet Here..
          </p>
        </div>
      </div>
    </div >

  )
}
