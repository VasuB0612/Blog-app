import { React, useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:8000/api/users/reset-password",
        { email }
      );
      if (data) {
        alert(data.status);
        // console.log(email);
      }
      alert("User does not exist");
    } catch (error) {
      alert(
        "An error occurred while trying to reset the password. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Password reset</h3>
      <div>
        <label htmlFor="">Email address</label>
        <input
          type="email"
          value={email}
          placeholder="type your email id here"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">submit</button>
        <p>Sign up</p>
      </div>
    </form>
  );
};

export default ForgotPassword;
