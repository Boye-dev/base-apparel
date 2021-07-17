import React from 'react';
import logo from './images/logo.svg';
import heroDesk from './images/heroDesk.jpg';
import pattern from './images/bg-pattern-desktop.svg';
import error from './images/icon-error.svg';
import arrow from './images/icon-arrow.svg';
function App() {
  return (
    <div>
      <div className="cont">
        <img className="pattern-bg" src={pattern}/>
  <div className="container">
    <div className="row">
      <div className="col-lg-7">    
        <div className="large-screen">
<img className="logo-img" src={logo}/>
  <h1><span className="we-are">We're</span> coming soon</h1>
 <p className="par-small">Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.</p>
   <div className="email-cont">
    <form>
  <input type="email" placeholder="Email Address" />
  <button type="submit"><img src={arrow}/></button>
  </form>
  </div>
</div> 
      </div>
      <div className="col-lg-5">
        <div className="logo-img-small">
       <img className="img-small" src={logo}/>
        </div>
<div className="head-img"></div>
<div className="smaller-screens">
 <h1><span className="we-are">We're</span> coming soon</h1>
 <p className="par-small">Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.</p>
  <div className="email-cont">
    <form>
  <input type="email" placeholder="Email Address" />
  <button type="submit"><img src={arrow}/></button>
  </form>
  </div>
      </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  );
}

export default App;
