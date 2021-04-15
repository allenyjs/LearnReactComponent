import React, { Component } from 'react';

class LeftNav extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hasChanged : false,
            newItems : ["來自LeftNav-A","來自LeftNav-B","來自LeftNav-C"],
            orignalItems : []
        }
        this.FuncChangeLeftNav = this.changeLeftNav.bind(this);
    }

    changeLeftNav(inputItems) {
        if(this.state.hasChanged === true){
            this.props.funcFromMaster(this.state.orignalItems);
        }
        else
        {
            this.state.orignalItems = this.props.vmodel.navItems;
            this.props.funcFromMaster(inputItems);
        }
        

        this.state.hasChanged = !this.state.hasChanged;
    }

    render() {
        const items = []
        console.log("this",this);
        for (const [index, value] of this.props.vmodel.navItems.entries()) {
            items.push(<li key={index}>{value}</li>)
        }

        return (
            <div className="left-nav">
                <div><button onClick={() =>{this.FuncChangeLeftNav(this.state.newItems)}}>更換</button></div>
                <div>{this.props.children}</div>
                <div>
                    {items}
                </div>
            </div>
        );

    }
}

export default LeftNav;