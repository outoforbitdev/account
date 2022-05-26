import React, { Component } from 'react';
import { Login } from './Components/Login';
import { StyleThemes } from './core/Components/IComponentProps';

interface IAppProps {

}

interface IAppState {
    theme: StyleThemes;
}

export default class App extends Component<IAppProps, IAppState> {
    static displayName = App.name;

    changeTheme(theme: StyleThemes) {
        this.setState({ theme: theme });
    }

    render() {
        this.state = {
            theme: StyleThemes.Light,
        };
      return (
          <div className={this.state.theme}>
              <Login changeTheme={this.changeTheme} />
          </div>
    );
  }
}
