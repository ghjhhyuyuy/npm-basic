function transform(input){
    var romanize = require('romanize');
    return romanize(input);
}
export {
    transform
};