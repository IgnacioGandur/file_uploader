const updatedFolderButton = document.querySelector(".edit-folder-name");
const cancelFolderUpdateButton = document.querySelector(
    ".cancel-folder-update",
);
const updateFolderDialog = document.querySelector(".update-folder-dialog");

updatedFolderButton.addEventListener("click", () => {
    updateFolderDialog.showModal();
});

cancelFolderUpdateButton.addEventListener("click", () => {
    updateFolderDialog.close();
});
