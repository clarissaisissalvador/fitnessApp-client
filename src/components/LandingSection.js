import { Link } from 'react-router-dom';

// css
import '../index.css'

export default function LandingSection() {
  return (
    <>
<section className="landing-hero">
  <div className="overlay-content">
    <div className="d-flex justify-content-between w-100">
      <h1 className="titles text-start">Just Goals.</h1>
      <h1 className="titles text-end">No Limits.</h1>
    </div>

    <div className="d-flex justify-content-center gap-3 mt-5">
      <Link className="btn" id="btn1" to="/products">Get Started</Link>
      <Link className="btn" id="btn2" to="/register">Register Now!</Link>
    </div>
  </div>
</section>




    </>

  )
}