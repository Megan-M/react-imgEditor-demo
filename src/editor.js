import React, {Component} from 'react';
import './editor.css';
import RandomImage from './randomImage';
import Unsplash, { toJson } from 'unsplash-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

const unsplash = new Unsplash({
  applicationId: "feff453b2f82f0903d7defe57722b599181dec6f4ef3ae8b3a833d6c429446db",
  secret: "de927e89381d2eddd10aca02a5b0e2e549c613c47a733574c72317795faeda40"
});


class Editor extends Component {
    
     constructor(props) {
        super(props);
        this.state = {
            
            imgURL:'https://source.unsplash.com/random/500x500',
            imgW:500,
            imgH:500,
            bright:100,
            contrast:100,
            invert:0,
            sat:100,
            hue:0,
        }; 
         
         this.updateState = this.updateState.bind(this);
         this.resetVals = this.resetVals.bind(this);
         this.getNewPhoto = this.getNewPhoto.bind(this);
    }
    
    
    getNewPhoto(){
        unsplash.photos.getRandomPhoto()
          .then(toJson)
          .then(json => {
            var imgUrl = json.urls.regular;
            this.setState({imgURL: imgUrl});
          });
    }

    updateState(event){
        let obj = {};
        var state = event.target.name;
        obj[state] = event.target.value;
        this.setState(obj);
    }
    
    resetVals(){
        this.setState({ bright:100,
            contrast:100,
            invert:0,
            sat:100,
            hue:0,})
    }
    

    
    render() {
         return (
             <div class='editor'>
                 <div class='options'>
                  
                            <legend> Width x Height </legend>
                        
                                <input name='imgW' placeholder={this.state.imgW} onChange={this.updateState} size='5' />
                       
                                <input name='imgH' placeholder={this.state.imgH} onChange={this.updateState} size='5' />
                   
                            <legend> Brightness </legend>
                            <input
                                name='bright'
                                type="range" 
                                min="0" max="200" 
                                value={this.state.bright} 
                                onChange={this.updateState}/>
                 
                            <legend> Contrast </legend>
                            <input 
                                name='contrast'
                                type="range" 
                                min="0" max="200" 
                                value={this.state.contrast} 
                                onChange={this.updateState}/>
                             
                            <legend> Invert </legend>
                            <input 
                                name='invert'
                                type="range" 
                                min="0" max="100" 
                                value={this.state.invert} 
                                onChange={this.updateState}/>
                      
                            <legend> Saturation </legend>
                            <input 
                                name='sat'
                                type="range" 
                                min="0" max="500" 
                                value={this.state.sat} 
                                onChange={this.updateState}/>
                      
                            <legend> Hue </legend>
                            <input 
                                name='hue'
                                type="range" 
                                min="0" max="360" 
                                value={this.state.hue} 
                                onChange={this.updateState}/>
                     
                            <button class='resetBttn' onClick={this.resetVals}>Reset</button>
                       
                            <button class='newImg' onClick={() => this.getNewPhoto()}>
                  <FontAwesomeIcon icon={faRedo} />
                </button>
                     
                 </div>
                 <div  class='mainImg'>
                     <RandomImage
                        url={this.state.imgURL}
                        height={this.state.imgH}
                        width={this.state.imgW}
                        bright={this.state.bright}
                        contrast={this.state.contrast}
                        invert={this.state.invert}
                        sat={this.state.sat}
                        hue={this.state.hue}/>
                </div>
             </div>

          );
    }
    
    
}

export default Editor