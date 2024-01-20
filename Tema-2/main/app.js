/**
 * the function renders an object to a tagged string and performs token substitution
 * @param {object} input - a javascript object representing a hierachycal structure  
 * @param {object} values - a list of key value pairs where the key is a token to be replaced with the value in strings present in input
 */
function render(input, values) {

    let result = "";

    if (Object.keys(input).length === 0 && input.constructor === Object) {
        return result;
    }

    if (input.constructor !== Object || values.constructor !== Object) {
        throw new Error('InvalidType');
    }

    function renderRecursive(obj) {
        let result = '';
        for (let [tag, value] of Object.entries(obj)) {
            if (typeof value === 'object') {
                result += `<${tag}>${renderRecursive(value)}</${tag}>`;
            } else {
                for (let [key, replacement] of Object.entries(values)) {
                    value = value.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), replacement);
                }
                result += `<${tag}>${value}</${tag}>`;
            }
        }

        return result;
    }

    return renderRecursive(input);
}

module.exports = {
    render
}