const checkboxes = document.querySelectorAll('input[type=checkbox]');
const progressBar = document.querySelector('.progress-bar');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const checkedCount = document.querySelectorAll('input[type=checkbox]:checked').length;
    const totalCount = checkboxes.length;
    const percentage = Math.floor((checkedCount / totalCount) * 100);
    progressBar.style.width = percentage + '%';
  });
});