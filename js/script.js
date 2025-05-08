const signs = {
  greetings: [{ word: "Xin chào" }, { word: "Tạm biệt" }],
  numbers: [{ word: "Một" }, { word: "Hai" }],
  colors: [{ word: "Đỏ" }, { word: "Xanh" }],
  feelings: [{ word: "Vui" }, { word: "Buồn" }],
  family: [{ word: "Mẹ" }, { word: "Anh trai" }],
  school: [{ word: "Giáo viên" }, { word: "Bảng đen" }],
};
function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => console.error("Lỗi khi tải " + file, err));
}
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");

// Render danh sách từ vựng
function renderCards(topic) {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  if (!signs[topic] || signs[topic].length === 0) {
    container.innerHTML = "<p>Không có dữ liệu cho chủ đề này.</p>";
    return;
  }

  signs[topic].forEach((sign) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<p style="font-size: 1.2rem; font-weight: bold;">${sign.word}</p>`;
    container.appendChild(card);
  });
}

// Thay đổi chủ đề
function changeTopic(topic) {
  const topicName =
    {
      greetings: "Chào hỏi",
      numbers: "Số đếm",
      colors: "Màu sắc",
      feelings: "Cảm xúc",
      family: "Gia đình",
      school: "Trường học",
    }[topic] || "Chủ đề";

  document.getElementById("topic-title").innerText = topicName;
  renderCards(topic);
}

renderCards("greetings");

// Xử lý đăng nhập
function handleLogin() {
  const user = { name: "Nguyễn Văn A" };
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "index.html";
}
let currentLang = "vi";

function toggleLanguage() {
  const langBtn = document.getElementById("langToggleBtn");

  currentLang = currentLang === "vi" ? "en" : "vi";
  langBtn.textContent = currentLang === "vi" ? "🌐 Tiếng Việt" : "🌐 English";

  // Cập nhật nội dung trang
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[currentLang][key];
  });
}

const translations = {
  vi: {
    home: "Trang chủ",
    dictionary: "Từ điển",
    lessons: "Bài học",
    about: "Về chúng tôi",
    contact: "Liên hệ",
    login: "Đăng nhập",
    register: "Đăng ký",
  },
  en: {
    home: "Home",
    dictionary: "Dictionary",
    lessons: "Lessons",
    about: "About Us",
    contact: "Contact",
    login: "Login",
    register: "Sign Up",
  },
};
