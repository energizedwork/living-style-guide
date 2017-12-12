import Ember from "ember";

const ExampleColor = Ember.Component.extend({
    classNames: ["example-color"]
});

ExampleColor.reopenClass({
    positionalParams: ["color"]
});

export default ExampleColor;