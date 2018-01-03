var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MockWorker = (function () {
    function MockWorker() {
    }
    MockWorker.prototype.loadAssets = function (url, success, failure) {
        this.success = success;
        this.failure = failure;
        if (false) {
        }
        else {
            var req = new egret.HttpRequest();
            req.open(url, egret.HttpMethod.GET);
            req.responseType = egret.HttpResponseType.ARRAY_BUFFER;
            req.send();
            req.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        }
    };
    MockWorker.prototype.onGetComplete = function (event) {
        var request = event.currentTarget;
        this.load_viaProto(request.response, this.success, this.failure);
    };
    MockWorker.prototype.load_viaProto = function (arraybuffer, success, failure) {
        try {
            var buffer = arraybuffer;
            var inflate = new Zlib.Inflate(new Uint8Array(buffer));
            var outbuffer = inflate.decompress();
        }
        catch (error) {
            this.failure && this.failure(error);
            console.log(error);
            throw error;
        }
    };
    return MockWorker;
}());
__reflect(MockWorker.prototype, "MockWorker");
