import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PageHeader from './components/common/page-header/page-header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/index.less';
import Todos from './components/todos/todos-page/todos-page';
injectTapEventPlugin();

export default class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <PageHeader />
          <Todos />
        </div>
      </MuiThemeProvider>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.object
};
