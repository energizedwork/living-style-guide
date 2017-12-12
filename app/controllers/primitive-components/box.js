import Ember from "ember";

const simpleBox = `<ew-box width="XL" height="XL" backgroundColor="BRAND"></ew-box>`;
const simpleBoxEdit = `<ew-box width="XXL" height="XXL" backgroundColor="OFF_BLACK"></ew-box>`;

const flexBox = `
<ew-box padding="M" flexDirection="row" backgroundColor="LIGHT_GREY">
    <ew-box width="XXL" height="XXL" backgroundColor="BRAND" alignItems="center" justifyContent="center">
        <ew-box width="M" height="S" backgroundColor="OFF_BLACK"></ew-box>
    </ew-box>
    <ew-box width="XXL" height="XXL" backgroundColor="BRAND" alignItems="flex-start" justifyContent="center" marginLeft="S">
        <ew-box width="M" height="S" backgroundColor="OFF_BLACK"></ew-box>
    </ew-box>
    <ew-box width="XXL" height="XXL" backgroundColor="BRAND" alignItems="flex-end" justifyContent="flex-start" marginLeft="S">
        <ew-box width="M" height="S" backgroundColor="OFF_BLACK"></ew-box>
    </ew-box>
</ew-box>`.trim();

export default Ember.Controller.extend({
    simpleBox,
    simpleBoxCopy: simpleBox,
    flexBox,
    flexBoxCopy: flexBox,
    actions: {
        updateSimpleBox(simpleBox) {
            this.set("simpleBoxCopy", simpleBox);
        },
        saveSimpleBox() {
            this.set("simpleBox", this.get("simpleBoxCopy"));
        },
        showSimpleBoxEdit() {
            this.set("simpleBox", simpleBoxEdit);
        },
        updateFlexBox(flexBox) {
            this.set("flexBoxCopy", flexBox);
        },
        saveFlexBox() {
            this.set("flexBox", this.get("flexBoxCopy"));
        }
    }
});