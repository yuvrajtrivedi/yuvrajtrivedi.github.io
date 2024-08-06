document.addEventListener("DOMContentLoaded", function() {
    var pagination = document.getElementById("dark-pagination");
    var items = document.querySelectorAll("#dark-portfolio .portfolio-items .column");
    var itemsPerPage = 3;
    var totalPages = Math.ceil(items.length / itemsPerPage);

    for (var i = 1; i <= totalPages; i++) {
        var li = document.createElement("li");
        li.innerHTML = `<a href="#" data-page="${i}">${i}</a>`;
        pagination.appendChild(li);
    }

    pagination.addEventListener("click", function(event) {
        event.preventDefault();
        if (event.target.tagName === "A") {
            var page = parseInt(event.target.getAttribute("data-page"));
            showPage(page);
        }
    });

    function showPage(page) {
        items.forEach((item, index) => {
            item.style.display = "none";
            if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
                item.style.display = "block";
            }
        });

        Array.from(pagination.children).forEach(li => {
            li.classList.remove("active");
        });

        pagination.children[page - 1].classList.add("active");
    }

    showPage(1);
});
