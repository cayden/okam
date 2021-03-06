/**
 * @file Weixin mini program syntax transformer
 * @author sparklewhy@gmail.com
 */

'use strict';

/* eslint-disable fecs-properties-quote */
/* eslint-disable fecs-min-vars-per-destructure */

const {merge} = require('../../../../util');
const {element, attribute, text} = require('../base');

module.exports = {
    element: merge({}, element, {
        tpl: {
            transform: require('./tpl')
        },
        filter: {
            match: 'wxs',
            transform: require('./wxs')
        }
    }),
    attribute: merge({}, attribute, {
        if: {
            transform: require('./condition')
        },
        for: {
            transform: require('./for')
        },
        key: {
            transform: require('./key')
        },
        bind: {
            transform: require('./data-bind')
        }
    }),
    text
};
