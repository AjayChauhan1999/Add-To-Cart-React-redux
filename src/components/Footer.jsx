import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import {
  FaFacebook,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-2">
      <footer className="bg-light text-center ">
        {/* Grid container  */}
        <div className="container p-4">
          {/* Section: Social media  */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              className="btn btn-primary border border-none rounded-circle shadow btn-floating m-1 rounded-circle "
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <FaFacebook fontSize={22} />
            </a>

            {/* Twitter */}
            <a
              className="btn btn-primary border border-none shadow btn-floating m-1 rounded-circle"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <FaTwitterSquare fontSize={22} />
            </a>

            {/* Google */}
            <a
              className="btn btn-primary border border-none shadow btn-floating m-1 rounded-circle"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <AiFillGoogleCircle fontSize={22} />
            </a>

            {/* Instagram  */}
            <a
              className="btn btn-primary border border-none shadow btn-floating m-1 rounded-circle"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <FaInstagram fontSize={22} />
            </a>

            {/* Linkedin  */}
            <a
              className="btn btn-primary border border-none shadow btn-floating m-1 rounded-circle"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <FaLinkedin fontSize={22} />
            </a>
            {/* Github */}
            <a
              className="btn btn-primary border border-none shadow btn-floating m-1 rounded-circle"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <FaGithubSquare fontSize={22} />
            </a>
          </section>
          {/* Section: Social media */}

          {/* Section: Form  */}
          <section className="">
            <form action="">
              {/* Grid row */}
              <div className="row d-flex justify-content-center">
                {/* Grid column */}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for more explore</strong>
                  </p>
                </div>
                {/* Grid column */}

                {/* <!--Grid column--> */}
                <div className="col-md-5 col-12">
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      id="form5Example2"
                      className="form-control"
                    />
                  </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-auto">
                  {/* <!-- Submit button --> */}
                  <button type="submit" className="btn btn-primary mb-4">
                    Subscribe
                  </button>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </form>
          </section>
          {/* <!-- Section: Form --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}

export default Footer;
