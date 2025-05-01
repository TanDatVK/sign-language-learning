const signs = {
  greetings: [{ word: "Xin chào" }, { word: "Tạm biệt" }],
  numbers: [{ word: "Một" }, { word: "Hai" }],
  colors: [{ word: "Đỏ" }, { word: "Xanh" }],
  feelings: [{ word: "Vui" }, { word: "Buồn" }],
  family: [{ word: "Mẹ" }, { word: "Anh trai" }],
  school: [{ word: "Giáo viên" }, { word: "Bảng đen" }],
};

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
    card.innerHTML = `
      <p style="font-size: 1.2rem; font-weight: bold;">${sign.word}</p>
    `;
    container.appendChild(card);
  });
}

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
function handleLogin() {
  const user = { name: "Nguyễn Văn A" };
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.getElementById("settingsToggle");
  const settingsMenu = document.getElementById("settingsMenu");

  settingsBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // tránh đóng ngay khi mở
    settingsMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
      settingsMenu.classList.remove("show");
    }
  });

  // Ngôn ngữ
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = localStorage.getItem("lang") || "vi";
    langSelect.addEventListener("change", (e) => {
      localStorage.setItem("lang", e.target.value);
      location.reload();
    });
  }

  // Đăng xuất
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
        localStorage.removeItem("user");
        location.href = "login.html";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.getElementById("settingsToggle");
  const settingsMenu = document.getElementById("settingsMenu");

  settingsBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    settingsMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
      settingsMenu.classList.remove("show");
    }
  });

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = localStorage.getItem("lang") || "vi";
    langSelect.addEventListener("change", (e) => {
      localStorage.setItem("lang", e.target.value);
      location.reload();
    });
  }

  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn?.addEventListener("click", () => {
    if (confirm("Bạn có chắc muốn đăng xuất?")) {
      localStorage.removeItem("user");
      location.href = "login.html";
    }
  });
});
