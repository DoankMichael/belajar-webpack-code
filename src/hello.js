import _ from "lodash";

const mahasiswa = [
  { nama: "Michael", umur: "25", gender: "laki-laki" },
  { nama: "Arisa", umur: "15", gender: "perempuan" },
  { nama: "Agus", umur: "63", gender: "laki-laki" },
];

const mhs = _.find(mahasiswa, { nama: "Agus" });

console.log(mhs);
