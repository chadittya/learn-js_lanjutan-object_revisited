// cara membuat object dengan JS
// 1. object literal
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
