import {Link} from "react-router";
import groupImage from "../../assets/images/Group.jpeg";
import esterImage from "../../assets/images/ester.jpeg";
import dorasiaImage from "../../assets/images/dorasia.jpeg";
import justineImage from "../../assets/images/justine.jpeg";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
        <title>Homepage</title>
    
      <main>
        {/* Welcome Section */}
        <div className="welcome-message" id="welcomeMessage"></div>
        <h1>Student Portfolio Website</h1>
        <h4>IS 181 Web Programming from the University of Dar es Salaam</h4>

        {/* Group Section */}
        <section className="group-div">
          <img src={groupImage} alt="Group GH Photo" />
          <h4>Group GH</h4>
          <p>
            Below is a crew of members who have effectively participated in making this possible.
            Their hard work and passion drive them forward and have made this work possible.
          </p>
        </section>

        {/* Members Section */}
        <section className="about-div" id="members">
          <h2 className="div-title">Group Members</h2>
          <div className="cards">
            <div className="card">
              <img src={justineImage} alt="Justine Mwala" />
              <h3>Justine Mwala</h3>
              <p className="role">Group Leader</p>
            </div>
            <div className="card">
              <img src={dorasiaImage} alt="Dorasia Luvanda" />
              <h3>Dorasia Luvanda</h3>
              <p className="role">Group Member</p>
            </div>
            <div className="card">
              <img src={esterImage} alt="Ester Kabuka" />
              <h3>Ester Kabuka</h3>
              <p className="role">Group Member</p>
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="table-div" id="contact">
          <table className="contact-table">
            <thead>
              <tr>
                <th colSpan="4">Group Members Contacts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Dorasia Luvanda</strong><br />
                  <b>Tel:</b> 0675508886<br />
                  <b>Email:</b> <Link to="mailto:dorasia41@gmail.com">dorasia41@gmail.com</Link><br />
                  <b>Address:</b> P.O Box 12345, Dar es Salaam<br />
                  <Link to="../pages/Dorasia/Dorasia">My Portfolio</Link>
                </td>
                <td>
                  <strong>Justine Mwala</strong><br />
                  <b>Tel:</b> 0769723785<br />
                  <b>Email:</b> <Link to="mailto:justinemwala06@gmail.com">justinemwala06@gmail.com</Link><br />
                  <b>Address:</b> P.O Box 67890, Songwe<br />
                  <Link to="../pages/Justine/Justine">My Portfolio</Link>
                </td>
                <td>
                  <strong>Ester Kabuka</strong><br />
                  <b>Tel:</b> 0687777275<br />
                  <b>Email:</b> <Link to="mailto:esterkabuka89@gmail.com">esterkabuka89@gmail.com</Link><br />
                  <b>Address:</b> P.O Box 12345, Dar es Salaam<br />
                  <Link to="../pages/Ester/Ester">My Portfolio</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        </main>
    </>
  );
}
