import Ember from "ember";
import SpreadMixin from "ember-spread";
import layout from "../templates/components/ew-box";
const { computed } = Ember;

// TODO: This is a very naive implementation that adds a class name or inline style for each supported property.
// It needs sanitising and optimising!

const classNameCssProps = [
    "width",
    "height",
    "backgroundColor",
    "padding",
    "paddingTop",
    "margin",
    "marginLeft",
    "marginTop",
    "marginBottom",
    "borderBottomColor",
    "borderBottomWidth"
];

const inlineCssProps = [
    "alignItems",
    "alignSelf",
    "justifyContent",
    "flexDirection",
    "borderWidth",
    "borderColor",
    "borderStyle",
    "borderBottomStyle",
    "backgroundColor",
    "flex"
];

export default Ember.Component.extend(SpreadMixin, {
    layout,
    classNames: ["primitive-box"],
    classNameBindings: ["getClassNames"],
    didInsertElement() {
        this._super(...arguments);
        this.applyInlineStylesForProps();
    },
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
    applyInlineStylesForProps() {
        this.$().css(this.getProperties(inlineCssProps));
    }
});