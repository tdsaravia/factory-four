import React, { Component } from 'react'
import CardsContainer from '../Card/Cards';
import axios from "axios";

export default class Hero extends Component {

// Values where all the data will be saved
  constructor(props){
        super(props);
        this.state = {
            accounts: {},
            assets: {},
            customers: {},
            datapoints: {},
            devices: {},
            documents: {},
            forms: {},
            invites: {},
            media: {},
            messages: {},
            namespaces: {},
            orders: {},
            patients: {},
            relationships: {},
            rules: {},
            templates: {},
            users: {},
            workflows: {},
        };
    }

    //Its a set timer to call the API every 15 secs
  componentDidMount() {
    this.APIFetch()
    try {
        setInterval( async () => {
            this.APIFetch();
        }, 15000);
    } catch (err) {
        //console.log(err);
    }        
  }
    
    // Fetching the API's
    APIFetch() {

        // Fetch ACCOUNTS 
        axios
            .get("https://api.factoryfour.com/accounts/health/status")
            .then((res) => this.setState({ accounts: res.data }))
            .catch((err) => {
                this.setState({ accounts: {success: false, message:'error'}})
            });
        // Fetch ASSETS 
        axios
            .get("https://api.factoryfour.com/assets/health/status")
            .then(res => this.setState({ assets: res.data}))
            .catch((err) => {
                this.setState({ assets: {success: false, message:'error'}})
            });
        // Fetch CUSTOMERS 
        axios
            .get("https://api.factoryfour.com/customers/health/status")
            .then((res) => this.setState({ customers: res.data }))
            .catch((err) => {
                this.setState({ customers: {success: false, message:'error'}})
            });
        // Fetch DATAPOINTS 
        axios
            .get("https://api.factoryfour.com/datapoints/health/status")
            .then(res => this.setState({ datapoints: res.data}))
            .catch((err) => {
                this.setState({ datapoints: {success: false, message:'error'}})
            });
        // Fetch DEVICES 
        axios
            .get("https://api.factoryfour.com/devices/health/status")
            .then((res) => this.setState({ devices: res.data }))
            .catch((err) => {
                this.setState({ devices: {success: false, message:'error'}})
            });
        // Fetch DOCUMENTS 
        axios
            .get("https://api.factoryfour.com/documents/health/status")
            .then((res) => this.setState({ documents: res.data }))
            .catch((err) => {this.setState({ documents: {success: false, message:'error'}})
        });
        // Fetch FORMS 
        axios
            .get("https://api.factoryfour.com/forms/health/status")
            .then((res) => this.setState({ forms: res.data }))
            .catch((err) => {
                this.setState({ forms: {success: false, message:'error'}})
            });
        // Fetch INVITES       
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/invites/health/status")
            .then((res) => this.setState({ invites: res.data }))
            .catch((err) => {
                this.setState({ invites: {success: false, message:'error',error: err.response}})
            });
        // Fetch MEDIA 
        axios
            .get("https://api.factoryfour.com/media/health/status")
            .then((res) => this.setState({ media: res.data }))
            .catch((error) => {
                this.setState({ media: {success: false, message:'error'}})
            });
        // Fetch MESSAGES         
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/messages/health/status")
            .then((res) => this.setState({ messages: res.data }))
            .catch((err) => { 
                this.setState({ messages: {success: false, message:'error',error: err.response}})
            });
        // Fetch NAMESPACES 
        axios
            .get("https://api.factoryfour.com/namespaces/health/status")
            .then((res) => this.setState({ namespaces: res.data }))
            .catch((err) => {
                this.setState({ assets: {success: false, message:'error'}})
            });
        // Fetch ORDERS 
        axios
            .get("https://api.factoryfour.com/orders/health/status")
            .then((res) => this.setState({ orders: res.data }))
            .catch((err) => {
                this.setState({ orders: {success: false, message:'error'}})
            });
        // Fetch PATIENTS 
        axios
            .get("https://api.factoryfour.com/patients/health/status")
            .then((res) => this.setState({ patients: res.data }))
            .catch((err) => {
                this.setState({ patients: {success: false, message:'error'}})
            });
        // Fetch REALTIONSHIPS 
        axios
            .get("https://api.factoryfour.com/relationships/health/status")
            .then((res) => this.setState({ relationships: res.data }))
            .catch((err) => {
                this.setState({ relationships: {success: false, message:'error'}})
            });
        // Fetch RULES 
        axios
            .get("https://api.factoryfour.com/rules/health/status")
            .then((res) => this.setState({ rules: res.data }))
            .catch((err) => {
                this.setState({ rules: {success: false, message:'error'}})
            });
        // Fetch TEMPLATES 
        axios
            .get("https://api.factoryfour.com/templates/health/status")
            .then((res) => this.setState({ templates: res.data }))
            .catch((err) => {
                this.setState({ templates: {success: false, message:'error'}})
            });
        // Fetch USERS 
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/users/health/status")
            .then((res) => this.setState({ users: res.data }))
            .catch((err) => {
                this.setState({ users: {success: false, message:'error',error: err.response}})
            });
        // Fetch WORKFLOWS 
        axios
            .get("https://api.factoryfour.com/workflows/health/status")
            .then((res) => this.setState({ workflows: res.data }))
            .catch((err) => {
                this.setState({ workflows: {success: false, message:'error'}})
            });

    }

    render() {
        return (
            <div>
                <CardsContainer data={this.state}></CardsContainer>
            </div>
        );
    }
}
