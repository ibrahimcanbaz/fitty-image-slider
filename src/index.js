/**
 * Created by macpc on 22/08/2017.
 */
import React, {Component} from 'react';
import './css/css.css';

export default class FittyImage extends Component {
    constructor(props){
        super(props)
        this.state={
            imageIndex : 0,
            imageCount :this.props.src.length,
        }
    }


    prevImage=()=>{
        if(this.state.imageIndex == 0){
            this.setState({
                imageIndex:this.state.imageCount-1
            })
        } else {
            this.setState({
                imageIndex : this.state.imageIndex-1
            })
        }

    }
    nextImage=()=>{
        if(this.state.imageIndex == this.state.imageCount-1){
            this.setState({
                imageIndex : 0
            })
        } else {
            this.setState({
                imageIndex: this.state.imageIndex+1
            })
        }

    }

    selectProperty=()=>{

        this.props.action(this.props.item)
    }

    showOnMap=()=>{

        this.props.action2(this.props.item)
    }
    render() {
        let {mode, src, height, width, style, ...props} = this.props;
        let modes = {
            'fill': 'cover',
            'fit': 'contain'
        };
        let size = modes[mode] || 'contain';

        let defaults = {
            height: height || 100,
            width: width || 100,
            backgroundColor: 'gray',
            display:'flex',
            flexDirection:'column',
        };

        let important = {
            backgroundImage: `url("${this.props.src[this.state.imageIndex]}")`,
            backgroundSize: size,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        };





        return <div className="" >
            <div className="cursor-pointer"  {...props} style={{...defaults, ...style, ...important}}>
                <div  className="image_cont">
                    <div onClick={this.prevImage}  className="arrows cursor-pointer fa-angle-left"></div>
                    <div onClick={this.selectProperty}  className="centerImage cursor-pointer "></div>
                    <div onClick={this.nextImage}  className="arrows cursor-pointer fa-angle-right"></div>
                </div>

                {!this.props.showMapBar&&<div className="map_cont" >
                    <div onClick={this.showOnMap}  className="map cursor-pointer fa-map-marker"></div>
                </div>}
            </div>

        </div>
    }
}
