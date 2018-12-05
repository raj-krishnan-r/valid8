var formObj;
var valid8 = function(obj){
formObj = document.getElementById(obj);
this.check = function(){
var i = 0;
    while(formObj.children.length>i)
    {
        var current = formObj.children[i];
        if(current.dataset.type)
        {
            switch (current.dataset.type) {
                case 'email':
                    if(!this.validateEmail(current.value))
                    {
                        console.log("Email doesn't seems to be correct");
                    }
                    break;
                case 'text':
                if(current.dataset.min&&current.dataset.max)
                {
                if(!(current.dataset.min<current.value.length||current.dataset.max>current.value.length))
                {
                console.log("The name doesn't confer to the size prescribed");
                }
                }
                else
                {
                    console.log('make sure the data-min, data-max defined in the tag is valid one supported by valid8');
                }
                break;
                case 'name':
                if(this.hasNumber(current.value))
                {
                    console.log("Name should'nt contain any number");    
                }
                break;
                case 'password':
                         if(current.dataset.mode)
                         {
                             if(current.dataset.mode=="alpha")
                             {
                                 if(!this.isAlphanumeric(current.value))
                                 {
                                    console.log("Password should be an alphanumeric one.");
                                 }
                             }
                         }
                break;
                default:
                  console.log('make sure the type defined inside the data-type is valid one supported by valid8');
                break;
            }
        }
     i++;
    }
};
this.validateEmail = function(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
};
this.hasNumber = function(myString){
    return /\d/.test(myString);

};

this.isAlphanumeric=function(myString)
{
return /^[a-z0-9]+$/i.test(myString);
}

};
