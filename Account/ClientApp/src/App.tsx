import { log } from 'console';
import React, { Component } from 'react';
import { Creation } from './Components/Creation';
import { Login } from './Components/Login';
import { StyleThemes } from './core/Components/IComponentProps';

interface IAppProps {

}

interface IAppState {
    theme: StyleThemes;
    screen: Screens;
}

export enum Screens {
    Login = "Login",
    Create = "Create",
}

export default class App extends Component<IAppProps, IAppState> {
    static displayName = App.name;

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            theme: StyleThemes.Light,
            screen: Screens.Login,
        };
    }

    changeTheme(theme: StyleThemes) {
        this.setState({ theme: theme });
    }

    changeScreen(screen: Screens) {
        this.setState({ screen: screen });
    }

    createScreen(screen: Screens) {
        const themer = this.changeTheme.bind(this);
        const screener = this.changeScreen.bind(this);
        switch (screen) {
            case Screens.Login:
                return <Login changeTheme={themer} changeScreen={screener} />
            case Screens.Create:
                return <Creation changeTheme={themer} changeScreen={screener} />
        }
    }

    render() {
      return (
          <div className={this.state.theme}>
              {this.createScreen(this.state.screen)}
          </div>
    );
  }
}
