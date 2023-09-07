function sortCarByYearAscendingly(cars) {
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
      // 4) Jika tahun mobil saat ini lebih besar, maka tukar posisi kedua mobil tersebut
      if (result[j].year > result[j + 1].year) {
        // 5) Tukar posisi jika tahun mobil saat ini lebih besar dari tahun mobil berikutnya
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        // result.push(cars[i]);
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
