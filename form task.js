function sendMail(){
    let params = {
        name : document.getElementById("yh").value ,
        password : document.getElementById("w").value ,
        email : document.getElementById("A").value ,
        contact : document.getElementById("Y").value ,
        gender : document.getElementById("gen").value ,
        gender: document.getElementById("gend").value ,
        degree : document.getElementById("select").value ,
        engineering : document.getElementById("selector").value ,
        hobbies : document.getElementById("hobbies").value ,
        hobbies : document.getElementById("hobbiesor").value ,
        hobbies : document.getElementById("hobe").value ,
        Address : document.getElementById("Addres").value ,
    };

    const serviceID = "service_bclhgji";
const templateID = "template_s575fhk";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("yh").value  = "";
        document.getElementById("w").value  = "";
        document.getElementById("A").value  = "";
        document.getElementById("Y").value  = "";
        document.getElementById("gen").value  = "";
        document.getElementById("gend").value  = "";
        document.getElementById("select").value  = "";
        document.getElementById("selector").value  = "";
        document.getElementById("hobbies").value  = "";
        document.getElementById("hobbiesor").value  = "";
        document.getElementById("hobe").value  = "";
        document.getElementById("Addres").value  = "";
        console.log(res);
        alert("your message sent succesfully");
    }
)

.catch((err)=> console.log(err));

}


