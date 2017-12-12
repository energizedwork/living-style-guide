/* eslint-env node */
"use strict";

const sgrid = require("s-grid");

module.exports = {
    name: "primitive-components",

    isDevelopingAddon() {
        return true;
    },

    included(app, parentAddon) {
        this._super.included.apply(this, arguments);
        const target = parentAddon || app;
        target.options = target.options || {};
        target.options.stylusOptions = {
            use: [sgrid()],
            includePaths: ["lib/primitive-components/addon/styles"]
        };
        return this._super.included.apply(this, arguments);
    }
};