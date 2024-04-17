import css from './Team.module.css';

const Team = () => {
  return (
    <section className={css.container}>
      <h2>Team</h2>
      <ul>
        <li>
          <b>CEO</b> - Olexii Karm-Hon
        </li>
        <li>
          <b>Sales</b> - Irina Karm-Hon
        </li>
        <li>
          <b>Product</b> - Toha Iron
        </li>
        <li>
          <b>Marketing</b> - Tania Hlam
        </li>
        <li>
          <b>Engineering</b> - Tony Struck
        </li>
      </ul>
    </section>
  );
};

export default Team;
