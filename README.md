# 🧪 Teko Frontend Coding Interview — Bài Test Kỹ Thuật (Phần 2)

Dự án này là bài kiểm tra kỹ năng frontend thực hành dành cho ứng viên tham gia phỏng vấn tại **Teko Vietnam**. Bài test tập trung vào việc đánh giá khả năng ứng dụng **TypeScript**, xử lý DOM bằng **JavaScript thuần**, xây dựng UI với **HTML/CSS**, và tổ chức mã nguồn rõ ràng, dễ bảo trì.

---

## 📌 Mục Tiêu Bài Test

- Tạo ứng dụng frontend không dùng framework như React/Vue
- Xử lý logic bằng **TypeScript** kết hợp **JavaScript** DOM
- Tạo giao diện responsive với **CSS3**
- Tổ chức dự án rõ ràng theo mô hình component/function
- Áp dụng nguyên tắc clean code và separation of concerns

---

## 🧰 Tech Stack

| Category         | Stack                                |
|------------------|--------------------------------------|
| 💻 Ngôn ngữ chính | TypeScript (48.4%), JavaScript (16.1%) |
| 🎨 Giao diện      | HTML5 (10.2%), CSS3 (25.3%)          |
| 📦 Module hóa     | Tách file chức năng riêng biệt       |
| 🔧 Build tool     | Dùng `tsc` hoặc chạy thủ công         |
| 💡 DOM Handling   | Thuần JavaScript (document, events...) |
| 🧪 Testing         | Manual (qua browser)                 |

---
## 🚀 Cách Chạy Dự Án

> **Yêu cầu:** Node.js + TypeScript CLI

```bash
# Clone repository
git clone https://github.com/Wiken2k3/FrontEnd-Teko-Coding-Interview-2.git
cd FrontEnd-Teko-Coding-Interview-2

# Cài đặt TypeScript nếu chưa có
npm install -g typescript

# Biên dịch .ts sang .js
tsc

# Mở file index.html trong trình duyệt để xem kết quả
