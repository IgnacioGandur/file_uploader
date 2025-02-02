const uploadFileButton = document.querySelector(".upload-file");
const cancelFileUpload = document.querySelector(".cancel-file-upload");

uploadFileButton.addEventListener("click", (e) => {
    e.target.nextElementSibling.showModal();
});

cancelFileUpload.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.close();
});
