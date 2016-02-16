    var feedback = document.querySelector(".btn-pop-up");
		var popup = document.querySelector(".pop-up");
		var close = popup.querySelector(".pop-up-close");

		var form = popup.querySelector(".pop-up-form");
		var login = popup.querySelector("[name=login]");
		var password = popup.querySelector("[name=password]");

		var storage = localStorage.getItem("login");

		feedback.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.add("pop-up-show");
			login.focus();
			if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }
		});

		close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("pop-up-show");
        popup.classList.remove("pop-up-error");
    });

		form.addEventListener("submit", function(event) {
      
      if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.remove("pop-up-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("pop-up-error"); 
      } else {
        localStorage.setItem("login", login.value);
      }

      });

		window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("pop-up-show")) {
            popup.classList.remove("pop-up-show");
            popup.classList.remove("pop-up-error");
          }
        }
      });