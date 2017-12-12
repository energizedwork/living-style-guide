import Controller from "@ember/controller";

export default Controller.extend({
    examples: [{
            description: "text-display-4 / Oswald",
            blueprint: '<ew-text style="text-display-4">The beer pours hazed amber.</ew-text>'
        },
        {
            description: "text-display-3 / Oswald",
            blueprint: '<ew-text style="text-display-3">Topped with a very tightly laced creamy head.</ew-text>'
        },
        {
            description: "text-display-2 / Oswald",
            blueprint: '<ew-text style="text-display-2">Very smooth upfront, and a bit creamy in mouthfeel.</ew-text>'
        },
        {
            description: "text-display-1 / Oswald",
            blueprint: '<ew-text style="text-display-1">The malty body flexes with a full and even bready sweetness and doughy and soapy edges.</ew-text>'
        },
        {
            description: "text-headline / Oswald",
            blueprint: '<ew-text style="text-headline">A citric bite throws down on the taste buds with some herbal spice, flower pith, leaf, and some oily stick, with piney notes.</ew-text>'
        },
        {
            description: "text-title / Oswald",
            blueprint: '<ew-text style="text-title">Loads of fruit presence, like a fruit m‚àö¬©lange of blood orange and grapefruit steeped in a rose-hip peel tea-like character.</ew-text>'
        },
        {
            description: "text-subhead / Lato",
            blueprint: '<ew-text style="text-subhead">An aggressive spicy alcohol presence waits beneath, hitting the head with a warming sensation that targets the forehead region and numbness forming in the temples.</ew-text>'
        },
        {
            description: "text-body / Lato",
            blueprint: ' <ew-text style="text-body">A deep oak flavor comes about towards the finish, and especially throughout as the beer warms. A very distinct and subdued dry and semi-tangy flavor that is pulled from the oak and is a bit vinous at times, layers this beer with much depth. Suggestions of vanilla as the beer warms, with hints of brown sugar sweetness.</ew-text>'
        },
        {
            description: "text-caption / Lato",
            blueprint: ' <ew-text style="text-caption">Bready and soapy lingers.</ew-text>'
        }
    ]
});