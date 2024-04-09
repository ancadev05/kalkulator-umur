// Function menghitung golongan tanding
function hitung() {
  const tglLahir = new Date(document.getElementById("tgl").value);
  const tglSalah = document.getElementById("tgl").value;
  const tahun = document.getElementById("tahun");
  const bulan = document.getElementById("bulan");
  const hari = document.getElementById("hari");
  const warning = document.getElementById("warning");

  // tanggal hari ini
  const tglSekarang = new Date();

  // usia berdasar waktu
  const selisih = tglSekarang.getTime() - tglLahir.getTime();

  // perhitungan rincian usia
  const seconds = selisih / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const month = days / 30.4375;
  const years = month / 12;

  // hasil perhitungan

  if (tglSalah) {
    warning.innerHTML = "";
    tahun.innerHTML = `${Math.floor(years)} tahun`;
    bulan.innerHTML = `${Math.floor(month % 12)} bulan`;
    hari.innerHTML = `${Math.floor(days % 30.4375)} hari`;
  } else {
    warning.innerHTML = "masukkan tanggal lahir terlebih dahulu";
  }
}
