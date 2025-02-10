const uploadFileButton = document.querySelector(".upload-file");
const cancelFileUploadButton = document.querySelector(".cancel-file-upload");
const uploadFileDialog = document.querySelector(".upload-file-dialog");
const createFolderButton = document.querySelector(".create-folder");
const createFolderDialog = document.querySelector(".create-folder-dialog");
const cancelFolderCreationButton = document.querySelector(
    ".cancel-folder-creation",
);

uploadFileButton.addEventListener("click", function () {
    uploadFileDialog.showModal();
});

cancelFileUploadButton.addEventListener("click", function () {
    uploadFileDialog.close();
});

createFolderButton.addEventListener("click", function () {
    createFolderDialog.showModal();
});

cancelFolderCreationButton.addEventListener("click", function () {
    createFolderDialog.close();
});
