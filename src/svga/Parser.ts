 class Parser {

     public load(url: string, success: any, failure: any) {
         this.loadViaWorker(url, success, failure)
     }

     private loadViaWorker(url: string, success: any, failure: any) {
         let mockWorker = new MockWorker()
         mockWorker.loadAssets(url, success, failure)
    }
 }