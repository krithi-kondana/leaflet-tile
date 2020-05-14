import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

class Mymap extends React.Component {
    state = {
        lat: 55.661869,
        lng: 12.540742,
        zoom: 13,
        selectedOption: ''
    }

    handleOptionChange = (event) => {
        this.setState({
          selectedOption: event.target.value
        });
      }

    render() {
        const coordinates = [this.state.lat, this.state.lng];
        return (
            <div>
                <div className='radiobuttons'>
                    <input type="radio" value="stamen" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'stamen'} /> Stamen watercolor
                    <input type="radio" value="cyclo" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'cyclo'}/> CycloOSM
                </div>

                <Map center={coordinates} zoom={this.state.zoom} style={{height: '400px'}}>
      
                    {this.state.selectedOption === 'cyclo' 
                    ? 
                    <TileLayer attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png' />
                    :
                    <TileLayer attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg' />
                    }
                   
                    <Marker position={coordinates}></Marker>
                </Map>
            </div>
        )
    }
}
 
export default Mymap;

  