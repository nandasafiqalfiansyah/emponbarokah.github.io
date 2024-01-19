function sendWa() {
  let phoneNumber = "+6281264755844";

  let name = document.querySelector(".name").value;
  let address = document.querySelector(".address").value;
  let product = document.querySelector(".product").value;
  let jumlah = document.querySelector(".jumlah").value;
  let noted = document.querySelector(".catatan").value;

  let linkUrl =
    "https://wa.me/" +
    phoneNumber +
    "?text= " +
    "*Nama :* " +
    name +
    "%0a" +
    "*Alamat :* " +
    address +
    "%0a " +
    "*Produk :* " +
    product +
    "%0a%0a" +
    "*Jumlah :* " +
    jumlah +
    "%0a " +
    "*Catatan :* " +
    noted +
    "%0a ";

  window.open(linkUrl, "_blank").focus();
}
