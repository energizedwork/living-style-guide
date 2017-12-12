import Ember from "ember";

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        let { attributes, textContent } = this.get("node");
        let options = {
            textContent
        };
        if (attributes && attributes.length) {
            attributes = Array.from(attributes);
            attributes.forEach(attr => {
                options[attr.name] = attr.value;
            });
            this.set("options", options);
        }
    }
});