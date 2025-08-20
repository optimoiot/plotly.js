'use strict';

var Plotly = require('./core');

Plotly.register([
    // traces
    require('./bar'),
    require('./box'),
    require('./heatmap'),
    require('./pie'),
    require('./surface'),
    require('./sankey'),

    // components
    require('./calendars'),
]);

module.exports = Plotly;
