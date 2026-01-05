let form = document.getElementById("form");
let kuis = document.getElementById("kuis");
let hasil = document.getElementById("hasil");

let nama = document.getElementById("nama");
let umur = document.getElementById("umur");
let kelas = document.getElementById("kelas");

let tanya = document.getElementById("tanya");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");

let scoreText = document.getElementById("score");

let index = 0;
let skor = 0;

function mulai() {
    if (nama.value === "" || umur.value === "" || kelas.value === "") {
        alert("Semua data harus diisi!");
        return;
    }
    form.classList.add("hide");
    kuis.classList.remove("hide");
    tampil();
}

function tampil() {
    tanya.innerText = soal[index].soal;
    A.innerText = soal[index].pilihan[0];
    B.innerText = soal[index].pilihan[1];
    C.innerText = soal[index].pilihan[2];
    D.innerText = soal[index].pilihan[3];
}

function jawab(pilihan) {
    if (pilihan === soal[index].benar) {
        skor++;
    }
}

function lanjut() {
    index++;
    if (index < soal.length) {
        tampil();
    } else {
        kuis.classList.add("hide");
        hasil.classList.remove("hide");
        scoreText.innerText = nama.value + ", skor kamu: " + skor;
    }
}

const soal = [
    {
        soal: "Hari ini cuaca sangat cerah. Langit berwarna?",
        pilihan: ["A. Biru", "B. Merah", "C. Hijau", "D. Kuning"],
        benar: "A"
    },
    {
        soal: "Huruf pertama dalam kata 'Buku' adalah?",
        pilihan: ["A. Y", "B. O", "C. B", "D. U"],
        benar: "C"
    },
    {
        soal: "Malam hari, Budi tidur di?",
        pilihan: ["A. Kamar tidur", "B. Ruang tamu", "C. Dapur", "D. Taman"],
        benar: "A"
    },
    {
        soal: "Telinga digunakan untuk?",
        pilihan: ["A. Melihat", "B. Menyanyi", "C. Makan", "D. Mendengar"],
        benar: "D"
    },
    {
        soal: "Kalimat sapaan yang sopan adalah",
        pilihan: ["A. Permisi", "B. Kamu siapa?", "C. Woy", "D. Hei kamu"],
        benar: "A"
    }
];
