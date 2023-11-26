document.addEventListener('DOMContentLoaded', function() {


    window.onload = function getToday() {
        var today = new Date().toISOString().split('T')[0];
        document.getElementById("date").setAttribute("min", today);
        document.getElementById("date").setAttribute("value", today);
        generateTime()
    }



    function generateTime() {
        var dateInput = document.getElementById("date");
        var selectedDate = new Date(dateInput.value);
        var select = document.getElementById("time")
        var today =  new Date()
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    


        if (today.getDate() == selectedDate.getDate())  {
            if (!((today.getHours == 23 && today.getMinutes > 30) || today.getHours < 7)){
                if (today.getMinutes() >= 30 ){
                    selectedDate.setHours(today.getHours() + 1);
                    selectedDate.setMinutes(0);
                }
                else {
                    selectedDate.setHours(today.getHours());
                    selectedDate.setMinutes(30);
                }  
            }
        }
        else {
            selectedDate.setHours(7)
            selectedDate.setMinutes(30)
        }
            
        var i = 1;

        while (true) {
            var option = document.createElement("option");
            var timeString = selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            option.innerHTML = timeString;
            option.value = i;
            select.appendChild(option)
            selectedDate.setTime(selectedDate.getTime() + 30*60000)
            i++;
            if (selectedDate.getHours() === 0 && selectedDate.getMinutes() === 0) {
                break;
            }
        }
    }

    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener('click', function() {
        firstname = document.getElementById('firstname');
        lastname = document.getElementById('lastname');
        telephone = document.getElementById('telephone');
        email = document.getElementById('email');
        numerOfPeople =document.getElementById('numberOfPeople');
        if (  firstname.value === null ||
            firstname.value === '' ||
            lastname.value === null ||
            lastname.value === '' ||
            email.value === null ||
            email.value === '' ||
            telephone.value === null ||
            telephone.value === '' ||
            numberOfPeople.value === '0'
          ) 
            {
            alert('Please fill in all');
            return;
        }

        //add what happens when clicked
        });
    });
