
class MockWorker {

    success: any
    failure: any

    public loadAssets(url: string, success: any, failure: any) {
        this.success = success
        this.failure = failure

        if(false){
            
        }else{
            const req = new egret.HttpRequest()
            req.open(url, egret.HttpMethod.GET)
            req.responseType = egret.HttpResponseType.ARRAY_BUFFER
            req.send()
            req.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this)
        }
    }

    private onGetComplete(event: egret.Event): void {
        var request = <egret.HttpRequest>event.currentTarget
        this.load_viaProto(request.response, this.success, this.failure)
    }

    private load_viaProto(arraybuffer: any, success: any, failure: any) {
        try {

            let buffer = <ArrayBuffer>arraybuffer
            let inflate = new Zlib.Inflate(new Uint8Array(buffer))
            let outbuffer = inflate.decompress()

        } catch (error) {
            this.failure && this.failure(error)
            console.log(error)
            throw error
        }

    }
}