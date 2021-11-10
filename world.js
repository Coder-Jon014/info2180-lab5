window.onload=function(){
    let countryLookupbtn = document.getElementById("lookup");
    let cityLookupbtn = document.getElementById("lookup-city")
    var httpsRequest;

    countryLookupbtn.addEventListener('click', function(elements){
        elements.preventDefault();
        var s = document.getElementById("country").value;
        httpsRequest = new XMLHttpRequest();

        var url = 'http://localhost/info2180-lab5/world.php?country=';
        httpsRequest.onreadystatechange = countryLUp
        httpsRequest.open('GET', url+s, true);
        httpsRequest.send();
        console.log(s);
    });

    cityLookupbtn.addEventListener('click', function(elements){
        elements.preventDefault();
        var s = document.getElementById("country").value;
        httpsRequest = new XMLHttpRequest();

        var url = 'http://localhost/info2180-lab5/world.php?country=';
        httpsRequest.onreadystatechange = countryLUp;
        httpsRequest.open('GET', url+s+'&context=cities', true);
        httpsRequest.send();
        console.log(s);
    });

    function countryLUp(){
        httpsRequest.onreadystatechange = function() {
            if (httpsRequest.readyState == XMLHttpRequest.DONE) {
                if (httpsRequest.status == 200){	
                    var response = httpsRequest.responseText;
                    var result = document.getElementById('result');
                    result.innerHTML = response;
                    console.log(response);
                }else{
                    alert("There was a problem with the problem with the request.");
                }
            }
        }
    }
}; 

