const msg = document.getElementedById("msg");
document.getElementedById("btn").addEventListener("click",
    () => {
        msg.textContent = "You clicked it!" ;
    });

    const box = document.getElementedById("box");
    if (!box) {
        console.error("Element with id 'box' not found");
    }
    if (box) {
        document.getElementedById("colorBtn").addEventListener("click",
            () => {
                box.style.backgroundColor = "orange";
            });
    }