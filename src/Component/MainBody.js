import React, { Component } from 'react';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasChanged: false,
            newContent: { Title: "來自子層Body標題", Content: "來自子層Body內容" },
            orignalData: {}
        }
        this.FuncChangeMainBodyData = this.changeMainBodyData.bind(this);
    }

    changeMainBodyData(title, content) {
        if (this.state.hasChanged === true) {
            this.props.funcFromMaster(this.state.originalData.Title, this.state.originalData.Content);
        }
        else {
            this.state.originalData = { Title: this.props.vmodel.Title, Content: this.props.vmodel.Content };
            this.props.funcFromMaster(title, content);
        }

        this.state.hasChanged = !this.state.hasChanged;
    }

    render() {
        //console.log("body:", this);
        return (

            <div className="main-body">
                <button onClick={() => { this.FuncChangeMainBodyData(this.state.newContent.Title, this.state.newContent.Content) }}>變更</button>
                <div>
                    <h1>{this.props.vmodel.Title}</h1>
                    <p>{this.props.vmodel.Content}</p>
                </div>
            </div>
        );
    }
}

export default MainBody;