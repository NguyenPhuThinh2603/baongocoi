const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes');

function moveButton(event) {
  event.preventDefault();       // Ngăn chạm
  event.stopPropagation();      // Ngăn lan xuống nút bên dưới

  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

yesBtn.addEventListener('click', function () {
  alert('Đừng giận anh nữa nha, vào chơi game với anh đi 😳🎮');
});


