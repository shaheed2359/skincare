function toggleRTL(){
                document.body.classList.toggle("rtl");
            }
        
 function darkmode(){
            document.body.classList.toggle("dark-mode");

           button = document.getElementById("modebutton");

            if(document.body.classList.contains("dark-mode")){
                button.innerHTML = "Light Mode";
            }
            else{
                button.innerHTML = "Dark Mode";
            }

        }


    
