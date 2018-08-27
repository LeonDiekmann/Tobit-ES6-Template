export default class formButtonRegister {

    ButtonRegister(formName,formAddress,formMail,formComment,btnAdd) {
        chayns.intercom.sendMessageToPage({ 
            text: "Name: " + formName.value + "\nAdresse: " + formAddress.value + 
            "\nE-Mail: " + formMail.value + "\nKommentar: " + formComment.value
        }).then(function(data){
            formName.value = "";
            formAddress.value = "";
            formMail.value = "";
            formComment.value = "";
            btnAdd.disabled = true;
            if(data.status == 200)
               chayns.dialog.alert('','Vielen Dank, ihre Site wurde hinzugefügt.');
        });
    }

}