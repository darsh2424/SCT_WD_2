import React, { useRef, useState } from 'react'
import app_image from '../img/react-default-landing-page.png'
import point from '../img/point.gif'
export default function AboutUs() {
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
  return (
    <>
      <div className='container'>
        <h2 className='pt-5'>About This Page</h2>
        <div className='row'>
          <div className='col-md-12 mt-4'>
            <img className="img-fluid float-end my-2 mx-2" src={app_image} width="550" alt="Bootstrap" />
            <p className='fw-lighter fs-5'>
              Welcome to our innovative application, crafted with React—a powerful JavaScript library designed for <strong> building dynamic user interfaces. Experience seamless interactions, swift performance, and a modular architecture that ensures easy maintenance and scalability. Our application leverages React's component-based structure, allowing for reusable UI elements and efficient updates.</strong> Enjoy a smooth, responsive experience across all devices, and benefit from the flexibility to extend and customize features as needed. Dive into a world where modern web development meets exceptional user experience :D
            </p>
          </div>
        </div>
        <hr />
        <div className='row mt-3'>
          <h4><img src={point} width='45' alt='point-gif' className='mx-2' />npx create-react-app</h4>
          <p className='p-3 fs-5'>
            <strong>Use create-react-app for a Quick Start:</strong><br />
            Create React App is a great tool to quickly set up a new React project with a sensible default configuration. To get started, simply run the following command in your terminal:
          </p>
          <div className="code-snippet-container p-3" style={{ backgroundColor: '#f5f5f5', borderRadius: '5px', position: 'relative' }}>
            <pre ref={codeRef} className="p-3" style={{ overflow: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-all', marginBottom: '0' }}>
              <code>
                npx create-react-app my-app <br />
                cd my-app <br />
                npm start
              </code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="position-absolute btn btn-info"
              style={{ top: '10px', right: '10px' }}
              dangerouslySetInnerHTML={{ __html: buttonText }}
            />
          </div>
          <p className='p-3 fs-5'>
            Replace my-app with your desired project name. This command sets up a new React project with all the necessary configurations and dependencies, so you can start coding right away without worrying about the setup. It also includes a development server, build scripts, and a basic project structure to help you stay organized.
          </p>
        </div>
      </div>
    </>
  )
}
