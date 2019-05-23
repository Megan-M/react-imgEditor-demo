import React, {Component} from 'react';
import './editor.css';


class RandomImage extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    
    render(){
        var divStyle = {
            filter: 'brightness('+this.props.bright+'%) contrast('+this.props.contrast+'%) invert('+this.props.invert+'%) saturate('+this.props.sat+'%) hue-rotate('+this.props.hue+'deg)',
            width: this.props.width+'px',
            height: this.props.height+'px',
        }
        
        return (
            <div class="imageBox" style={divStyle}>
                <img
                    class="centeredImg"
                    alt="random - from Unsplash"
                    src={this.props.url} />
            </div>
        )
    }
}

export default RandomImage;