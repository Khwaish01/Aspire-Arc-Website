import { useCallback } from "react";
import "./TitleFrame.css";

const TitleFrame = () => {
  const onFeedbackFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='exoloreMoreAndAboutUs']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeedbackFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='courses']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeedbackFrameContainer2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='locationContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeedbackFrameContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactUs']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeedbackFrameContainer4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='feedback']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='exoloreMoreAndAboutUs']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGoogleIconClick = useCallback(() => {
    window.open("https://g.co/kgs/XmPScA");
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/khushi-mishra-323986202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  }, []);

  const onGroupIconClick = useCallback(() => {
    window.open("https://www.instagram.com/aspire_arc/");
  }, []);

  const onGitHubIconClick = useCallback(() => {
    window.open("https://github.com/KHUSHIM02");
  }, []);

  const onORFILLTHEClick = useCallback(() => {
    window.open("https://forms.gle/BvgQzoLuxSscvvLr5");
  }, []);

  const onRatingComponentContainerClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onWhatsAppImage20231128At1Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir//aspire+arc+mayur+vihar+extension/@28.471966,77.1361956,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce5f9b08159a7:0xac394a9f075135fd!2m2!1d77.2963625!2d28.5955646?entry=ttu"
    );
  }, []);

  const onGoogleIcon1Click = useCallback(() => {
    window.open("https://g.co/kgs/XmPScA");
  }, []);

  const onLinkedinIcon1Click = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/khushi-mishra-323986202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  }, []);

  const onGroupIcon2Click = useCallback(() => {
    window.open("https://www.instagram.com/aspire_arc/");
  }, []);

  const onGitHubIcon1Click = useCallback(() => {
    window.open("https://github.com/KHUSHIM02");
  }, []);

  return (
    <div className="title-frame">
      <section className="title-frame-inner">
        <div className="math-image-parent">
          <header className="math-image">
            <div className="text-frame">
              <img
                className="logo-icon"
                loading="eager"
                alt=""
                src="/logo.svg"
              />
              <h1 className="aspire-arc">Aspire Arc</h1>
            </div>
            <div className="personalized-counselling">
              <div className="contact-us-frame">
                <div className="image-at">
                  <div className="home">Home</div>
                </div>
                <div
                  className="feedback-frame"
                  onClick={onFeedbackFrameContainerClick}
                >
                  <div className="about">About</div>
                </div>
                <div
                  className="feedback-frame1"
                  onClick={onFeedbackFrameContainer1Click}
                >
                  <div className="courses">Courses</div>
                </div>
                <div
                  className="feedback-frame2"
                  onClick={onFeedbackFrameContainer2Click}
                >
                  <div className="location">Location</div>
                </div>
                <div
                  className="feedback-frame3"
                  onClick={onFeedbackFrameContainer3Click}
                >
                  <div className="contact">Contact</div>
                </div>
                <div
                  className="feedback-frame4"
                  onClick={onFeedbackFrameContainer4Click}
                >
                  <div className="feedback">Feedback</div>
                </div>
              </div>
            </div>
          </header>
          <div className="star-component">
            <div className="united-india-apartments">
              <div className="phone-no-parent">
                <div className="phone-no">
                  <div className="follow-us">
                    <div className="the-design-thinking-container">
                      <p className="aspire">{`Aspire `}</p>
                      <p className="to-inspire">
                        <span>To</span>
                        <span className="span">{`   `}</span>
                        <span className="inspire">Inspire</span>
                      </p>
                      <p className="unleash-your-brilliance">
                        Unleash Your Brilliance
                      </p>
                    </div>
                  </div>
                  <div className="button" onClick={onButtonContainerClick}>
                    <div className="get-started">Explore More ...</div>
                  </div>
                </div>
                <div className="maths-science-frame">
                  <div className="parent-frame-maths-science">
                    <b className="follow-us1">Follow us :</b>
                    <div className="rectangle-maths-science">
                      <div className="group-computer-science">
                        <img
                          className="google-icon"
                          loading="eager"
                          alt=""
                          src="/google.svg"
                          onClick={onGoogleIconClick}
                        />
                        <img
                          className="linkedin-icon"
                          loading="eager"
                          alt=""
                          src="/linkedin.svg"
                          onClick={onLinkedinIconClick}
                        />
                        <img
                          className="group-icon"
                          loading="eager"
                          alt=""
                          src="/group.svg"
                          onClick={onGroupIconClick}
                        />
                        <img
                          className="github-icon"
                          loading="eager"
                          alt=""
                          src="/github.svg"
                          onClick={onGitHubIconClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="student-imteraction-image">
              <img
                className="hard-working-characters-png-tr"
                loading="eager"
                alt=""
                src="/hard-working-characters-png-transparent-hard-working-english-four-or-six-girls-character-design-girl-c-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="exolore-more-and-about-us"
        data-scroll-to="exoloreMoreAndAboutUs"
      >
        <div className="rating-component">
          <div className="text-introducing-machine-learn">
            <h1 className="why-aspire-arc">Why Aspire Arc?</h1>
          </div>
        </div>
        <div className="personalized-counselling-sessi">
          <img
            className="coffees-01-icon"
            loading="eager"
            alt=""
            src="/coffees01@2x.png"
          />
          <div className="rectangle-location">
            <div className="text-united-india-apartments">
              <div className="phone-no-frame">
                <h1 className="supportive-faculty">Supportive Faculty</h1>
              </div>
              <div className="aspire-arc-values-container">
                <p className="aspire-arc-values">
                  Aspire Arc values a holistic approach to education,
                  understanding that students may not always excel in academics
                  but should possess a clear understanding of both academic
                  concepts and life skills.
                </p>
                <p className="the-faculty-at">
                  The faculty at Aspire Arc is committed to providing support
                  and guidance to students, fostering an environment where
                  learning is not solely focused on grades but on overall
                  comprehension and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="parent-contact-us">
          <div className="frame-book-free-illustration-s">
            <div className="title-frame1">
              <div className="sub-title-frame">
                <div className="background-rectangle">
                  <div className="img-frame">
                    <h1 className="interactive-learning">
                      Interactive Learning
                    </h1>
                  </div>
                  <div className="classes-at-aspire-container">
                    <p className="classes-at-aspire">
                      Classes at Aspire Arc are designed to be lively and
                      interactive, encouraging student engagement and
                      participation.
                    </p>
                    <p className="the-emphasis-on">
                      The emphasis on discussions promotes a deeper
                      understanding of the subjects, allowing students to
                      actively contribute to the learning process.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="coffees-01-icon1"
                alt=""
                src="/coffees01-1@2x.png"
              />
            </div>
            <div className="frame-parent">
              <div className="immerse-text-wrapper">
                <div className="immerse-text">
                  <img
                    className="coffees-01-icon2"
                    alt=""
                    src="/coffees01-2@2x.png"
                  />
                  <div className="th-frame-wrapper">
                    <div className="th-frame">
                      <div className="flexible-schedules-wrapper">
                        <h1 className="flexible-schedules">
                          Flexible Schedules
                        </h1>
                      </div>
                      <div className="recognizing-the-challenges-container">
                        <p className="recognizing-the-challenges">
                          Recognizing the challenges some students face in
                          attending classes on weekdays, Aspire Arc provides
                          flexibility with weekend batches.
                        </p>
                        <p className="this-allows-students">
                          This allows students with other commitments or
                          scheduling constraints to still access quality
                          education and engage in the learning process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="personalized-counselling-frame">
                <div className="contact-us-frame1">
                  <div className="rating-component-wrapper">
                    <div className="rating-component1">
                      <div className="real-world-applications-wrapper">
                        <h1 className="real-world-applications">
                          Real-world Applications
                        </h1>
                      </div>
                      <div className="aspire-arc-believes-container">
                        <p className="aspire-arc-believes">
                          Aspire Arc believes in the practical application of
                          theoretical knowledge. Students are not only exposed
                          to academic concepts but also learn how these concepts
                          are applied in real-world scenarios.
                        </p>
                        <p className="this-approach-ensures">
                          This approach ensures that students not only grasp the
                          theoretical foundations of their subjects but also
                          understand their relevance in practical situations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="coffees-01-icon3"
                    alt=""
                    src="/coffees01-3@2x.png"
                  />
                </div>
                <div className="personalized-counselling1">
                  <img
                    className="coffees-01-icon4"
                    alt=""
                    src="/coffees01-4@2x.png"
                  />
                  <div className="personalized-counselling-inner">
                    <div className="frame-group">
                      <div className="guidance-for-the-future-wrapper">
                        <h1 className="guidance-for-the">
                          Guidance for the Future
                        </h1>
                      </div>
                      <div className="aspire-arc-goes-container">
                        <p className="aspire-arc-goes">
                          Aspire Arc goes beyond traditional education by
                          providing guidance on future career paths and
                          university choices.
                        </p>
                        <p className="students-benefit-from">
                          Students benefit from insights that help them make
                          informed decisions about their educational and
                          professional journeys, ensuring they are well-prepared
                          for the challenges that lie ahead.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses1" data-scroll-to="courses">
        <div className="th-grade-computer-science">
          <div className="immerse-yourself">
            <h1 className="courses2">Courses</h1>
          </div>
        </div>
        <div className="frame-container">
          <div className="introducing-machine-learning-parent">
            <div className="introducing-machine-learning">
              <img
                className="untitled-design-9-1"
                loading="eager"
                alt=""
                src="/untitled-design-9-1@2x.png"
              />
              <div className="th-10th-grade-maths-scienc-parent">
                <h2 className="th-10th">{`9th & 10th Grade: Maths, Science`}</h2>
                <h3 className="immerse-yourself-in-container">
                  <p className="immerse-yourself-in">
                    Immerse yourself in the world of numbers and equations, and
                    unravel the secrets of science. Our engaging courses make
                    learning math and science an exciting adventure!
                  </p>
                </h3>
              </div>
            </div>
            <div className="introducing-machine-learning1">
              <img
                className="untitled-design-10-1"
                loading="eager"
                alt=""
                src="/untitled-design-10-1@2x.png"
              />
              <div className="th-12th-grade-computer-scie-parent">
                <h2 className="th-12th">{`11th & 12th Grade:  Computer Science(Python)`}</h2>
                <h3 className="step-into-the">
                  Step into the digital realm and explore the limitless
                  possibilities of computer science. From coding to cutting-edge
                  technologies, we prepare you for the tech-driven world ahead.
                </h3>
              </div>
            </div>
          </div>
          <div className="machine-learning-intro">
            <div className="whats-app-image-frame">
              <img
                className="untitled-design-11-1"
                loading="eager"
                alt=""
                src="/untitled-design-11-1@2x.png"
              />
              <div className="frame-text">
                <h2 className="introducing-machine-learning2">
                  {" "}
                  Introducing Machine Learning: Where Innovation Meets
                  Intelligence
                </h2>
                <h3 className="take-your-skills">
                  Take your skills to the next level with our Machine Learning
                  course. Dive into the world of artificial intelligence and
                  discover the magic of machines that learn and adapt.
                </h3>
              </div>
            </div>
            <div className="contact-us">
              <img
                className="untitled-design-11-2"
                loading="eager"
                alt=""
                src="/untitled-design-11-2@2x.png"
              />
              <div className="personalized-counselling-sessi-parent">
                <h2 className="personalized-counselling-sessi1">
                  Personalized Counselling Sessions
                </h2>
                <h3 className="embark-on-a">
                  Embark on a journey of self-discovery and professional
                  fulfillment with our personalized Career Counseling Sessions.
                  Unveil your true potential, navigate career crossroads, and
                  sculpt a path that aligns with your passions.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us1" data-scroll-to="contactUs">
        <img
          className="whatsapp-image-2023-11-26-at-1"
          loading="eager"
          alt=""
          src="/whatsapp-image-20231126-at-1114-1@2x.png"
        />
        <h1 className="contact-us2">Contact us</h1>
        <div className="book-your-free-illustration-se-parent">
          <div className="book-your-free-container">
            <p className="book-your-free">
              Book your free illustration session now !!!
            </p>
            <p className="fill-the-form">
              {" "}
              Fill the form or call us on +91 8860914595
            </p>
          </div>
          <div className="or-fill-the-form-wrapper">
            <h1 className="or-fill-the-container" onClick={onORFILLTHEClick}>
              <p className="or">OR</p>
              <p className="fill-the-form1">FILL THE FORM</p>
            </h1>
          </div>
        </div>
      </section>
      <section className="feedback1" data-scroll-to="feedback">
        <img
          className="whatsapp-image-2023-11-28-at-1"
          alt=""
          src="/whatsapp-image-20231128-at-1304-1@2x.png"
        />
        <div className="rating-system">
          <h1 className="please-provide-your">PLEASE PROVIDE YOUR FEEDBACK</h1>
          <div
            className="rating-component2"
            onClick={onRatingComponentContainerClick}
          >
            <img
              className="rating-component-child"
              loading="eager"
              alt=""
              src="/star-12.svg"
            />
            <img
              className="rating-component-item"
              loading="eager"
              alt=""
              src="/star-13.svg"
            />
            <img
              className="rating-component-inner"
              loading="eager"
              alt=""
              src="/star-14.svg"
            />
            <img
              className="star-icon"
              loading="eager"
              alt=""
              src="/star-15.svg"
            />
            <img
              className="rating-component-child1"
              loading="eager"
              alt=""
              src="/star-16.svg"
            />
          </div>
        </div>
        <h1 className="your-opinion-matters">YOUR OPINION MATTERS TO US</h1>
      </section>
      <section className="location-wrapper">
        <div className="location1" data-scroll-to="locationContainer">
          <div className="location-pad">
            <h1 className="we-are-currently-container">
              <p className="we-are-currently-located-at">
                <b>We are currently located at</b>
              </p>
              <p className="united-india-apartments-mayur">
                <b>{` `}</b>
                <span>
                  United India Apartments, Mayur Vihar Extension, New Delhi,
                  Delhi - 110091
                </span>
              </p>
            </h1>
          </div>
          <img
            className="whatsapp-image-2023-11-28-at-11"
            loading="eager"
            alt=""
            src="/whatsapp-image-20231128-at-1304-2@2x.png"
            onClick={onWhatsAppImage20231128At1Click}
          />
        </div>
      </section>
      <section className="design-1-parent">
        <img
          className="design-1-icon"
          loading="eager"
          alt=""
          src="/design-1@2x.png"
        />
        <div className="united-india-info">
          <div className="united-india-apartments1">
            <div className="apartment-address">
              <h3 className="united-india-apartments2">
                United India Apartments, Mayur Vihar Extension, New Delhi, Delhi
                - 110091
              </h3>
              <div className="phone-no-91">Phone No. +91 8860914596</div>
            </div>
            <div className="social-media-links">
              <div className="follow-us-parent">
                <h3 className="follow-us2">Follow us :</h3>
                <div className="google-linkedin-group-git-hub">
                  <div className="social-media-icons">
                    <img
                      className="google-icon1"
                      alt=""
                      src="/google-1.svg"
                      onClick={onGoogleIcon1Click}
                    />
                    <img
                      className="linkedin-icon1"
                      alt=""
                      src="/linkedin.svg"
                      onClick={onLinkedinIcon1Click}
                    />
                    <img
                      className="group-icon1"
                      alt=""
                      src="/group-1.svg"
                      onClick={onGroupIcon2Click}
                    />
                    <img
                      className="github-icon1"
                      alt=""
                      src="/github-1.svg"
                      onClick={onGitHubIcon1Click}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TitleFrame;
