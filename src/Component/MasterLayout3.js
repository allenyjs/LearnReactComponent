import React,{Component} from 'react';

class MasterLayout3 extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        console.log("MasterLayout3 props:",this.props)
        return(
            <div>
                Third
                <span>|{this.props.match.params.id}|</span>
                <span>|{this.props.match.params.type}|</span>
            </div>
        );
    }
}

export default MasterLayout3;