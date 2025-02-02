// Upload file
const uploadFileButton = document.querySelector(".upload-file");
const cancelFileUploadButton = document.querySelector(".cancel-file-upload");

uploadFileButton.addEventListener("click", (e) => {
    e.target.nextElementSibling.showModal();
});

cancelFileUploadButton.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.close();
});

// Create folder
const createFolderButton = document.querySelector("button.create-folder");
const cancelFolderCreationButton = document.querySelector(
    "button.cancel-folder-creation",
);

createFolderButton.addEventListener("click", (e) => {
    e.target.nextElementSibling.showModal();
});

cancelFolderCreationButton.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.close();
});
