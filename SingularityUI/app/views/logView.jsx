import View from './view';
import React from 'react';
import ReactDOM from 'react-dom';
import LogContainer from '../components/logs/LogContainer';
import { Provider } from 'react-redux';

class LogView extends View {
    constructor(...args) {
      super(...args);
      this.handleViewChange = this.handleViewChange.bind(this);

    }

    initialize(store) {
      window.addEventListener('viewChange', this.handleViewChange);
      this.store = store;
    }

    handleViewChange() {
      let unmounted = ReactDOM.unmountComponentAtNode(this.el);
      if (unmounted) {
        return window.removeEventListener('viewChange', this.handleViewChange);
      }
    }

    render() {
      $(this.el).addClass('tail-root');
      ReactDOM.render(<Provider store={this.store}><LogContainer /></Provider>, this.el);
    }
  }

export default LogView;