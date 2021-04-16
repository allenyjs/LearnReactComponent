import React, { Component } from 'react';
import LeftNav from './LeftNav.js';
import MainBody from './MainBody.js';
class MasterLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leftNavModel: { navItems: ["來自父層項目A", "來自父層項目B", "來自父層項目C"] },
            mainBodyModel: { Title: "子層Body標題來自父層預設值", Content: "子層Body內容來自父層預設值" }
        }
        this.FuncChangeNav = this.ChangeNav.bind(this);
        this.FuncChangeBodyData = this.ChangeBodyData.bind(this);
        this.FuncChangeBodyForLeft = this.ChangeBodyForLeft.bind(this);
    }

    ChangeNav(inputItems) {
        this.setState({ leftNavModel: { navItems: inputItems } });
    }

    ChangeBodyData(title, content) {
        this.setState({ mainBodyModel: { Title: title, Content: content } });
    }

    ChangeBodyForLeft(){
        alert("aaa");
    }

    render() {
        return (
            <div>
                <LeftNav vmodelLN={this.state.leftNavModel} 
                funcFromMasterLN={this.FuncChangeNav}
                vmodelMB={this.state.mainBodyModel} 
                funcFromMasterMB={this.FuncChangeBodyData}>
                    功能清單
                </LeftNav>
                <MainBody vmodel={this.state.mainBodyModel} funcFromMaster={this.FuncChangeBodyData} />
            </div>
        );
    }

}

export default MasterLayout;