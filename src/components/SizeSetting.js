import React,{Component, component} from 'react'

class SizeSetting extends Component {
    
    changeSize(value){
        this.props.onChangeSize(value)
    }
   render(){
    return(

       <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">size: {this.props.fontSize}px</h3>
            </div>
            <div className="panel-body">
            
                <button type="button" className="btn btn-success btn-down" onClick = {() => {this.changeSize(-2)}}>Giảm</button>
                <button type="button" className="btn btn-success" onClick = {() => {this.changeSize(+2)}}>Tăng</button>
            
            </div>
        </div>
    )
    
   }
}

export default SizeSetting;
