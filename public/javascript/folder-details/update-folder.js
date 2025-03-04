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

// Handle button disabling when folder name is not changed.
const updateFolderNameField = updateFileDialog.querySelector(".input");
const updateFolderNameButton = updateFileDialog.querySelector(".update-folder");

updateFolderNameField.addEventListener("input", (e) => {
    if (e.target.value === e.target.placeholder) {
        updateFolderNameButton.setAttribute("disabled", "");
    } else {
        updateFolderNameButton.removeAttribute("disabled");
    }
});
