class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { counter: 0 };
  }
  
  handleClick(){
      this.setState({counter : this.state.counter + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>{this.state.counter}</button>
    );
  }
}
