

let populate = async (value, currency) => {
    let mystr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_5RF4Gc9gkkHf3yC0PvUEWumlD1r6OxKEnpzUbbs2";
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector('.output').style.display ='block'
    //    console.log(rJson);
    for (let key of Object.keys(rJson["data"])) {
        mystr += ` <tr>
    <td>${key}</td>
    <td>${rJson["data"][key]["code"]}</td>
    <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
    
    </tr>`
        // key ,rJson["data"][key]["code"] ,rJson["data"][key]["value"]

    }

    let tablebody = document.querySelector('tbody')
    tablebody.innerHTML = mystr


}
let btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('hi');
    let value = parseInt(document.querySelector("input[name='quantity']").value);
    let currency = document.querySelector("select[name='currency']").value

    populate(value, currency)
})











