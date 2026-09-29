document.addEventListener("DOMContentLoaded", () => {
  const defaultServices = [
    {
      id: "s1",
      icon: "fa-truck-ramp-box",
      judul: "Jual Beli Limbah Plastik",
      deskripsi:
        "Menerima dan membeli berbagai limbah  plastik industri & rumah tangga dengan harga pasaran kompetitif.",
      harga: "Harga Mengikuti Pasaran Tertinggi",
    },
    {
      id: "s3",
      icon: "fa-layer-group",
      judul: "Jasa Giling / Crusher Ringan & Berat",
      deskripsi:
        "Layanan pemilahan, klasifikasi/Crusher, hingga penggilingan bertahap untuk berbagai jenis limbah plastik.",
      harga: "Mulai Rp 2.000 / Kg",
    },
    {
      id: "s4",
      icon: "fa-cubes",
      judul: "Biji & Gilingan Plastik",
      deskripsi:
        "Menyediakan pasokan biji plastik daur ulang (recycled pellets) dan gilingan kualitas super.",
      harga: "Mulai Rp 9.500 / Kg",
    },
    {
      id: "s5",
      icon: "fa-truck-field",
      judul: "Jemput Limbah Pabrik",
      deskripsi:
        "Fasilitas armada penjemputan limbah plastik langsung ke lokasi pabrik atau gudang Anda di seluruh INDONESIA.",
      harga: "Gratis Jemput (Min. Tonase Tertentu)",
    },
  ];

  const defaultMaterials = [
    {
      id: "m1",
      icon: "fa-bottle-water",
      nama: "PET / PETE (Polyethylene Terephthalate)",
      deskripsi: "Botol minuman bening, tempat makanan, packaging PET",
      harga: "Rp 5.500 – Rp 7.500 / Kg",
    },
    {
      id: "m2",
      icon: "fa-prescription-bottle",
      nama: "HDPE (High-Density Polyethylene)",
      deskripsi: "Jeriken, botol oli, botol sampo, tutup botol, drum plastik",
      harga: "Rp 6.000 – Rp 8.800 / Kg",
    },
    {
      id: "m3",
      icon: "fa-box-archive",
      nama: "PC (PolyCarbonete)",
      deskripsi: "Ember, gelas plastik, keranjang buah, kursi monobloc",
      harga: "Rp 5.000 – Rp 7.800 / Kg",
    },
    {
      id: "m4",
      icon: "fa-bag-shopping",
      nama: "LDPE (Low-Density Polyethylene)",
      deskripsi: "Plastik infus, kantong plastik bening, film packaging",
      harga: "Rp 4.500 – Rp 6.800 / Kg",
    },
    {
      id: "m5",
      icon: "fa-car",
      nama: "ABS & PS (Polystyrene)",
      deskripsi: "Casing elektronik, komponen otomotif, perkakas plastik",
      harga: "Rp 8.000 – Rp 12.000 / Kg",
    },
    {
      id: "m6",
      icon: "fa-industry",
      nama: "Limbah Reject Pabrik",
      deskripsi: "Afval plastik, runner injection, sisa cetakan pabrik",
      harga: "Negosiasi Sesuai Kondisi",
    },
  ];

  const defaultGallery = [
    {
      id: "g1",
      kategori: "Pemilik Perusahaan",
      deskripsi: "Pimpinan & Manajemen PT. Plastik Membara BKS",
      foto: "images/pemilik.jpg",
    },
    {
      id: "g2",
      kategori: "Bagian Gudang",
      deskripsi: "Area penampungan & penyimpanan limbah kapasitas puluhan ton.",
      foto: "images/gudang.jpg",
    },
    {
      id: "g3",
      kategori: "Alat & Mesin",
      deskripsi: "Fasilitas penggilingan plastik presisi modern.",
      foto: "images/alat.jpg",
    },
    {
      id: "g4",
      kategori: "Transportasi",
      deskripsi: "Armada logistik penjemputan limbah.",
      foto: "images/pengantaran.jpg",
    },
    {
      id: "g5",
      kategori: "Bagian Kantor",
      deskripsi: "Pusat verifikasi transaksi dan administrasi.",
      foto: "images/kantor.jpg",
    },
  ];

  const defaultFeatures = [
    {
      id: "f1",
      judul: "Timbangan Akurat & Transparan",
      deskripsi:
        "Sistem penimbangan digital terkalibrasi berkala untuk kejujuran transaksi.",
      icon: "fa-scale-balanced",
      foto: "",
    },
    {
      id: "f2",
      judul: "Harga Terbaik & Pembayaran Cepat",
      deskripsi:
        "Harga limbah kompetitif dengan pembayaran langsung saat transaksi.",
      icon: "fa-money-bill-wave",
      foto: "",
    },
    {
      id: "f3",
      judul: "Pasokan Stabil & Berkelanjutan",
      deskripsi:
        "Mampu memenuhi pasokan gilingan dan biji plastik secara kontinu.",
      icon: "fa-industry",
      foto: "",
    },
    {
      id: "f4",
      judul: "Komitmen Industri Hijau",
      deskripsi:
        "Pengolahan ramah lingkungan yang menekan limbah dan mendukung ekonomi sirkular.",
      icon: "fa-leaf",
      foto: "",
    },
  ];

  let storedServices = JSON.parse(localStorage.getItem("siteServices_v1"));
  if (!storedServices || storedServices.some((s) => s.id === "s2")) {
    localStorage.setItem("siteServices_v1", JSON.stringify(defaultServices));
  }

  if (!localStorage.getItem("siteMaterials_v1"))
    localStorage.setItem("siteMaterials_v1", JSON.stringify(defaultMaterials));
  if (!localStorage.getItem("customGallery_v2"))
    localStorage.setItem("customGallery_v2", JSON.stringify(defaultGallery));
  if (!localStorage.getItem("customFeatures_v2"))
    localStorage.setItem("customFeatures_v2", JSON.stringify(defaultFeatures));

  function checkIsSekretaris() {
    return localStorage.getItem("currentUser") === "SEKRETARIS";
  }

  function checkCanManageContent() {
    const user = localStorage.getItem("currentUser") || "";
    return user === "SEKRETARIS" || user.startsWith("ADMIN");
  }

  function renderServices() {
    const container = document.getElementById("servicesContainer");
    const items = (
      JSON.parse(localStorage.getItem("siteServices_v1")) || []
    ).filter((item) => item.id !== "s2");
    const isSekretaris = checkIsSekretaris();

    container.innerHTML = items
      .map(
        (item) => `
          <div class="card">
            <div class="card-icon"><i class="fa-solid ${item.icon}"></i></div>
            <h3>${item.judul}</h3>
            <p>${item.deskripsi}</p>
            <div class="price-box">
              <span class="price-tag"><i class="fa-solid fa-tag"></i> ${item.harga || "Hubungi Kami"}</span>
              ${isSekretaris ? `<button type="button" class="btn-edit-price" onclick="openEditServicePrice('${item.id}')"><i class="fa-solid fa-pen-to-square"></i> Ubah Tarif (Sekretaris)</button>` : ""}
            </div>
          </div>
        `,
      )
      .join("");
  }

  function renderMaterials() {
    const container = document.getElementById("materialsContainer");
    const items = JSON.parse(localStorage.getItem("siteMaterials_v1")) || [];
    const isSekretaris = checkIsSekretaris();

    container.innerHTML = items
      .map(
        (item) => `
          <div class="item-box">
            <i class="fa-solid ${item.icon}"></i>
            <div class="item-content">
              <h4>${item.nama}</h4>
              <p>${item.deskripsi}</p>
              <div class="price-box">
                <span class="price-tag"><i class="fa-solid fa-coins"></i> ${item.harga || "Negosiasi"}</span>
                ${isSekretaris ? `<button type="button" class="btn-edit-price" onclick="openEditMaterialPrice('${item.id}')"><i class="fa-solid fa-pen-to-square"></i> Ubah Harga (Sekretaris)</button>` : ""}
              </div>
            </div>
          </div>
        `,
      )
      .join("");
  }

  function renderGallery() {
    const container = document.getElementById("galleryContainer");
    const items = JSON.parse(localStorage.getItem("customGallery_v2")) || [];
    const canManage = checkCanManageContent();

    container.innerHTML = items
      .map(
        (item) => `
          <div class="gallery-card">
            ${canManage ? `<button class="card-delete-btn" onclick="deleteGalleryItem('${item.id}')" title="Hapus"><i class="fa-solid fa-trash"></i></button>` : ""}
            <div class="gallery-img-wrapper">
              <img src="${item.foto}" alt="${item.kategori}" onerror="this.src='images/gudang.jpg'">
              <span class="gallery-tag">${item.kategori}</span>
            </div>
            <div class="gallery-info">
              <h4>${item.kategori}</h4>
              <p>${item.deskripsi}</p>
            </div>
          </div>
        `,
      )
      .join("");
  }

  function renderFeatures() {
    const container = document.getElementById("featuresContainer");
    const items = JSON.parse(localStorage.getItem("customFeatures_v2")) || [];
    const canManage = checkCanManageContent();

    container.innerHTML = items
      .map(
        (item) => `
          <div class="why-card">
            ${canManage ? `<button class="card-delete-btn" onclick="deleteFeatureItem('${item.id}')" title="Hapus"><i class="fa-solid fa-trash"></i></button>` : ""}
            ${item.foto ? `<div class="why-img-box"><img src="${item.foto}" alt="${item.judul}"></div>` : ""}
            <div class="why-body">
              <div class="why-icon"><i class="fa-solid ${item.icon || "fa-medal"}"></i></div>
              <h4>${item.judul}</h4>
              <p>${item.deskripsi}</p>
            </div>
          </div>
        `,
      )
      .join("");
  }

  function updateAdminUI() {
    const canManage = checkCanManageContent();
    const galleryAdminBar = document.getElementById("galleryAdminBar");
    const featureAdminBar = document.getElementById("featureAdminBar");

    if (canManage) {
      document.body.classList.add("admin-mode-active");
      if (galleryAdminBar) galleryAdminBar.style.display = "flex";
      if (featureAdminBar) featureAdminBar.style.display = "flex";
    } else {
      document.body.classList.remove("admin-mode-active");
      if (galleryAdminBar) galleryAdminBar.style.display = "none";
      if (featureAdminBar) featureAdminBar.style.display = "none";
    }

    renderServices();
    renderMaterials();
    renderGallery();
    renderFeatures();
  }

  const servicePriceModal = document.getElementById("servicePriceModal");
  const servicePriceForm = document.getElementById("servicePriceForm");
  const servicePriceModalClose = document.getElementById(
    "servicePriceModalClose",
  );

  window.openEditServicePrice = function (id) {
    if (!checkIsSekretaris()) return;
    const items = JSON.parse(localStorage.getItem("siteServices_v1")) || [];
    const item = items.find((s) => s.id === id);
    if (item) {
      document.getElementById("serviceTargetId").value = item.id;
      document.getElementById("serviceTargetLabel").innerText =
        `Tarif: ${item.judul}`;
      document.getElementById("servicePriceInput").value = item.harga || "";
      servicePriceModal.classList.add("active");
    }
  };

  if (servicePriceModalClose) {
    servicePriceModalClose.addEventListener("click", () =>
      servicePriceModal.classList.remove("active"),
    );
  }

  if (servicePriceForm) {
    servicePriceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!checkIsSekretaris()) return;
      const id = document.getElementById("serviceTargetId").value;
      const newPrice = document.getElementById("servicePriceInput").value;
      let items = JSON.parse(localStorage.getItem("siteServices_v1")) || [];
      items = items.map((item) =>
        item.id === id ? { ...item, harga: newPrice } : item,
      );
      localStorage.setItem("siteServices_v1", JSON.stringify(items));
      servicePriceModal.classList.remove("active");
      renderServices();
      alert("Tarif berhasil diperbarui oleh Sekretaris!");
    });
  }

  const materialPriceModal = document.getElementById("materialPriceModal");
  const materialPriceForm = document.getElementById("materialPriceForm");
  const materialPriceModalClose = document.getElementById(
    "materialPriceModalClose",
  );

  window.openEditMaterialPrice = function (id) {
    if (!checkIsSekretaris()) return;
    const items = JSON.parse(localStorage.getItem("siteMaterials_v1")) || [];
    const item = items.find((m) => m.id === id);
    if (item) {
      document.getElementById("materialTargetId").value = item.id;
      document.getElementById("materialTargetLabel").innerText =
        `Harga: ${item.nama}`;
      document.getElementById("materialPriceInput").value = item.harga || "";
      materialPriceModal.classList.add("active");
    }
  };

  if (materialPriceModalClose) {
    materialPriceModalClose.addEventListener("click", () =>
      materialPriceModal.classList.remove("active"),
    );
  }

  if (materialPriceForm) {
    materialPriceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!checkIsSekretaris()) return;
      const id = document.getElementById("materialTargetId").value;
      const newPrice = document.getElementById("materialPriceInput").value;
      let items = JSON.parse(localStorage.getItem("siteMaterials_v1")) || [];
      items = items.map((item) =>
        item.id === id ? { ...item, harga: newPrice } : item,
      );
      localStorage.setItem("siteMaterials_v1", JSON.stringify(items));
      materialPriceModal.classList.remove("active");
      renderMaterials();
      alert("Harga barang berhasil diperbarui oleh Sekretaris!");
    });
  }

  window.deleteGalleryItem = function (id) {
    if (confirm("Apakah yakin ingin menghapus foto ini?")) {
      let items = JSON.parse(localStorage.getItem("customGallery_v2")) || [];
      items = items.filter((item) => item.id !== id);
      localStorage.setItem("customGallery_v2", JSON.stringify(items));
      renderGallery();
    }
  };

  window.deleteFeatureItem = function (id) {
    if (confirm("Apakah yakin ingin menghapus keunggulan ini?")) {
      let items = JSON.parse(localStorage.getItem("customFeatures_v2")) || [];
      items = items.filter((item) => item.id !== id);
      localStorage.setItem("customFeatures_v2", JSON.stringify(items));
      renderFeatures();
    }
  };

  const addGalleryForm = document.getElementById("addGalleryForm");
  if (addGalleryForm) {
    addGalleryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const kategori = document.getElementById("galleryKategori").value;
      const deskripsi = document.getElementById("galleryDeskripsi").value;
      const fileInput = document.getElementById("galleryFileInput");
      const urlInput = document.getElementById("galleryUrlInput").value;

      function saveGallery(imgSrc) {
        const items =
          JSON.parse(localStorage.getItem("customGallery_v2")) || [];
        items.push({
          id: "g_" + Date.now(),
          kategori,
          deskripsi,
          foto: imgSrc || "images/gudang.jpg",
        });
        localStorage.setItem("customGallery_v2", JSON.stringify(items));
        renderGallery();
        document.getElementById("galleryModal").classList.remove("active");
        addGalleryForm.reset();
        alert("Dokumentasi berhasil disimpan!");
      }

      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => saveGallery(event.target.result);
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        saveGallery(urlInput);
      }
    });
  }

  const addFeatureForm = document.getElementById("addFeatureForm");
  if (addFeatureForm) {
    addFeatureForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const judul = document.getElementById("featureJudul").value;
      const deskripsi = document.getElementById("featureDeskripsi").value;
      const fileInput = document.getElementById("featureFileInput");
      const urlInput = document.getElementById("featureUrlInput").value;

      function saveFeature(imgSrc) {
        const items =
          JSON.parse(localStorage.getItem("customFeatures_v2")) || [];
        items.push({
          id: "f_" + Date.now(),
          judul,
          deskripsi,
          foto: imgSrc,
          icon: "fa-shield-halved",
        });
        localStorage.setItem("customFeatures_v2", JSON.stringify(items));
        renderFeatures();
        document.getElementById("featureModal").classList.remove("active");
        addFeatureForm.reset();
        alert("Keunggulan berhasil disimpan!");
      }

      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => saveFeature(event.target.result);
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        saveGallery(urlInput);
      }
    });
  }

  const galleryModal = document.getElementById("galleryModal");
  const openAddGalleryModal = document.getElementById("openAddGalleryModal");
  const galleryModalClose = document.getElementById("galleryModalClose");
  if (openAddGalleryModal)
    openAddGalleryModal.addEventListener("click", () =>
      galleryModal.classList.add("active"),
    );
  if (galleryModalClose)
    galleryModalClose.addEventListener("click", () =>
      galleryModal.classList.remove("active"),
    );

  const featureModal = document.getElementById("featureModal");
  const openAddFeatureModal = document.getElementById("openAddFeatureModal");
  const featureModalClose = document.getElementById("featureModalClose");
  if (openAddFeatureModal)
    openAddFeatureModal.addEventListener("click", () =>
      featureModal.classList.add("active"),
    );
  if (featureModalClose)
    featureModalClose.addEventListener("click", () =>
      featureModal.classList.remove("active"),
    );

  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

  function updateThemeIcon(isDark) {
    if (!themeIcon) return;
    themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateThemeIcon(isDark);
    });
  }

  const sidebarOpen = document.getElementById("sidebarOpen");
  const sidebarClose = document.getElementById("sidebarClose");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const sidebarLinks = document.querySelectorAll(
    ".sidebar-grid-item, .sidebar-btn-penawaran",
  );

  function openSidebar() {
    sidebarMenu.classList.add("active");
    sidebarOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebarMenu.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (sidebarOpen) sidebarOpen.addEventListener("click", openSidebar);
  if (sidebarClose) sidebarClose.addEventListener("click", closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeSidebar);

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        closeSidebar();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const loginModal = document.getElementById("loginModal");
  const loginModalClose = document.getElementById("loginModalClose");
  const authContainer = document.getElementById("authContainer");
  const adminLoginForm = document.getElementById("adminLoginForm");
  const loginError = document.getElementById("loginError");
  const googleLoginBtn = document.getElementById("googleLoginBtn");

  const credentials = {
    sekretaris: "acon1710",
    admin1: "bekasi1",
    admin2: "bekasi2",
    admin3: "bekasi3",
  };

  function renderAuthState() {
    const user = localStorage.getItem("currentUser");
    if (user) {
      authContainer.innerHTML = `
        <div class="user-logged-badge">
          <span><i class="fa-solid fa-user-circle"></i> ${user}</span>
          <button type="button" class="btn-logout" id="logoutBtn" title="Keluar">
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      `;
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        renderAuthState();
        updateAdminUI();
      });
    } else {
      authContainer.innerHTML = `
        <button type="button" class="btn-secondary btn-sm" id="loginBtnOpen">
          <i class="fa-solid fa-right-to-bracket"></i> Masuk
        </button>
      `;
      document.getElementById("loginBtnOpen").addEventListener("click", () => {
        loginModal.classList.add("active");
      });
    }
    updateAdminUI();
  }

  function closeLoginModal() {
    loginModal.classList.remove("active");
    loginError.textContent = "";
  }

  if (loginModalClose)
    loginModalClose.addEventListener("click", closeLoginModal);
  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) closeLoginModal();
  });

  if (googleLoginBtn) {
    googleLoginBtn.addEventListener("click", () => {
      localStorage.setItem("currentUser", "User Google");
      closeLoginModal();
      renderAuthState();
      alert("Berhasil masuk.");
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("adminUsername").value;
      const password = document.getElementById("adminPassword").value;

      if (credentials[username] && credentials[username] === password) {
        const displayName = username.toUpperCase();
        localStorage.setItem("currentUser", displayName);
        closeLoginModal();
        adminLoginForm.reset();
        renderAuthState();
        if (displayName === "SEKRETARIS") {
          alert(
            "Selamat datang SEKRETARIS! Anda memiliki wewenang khusus mengubah harga layanan dan barang.",
          );
        } else {
          alert(`Selamat datang ${displayName}!`);
        }
      } else {
        loginError.textContent = "Kata sandi atau akun tidak sesuai!";
      }
    });
  }

  renderAuthState();
});

function handleFormSubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const jenis = document.getElementById("jenis").value;
  const perkiraan = document.getElementById("perkiraan").value;
  const pesan = document.getElementById("pesan").value;

  const text = `Halo PT. Plastik Membara BKS,\n\nNama: ${nama}\nTelepon: ${telepon}\nLayanan/Jenis: ${jenis}\nEstimasi Berat: ${perkiraan}\nPesan: ${pesan}`;
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/6287884811777?text=${encoded}`, "_blank");
}
