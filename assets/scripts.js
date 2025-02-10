document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let latexDiv = button.nextElementSibling;
            latexDiv.style.display = latexDiv.style.display === "none" ? "block" : "none";
        });
    });

    document.querySelectorAll(".copy-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            let latexText = btn.getAttribute("data-latex");
            navigator.clipboard.writeText(latexText).then(() => {
                btn.innerText = "✅ Copied!";
                setTimeout(() => btn.innerText = "📋 Copy", 2000);
            }).catch(err => console.error("Copy failed", err));
        });
    });
});
