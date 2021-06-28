// untuk sidebar animation X

var toggled = false;
function myFunction(x) {
    if (!toggled) {
        toggled = true;
        x.classList.toggle("change");
        document.getElementById("mySidebar").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        return;
    }
    if (toggled) {
        toggled = false;
        x.classList.toggle("change");
        document.getElementById("mySidebar").style.width = "0px";
        // document.getElementById("main").style.marginLeft = "0px";
        return;
    }
}

// UNTUK EFEK NGETIK 
const txtElement = ['Freelancer', 'Atlet', 'Graphic Designer'];
// console.log(txtElement.length);
let count = 0;
let txtIndex = 0;
let currentTxt = ''; // untuk mngetahui berada pada text yg mana
let words = '';

function ngetik() {
    if (count == txtElement.length) {
        count = 0;
    }
    currentTxt = txtElement[count]; // untuk menampilkan indeks pertama pada variabel txtElement yaitu freelancer
    // method slice(argument1 (awal), argument2 (akhir)) = mengiris sebuah array / mengambil beberapa bagian array menjadi sebuah array yang baru 
    // argumen 1 = . Integer yang menentukan tempat untuk memulai pemilihan (Elemen pertama memiliki indeks 0)
    // argumen 2 = Bilangan bulat yang menentukan tempat untuk mengakhiri pemilihan. Jika dihilangkan, semua elemen dari posisi awal dan akhir larik akan dipilih. 
    words = currentTxt.slice(0, ++txtIndex); // jadi frelancer di ambil beberapa bagian array menjadi array baru dengan index awalan y "f"


    document.querySelector('.banner .efek-ngetik').textContent = words; // menampilkan / menambahkan "f" ke class efek-ngetik

    // jika words.length (1-10)  sama dengan currentTxt.length (10) 
    if (words.length == currentTxt.length) {
        // maka count++ akan mengulang array yg brada pada  const txtElement = ['Freelancer', 'Atlet', 'Graphic Designer']; sebanyak indeks arraynya 
        count++; // bnyk y array pada txtElement dia akan mengulang array dari indeks 0 - 2 / freelancer - desain trs menerus
        txtIndex = 0; // ini akan menghitung di mulai dari 0 
        //     // console.log();
    }
    setTimeout(ngetik, 300);
}

ngetik();

// scrollReveal
ScrollReveal().reveal('section#about h3', {
    origin: 'top',
    // distance: '20%',
    interval: 200,
    delay: 800,
    reset: true
});
ScrollReveal().reveal('section#about p', {
    origin: 'top',
    // distance: '50%',
    reset: true,
    delay: 500
});


const theme = document.getElementById('button-theme');
const darkTheme = 'dark-theme';


theme.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
})