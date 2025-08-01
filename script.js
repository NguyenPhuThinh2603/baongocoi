const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes');

// Hàm di chuyển nút
function moveButton(event) {
  event.preventDefault();
  event.stopPropagation();

  // Delay nhỏ để tránh tay chạm ngay vị trí cũ
  setTimeout(() => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
  }, 100); // 100ms delay
}

// Gắn sự kiện cho cả chuột và chạm
noBtn.addEventListener('mouseover', moveButton); // PC
noBtn.addEventListener('touchstart', moveButton); // Mobile

// Nút "Chơi nè!"
yesBtn.addEventListener('click', function () {
  alert('Đừng giận anh nữa nha, vào chơi game với anh đi 😳🎮');
});
