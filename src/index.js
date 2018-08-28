/* eslint-disable no-console */
import SERVER_URL from './constants/server-url';
import intro from './components/intro/intro';
import registerForm from './components/registerForm/registerForm';
import searchContainer from './components/searchContainer/searchContainer';


const init = async () => {
    await chayns.ready;

    console.info('ServerUrl for current environment:', SERVER_URL);

    let tappIntro = new intro(document.querySelector('.tapp__intro'));
    
    let form = new registerForm(document.querySelector('.tapp__content'));
    
    let search = new searchContainer(document.querySelector('.tapp__content'));

};

init();
