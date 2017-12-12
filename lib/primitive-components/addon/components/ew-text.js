import Ember from "ember";
import SpreadMixin from "ember-spread";
import layout from "../templates/components/ew-text";
const { computed } = Ember;
const classNameCssProps = ["color"];
const inlineCssProps = ["textAlign"];
export default Ember.Component.extend(SpreadMixin, {
    layout,
    tagName: "p",
    classNameBindings: ["style", "getClassNames"],
    getClassNames: computed(...classNameCssProps, function() {
        const classNames = [];
        classNameCssProps.forEach(propName => {
            const dasherizedPropName = propName.dasherize();
            const value = this.get(propName);
            if (value) {
                classNames.push(`${dasherizedPropName}-${value}`);
            }
        });
        return classNames.join(" ");
    }),
    didInsertElement() {
        this._super(...arguments);
        this.applyInlineStylesForProps();
    },
    applyInlineStylesForProps() {
        this.$().css(this.getProperties(inlineCssProps));
    }
});