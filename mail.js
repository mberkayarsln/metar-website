const full_Name = document.getElementById("fullName")
const email = document.getElementById("e-mail")
const number = document.getElementById("number")
const message = document.getElementById("message-id")

const field_Elements = [full_Name,email,number,message]

const field_Button = document.getElementById("button")

field_Button.addEventListener("click",checkContent)

function checkContent(event){

    if(full_Name.value == "" || email.value == "" || number.value == "" || message.value == "" ){
        alert("Lütfen boş kısımları doldurunuz.")
    }
    else{
        
        SendMail()

        field_Elements.forEach(function(element){
            element.value = ""
        })
        
    }

    event.preventDefault()
}


function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("e-mail").value,
        phone_number : document.getElementById("number").value,
        message_id : document.getElementById("message-id").value
    }
    emailjs.send("service_1u6gfnb","template_mij4p4i",params).then(function(res){
        alert("Mesaj başarıyla gönderildi!")
    })
}

