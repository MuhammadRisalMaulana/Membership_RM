function hitung() {
    var status = document.querySelector('input[name="status"]:checked').value;
    var porsi = document.getElementById('porsi').value;
    var harga = 15000;
    var diskon = 0;
    if (status === 'Langganan') {
        if (porsi >= 1) {
            diskon = 0.1;
        }
    } else {
        if (porsi >= 2) {
            diskon = (porsi - 1) * 0.05;
        }
    }
    var total = harga * porsi * (1 - diskon);
    document.getElementById('total').innerHTML = 'Rp ' + total.toLocaleString();
}