console.log("Welcome To Face Book Clone")


console.log("Welcome To The Clone OF Facebook Login Page")

$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true
                ,minlength:4

            },
            sname:{
                required:true,
                minlength:4

            },
            emailAddress:{
                required:true,
                email:true

            },
            password:{
                required:true,
                minlength:6

            },
            DAY:{
                required:true

            },
            gender:{
                required:true
            }
        
        },
        messages:{
            fname:{
            required:"First name required",
                minlength:"Enter at least 4 characters"
            },
            sname:{
                required:"Surname required"

            },
            emailAddress:{
                required:"enter a  "
            }
            
           
        }     
    })

})
