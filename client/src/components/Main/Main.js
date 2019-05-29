import React, {Component} from 'react';
import axios from 'axios';
import ConsumerKey from '../../data/consumerKey';

class Main extends Component{
    componentDidMount(){
        axios.post(`http://localhost:8080`, 
                    {
                        key: ConsumerKey,
                        uri: 'http:localhost:3000/test'
                    })
            .then(result => console.log(result.data))
    }

   render(){
       return (
           <div>Hi motherfuckers</div>
       )
   }
}

export default Main;