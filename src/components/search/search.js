
import searchFetchData from './searchFetchData.js';


let fetchLink = null;
let fetchString = null;
let resultNr = null;
let timer = null;

let $listContainer = null;
let $accSearch = null;
let $resultExpand = null;



let fetch = new searchFetchData();
export default class Search {
    constructor(element) {
        
        const htmlText = `
        <div class="accordion accordion--open" style="overflow: hidden; margin-top: 30px;">
            <div class="accordion__head">
                
                <div class="accordion--trigger accordion__head--search--wrapper" >
                    <div class="accordion--trigger accordion__head--search">
                        Sites
                    </div>
                </div>
                    <div class="Suche Suche--accordion">
                        <input id="accSearch" type="text" placeholder="Suche" value="">
                        <label>
                            <i class="fa fa-search">
                            </i>
                        </label>
                    </div>                
            </div>
            <div class="accordion__body">
                <div class="accordion__content">                        
                </div>
            </div>
            <div id="accBody" class="accordion__body searchBody">
                <div id="listContainer">
                   
                </div>
                <div id="resultExpand" class="right">
                        <a href="#">Mehr anzeigen</a>
                    </div>
            </div>
        </div>`;
        element.insertAdjacentHTML('beforeend',htmlText);

        $accSearch = document.querySelector("#accSearch");
        $listContainer = document.querySelector('#listContainer');
        $resultExpand = document.querySelector("#resultExpand");
        
        resultNr = 5;
        fetchString = 'Tobit';
        fetchLink = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + fetchString + '&Skip=0&Take=' + resultNr;
        fetch.fetchData(fetchLink,$listContainer);

        $accSearch.addEventListener("input",() => {
            resultNr = 5;
            fetchString = $accSearch.value;
            fetchLink = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + fetchString + '&Skip=0&Take=' + resultNr;
            if ($accSearch.value !== "") {  
                clearTimeout(timer);
                timer = setTimeout(() => {
                    fetch.fetchData(fetchLink,$listContainer);
                }, 500);
            }
        });


        $resultExpand.addEventListener("click",() => {
            if ($accSearch.value !== "" || fetchString === 'Tobit' ) {  
                resultNr = resultNr + 5;
                fetchLink = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + fetchString + '&Skip=0&Take=' + resultNr;
                fetch.fetchData(fetchLink,$listContainer);
            }
        });
    };
};