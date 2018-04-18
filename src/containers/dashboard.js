import React, { Component } from 'react';
import { Grid, Card, Menu} from 'semantic-ui-react'
import axios from 'axios'
import Features from '../components/features.js'
import Add from '../components/add.js'


const URL = process.env.REACT_APP_API_URL


class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      features:[],
      orginization:null,
      orgID:null,
      activeItem:'Home',
      admin:false,
      name:''
    }
  }


  requestFeatures = async ()=>{
    await axios.get(`${URL}/api/features/${this.state.orgID}`,{
      headers:{token:localStorage.getItem('Token')}
    }).then(result=>{
      console.log(result)
      this.setState({features:result.data.data})
    })
  }

  decodeToken = async( )=>{
    localStorage.getItem('Token')
    await axios.get(`${URL}/api/users/decodeToken`,{
      headers:{token:localStorage.getItem('Token')}
    }).then(result=>{
      console.log(result)
      let token = result.data.token
      this.setState({
        orgID:token.orgID,
        admin:token.admin,
        name:token.name
      })
    })
  }

  addFeature = ( feature ) =>{

    axios.post(`${URL}/api/features`, 
      feature
    , { token: localStorage.getItem('Token')})
    .then(result=>{
      console.log(result)
    })
    .catch(err=>console.log(err))
  }

  componentWillMount = async ()=> {
    await this.decodeToken()
    this.requestFeatures()
  }



  render() {
    return (
      <div>
        <Menu>
          <Menu.Item
            name='Home'
            active={this.state.activeItem === 'Home'}
            onClick={()=>this.setState({activeItem:'Home'})}
          />
          <Menu.Item
          name='Add'
          active={this.state.activeItem === 'Add'}
          onClick={()=>this.setState({activeItem:'Add'})}
          />
        </Menu>
        {this.state.activeItem === "Home" ?
        <Features tiles={this.state.features} />
        : null
        }
        {this.state.activeItem === "Add" ? <Add addFeature={this.addFeature} orgID={this.state.orgID} /> : null}
      </div>

    );
  }

}

export default Dashboard;
