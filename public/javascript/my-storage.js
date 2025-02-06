const uploadFileButton = document.querySelector(".upload-file");
const cancelFileUploadButton = document.querySelector(".cancel-file-upload");
const editFileModal = document.querySelector(".edit-file-dialog");
const hideEditFileModalButton = document.querySelector(".hide-edit-file-modal");
const deleteFileForm = document.querySelector("form.delete-file-form");

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

// Change the content of the fialod form when user clicks on file.
const files = document.querySelectorAll(".file");
const editFileForm = document.querySelector(".edit-file-form");

files.forEach((file) => {
    file.addEventListener("click", () => {
        const {
            id,
            title,
            fileExtension,
            mimetype,
            uploadedAt,
            updatedAt,
            size,
        } = file.dataset;
        populateForm(
            title,
            fileExtension,
            mimetype,
            uploadedAt,
            updatedAt,
            size,
        );
        editFileForm.setAttribute("action", `/my-storage/update-file/${id}`);
        deleteFileForm.setAttribute("action", `/my-storage/delete-file/${id}`);
        editFileModal.showModal();
    });
});

function populateForm(...args) {
    const filenameInput = editFileForm.querySelector("input.updated-filename");
    filenameInput.setAttribute("value", args[0]);
    const pFields = editFileForm.querySelectorAll("p");

    for (let i = 1; i < args.length; i++) {
        pFields[i - 1].textContent = args[i];
    }
}

hideEditFileModalButton.addEventListener("click", () => {
    editFileModal.close();
});

// Delete file.
const showConfirmFileDeletionButton = document.querySelector(
    ".show-confirm-file-deletion",
);
const hideConfirmFileDeletionButton = document.querySelector(
    ".hide-file-delete-form",
);

function toggleConfirmFileDeletion() {
    deleteFileForm.classList.toggle("show");
}

showConfirmFileDeletionButton.addEventListener(
    "click",
    toggleConfirmFileDeletion,
);
hideConfirmFileDeletionButton.addEventListener(
    "click",
    toggleConfirmFileDeletion,
);

const confirmFileDeletionButton = document.querySelector(
    ".confirm-file-deletion",
);
