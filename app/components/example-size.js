import Ember from "ember";

const ExampleSize = Ember.Component.extend({
    classNames: ["example-size"]
});

ExampleSize.reopenClass({
    positionalParams: ["size"]
});

export default ExampleSize;