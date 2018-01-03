

class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        let parser = new Parser()
        parser.load('https://raw.githubusercontent.com/yyued/SVGA-Samples/master/rose.svga', function(videoItem){
            console.log(videoItem)
        }, function(error){})
    }
}
