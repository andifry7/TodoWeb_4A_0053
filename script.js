const inputTugas = document.getElementById("inputTugas");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function () {
  let teksTugas = inputTugas.value;
  let tanggalTugas = inputDate.value;

  if (teksTugas === "" || tanggalTugas === "") {
    alert("Data dan tanggal harus diisi!");
    return;
  }

  let listBaru = document.createElement("li");

  let infoTugas = document.createElement("div");

  let spanBaru = document.createElement("span");

  spanBaru.innerHTML = teksTugas;

  listBaru.appendChild(spanBaru);

  daftarTugas.appendChild(listBaru);

  const warnaBaru = document.querySelectorAll("li");
  warnaBaru.forEach((item, index) => {
    if (index % 2 === 0) {
      item.style.color = "red";
    } else {
      item.style.color = "blue";
    }
  });

  inputTugas.value = "";
});
