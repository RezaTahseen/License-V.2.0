
function MM(){
    const age = document.getElementById("inputage").value
    const bribe = document.getElementById("inputbribe").value

    if (age>=18 && age<=70){
        document.getElementById("dm").innerHTML = "License Approved"
        document.getElementById("dm").style.color = "green"
        document.getElementById("dm").style.display ="block";
        document.getElementById("da").style.display = "none";
        document.getElementById("dr").style.display ="none";
    }
    else{
        if(age<18 & bribe>=500){
            document.getElementById("dm").innerHTML = "License Approved"
            document.getElementById("dm").style.color = "green"
            document.getElementById("dm").style.display ="block";
            document.getElementById("da").style.display = "none";
            document.getElementById("dr").style.display ="none";
        }
        else{
           if(age>70){
            document.getElementById("dr").innerHTML = "Very Old"
            document.getElementById("dr").style.color = "red"
            document.getElementById("dr").style.display ="block";
            document.getElementById("da").style.display = "none";
            document.getElementById("dm").style.display ="none";
           
           }
           else{
            if(!age.match(/^\d+/)){
                document.getElementById("da").innerHTML = "Please Put Numbers"
                document.getElementById("da").style.color = "red"
                document.getElementById("da").style.display = "block"
                document.getElementById("dr").style.display ="none";
                document.getElementById("dm").style.display ="none";
              
            }
            else{
                document.getElementById("dr").innerHTML = "Very Young 500 Bribe Needed"
                document.getElementById("dr").style.color = "red"
                document.getElementById("dr").style.display ="block";
                document.getElementById("da").style.display = "none";
                document.getElementById("dm").style.display ="none";
            }
           }
            
        }
            
        }
        setTimeout(function(){
            location.reload();
        }, 5000);
    }
  


