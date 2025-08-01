const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes');

function moveButton() {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}

// Chỉ gán sự kiện, không di chuyển sớm
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

// Xử lý khi nhấn "Chơi nè!"
yesBtn.addEventListener('click', function () {
  alert('Đừng giận anh nữa nha, vào chơi game với anh đi  😳🎮');
});


