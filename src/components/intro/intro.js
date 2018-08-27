
export default () => {
    var htmlText = `
    <h1>My Favorite Sites</h1>
    <p>Hier kannst Du nach alle Deinen Lieblings Chayns Sites suchen.</p>`;
    document.querySelector('.tapp__intro').insertAdjacentHTML('beforeend',htmlText);
    // return the created Element
    
};


