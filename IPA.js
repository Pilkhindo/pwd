const questions = [
    {
        word: "Benda hidup memerlukan ... untuk bernapas",
        choices: ["Air", "Udara", "Tanah"],
        answer: "Udara"
    },
    {
        word: "Bagian tumbuhan tempat fotosintesis",
        choices: ["Akar", "Batang", "Daun"],
        answer: "Daun"
    },
    {
        word: "Sumber cahaya utama bagi bumi",
        choices: ["Lampu", "Api", "Matahari"],
        answer: "Matahari"
    },
    {
        word: "Hewan yang hidup di air",
        choices: ["Kucing", "Ikan", "Ayam"],
        answer: "Ikan"
    },
    {
        word: "Alat indera untuk melihat",
        choices: ["Hidung", "Mata", "Telinga"],
        answer: "Mata"
    },
    {
        word: "Benda yang dapat ditarik magnet",
        choices: ["Plastik", "Kayu", "Besi"],
        answer: "Besi"
    },
    {
        word: "Perubahan dari air menjadi es disebut",
        choices: ["Menguap", "Mencair", "Membeku"],
        answer: "Membeku"
    },
    {
        word: "Hewan yang berkembang biak dengan bertelur",
        choices: ["Kucing", "Ayam", "Kambing"],
        answer: "Ayam"
    },
    {
        word: "Bagian tubuh untuk bernapas",
        choices: ["Paru-paru", "Jantung", "Lambung"],
        answer: "Paru-paru"
    },
    {
        word: "Energi yang digunakan untuk menyalakan lampu",
        choices: ["Energi listrik", "Energi panas", "Energi bunyi"],
        answer: "Energi listrik"
    }
];

let indexSoal = 0;
let skor = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function tampilkanSoal() {
    let q = questions[indexSoal];
    questionEl.innerHTML = "Apa arti dari kata: <b>" + q.word + "</b>?";
    choicesEl.innerHTML = "";

    q.choices.forEach(pilihan => {
        let btn = document.createElement("div");
        btn.classList.add("choice");
        btn.innerText = pilihan;

        btn.addEventListener("click", function () {
            if (pilihan === q.answer) {
                btn.classList.add("correct");
                skor++;
                scoreEl.innerText = "Skor: " + skor;
            } else {
                btn.classList.add("wrong");
            }

            Array.from(document.getElementsByClassName("choice"))
                 .forEach(c => c.style.pointerEvents = "none");
        });

        choicesEl.appendChild(btn);
    });
}

nextBtn.addEventListener("click", function () {
    indexSoal++;

    if (indexSoal >= questions.length) {
        questionEl.innerHTML = "Game Selesai!";
        choicesEl.innerHTML = "";
        nextBtn.style.display = "none";
        return;
    }

    tampilkanSoal();
});

tampilkanSoal();