import React, {Component} from 'react';

export class ErrorBoundary extends Component{

    constructor(props){
        super(props);

        this.state ={
            haserror:false
        }
    }
    static getDerivedStatefromError(error){
        return {
            haserror: true
        }
    }

    render(){
        if(this.state.haserror){
            return <h1>SOMETHING WENT WRONG</h1>

        }
        return this.props.children
    }
}

export default ErrorBoundary;


