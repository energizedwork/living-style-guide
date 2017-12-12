import Controller from "@ember/controller";
const complex1 = `
 <ew-box borderBottomColor="LIGHT_GREY" borderBottomStyle="solid" paddingTop="M">
    <ew-text style="text-body" margin="NONE">
        Label
    </ew-text>
</ew-box>`.trim();

const complex2 = `
<ew-box backgroundColor="OFF_WHITE" borderBottomColor="BRAND" borderBottomStyle="solid">
    <ew-text style="text-caption" margin="NONE" color="MID_GREY">
        Label
    </ew-text>
    <ew-text style="text-body" margin="NONE">
        User input
    </ew-text>
</ew-box>`.trim();

export default Controller.extend({
    complex1,
    complex2
});