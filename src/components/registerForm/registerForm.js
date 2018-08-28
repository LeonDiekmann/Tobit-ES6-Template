import textChange from './formTextChange.js';
import buttonRegister from './formButtonRegister.js';





export default class Form {
    constructor(element) {
        const htmlText = 
        `<div class="accordion accordion--flex new-group" data-group="groups">
            <div class="accordion__head">
                <span class="ellipsis accordion--trigger">
                    <span>Site hinzufügen</span>
                </span>
                <div class="accordion-badge badge">
                    <span class="icon--flex">
                        <i class="fa fa-plus" >
                        </i>
                    </span>
                </div>
            </div>
            <div class="accordion__body">
                <div class="accordion__intro">Hier kannst Du deine eigene Chayns Site hinzufügen.</div>
                <div class="accordion__content">
                        <div class="input-group">
                            <input id="formName" class="input" type="text" required>
                            <label>Name*</label>
                        </div>
                        <div class="input-group">
                            <input id="formAddress" class="input" type="text" required>
                            <label>Adresse*</label>
                        </div>
                        <div class="input-group">
                            <input id="formMail" class="input" type="text" required>
                            <label>E-Mail*</label>
                        </div>
                        <textarea id="inputComment" class="input"  autogrow placeholder="Kommentar"></textarea>
                        <div class="center mt-15" style="text-align: center">
                            <button id="btnAdd" class="button  button--disabled">hinzufügen</button>
                        </div>
                </div>
            </div>
        </div>`;
        element.insertAdjacentHTML('beforeend',htmlText);
        
        let $formName = document.querySelector('#formName');
        let $formAddress = document.querySelector("#formAddress");
        let $formMail = document.querySelector("#formMail");
        let $formComment = document.querySelector("#inputComment");
        let $btnAdd = document.querySelector("#btnAdd");

        
    
        document.querySelector('#formName').addEventListener("input", () => {
            textChange($formName,$formAddress,$formMail,$btnAdd);
        });
    
        document.querySelector("#formAddress").addEventListener("input", () => {
            textChange($formName,$formAddress,$formMail,$btnAdd);
        })
    
        document.querySelector("#formMail").addEventListener("input", () => {
            textChange($formName,$formAddress,$formMail,$btnAdd);
        });
        $btnAdd.addEventListener("click",() => {
            buttonRegister($formName,$formAddress,$formMail,$formComment,$btnAdd)
        });
    }
    
    

    


    

    
}