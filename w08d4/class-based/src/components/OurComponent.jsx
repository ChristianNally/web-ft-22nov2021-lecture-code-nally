import React from 'react';

class OurComponent extends React.Component {

  constructor(props){
    super(props); // prevents rare bugs
    this.state = {
      processedThing: props.twoProp + "!!",   // const [processedThing] = useState(props.twoProp + "!!");
      count: 0,
      clearMe: null
    };
    this.clickHandler = this.clickHandler.bind(this); // 
  }

  clickHandler(){
    this.setState( {count: this.state.count + 1 } );
    // this.state.count = this.state.count + 1;
  }

  componentDidMount(){
    console.log(`componentDidMount`);
    const clearMeLater = setInterval(() => {
      console.log('a thing is happening');
    }, 3000);
    this.setState({clearMe: clearMeLater});
  }

  componentDidUpdate(prevProps, prevState){
    console.log(`componentDidUpdate`);
  }

  componentWillUnmount(){
    console.log(`componentWillUnmount`);
    clearInterval(this.state.clearMe);
  }

  render() {
    return (
      <h1>
        <div>Some Text</div>
        <div>{this.props.oneProp}</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>Plus One Me</button>
      </h1>
    );
  }

}

// const ourComponent = () => {

//   // business logic goes here.

//   return (
//     <h1>
//       <div>Some Text</div>
//     </h1>
//   );

// };

export default OurComponent;