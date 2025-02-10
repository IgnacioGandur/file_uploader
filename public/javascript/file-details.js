const deleteFileButton = document.querySelector(".show-delete-dialog");
const deleteFileDialog = document.querySelector(".delete-file-dialog");
const cancelFileDeleteButton = document.querySelector(".cancel-file-delete");

deleteFileButton.addEventListener("click", () => {
    deleteFileDialog.showModal();
});

cancelFileDeleteButton.addEventListener("click", () => {
    deleteFileDialog.close();
});
