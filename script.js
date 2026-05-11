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

  let tanggalBaru = document.createElement("small");
  tanggalBaru.innerHTML = `Tanggal: ${tanggalTugas}`;

  let statusBaru = document.createElement("p");
  statusBaru.innerHTML = "Status: Belum Selesai";
  statusBaru.classList.add("progress");

  infoTugas.appendChild(spanBaru);
  infoTugas.appendChild(document.createElement("br"));
  infoTugas.appendChild(tanggalBaru);
  infoTugas.appendChild(statusBaru);

  let aksi = document.createElement("div");
  aksi.classList.add("aksi");

  let btnEdit = document.createElement("button");
  btnEdit.innerHTML = "Edit";
  btnEdit.classList.add("edit");

  btnEdit.addEventListener("click", function () {
    let tugasBaru = prompt("Edit tugas:", spanBaru.innerHTML);

    if (tugasBaru !== null && tugasBaru !== "") {
      spanBaru.innerHTML = tugasBaru;
    }
  });

  let btnStatus = document.createElement("button");
  btnStatus.innerHTML = "Done";
  btnStatus.classList.add("status");

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
