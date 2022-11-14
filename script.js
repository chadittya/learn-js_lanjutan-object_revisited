// cara membuat object dengan JS
// 1. object literal
// cons: tidak efektif untuk object yang banyak
let mhs = {
  nama: "galih",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

// 2. function declaration
function Mhs(nama, energi) {
  let mhs2 = {};
  mhs2.nama = nama;
  mhs2.energi = energi;
  mhs2.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };
  mhs2.main = function (stamina) {
    this.energi -= stamina;
    console.log(`Hati - hari ${this.nama}, nanti bisa kehabisan energi!`);
  };
  return mhs2;
}
let mhsGalih = Mhs(`galih`, 10);
let mhsAriza = Mhs(`Arizza`, 20);

// cons: diatas methodnya tetap dibuat lagi seperti object literal oleh js di memori yang sama saja memakan resource. cara untuk handlenya adalah membuat method terpisah, seperti dibawah.
// cons kedua jika memakai method ini, jika ada method baru yang di buat maka harus membuat declarasi baru di objectnya agar tetap sync. untuk membuat deklarasi baru secara otomatis bisa menggunakan object.create()
const methodMhs = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`${this.nama}, energi kamu bertambah`);
  },
  main: function (energi) {
    this.energi -= energi;
    console.log(`${this.nama}, awas energimu habis`);
  },
};

function Mhs2(nama, energi) {
  let mhs3 = {};
  mhs3.nama = nama;
  mhs3.energi = energi;
  mhs3.makan = methodMhs.makan;
  mhs3.main = methodMhs.main;
  return mhs3;
}

const mhsAditya = Mhs2(`aditya`, 20);

// 3. constructor function
// keyword new
function MhsConstructor(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`${this.nama}, energimu sudah bertambah!`);
  };
  this.main = function (stamina) {
    this.energi -= stamina;
    console.log(`${this.nama}, energimu berkurang!`);
  };
}

let mhsCandra = new MhsConstructor(`Candra`, 50);

// 4. object. create
const methodEnergi = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`${this.nama}, energimu bertambah! ${porsi}`);
  },
  fight: function (energi) {
    this.energi -= energi;
    console.log(`${this.nama}, energimu berkurang! ${energi}`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`${this.nama}, energimu bertambah 2x lipat! ${jam * 2}`);
  },
};

function Char(nama, energi) {
  let char = Object.create(methodEnergi);
  char.nama = nama;
  char.energi = energi;
  return char;
}

let charGalih = Char(`Assasin Galih`, 100);

// 5. pakai metode prototype
// versi prototype inheriten
function CharP(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

CharP.prototype.makan = function (porsi) {
  this.energi += porsi;
  console.log(
    `${this.nama}, energimu bertambah ${porsi}, energimu menjadi ${this.energi}`
  );
};

CharP.prototype.fight = function (jam) {
  this.energi -= jam;
  console.log(
    `${this.nama}, energimu berkurang setelah bertarung sebannyak ${jam}, energimu sekarang ${this.energi}`
  );
};

CharP.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  console.log(
    `${this.nama}, energimu bertambah ${jam * 2}, energimu menjadi ${
      this.energi
    }`
  );
};

let charArizza = new CharP(`Priest Arizza`, 200);

// prototype diatas bisa juga dibuat dengan kelas seperti contoh dibawah
// versi prototype class
class CharPC {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  heal(hp) {
    this.energi += hp;
    console.log(
      `${this.nama}, berhasil menambah energi sebanyak ${hp}, energimu sekarang ${this.energi}`
    );
  }
  fight(hp) {
    this.energi -= hp;
    console.log(
      `${this.nama}, energimu berkurang setelah bertarung sebanyak ${hp}, energimu sekarang ${this.energi}`
    );
  }
  tidur(heal) {
    this.energi += heal * 2;
    console.log(
      `${this.nama} tidur berhasil menambah ${
        heal * 2
      } energi. Energimu sekrang ${this.energi}`
    );
  }
}

let charPCGalih = new CharPC(`Knight Galih`, 500);
