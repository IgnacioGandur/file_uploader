function checkIfPasswordsMatch(password, { req }) {
    const { confirmPassword } = req.body;
    if (password !== confirmPassword) {
        throw new Error("The passwords don't match.");
    } else {
        return true;
    }
}

export default checkIfPasswordsMatch;
