//---FEL GOMB---

felgomb = document.getElementById("fel");

function felgomb_mutat(){
    const pozicio = window.scrollY || document.documentElement.scrollTop; //doc tetejétől való távolság
    if (pozicio > 20){
        felgomb.style.display = "block";
    }
    else {
        felgomb.style.display ="none";
    }
};

function gorget(){
    window.scrollTo({ top: 0}); //tetejéhez görget
}

window.addEventListener("scroll", felgomb_mutat);
felgomb.addEventListener("click", gorget);

//--------------

//---MEGKÖSZÖNÉS---

/* --- Sajnos validálás miatt nem működik
function megkoszon() {
    const keresztnev = document.getElementById("kereszt").value;
    const vezeteknev = document.getElementById("csalad").value;
    alert(`Köszönöm, hogy feliratkoztál ${vezeteknev} ${keresztnev}!`)
}
document.getElementById("hirlevel").addEventListener("submit", megkoszon)
*/

//----SHOP----
let kosar_a = 0
let kosar_b = 0
let kosar_c = 0
let kosar_d = 0
let kosar_e = 0

let ar_a = 4590
let ar_b = 4990
let ar_c = 3990
let ar_d = 3690
let ar_e = 3990

//----Összeg----

//a
function hozzaad_a() {
    if (document.getElementById("csomag_a").value < 99) {
        document.getElementById("csomag_a").value++;
    }
}
document.getElementById("plusz_a").addEventListener("click", hozzaad_a)

function kivon_a() {
    if (document.getElementById("csomag_a").value >= 1) {
        document.getElementById("csomag_a").value--;
    }
}
document.getElementById("minusz_a").addEventListener("click", kivon_a)

function kosárba_a() {
    
    if (document.getElementById("csomag_a").value != "") {
        kosar_a = document.getElementById("csomag_a").value;
        document.getElementById("db_a").value = kosar_a;
        document.getElementById("a").value = kosar_a;
        document.getElementById("osszeg_a").innerText=`${kosar_a} x ${ar_a} Ft = ${kosar_a*ar_a} Ft`;
        let vegosszeg=kosar_a*ar_a+kosar_b*ar_b+kosar_c*ar_c+kosar_d*ar_d+kosar_e*ar_e
        document.getElementById("osszeg").innerText = `${vegosszeg} Ft`;
        alert(`${kosar_a} db Pivovara Medvedgrad csomag a kosárban!`)
    }

}
document.getElementById("kosarba_a").addEventListener("click", kosárba_a)





//b
function hozzaad_b() {
    if (document.getElementById("csomag_b").value < 99) {
        document.getElementById("csomag_b").value++;
    }
}
document.getElementById("plusz_b").addEventListener("click", hozzaad_b)

function kivon_b() {
    if (document.getElementById("csomag_b").value >= 1) {
        document.getElementById("csomag_b").value--;
    }
}
document.getElementById("minusz_b").addEventListener("click", kivon_b)

function kosárba_b() {
    if (document.getElementById("csomag_b").value != "") {
        kosar_b = document.getElementById("csomag_b").value;
        document.getElementById("db_b").value = kosar_b;
        document.getElementById("b").value = kosar_b;
        document.getElementById("osszeg_b").innerText=`${kosar_b} x ${ar_b} Ft = ${kosar_b*ar_b} Ft`;
        let vegosszeg=kosar_a*ar_a+kosar_b*ar_b+kosar_c*ar_c+kosar_d*ar_d+kosar_e*ar_e
        document.getElementById("osszeg").innerText = `${vegosszeg} Ft`;
        alert(`${kosar_b} db Brew Age csomag a kosárban!`)
    }

}
document.getElementById("kosarba_b").addEventListener("click", kosárba_b)




//c
function hozzaad_c() {
    if (document.getElementById("csomag_c").value < 99) {
        document.getElementById("csomag_c").value++;
    }
}
document.getElementById("plusz_c").addEventListener("click", hozzaad_c)

function kivon_c() {
    if (document.getElementById("csomag_c").value >= 1) {
        document.getElementById("csomag_c").value--;
    }
}
document.getElementById("minusz_c").addEventListener("click", kivon_c)

function kosárba_c() {
    if (document.getElementById("csomag_c").value != "") {
        kosar_c = document.getElementById("csomag_c").value;
        document.getElementById("db_c").value = kosar_c;
        document.getElementById("c").value = kosar_c;
        document.getElementById("osszeg_c").innerText=`${kosar_c} x ${ar_c} Ft = ${kosar_c*ar_c} Ft`;
        let vegosszeg=kosar_a*ar_a+kosar_b*ar_b+kosar_c*ar_c+kosar_d*ar_d+kosar_e*ar_e
        document.getElementById("osszeg").innerText = `${vegosszeg} Ft`;
        alert(`${kosar_c} db Estrella Damm csomag a kosárban!`)
    }

}
document.getElementById("kosarba_c").addEventListener("click", kosárba_c)




//d
function hozzaad_d() {
    if (document.getElementById("csomag_d").value < 99) {
        document.getElementById("csomag_d").value++;
    }
}
document.getElementById("plusz_d").addEventListener("click", hozzaad_d)

function kivon_d() {
    if (document.getElementById("csomag_d").value >= 1) {
        document.getElementById("csomag_d").value--;
    }
}
document.getElementById("minusz_d").addEventListener("click", kivon_d)

function kosárba_d() {
    if (document.getElementById("csomag_d").value != "") {
        kosar_d = document.getElementById("csomag_d").value;
        document.getElementById("db_d").value = kosar_d;
        document.getElementById("d").value = kosar_d;
        document.getElementById("osszeg_d").innerText=`${kosar_d} x ${ar_d} Ft = ${kosar_d*ar_d} Ft`;
        let vegosszeg=kosar_a*ar_a+kosar_b*ar_b+kosar_c*ar_c+kosar_d*ar_d+kosar_e*ar_e
        document.getElementById("osszeg").innerText = `${vegosszeg} Ft`;
        alert(`${kosar_d} db Helka csomag a kosárban!`)
    }

}
document.getElementById("kosarba_d").addEventListener("click", kosárba_d)





//e
function hozzaad_e() {
    if (document.getElementById("csomag_e").value < 99) {
        document.getElementById("csomag_e").value++;
    }
}
document.getElementById("plusz_e").addEventListener("click", hozzaad_e)

function kivon_e() {
    if (document.getElementById("csomag_e").value >= 1) {
        document.getElementById("csomag_e").value--;
    }
}
document.getElementById("minusz_e").addEventListener("click", kivon_e)

function kosárba_e() {
    if (document.getElementById("csomag_e").value != "") {
        kosar_e = document.getElementById("csomag_e").value;
        document.getElementById("db_e").value = kosar_e;
        document.getElementById("e").value = kosar_e;
        document.getElementById("osszeg_e").innerText=`${kosar_e} x ${ar_e} Ft = ${kosar_e*ar_e} Ft`;
        let vegosszeg=kosar_a*ar_a+kosar_b*ar_b+kosar_c*ar_c+kosar_d*ar_d+kosar_e*ar_e
        document.getElementById("osszeg").innerText = `${vegosszeg} Ft`;
        alert(`${kosar_e} db Őribird csomag a kosárban!`)
    }

}
document.getElementById("kosarba_e").addEventListener("click", kosárba_e)




//KOSÁR FRISSÍTÉSE

function frissit() {
    if (document.getElementById("csomag_a").value != "") {
        kosar_a = document.getElementById("csomag_a").value;
        document.getElementById("db_a").value = kosar_a;
        document.getElementById("a").value = kosar_a;
        document.getElementById("osszeg_a").innerText=`${kosar_a} x ${ar_a} Ft = ${kosar_a*ar_a} Ft`
        
    }
    if (document.getElementById("csomag_b").value != "") {
        kosar_b = document.getElementById("csomag_b").value;
        document.getElementById("db_b").value = kosar_b;
        document.getElementById("b").value = kosar_b;
        document.getElementById("osszeg_b").innerText=`${kosar_b} x ${ar_b} Ft = ${kosar_b*ar_b} Ft`
    }
    if (document.getElementById("csomag_c").value != "") {
        kosar_c = document.getElementById("csomag_c").value;
        document.getElementById("db_c").value = kosar_c;
        document.getElementById("c").value = kosar_c;
        document.getElementById("osszeg_c").innerText=`${kosar_c} x ${ar_c} Ft = ${kosar_c*ar_c} Ft`
    }
    if (document.getElementById("csomag_d").value != "") {
        kosar_d = document.getElementById("csomag_d").value;
        document.getElementById("db_d").value = kosar_d;
        document.getElementById("d").value = kosar_d;
        document.getElementById("osszeg_d").innerText=`${kosar_d} x ${ar_d} Ft = ${kosar_d*ar_d} Ft`
    }
    if (document.getElementById("csomag_e").value != "") {
        kosar_e = document.getElementById("csomag_e").value;
        document.getElementById("db_e").value = kosar_e;
        document.getElementById("e").value = kosar_e;
        document.getElementById("osszeg_e").innerText=`${kosar_e} x ${ar_e} Ft = ${kosar_e*ar_e} Ft`
    }
    alert(`
        Pivovara Medvedgrad csomag: ${kosar_a} db\n
        Brew Age csomag: ${kosar_b} db\n
        Estrella Damm csomag: ${kosar_c} db\n
        Helka csomag: ${kosar_d} db\n
        Őribird csomag: ${kosar_e} db
        `)
        let vegosszeg=kosar_a*ar_a+kosar_b*ar_b+kosar_c*ar_c+kosar_d*ar_d+kosar_e*ar_e
        document.getElementById("osszeg").innerText = `${vegosszeg} Ft`;
}

document.getElementById("kosarfrissit").addEventListener("click", frissit)

//----Rendeles ures kosarral----

document.getElementById("rendeles").addEventListener("submit", function (stop) {
        if ((kosar_a+kosar_b+kosar_c+kosar_d+kosar_e)==0) {
            alert("Nem adhat le rendelést üres kosárral!");
            stop.preventDefault();
        }
    }
    );










