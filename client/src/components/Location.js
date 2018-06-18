import React, {Fragment} from 'react'
import axios from 'axios'

class Locations extends React.Component {
  state = {locations: [], address: ''}

  componentDidMount(){
    axios.get(`/api/trips/${this.props.match.params.id}/locations`)
    .then(({data}) => this.setState({locations: data}))

    axios.get(`/api/trips/${this.props.match.params.id}`)
    .then(res => this.setState({address: res.data.name}))
  }

  render(){
    const{locations, address} = this.state
    return(
      <Fragment>
        <h1>Address is {address}</h1>
        {/* <ul>
          {locations.map( 1 =>
          <li key={l.id}>
            <h3>{l.name}</h3>
          </li>
          )
        }
        </ul> */}
      </Fragment>
    )
  }
}

export default Locations