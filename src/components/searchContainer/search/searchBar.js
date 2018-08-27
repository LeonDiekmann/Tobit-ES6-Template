import { rejects } from 'assert';




export default class searchBar {
    constructor(location,defaultText){
        
        const searchHtml = 
            `<div class="Suche Suche--accordion">
            <input id="accSearch" type="text" placeholder="Suche" value="">
            <label>
                <i class="fa fa-search">
                </i>
            </label>
            </div>`;
        location.insertAdjacentHTML('beforeend',searchHtml);

        let $accSearch = location.querySelector('#accSearch');


        this.searchText = defaultText;

        let timer = null;

        $accSearch.addEventListener('input', (event) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                this.searchText = event.target.value;
                this.onChange(this.searchText);
            }, 500);
            
        });
        
    }
    

    onChange() {
        
    }

}