# Fitty Image Slider



## Installation
This package still needs to be improved.
It is inconsistant.
```
npm install fitty-image-slider --save
```

## Usage

```javascript
 <FittyImageSlider
              item={item}
              src={item.images.image} // array of images
              continueLabel={strings.continue} // label for clic
              width={100 + '%'}
              height={200}
              mode='fit'//fit or fill for image
              action={this.action} //action for image click
              action2={this.action2} // action for map icon click />
              mapBar={false}//show map pointer click bar or not. default true
              />
```

## License

MIT
