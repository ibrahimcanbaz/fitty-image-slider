'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./css/css.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by macpc on 22/08/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FittyImage = function (_Component) {
    _inherits(FittyImage, _Component);

    function FittyImage(props) {
        _classCallCheck(this, FittyImage);

        var _this = _possibleConstructorReturn(this, (FittyImage.__proto__ || Object.getPrototypeOf(FittyImage)).call(this, props));

        _this.prevImage = function () {
            if (_this.state.imageIndex == 0) {
                _this.setState({
                    imageIndex: _this.state.imageCount - 1
                });
            } else {
                _this.setState({
                    imageIndex: _this.state.imageIndex - 1
                });
            }
        };

        _this.nextImage = function () {
            if (_this.state.imageIndex == _this.state.imageCount - 1) {
                _this.setState({
                    imageIndex: 0
                });
            } else {
                _this.setState({
                    imageIndex: _this.state.imageIndex + 1
                });
            }
        };

        _this.selectProperty = function () {

            _this.props.action(_this.props.item);
        };

        _this.showOnMap = function () {

            _this.props.action2(_this.props.item);
        };

        _this.state = {
            imageIndex: 0,
            imageCount: _this.props.src.length
        };
        return _this;
    }

    _createClass(FittyImage, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                mode = _props.mode,
                src = _props.src,
                height = _props.height,
                width = _props.width,
                style = _props.style,
                props = _objectWithoutProperties(_props, ['mode', 'src', 'height', 'width', 'style']);

            var modes = {
                'fill': 'cover',
                'fit': 'contain'
            };
            var size = modes[mode] || 'contain';

            var defaults = {
                height: height || 100,
                width: width || 100,
                backgroundColor: 'gray',
                display: 'flex',
                flexDirection: 'column'
            };

            var important = {
                backgroundImage: 'url("' + this.props.src[this.state.imageIndex] + '")',
                backgroundSize: size,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            };

            return _react2.default.createElement(
                'div',
                { className: '' },
                _react2.default.createElement(
                    'div',
                    _extends({ className: 'cursor-pointer' }, props, { style: _extends({}, defaults, style, important) }),
                    _react2.default.createElement(
                        'div',
                        { className: 'image_cont' },
                        _react2.default.createElement('div', { onClick: this.prevImage, className: 'arrows cursor-pointer fa-angle-left' }),
                        _react2.default.createElement('div', { onClick: this.selectProperty, className: 'centerImage cursor-pointer ' }),
                        _react2.default.createElement('div', { onClick: this.nextImage, className: 'arrows cursor-pointer fa-angle-right' })
                    ),
                    !this.props.mapBar && _react2.default.createElement(
                        'div',
                        { className: 'map_cont' },
                        _react2.default.createElement('div', { onClick: this.showOnMap, className: 'map cursor-pointer fa-map-marker' })
                    )
                )
            );
        }
    }]);

    return FittyImage;
}(_react.Component);

exports.default = FittyImage;
