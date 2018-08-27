
export default class Intro {
    constructor(element){
        var htmlText = `
    <h1>My Favorite Sites</h1>
    <p>Hier kannst Du nach alle Deinen Lieblings Chayns Sites suchen.</p>`;
    element.insertAdjacentHTML('beforeend',htmlText);
    // return the created Element
    }
};


