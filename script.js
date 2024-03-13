const form = document.getElementById('bmi-form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const weight = weightInput.value;
  const height = heightInput.value;

  //memeriksa apakah berat dan tinggi badan valid
  if (isNaN(weight) || isNaN(height)) {
    resultDiv.textContent = 'Berat dan tinggi badan harus berupa angka.';
    return;
  }

  //ubah tinggi dari sentimeter ke meter untuk perhitungan BMI
  const heightInMeters = height / 100;

  const bmi = weight / (heightInMeters * heightInMeters);

  //menampilkan hasil BMI
  let interpretation;
  if (bmi < 18.5) {
    interpretation = 'Kekurangan Berat Badan';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = 'Normal (ideal)';
  } else if (bmi >= 25 && bmi <= 29.9) {
    interpretation = 'Kelebihan Berat Badan';
  } else {
    interpretation = 'Kegemukan (obesitas)';
  }

  resultDiv.textContent = `BMI Anda: ${bmi.toFixed(2)}. ${interpretation}`;
});
