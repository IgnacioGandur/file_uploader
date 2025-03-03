const showFileUpdateDialog = document.querySelector(".show-update-dialog");
const updateFileDialog = document.querySelector(".update-file-dialog");
const hideFileUpdateDialog = document.querySelector(".cancel-file-update");
const showDeleteFileDialog = document.querySelector(".delete-file");
const deleteFileDialog = document.querySelector(".delete-file-dialog");
const cancelFileDelete = document.querySelector(".cancel-file-delete");
const updateFileButton = document.querySelector(".update-file-button");

showFileUpdateDialog.addEventListener("click", () => {
    updateFileDialog.showModal();
});

hideFileUpdateDialog.addEventListener("click", () => {
    updateFileDialog.close();
});

showDeleteFileDialog.addEventListener("click", () => {
    deleteFileDialog.showModal();
});

cancelFileDelete.addEventListener("click", () => {
    deleteFileDialog.close();
});

// Prevent request to server if the user tries to update the filename to the name that already has.

const updateFilenameInputField = updateFileDialog.querySelector(".input");
const updateFilenameButton = updateFileDialog.querySelector(
    ".update-file-button",
);

updateFilenameInputField.addEventListener("input", (e) => {
    if (e.target.value === e.target.placeholder) {
        updateFilenameButton.setAttribute("disabled", "");
    } else {
        updateFilenameButton.removeAttribute("disabled");
    }
});
