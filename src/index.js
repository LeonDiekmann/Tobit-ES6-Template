/* eslint-disable no-console */
import SERVER_URL from './constants/server-url';
import introInit from './components/intro/intro';
import registerFormInit from './components/registerForm/registerForm';
import searchInit from './components/searchContainer/searchContainer';


const init = async () => {
    await chayns.ready;

    console.info('ServerUrl for current environment:', SERVER_URL);

    let intro = new introInit(document.querySelector('.tapp__intro'));
    
    let form = new registerFormInit(document.querySelector('.tapp__content'));
    
    let search = new searchInit(document.querySelector('.tapp__content'));

};

init();
