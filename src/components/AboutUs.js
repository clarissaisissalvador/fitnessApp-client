

export default function AboutUs(){

	return(
  <div id="about">
	<section className="container py-5">
  <div className="row g-4 pt-5">

    {/* Mission */}
    <div className="col-md-6">
      <div className="bento-card h-100 shadow-sm p-4 bg-d text-white">
        <h3 className="fw-bold mb-2">Our Mission</h3>
        <p>
          To empower individuals to take control of their health and fitness journey —
          one rep, one log, one breakthrough at a time.
        </p>
      </div>
    </div>

    {/* Vision */}
    <div className="col-md-6">
      <div className="bento-card h-100 shadow-sm p-4 bg-b text-white">
        <h3 className="fw-bold mb-2">Our Vision</h3>
        <p>
          To become the most trusted fitness companion — blending powerful tracking tools
          with real motivation to help people reach their full potential.
        </p>
      </div>
    </div>

    {/* What We Offer */}
    <div className="col-md-4">
      <div className="bento-card h-100 shadow p-4 bg-g text-white">
        <h4 className="fw-semibold">Track Smarter</h4>
        <p>Log workouts, monitor progress, and crush personal goals — all in one place.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bento-card h-100 shadow-sm p-4 bg-gradient-dark text-white">
        <h4 className="fw-semibold">Train Better</h4>
        <p>Get personalized workout plans and training tools built to evolve with you.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bento-card h-100 shadow-sm p-4 bg-e text-white">
        <h4 className="fw-semibold">Stay Motivated</h4>
        <p>Progress tracking, consistency streaks, and daily inspiration to keep you going.</p>
      </div>
    </div>

  </div>
</section>
</div>

		)
}