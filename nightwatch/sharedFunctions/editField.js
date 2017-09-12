module.exports = function (client, target, text) {
 //will clear out the target field, set the proper text value, and verify the text was set
    return client
        .clearValue(target)
        .setValue(target, text)
        .verify.value(target, text);
}