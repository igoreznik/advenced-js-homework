/**
 * Created by igor.reznik on 16/01/2018.
 */
var doc = {
    ready: function(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
};
doc.ready(function() {
    let container = document.querySelector('.container');
    let input = document.querySelector('.numInput');
    let submitBtn = document.querySelector('.btnSubmit');
    let cont = "";
    let infoList = document.querySelector('.infoList');
    
    submitBtn.addEventListener('click', getInfo);


     async function fetchCountry(num) {
        const url = 'https://restcountries.eu/rest/v2/all?fields=name';
        let response = await fetch(`${url}`);
        const res = await response.json();
        let countryName = res[num].name;
        let newResponse = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
        const countryInfo = await newResponse.json();
        let img = `<img style="width:80px; height: 50px;" src="${countryInfo[0].flag}"/>`;
        cont = `
                    
                        <ul class="elemList">
                             <li>name: ${countryInfo[0].name}</li>
                             <li> nativeName: ${countryInfo[0].nativeName}</li>
                             <li>capital: ${countryInfo[0].capital}</li>
                             <li>population: ${countryInfo[0].population}</li>
                             <li>flag: ${img}</li>
                        </ul>
                     
        `;
        return cont;
    }


    async function getInfo() {
        let inputValue = input.value;
        let res;
        let li = document.createElement('li');
        try {
            li.innerHTML  = await fetchCountry(inputValue);
            infoList.appendChild(li);
        }
        catch (e) {
            throw(e);
        }
    }



});
