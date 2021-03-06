import React,{Component, component} from 'react'

class Reset extends Component {
    
    onResetDefault = () => {
        this.props.onSettingDefault(true)
    }
   render(){
    return(

        <button type="button" className="btn btn-success btn-reset" onClick = {this.onResetDefault}>Reset</button>
    )
    
   }
}

export default Reset;
