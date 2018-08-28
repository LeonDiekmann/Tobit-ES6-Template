import fetchData from 'C:/Dev/Projects/Tobit-ES6-Template/src/utils/fetchData.js';
import searchBar from './search/searchBar.js';


let fetch = new fetchData();
export default class Search {
    constructor(element) {
        
        const htmlText = `
        <div class="accordion accordion--open" style="overflow: hidden; margin-top: 30px;">
            <div id="accHead" class="accordion__head">
                
                <div class="accordion--trigger accordion__head--search--wrapper" >
                    <div class="accordion--trigger accordion__head--search">
                        Sites
                    </div>
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

        let fetchLink = null;
        let fetchString = null;
        let resultNr = null;

        let $listContainer = null;
        let $resultExpand = null;

        $listContainer = element.querySelector('#listContainer');
        $resultExpand = element.querySelector("#resultExpand");

        resultNr = 5;
        fetchString = 'Tobit';
        fetchLink = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + fetchString + '&Skip=0&Take=' + resultNr;
        fetch.fetchData(fetchLink,$listContainer);

        let search = new searchBar(document.querySelector('#accHead'), 'Hallo');
        search.onChange = (value) => {
            resultNr = 5;
            fetchString = value;
            fetchLink = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + fetchString + '&Skip=0&Take=' + resultNr;
            console.log(fetchString);
            if (fetchString !== "") {
                fetch.fetchData(fetchLink,$listContainer);
            }
        }

        $resultExpand.addEventListener("click",() => {
            resultNr = resultNr + 5
            fetchLink = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + fetchString + '&Skip=0&Take=' + resultNr;
            fetch.fetchData(fetchLink,$listContainer);
        });

    };
};