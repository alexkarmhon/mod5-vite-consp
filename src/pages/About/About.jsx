import { Link, Outlet } from 'react-router-dom';

import css from './About.module.css';

const About = () => {
  return (
    <main>
      <h2>About page</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente tenetur consectetur adipisci, quae debitis impedit excepturi laudantium qui repellendus id rem aperiam perspiciatis dolorum consequuntur, similique aspernatur repellat cupiditate accusamus?
      Explicabo nisi illum, dolorum possimus quo saepe facere ipsam voluptatem, illo deleniti placeat, repellendus alias atque sunt magnam rerum asperiores! Illum, facere dolores consequuntur vitae numquam tempore voluptate. Cum, totam.
      Amet maxime asperiores modi a esse unde eaque similique facilis officia ratione quaerat, eveniet accusantium id soluta ut officiis distinctio quas ipsa. Eius repellendus aperiam, quia quasi temporibus voluptates necessitatibus!
      Deserunt voluptas, rerum nihil eos saepe dolore tempore autem ullam, necessitatibus suscipit assumenda in consectetur, velit corporis eius numquam nobis? Obcaecati laborum, cum repudiandae fugiat nesciunt maiores? Error, dolorum nesciunt?
      Perspiciatis ex accusantium omnis dolorum quisquam similique sequi unde soluta odio officiis, quam aliquid facere eligendi ea facilis cupiditate? Expedita dolorem numquam voluptatibus at, odio alias sit voluptate temporibus laborum.</p>

      <ul className={css.listWrapper}>
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
    </main>
  );
};

export default About;
