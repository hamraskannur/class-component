
import {Component} from "react"


class ErrorBoundary extends Component{
constructor(){
    super()
    this.state={hasErr:false}
}

componentDidCatch(){
    this.setState({hasErr:true})
}
render(){
    if(this.state.hasErr){
        <h1>something wrog</h1>
    }
    return this.props.children
}

}

export default ErrorBoundary