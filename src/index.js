/* eslint-disable no-console */
import modeSwitchInit from './components/modeswitch/modeSwitch';
import personFinderInit from './components/personFinder/personFinder';
import SERVER_URL from './constants/server-url';
import introInit from './components/intro/intro';
import registerFormInit from './components/registerForm/registerForm';


const init = async () => {
    await chayns.ready;

    console.info('ServerUrl for current environment:', SERVER_URL);

    let intro = new introInit(document.querySelector('.tapp__intro'));
    
    let form = new registerFormInit(document.querySelector('.tapp__content'));
    
    // initialise a Modeswitch
    modeSwitchInit();

    // start Personfinder
    personFinderInit();
};

init();
