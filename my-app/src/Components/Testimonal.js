import React from "react";
import './Testimonal.css'

function Testimonal() {
  return (
    <div>
      {/* <section className="testimonials-container">
        <h1>Testimonials</h1>
        <div className="testimonials">
          <p className="testemonial-quote">
            “I would reccomend the Frontend Bootcamp to anyone who is serious
            about getting into the field” <span className="testemonial-quote-author">Vinegar Doppio</span>
          </p>
          <p className="testemonial-quote">
          “The instructors were so helpful in making us understand difficult to learn concepts. Couldn't ask for more”<span className="testemonial-quote-author">Dio Brandon</span>
          </p>
          <p className="testemonial-quote">
            “I would reccomend the Frontend Bootcamp to anyone who is serious
            about getting into the field” <span className="testemonial-quote-author">Giorno Giovanna</span>
          </p>
        </div>
      </section> */}
      <div class="pic-ctn">
        <p>
          “I would reccomend the Frontend Bootcamp to anyone who is serious
          about getting into the field”{" "}
          <span className="testemonial-quote-author">Vinegar Doppio</span>
        </p>
        <p className="testemonial-quote">
          “The instructors were so helpful in making us understand difficult to
          learn concepts. Couldn't ask for more”
          <span className="testemonial-quote-author">Dio Brandon</span>
        </p>
        <p className="testemonial-quote">
          “I would reccomend the Frontend Bootcamp to anyone who is serious
          about getting into the field”{" "}
          <span className="testemonial-quote-author">Giorno Giovanna</span>
        </p>
      </div>
    </div>
  );
}

export default Testimonal;
