const updateFileDialog = document.querySelector(".update-folder-dialog");
const showUpdateFileDialogButton = document.querySelector(
    ".show-update-dialog",
);
const cancelFileUpdateButton = document.querySelector(".cancel-folder-update");

showUpdateFileDialogButton.addEventListener("click", () => {
    updateFileDialog.showModal();
});

cancelFileUpdateButton.addEventListener("click", () => {
    updateFileDialog.close();
});
