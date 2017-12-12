import Ember from "ember";

const ParseBlueprint = Ember.Component.extend({
    parsed: Ember.computed("blueprint", function() {
        try {
            return Ember.$.parseXML(this.get("blueprint"));
        } catch (e) {
            console.error(e);
        }
    }),
    didInsertElement() {
        this._super(...arguments);
        const html = this.$()
            .html()
            .replace(" ember-view", "")
            .replace(/ id="ember\d*"/, "")
            .replace("<!---->", "")
            .replace('<pre class="example-code"></pre>', "")
            .replace(/\n/, "")
            .trim();

        this.set("html", html);
    }
});
ParseBlueprint.reopenClass({
    positionalParams: ["blueprint"]
});
export default ParseBlueprint;