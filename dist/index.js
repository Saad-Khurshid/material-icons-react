(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './palette', 'react', 'prop-types', 'webfontloader', './config/mappings', './index.css'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./palette'), require('react'), require('prop-types'), require('webfontloader'), require('./config/mappings'), require('./index.css'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.palette, global.react, global.propTypes, global.webfontloader, global.mappings, global.index);
        global.index = mod.exports;
    }
})(this, function (exports, _palette, _react, _propTypes, _webfontloader, _mappings) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.keys(_palette).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _palette[key];
            }
        });
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _webfontloader2 = _interopRequireDefault(_webfontloader);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MaterialIcon = function (_Component) {
        _inherits(MaterialIcon, _Component);

        function MaterialIcon(props) {
            _classCallCheck(this, MaterialIcon);

            var _this = _possibleConstructorReturn(this, (MaterialIcon.__proto__ || Object.getPrototypeOf(MaterialIcon)).call(this, props));

            var preloader = _this.props.preloader;


            _this._isMounted = false;
            _this.state = {
                element: preloader
            };

            _this.onFontActive = _this.onFontActive.bind(_this);
            _this.processProps = _this.processProps.bind(_this);

            _webfontloader2.default.load({
                google: {
                    families: ['Material+Icons']
                },
                timeout: 5000,
                fontactive: _this.onFontActive
            });
            return _this;
        }

        _createClass(MaterialIcon, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this._isMounted = true;
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                if (prevProps.icon !== this.props.icon) this.onFontActive();
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: 'onFontActive',
            value: function onFontActive(fontFamily, fvd) {
                var _processProps = this.processProps(),
                    icon = _processProps.icon,
                    styleOverride = _processProps.styleOverride,
                    clsName = _processProps.clsName,
                    other = _objectWithoutProperties(_processProps, ['icon', 'styleOverride', 'clsName']);

                if (this._isMounted) this.setState({ element: _react2.default.createElement(
                        'i',
                        _extends({}, other, { className: clsName, style: styleOverride }),
                        icon
                    ) });
            }
        }, {
            key: 'processProps',
            value: function processProps() {
                var _props = this.props,
                    size = _props.size,
                    invert = _props.invert,
                    inactive = _props.inactive,
                    style = _props.style,
                    className = _props.className,
                    color = _props.color,
                    icon = _props.icon,
                    other = _objectWithoutProperties(_props, ['size', 'invert', 'inactive', 'style', 'className', 'color', 'icon']);

                var sizeMapped = _mappings.sizes[size] || parseInt(size) || _mappings.sizes['small'];
                var defaultColor = invert && 'invert' ? _mappings.light : _mappings.dark;
                var inactiveColor = inactive && 'inactive' ? _mappings.mdInactive : '';
                var propStyle = style || {};
                var styleOverride = Object.assign(propStyle, { color: color ? color : '', fontSize: sizeMapped });
                var clsName = className || 'material-icons ' + sizeMapped + ' ' + defaultColor + ' ' + inactiveColor;

                return _extends({
                    icon: icon, styleOverride: styleOverride, clsName: clsName }, other);
            }
        }, {
            key: 'render',
            value: function render() {
                var _processProps2 = this.processProps(),
                    styleOverride = _processProps2.styleOverride,
                    clsName = _processProps2.clsName,
                    other = _objectWithoutProperties(_processProps2, ['styleOverride', 'clsName']);

                return this.state.element || _react2.default.createElement('i', _extends({}, other, { className: clsName, style: styleOverride }));
            }
        }]);

        return MaterialIcon;
    }(_react.Component);

    MaterialIcon.propTypes = {
        icon: _propTypes2.default.string.isRequired,
        size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        invert: _propTypes2.default.bool,
        inactive: _propTypes2.default.bool
    };

    exports.default = MaterialIcon;
});