$("#gform").validate({
    rules: {
        name:{
            
            minlength: 4,
            number:false
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength: 10,
            maxlength: 10
        },
        message:{
            minlength:2
        }

    

    },
    messages: {
        name:{
         required: " please enter your name",
         minlength: "Name at least 4 characters"
        },
        email:"Please enter your email",
        phone:"Please enter valid phone number",
        message:{
            required: " please enter your message",
            minlength: "message at least 2 characters"
           }
      },
   
   
    submitHandler: function(form) {
      form.submit();
    }
   });
   