document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 3; // Number of items per page
    const portfolioItems = document.querySelectorAll('.portfolio-items .column');
    const totalItems = portfolioItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Create a pagination wrapper if it doesn't exist
    let paginationWrapper = document.getElementById('pagination-wrapper');
    if (!paginationWrapper) {
        paginationWrapper = document.createElement('div');
        paginationWrapper.id = 'pagination-wrapper';
        paginationWrapper.innerHTML = '<ul class="pagination-list"></ul>';
        document.querySelector('.my_portfolio').appendChild(paginationWrapper);
    }

    const paginationList = paginationWrapper.querySelector('.pagination-list');

    function showPage(page) {
        portfolioItems.forEach((item, index) => {
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
        });
    }

    function createPagination() {
        let paginationHTML = '<li class="prev"><a href="#">« Previous</a></li>';
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<li class="${i === 1 ? 'active' : ''}"><a href="#">${i}</a></li>`;
        }
        paginationHTML += '<li class="next"><a href="#">Next »</a></li>';
        paginationList.innerHTML = paginationHTML;
    }

    function initPagination() {
        createPagination();
        showPage(1);

        paginationList.addEventListener('click', function(event) {
            const target = event.target;
            if (target.tagName === 'A') {
                event.preventDefault();
                const currentPage = parseInt(paginationList.querySelector('.active')?.textContent || '1');
                let newPage;

                if (target.parentNode.classList.contains('prev')) {
                    newPage = currentPage > 1 ? currentPage - 1 : 1;
                } else if (target.parentNode.classList.contains('next')) {
                    newPage = currentPage < totalPages ? currentPage + 1 : totalPages;
                } else {
                    newPage = parseInt(target.textContent);
                }

                showPage(newPage);
                paginationList.querySelector('.active')?.classList.remove('active');
                paginationList.querySelectorAll('li')[newPage].classList.add('active');
            }
        });
    }

    initPagination();
});