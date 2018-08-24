export default class formTextChange {
    constructor() {
        console.log('Test constructor');
    }
    TextChange(Name,Address,Mail,btn) {
        console.log('Test Click');
        if (Name.value !== "" && Address.value !== "" && Mail.value !== "" && Mail.value.includes("@")) {
            btn.classList.remove("button--disabled");
            btn.disabled = false;
            console.log('Button disabled');
        }
        else
        {
            btn.className = "button  button--disabled";
            btn.disabled = true;
        }        
    }
}

