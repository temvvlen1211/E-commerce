import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

export default function SignUp() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100      ">
      <form className="col-sm-3">
        <h1>Log in</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Create a password"
          />
        </div>

        <div>
          <button
            type="submit"
            class="btn w-100 my-3"
            style={{ backgroundColor: "#6941C6", color: "#fff" }}
          >
            Log in
          </button>
        </div>
        <div className="text-center my-2">
          <label class="form-label ">
            <Link
              to="/signup"
              style={{ color: "#6941C6" }}
              className="text-decoration-none  "
            >
              Sign up
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
}
