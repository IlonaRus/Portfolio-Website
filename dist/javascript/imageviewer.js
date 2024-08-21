// Open the Modal
function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var imgSrc = element.getAttribute("data-img-src");
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

// Close the Modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
