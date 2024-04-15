import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About page</h2>

      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know about our team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
