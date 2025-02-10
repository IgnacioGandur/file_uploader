const deleteFolderButton = document.querySelector(".delete-folder");
const deleteFolderDialog = document.querySelector(".delete-folder-dialog");
const cancelFolderDeleteButton = document.querySelector(
    ".cancel-folder-delete",
);

deleteFolderButton.addEventListener("click", () => {
    deleteFolderDialog.showModal();
});

cancelFolderDeleteButton.addEventListener("click", () => {
    deleteFolderDialog.close();
});
