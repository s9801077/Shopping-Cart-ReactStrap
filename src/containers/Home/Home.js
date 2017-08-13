import React, {Component} from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Hello from './Hello.js';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <Header />
        <Content />
        <Hello />
      </div>
    );
  }
}
