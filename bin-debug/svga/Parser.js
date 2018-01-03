var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Parser = (function () {
    function Parser() {
    }
    Parser.prototype.load = function (url) {
        console.log(url);
    };
    return Parser;
}());
__reflect(Parser.prototype, "Parser");
//# sourceMappingURL=Parser.js.map