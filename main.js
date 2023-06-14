var buttons = document.querySelectorAll('button[data-table]');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      button.classList.add('focused');
      var table = this.getAttribute('data-table').split('-')[1];
      if (table === '1') {
        document.getElementById('give-input').value = button.querySelectorAll('span')[1].innerHTML;
      } else {
        document.getElementById('receive-input').value = button.querySelectorAll('span')[1].innerHTML;
      }

      var btns = document.querySelectorAll(`button[data-table]`);

        btns.forEach(function(btn) {
            if (btn !== button && btn.getAttribute('data-table').split('-')[1] === table) {
                btn.classList.remove('focused');
            }
        });
    
    });
  });