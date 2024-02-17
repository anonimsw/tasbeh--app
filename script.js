let count = document.querySelector(".count"),
    increment = document.querySelector(".increment"),
    clear = document.querySelector(".clear"),
    h2 = document.querySelector(".h2");
increment.addEventListener("click", function () {
    count.value = parseInt(count.value) + 1;
    let al = "Alhamdulillah";
    let ol = "Allohu akbar";
    let la = "La ilaha illallohu vahdahu la shariyka lah. Lahul mulku va lahul hamd. Va huva ala kulli shay in qodiyr"
    if (count.value == 35) {
        alert(al);
        h2.innerHTML = al;
    } else if (count.value == 70) {
        alert(ol);
        h2.innerHTML = ol;
    } else if (count.value == 99) {
        alert(la);
        h2.innerHTML = la;
    } else if (count.value == 100) {
        window.location.reload();
    }
});
clear.addEventListener("click", function () {
    window.location.reload();
});
