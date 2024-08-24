const BaseURL = "https://open.er-api.com/v6/latest/";

let dropdowns = document.querySelector(".sel");
let dropdowns2 = document.querySelector(".sel2");
let btn = document.querySelector(".btn");
let fromCurr = document.querySelector(".sel");
let toCurr = document.querySelector(".sel2");
let msg = document.querySelector(".MSG");
let amount = document.querySelector("form input");

 console.log(dropdowns);

    for(let code in countryList){
        let newOpt = document.createElement("option");
        console.log(code);
        newOpt.innerText = code;
        newOpt.value = code;
        dropdowns.append(newOpt);
        if(code === "USD"){
            newOpt.selected = "selected";
        }
        dropdowns.addEventListener("change",(evt) =>{
            updateFlag(evt.target);
        }
        );
    }
    for(let code in countryList){
        let newOpt = document.createElement("option");
        console.log(code);
        newOpt.innerText = code;
        newOpt.value = code;
        dropdowns2.append(newOpt);
        if(code === "INR"){
            newOpt.selected = "selected";
        }
        dropdowns2.addEventListener("change",(evt) =>{
            updateFlag(evt.target);
        }
        );
    }
    console.log(fromCurr.options[fromCurr.selectedIndex].text);

    const updateFlag = (element) =>{
           let code = element.value;
           let cont = countryList[code];
           let newSrc = `https://flagsapi.com/${cont}/flat/64.png`;
           let newImg = element.parentElement.querySelector("img");
           newImg.src = newSrc;
    }
    let URL = `${BaseURL}${fromCurr.options[fromCurr.selectedIndex].text}`;
    let val = toCurr.options[toCurr.selectedIndex].text;
    let getData = async (amtval) =>{
        let response = await fetch(URL);
        let data = await response.json();
       rate = data.rates[val]*amtval;
    
        msg.innerText = `${amtval}  ${fromCurr.options[fromCurr.selectedIndex].text}=${rate}  ${ toCurr.options[toCurr.selectedIndex].text}`;
    } 

    btn.addEventListener("click",(evt) =>{
        evt.preventDefault();
        let amount = document.querySelector("form input");
        let amtval = amount.value;
        if(amtval === "" || amtval <= 0){
            amtval = 1;
        }
        getData(amtval);
    })



