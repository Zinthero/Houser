import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House'
import Header from '../Header/Header'
import axios from 'axios'


export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            listing:[],
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:0,
            image_url:'',
            mortgage:'',
            rent:''
        }
        this.handleDeletedProduct=this.handleDeletedProduct.bind(this)
    }
    //Life cycle
    componentDidMount(){
        this.getProducts();
    }
    //Get
    getProducts(){
        axios.get('/api/fetchListings').then(res=>{
            this.setState({
                listing:res.data
            })
        })
    }
    //Delete
    handleDeletedProduct(id){
        axios.delete(`/api/deleteListing/${id}`)
        .then(()=>this.getProducts())
    }
  render() {
      let{listing}=this.state
      let instanceLoop = listing.map((e,i)=>{
          return(
            <House
            key={i}
            id={e.houseid}
            address={e.address}
            city={e.address}
            state={e.state}
            zipcode={e.zipcode}
            image_url={e.image_url}
            mortgage={e.mortgage}
            rent={e.rent}
            delete1={this.handleDeletedProduct}
            />
          )
      })
    return (
        <div>
      <div className="dashboard">
        <Link to="/wizard"><button>Add New Property</button></Link>
        </div>
        <div className="content-container">
        {instanceLoop}
        </div>
      </div>
    )
  }
}

