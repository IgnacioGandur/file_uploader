import formatBytes from "../../../../utilities/formatBytes.js";

function validateFileSize(_, { req }) {
    const { size } = req.file;

    if (size === 0) {
        throw new Error(
            "You can't upload empty files. Size must be over 0 Bytes.",
        );
    }

    // 5MB limit.
    if (size > 5e6) {
        throw new Error(
            `File size must be up to 5MB max. The size of the file you are trying to upload is ${formatBytes(size, 2)}.`,
        );
    }

    return true;
}

export default validateFileSize;
