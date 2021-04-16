import React, { Component } from 'react';

class LeftNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasChangedLn: false,
            newLnItems: ["來自LeftNav-A", "來自LeftNav-B", "來自LeftNav-C"],
            orignalLnItems: [],
            newBodyContent: { Title: "來自子層Body標題", Content: "來自子層Body內容" },
            originalBdData:{},
            hasChangedBd: false
        }
        this.FuncChangeLeftNav = this.ChangeLeftNav.bind(this);
        this.FuncChangeBody = this.ChangeBody.bind(this);
    }

    ChangeLeftNav(inputItems) {
        if (this.state.hasChangedLn === true) {
            this.props.funcFromMasterLN(this.state.orignalLnItems);
        }
        else {
            //this.state.orignalLnItems = this.props.vmodelLN.navItems;
            this.setState({ orignalLnItems : this.props.vmodelLN.navItems });
            this.props.funcFromMasterLN(inputItems);
        }

        //this.state.hasChangedLn = !this.state.hasChangedLn;
        this.setState({ hasChangedLn : !this.state.hasChangedLn });
    }

    ChangeBody(title, content) {
        //this.props.funcFromMasterMB();
        if (this.state.hasChangedBd === true) {
            this.props.funcFromMasterMB(this.state.originalBdData.Title, this.state.originalBdData.Content);
        }
        else {
            console.log("vmodelMB:",this.props.vmodelMB);
            //this.state.originalBdData = this.props.vmodelMB;
            this.setState({ originalBdData : this.props.vmodelMB });
            this.props.funcFromMasterMB(title, content);
        }

        //this.state.hasChangedBd = !this.state.hasChangedBd;
        this.setState({ hasChangedBd : !this.state.hasChangedBd });
    }

    render() {
        const items = []
        console.log("this", this);
        for (const [index, value] of this.props.vmodelLN.navItems.entries()) {
            items.push(<li key={index}>{value}</li>)
        }

        return (
            <div className="left-nav">
                <div><button onClick={() => { this.FuncChangeLeftNav(this.state.newLnItems) }}>更換</button></div>
                <div>{this.props.children}</div>
                <div>
                    {items}
                </div>
                <div>
                    <button 
                        onClick={()=>{this.FuncChangeBody(this.state.newBodyContent.Title, this.state.newBodyContent.Content)}}
                    >
                        變更Body
                    </button>
                </div>
            </div>
        );

    }
}

export default LeftNav;