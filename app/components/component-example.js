import Component from "@ember/component";

const ComponentExample = Component.extend({});

ComponentExample.reopenClass({
    positionalParams: ["blueprint"],
    tagName: ""
});

export default ComponentExample;