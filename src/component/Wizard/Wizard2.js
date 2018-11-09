import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {updateImage_Url} from '../../ducks/reducer'

export default class Wizard2 extends Component{
    constructor(props){
        super(props);
        this.state={
            image_url:''
        }
    }
    handleImage(val){
        this.setState({image_url:val})
        console.log(this.state.image_url)
    }
    sendToReducer2(){
        let{updateImage_Url}= this.props
        updateImage_Url(this.state.images_url)
    }
    render(){
        return(
            <div className="wrapper">
            <form>
                <h1>step 2</h1>
                <h3>Name:</h3>
                <input name= "image_url" placeholder="enter Image-Url" onChange={e=>this.handleImage(e.target.value)}/>
                <Link to ='/Wizard'><button>Go Back</button></Link>
                <Link to='/'><button>Cancel</button></Link>
                <button onClick={()=>this.sendToReducer2()}>SUBMIT</button>
                <Link to = '/Wizard3'><button>Next Step</button></Link>
                </form>
            </div>
        )
    }
}