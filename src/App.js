import './App.css';
import React from "react";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Result from "./components/Result";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            frontSize: 15
        };
        this.onSetColor = this.onSetColor.bind(this)
    }

    render() {
        return (
            <div className='container mt-50'>
                <div className='row'>
                    <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
                    <SizeSetting/>
                    <Result color={this.state.color}/>
                </div>
            </div>
        );
    }

    onSetColor(params) {
        this.setState(
            {color: params}
        )
    }
}

export default App;
