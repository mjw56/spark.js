import { Component } from 'inferno-component';
import logo from './react.svg';
import './Home.css';
import { Link } from 'inferno-router';

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location }) {
    const stuff = await Promise.resolve({ hello: 'world' });
    return stuff;
  }
  render() {
    console.log(this.props);
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Spark.js</h2>
        </div>
        <p className="Home-intro">
          To get started, edit
          <code>{' '}src/Home.js</code>
          {' '}
          or
          {' '}
          <code>src/About.js{' '}</code>
          and save to
          reload.
        </p>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
