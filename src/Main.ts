

class Main extends egret.DisplayObjectContainer {

    constructor() {
        super()

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.playAnimation, this)
    }

    private playAnimation(event:egret.Event){
        let parser = new Parser()
        let player = new 
        parser.load('https://raw.githubusercontent.com/yyued/SVGA-Samples/master/rose.svga', function(videoItem){
            console.log("ProtoBufDecoder.ssss")
        }, function(error){})
    }

    // protected createChildren(): void {
    //     super.createChildren();

    //     egret.lifecycle.addLifecycleListener((context) => {
    //         // custom lifecycle plugin
    //     })

    //     egret.lifecycle.onPause = () => {
    //         egret.ticker.pause();
    //     }

    //     egret.lifecycle.onResume = () => {
    //         egret.ticker.resume();
    //     }

    
    // }
}
