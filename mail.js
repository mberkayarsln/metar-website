function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("e-mail").value,
        phone_number : document.getElementById("number").value,
        message_id : document.getElementById("message_id").value
    }
    emailjs.send("service_1u6gfnb","template_mij4p4i",params).then(function(res){
        alert("Mesaj başarıyla gönderildi!")
    })
}

