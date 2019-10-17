import React from 'react';
import './App.css';
import LoginScreen from "./routes/LoginScreen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }

  componentDidMount() {
    const loginPage = [];
    loginPage.push(<LoginScreen parentContext={this}/>);
    this.setState({
      loginPage:loginPage
    })
  }
  render() {
    return(
        <div className="App">
          {this.state.loginPage}
          {this.state.uploadScreen}
        </div>
    )
  }
}

export default App;
