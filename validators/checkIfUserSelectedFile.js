function checkIfUserSelectedFile(_, { req }) {
    if (!req.file) {
        throw new Error("You must select a file.");
    }

    return true;
}

export default checkIfUserSelectedFile;
