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
                    if(!validateEmail(current.value))
                    {
                        console.log("Email doesn't seems to be correct");
                    }
                    break;
                case 'text':
                if(current.dataset.min&&current.dataset.max)
                {
                    if(!(current.dataset.min>current.value.length||current.dataset.max<current.value.length))
                    {
                    console.log("The name doesn't confer to the size prescribed");
                    }
                }
                else
                {
                    console.log('make sure the data-min, data-max defined in the tag is valid one supported by valid8');
                }

                case 'name':
                if(hasNumber(current.value))
                {
                    console.log("Name should'nt contain any number");    
                }                
                default:
                 //   console.log('make sure the type defined inside the data-type is valid one supported by valid8');
                    break;
            }
        }
     i++;
    }

}
};
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function hasNumber(myString) {
    return /\d/.test(myString);
  }