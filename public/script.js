function renderel(){
document.getElementById('cipok').innerHTML = feltolt();

async function feltolt(){
    const valasz = await fetch("/cipok");
    const cipoim = await valasz.json();
console.log("megy");
    let cipo2HTML ="";
    for(egyCipo of cipoim){
            cipo2HTML += '<div class="card" style="width: 240;">';
            cipo2HTML += `<img class="card-img-top" src="${egyCipo.tipus}" alt="${egyCipo.tipus}" style="width:240px; height:100px">`;
            cipo2HTML += `<div class="card-body"><h5 class="card-title">${egyCipo.gyarto} ${egyCipo.meret}</h5>`;
            cipo2HTML += `<p class="card-text">${egyCipo.leiras}<br>${egyCipo.ar}Ft</p>`;
            cipo2HTML += `<a href="${egyCipo.honlap}" class="btn btn-primary">A gyártó honlapja</a>`;
            cipo2HTML += `</div></div>`;
    }

    return cipo2HTML;
}
}
/*{
        "tipus":"noi",
        "meret":"38",
        "gyarto":"Salamander",
        "leiras":"Kényelmes őszi viselet",
        "honlap":"https://salamander.hu",
        "ar":"29990"
    },*/ 