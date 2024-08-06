document.addEventListener("DOMContentLoaded", function() {
    const certificates = [
        { src: './images/certificates/1.jpg', alt: 'Certificate 1', title: 'all', description: 'Advance Data Science & A.I' },
        { src: './images/certificates/2.jpg', alt: 'Certificate 2', title: 'all', description: 'Cloud Computing and Big Data' },
        { src: './images/certificates/3.jpg', alt: 'Certificate 3', title: 'all', description: 'Flipkart Grid 5.0' },
        { src: './images/certificates/4.jpg', alt: 'Certificate 4', title: 'all', description: 'CyberSecurity by N.S.D.C' },
        { src: './images/certificates/5.jpg', alt: 'Certificate 5', title: 'all', description: 'A.I. And Machine Learning' },
        { src: './images/certificates/6.jpg', alt: 'Certificate 6', title: 'all', description: 'Java (HackerRank)' },
        { src: './images/certificates/7.jpg', alt: 'Certificate 7', title: 'all', description: 'JavaScript (HackerRank)' },
        { src: './images/certificates/8.jpg', alt: 'Certificate 8', title: 'all', description: 'Python (HackerRank)' },
        { src: './images/certificates/9.jpg', alt: 'Certificate 9', title: 'all', description: 'SQL (HackerRank)' },
        { src: './images/certificates/10.jpg', alt: 'Certificate 10', title: 'all', description: 'Web Design & Development' },
        { src: './images/certificates/11.jpg', alt: 'Certificate 11', title: 'all', description: 'Graphic Design in Photoshop' },
        { src: './images/certificates/12.jpg', alt: 'Certificate 12', title: 'all', description: 'C (GreatLearning)' },
        { src: './images/certificates/13.jpg', alt: 'Certificate 13', title: 'all', description: 'A.I. on Jetson Nano (Nvidia)' },
        { src: './images/certificates/14.jpg', alt: 'Certificate 14', title: 'all', description: 'Java Programming (GreatLearning)' },
        { src: './images/certificates/15.jpg', alt: 'Certificate 15', title: 'all', description: 'Email Etiquette (T.C.S)' },
        { src: './images/certificates/16.jpg', alt: 'Certificate 16', title: 'all', description: 'Communication Skills (T.C.S)' },
        { src: './images/certificates/17.jpg', alt: 'Certificate 17', title: 'all', description: 'Skill Development Program' },
        { src: './images/certificates/18.jpg', alt: 'Certificate 18', title: 'all', description: 'Uploading...........' },
        { src: './images/certificates/19.jpg', alt: 'Certificate 19', title: 'all', description: 'Uploading...........' },
        { src: './images/certificates/20.jpg', alt: 'Certificate 20', title: 'all', description: 'Uploading...........' },
        // Add all your certificates here...
    ];

    const itemsPerPage = 6;
    let currentPage = 1;

    function renderCertificates() {
        const container = document.querySelector('.certification-items');
        if (!container) {
            console.error('Element with class "certification-items" not found.');
            return;
        }
        container.innerHTML = '';

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, certificates.length);

        for (let i = startIndex; i < endIndex; i++) {
            const cert = certificates[i];
            const itemHTML = `
                <div class="column mb_30 col-md-4 col-lg-4">
                    <div class="default-certification-item">
                        <a href="${cert.src}" data-fancybox="gallery">
                            <img src="${cert.src}" alt="${cert.alt}" />
                            <div class="overlay-box">
                                <span><i class="fa fa-eye" aria-hidden="true"></i></span>
                                <div class="tag">
                                    <ul>
                                        <li>${cert.description}</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            `;
            container.innerHTML += itemHTML;
        }
    }

    function createPagination() {
        const paginationContainer = document.querySelector('.pagination');
        if (!paginationContainer) {
            console.error('Element with class "pagination" not found.');
            return;
        }
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= Math.ceil(certificates.length / itemsPerPage); i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.className = 'page-link'; // Add a class for styling
            pageLink.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                renderCertificates();
                updatePagination();
            });
            paginationContainer.appendChild(pageLink);
        }
    }

    function updatePagination() {
        const pageLinks = document.querySelectorAll('.pagination .page-link');
        pageLinks.forEach(link => link.classList.remove('active'));
        pageLinks[currentPage - 1]?.classList.add('active');
    }

    renderCertificates();
    createPagination();
});
