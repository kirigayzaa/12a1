// This file is intentionally left blank.
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.animationDuration = Math.random() * 5 + 5 + "s"; // Thời gian rơi từ 5 đến 10 giây
        flower.style.opacity = Math.random();
        flower.style.fontSize = Math.random() * 10 + 10 + "px"; // Kích thước hoa
        body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 10000); // Thời gian tồn tại của hoa (phù hợp với animation-duration)
    }

    setInterval(createFlower, 300); // Tạo hoa mới mỗi 300ms
});