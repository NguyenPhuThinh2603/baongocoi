const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});
document.querySelector('.yes').addEventListener('click', function () {
  alert('Đừng giận anh nữa nha, vào chơi game với anh đi  😳🎮');
});

