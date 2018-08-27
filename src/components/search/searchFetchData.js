import searchCreateElement from './searchCreateElement.js';


let createElement = new searchCreateElement(); 
export default class searchFetchData {

    fetchDataPromise(fetchLink) {
        return new Promise(function(resolve,reject){
            try
            {
                fetch(fetchLink)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                resolve(json);
                console.log('parsed json', json)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
                reject(ex);
            })
            }
            catch (ex)
            {
                reject(ex);
            }
        });
    }

    fetchData(fetchLink,listContainer) {
        chayns.showWaitCursor()
        this.fetchDataPromise(fetchLink).then((result) => {
            chayns.hideWaitCursor()
            listContainer.innerHTML = "";
            console.log("data", result);
            for (let index = 0; index < result.Data.length; index++) {
                const element = result.Data[index];
                createElement.create(element, listContainer);
                console.log("data", element.siteId);
            }            
        }).catch(function(){
            console.log("failed");
        });
    };


}