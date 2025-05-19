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
    return;
  }

  signs[topic].forEach((sign) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<p style="font-size: 1.2rem; font-weight: bold;">${sign.word}</p>`;
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
});

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

renderCards();

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
// Thêm nút học
const container = document.getElementById("lessonButtonContainer");
const total = 7;

for (let i = 1; i <= total; i++) {
  const btn = document.createElement("div");
  btn.classList.add("lesson-button");
  btn.id = `lesson${i}`;
  btn.onclick = () => toggleActive(i);
  btn.innerHTML = `
          <span class="icon">🌟</span> <!-- Dấu ngôi sao -->
          <div class="tooltip">Bắt đầu</div>
        `;
  container.appendChild(btn);
}

function updateTooltips() {
  const buttons = [...document.querySelectorAll(".lesson-button")];
  buttons.forEach((btn) => btn.classList.remove("show-tooltip"));
  const firstInactive = buttons.find(
    (btn) => !btn.classList.contains("active")
  );
  if (firstInactive) firstInactive.classList.add("show-tooltip");
}

function toggleActive(index) {
  const btn = document.getElementById(`lesson${index}`);
  const icon = btn.querySelector(".icon");

  // Đổi ngôi sao thành dấu tích
  if (icon.innerHTML === "🌟") {
    icon.innerHTML = "✔️"; // Đổi thành dấu tích
  } else {
    icon.innerHTML = "🌟"; // Nếu đã là dấu tích, chuyển lại thành ngôi sao
  }

  btn.classList.toggle("active");
  window.location.href = `quiz.html`;
}

updateTooltips();
