import Ember from "ember";

const ParseBlueprint = Ember.Component.extend({
    parsed: Ember.computed("blueprint", function() {
        try {
            return Ember.$.parseXML(this.get("blueprint"));
        } catch (e) {
            console.error(e);
        }
    })
});
ParseBlueprint.reopenClass({
    positionalParams: ["blueprint"]
});
export default ParseBlueprint;