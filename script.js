// ========== PENDAFTARAN ==========
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value.toLowerCase(); // buat konsisten
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const peminatan = document.getElementById("peminatan").value;

  const user = {
    nama,
    email,
    password,
    role,
    peminatan
  };

  // Simpan ke localStorage
  localStorage.setItem(email, JSON.stringify(user));

  document.getElementById("registerSuccess").textContent = "Pendaftaran berhasil!";
  this.reset();
});

// ========== LOGIN ==========
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.toLowerCase();
  const password = document.getElementById("loginPassword").value;
  const error = document.getElementById("loginError");

  const userData = localStorage.getItem(email);

  if (!userData) {
    error.textContent = "Email belum terdaftar. Silakan daftar dulu.";
    return;
  }

  const user = JSON.parse(userData);

  if (user.password !== password) {
    error.textContent = "Email atau kata sandi salah!";
  } else {
    error.textContent = "";
    // Arahkan ke dashboard sesuai role
    if (user.role === "mahasiswa") {
      window.location.href = "dashboard-mahasiswa.html";
    } else if (user.role === "dosen") {
      window.location.href = "dashboard-dosen.html";
    } else if (user.role === "admin") {
      window.location.href = "dashboard-admin.html";
    }
  }
});
