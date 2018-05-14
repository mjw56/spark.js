import { Component } from 'inferno';

class About extends Component {
  static getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { stuff: 'more stuffs' };
  }
  render() {
    console.log(this.props);
    return this.props.stuff ? <div>about</div> : null;
  }
}

export default About;
