function createFileUri(fileBuffer, fileMimetype) {
    const base64 = fileBuffer.toString("base64");
    const fileUri = `data:${fileMimetype};base64,${base64}`;
    return fileUri;
}

export default createFileUri;
