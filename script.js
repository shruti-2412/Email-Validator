let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "abc",
    "email": "abc@gmail.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submit.addEventListener("click", async (e) => {
    e.preventDefault()
    display.innerHTML = `<img width="123" src="./loading.svg" alt="">`
    let key = "ema_live_N9v2VtR1cx0Gd32XLidrcvlTEjSyh3wtvXfFcAhz"
    let email = document.getElementById("email").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    display.innerHTML = str
})