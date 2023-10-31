onload = () =>{
        document.body.classList.remove("container");
};
document.querySelector("button a").addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chuyển hướng mặc định
    
        // Tạo một XMLHttpRequest để tải nội dung từ flower.html
        var xhr = new XMLHttpRequest();
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