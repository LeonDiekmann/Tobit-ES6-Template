export default function textChange(Name,Address,Mail,btn) {
    console.log('Test Click');
    if (Name.value !== "" && Address.value !== "" && Mail.value !== "" && Mail.value.includes("@")) {
        btn.classList.remove("button--disabled");
        btn.disabled = false;
    }
    else
    {
        btn.className = "button  button--disabled";
        btn.disabled = true;
    }        
}


