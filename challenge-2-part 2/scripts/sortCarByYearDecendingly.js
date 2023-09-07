function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // 1) Perulangan untuk memeriksa keseluruhan array pada result
  for (let i = 0; i < result.length - 1; i++) {
    // 2) Perulangan untuk memeriksa dan membandingka elemen dalam array
    for (let j = 0; j < result.length - i - 1; j++) {
      // 3) Membandingkan tahun mobil saat ini dengan tahun mobil berikutnya
      // 4) Jika tahun mobil saat ini lebih kecil (tahun yang lebih baru), maka tukar posisi kedua mobil tersebut
      if (result[j].year < result[j + 1].year) {
        // 5) Menyimpan mobil saat ini dalam variabel temp
        const temp = result[j];
        // 6) Menggantikan mobil saat ini dengan mobil berikutnya
        result[j] = result[j + 1];
        // 7) Menggantikan mobil berikutnya dengan mobil yang disimpan di temp
        result[j + 1] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
