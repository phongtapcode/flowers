// Kiểm tra khi trang tải xong
window.onload = () => {
  // Xóa class container khỏi body
  document.body.classList.remove("container");

  // Gắn sự kiện vào button
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn hành động mặc định

      // Tạo một XMLHttpRequest để tải nội dung từ flower.html
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "flower.html", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Thay thế toàn bộ nội dung của trang hiện tại bằng nội dung từ flower.html
          document.open();
          document.write(xhr.responseText);
          document.close();
        }
      };
      xhr.send();
    });
  }

  // Chạy animation sau 5 giây
  setTimeout(() => {
    const message = document.getElementById("newYearMessage");
    if (message) {
      message.classList.add("animate__animated", "animate__backInRight");
      message.style.visibility = "visible";
    } else {
      console.error("Element #newYearMessage not found!");
    }
  }, 5000);
};
