var daftarKontak = [ ];

function tambahKontak (nama, email, telepon) {
	var kontak = {
		nama: nama,
		email: email,
		telepon: telepon
	};	
	daftarKontak.push(kontak);
}


function lihatSemua () {
	for(var i = 0; i < daftarKontak.length; i++) {
		console.log(i+1 + "	nama : " + daftarKontak[i].nama);
		console.log("	email: " + daftarKontak[i].email);
		console.log("	telepon: " + daftarKontak[i].telepon);
	}
}

function cariKontak (nama) {
	var result = [];
	if (nama.length > 2){
		for (var i = 0; i < daftarKontak.length; i++) {
			if (daftarKontak[i].nama === nama){
				result.unshift(daftarKontak[i]);
			} else if (daftarKontak[i].nama.indexOf(nama) !== -1){
				result.push(daftarKontak[i]);
			}			
		}
		if (result.length > 0){
			console.log("found " + result.length + " matched.")
			result.forEach(function (kontak) {
				console.log(result.indexOf(kontak) +1 +".	nama: " + kontak.nama);
				console.log("	email: " + kontak.email);
				console.log("	telepon: " + kontak.telepon);
				console.log("-------------------------------");
			});
		} else {
				console.log("nothing found.")
		}
	} else {
		console.log("enter at least 3 carachter!");
	}
}
function cariKontakW (nama) {
	var result = [];
	if (nama.length > 2){
		for (var i = 0; i < daftarKontak.length; i++) {
			if (daftarKontak[i].nama === nama){
				result.unshift(daftarKontak[i]);
			} else if (daftarKontak[i].nama.indexOf(nama) !== -1){
				result.push(daftarKontak[i]);
			}			
		}
		if (result.length > 0){
			return result;
		}
	}
	return false;
	
}
