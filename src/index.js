import React from 'react';
import ReactDOM from 'react-dom';

class Pronote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.changeTool = this.changeTool.bind(this);
  }

  changeTool(event){
    this.setState({
      value: event.target.value
    });
  }
  render() 
  {
    var background = {
        backgroundColor: "#2a65f7",
        marginTop: -19,
        marginLeft: -8,
        marginRight: -8
    };
    var backStyle = {
      visibility: "visible",
      display: "inline-block",
      height: 500,
      textAlign: "center",
      width : 370,
      padding: 0,
      margin: 20,
      backgroundColor: "grey",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)",
    };

    return(
      <div style = {background}>
                <div>
                    <h3 style = {{marginLeft: 4, color: " #f0f3f4 "}}>Input</h3>

                    <textarea style = {{marginLeft: 20, height: 410, width: 610, backgroundColor: "#2a65f7", color: " #f0f3f4 ", borderColor: "black"}}
                      onChange = {this.changeTool}> 
                       {this.state.value}
                     </textarea>

                </div>

                <div style = {backStyle}>
                    <h3 style = {{}}>Pro Note</h3>

                    
                    <div className="output-text"></div>
                    <h3 style = {{textAlign: "left", marginLeft: 10, color: " #f0f3f4 "}}> {this.state.value} </h3>
                </div>                
            </div>
    );
  }
}


ReactDOM.render(
  <Pronote/>,
  document.getElementById('root')
);