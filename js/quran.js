const surah = async () => {
    let res = await fetch("https://api.alquran.cloud/v1/quran/ar.husary");
    let data = await res.json();
    let accordion = document.getElementById("accordionExample");
    for (let i = 0; i < data.data.surahs.length; i++) {
        let surah = data.data.surahs[i];

        let card = document.createElement("div");
        card.className = "card";

        let cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        cardHeader.id = "heading" + surah.number;

        let h5 = document.createElement("h5");
        h5.className = "mb-0";

        let button = document.createElement("button");
        button.className = "btn btn-link";
        button.type = "button";
        button.setAttribute("data-toggle", "collapse");
        button.setAttribute("data-target", "#collapse" + surah.number);
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-controls", "collapse" + surah.number);

        let number = document.createElement("span");
        number.className = "surah-number";
        number.innerHTML = surah.number + ".";

        let name = document.createElement("span");
        name.className = "surah-name";
        name.innerHTML = surah.englishName;

        let ayahs = document.createElement("span");
        ayahs.className = "ayahs-count";
        ayahs.innerHTML = "Ayat: " + surah.ayahs.length;

        button.appendChild(number);
        button.appendChild(name);
        button.appendChild(ayahs);
        h5.appendChild(button);
        cardHeader.appendChild(h5);
        card.appendChild(cardHeader);

        let collapse = document.createElement("div");
        collapse.id = "collapse" + surah.number;
        collapse.className = "collapse";
        collapse.setAttribute("aria-labelledby", "heading" + surah.number);
        collapse.setAttribute("data-parent", "#accordionExample");

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        for (let u = 0; u < surah.ayahs.length; u++) {
            let surahlist = document.createElement("ol");
            let surahitem = document.createElement("li");
            // let ayahsPlayer = document.createElement("audio");
            // ayahsPlayer.src = surah.ayahs[u].audio;
            // ayahsPlayer.controls = "true";
            surahitem.innerHTML = surah.ayahs[u].text ;
            surahitem.id = surah.ayahs[u].audio;
            surahlist.appendChild(surahitem);
            surahitem.onclick = play;
            // surahlist.appendChild(ayahsPlayer);
            cardBody.appendChild(surahlist);
        }

        collapse.appendChild(cardBody);
        card.appendChild(collapse);

        accordion.appendChild(card);
    }
};

surah();

function play(src) {
    const player = document.getElementById("player");
    player.src = this.id;
    player.play();
}