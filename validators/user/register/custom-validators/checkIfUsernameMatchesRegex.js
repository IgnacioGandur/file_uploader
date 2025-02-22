function checkIfUsernameMatchesRegex(username) {
    const regex = /^[\w\d-_]*$/;

    if (!regex.test(username)) {
        throw new Error(
            `The username should only contain letters, numbers and hyphens ("-", "_"). The username "${username}" is not valid.`,
        );
    }

    return true;
}

export default checkIfUsernameMatchesRegex;
