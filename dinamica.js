

    const controls = document.querySelectorAll(".arrow");
   

    controls.forEach((control) => {
        control.addEventListener("click", (e) => {
        
        isLeft = e.target.classList.contains("fa-arrow-left");

        if (isLeft) {
            document.getElementById('box-card').scrollBy({
                top: 0,
                left: -220,
                behavior: 'smooth'
              });
        } else{
            document.getElementById('box-card').scrollBy({
                top: 0,
                left: 220,
                behavior: 'smooth'
              });
        }

       
    });
    });
