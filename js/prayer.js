fetchdata()

const city = document.getElementById("city")
city.onchange = () => {
    localStorage.setItem("city", `${city.value}`)
}

async function fetchdata() {
    
    try {
        const recponse = await fetch(`https://islomapi.uz/api/present/day?region=${localStorage.getItem("city")}`);

        if(!recponse.ok){
            throw new Error("Not fount")
        }

        const data = await recponse.json();
        console.log(data);


        const bomdotTime = data.times.tong_saharlik
        const tong_saharlik = document.getElementById("tong_saharlik")
        tong_saharlik.innerHTML = ("Bomdod: " + bomdodTime)

        const peshinTime = data.times.peshin
        const peshin = document.getElementById("peshin")
        peshin.innerHTML = ("Peshin: " + peshinTime)

        const asrTime = data.times.asr
        const asr = document.getElementById("asr")
        asr.innerHTML = ("Asr: " + asrTime)

        const shom_iftorTime = data.times.shom_iftor
        const shom_iftor = document.getElementById("shom_iftor")
        shom_iftor.innerHTML = ("Shom: " + shom_iftorTime)

        const huftonTime = data.times.hufton
        const hufton = document.getElementById("hufton")
        hufton.innerHTML = ("Hufton: " + huftonTime)

    }
    catch (error) {
        console.error(error);
    }
}