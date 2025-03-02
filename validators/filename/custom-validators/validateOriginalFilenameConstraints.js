import validators from "validator";
const { trim, isEmpty, isLength, matches } = validators;

function validateOriginalFilenameConstraints(_, { req }) {
    if (!req.body.filename) {
        const { originalname } = req.file;
        const filename = originalname.slice(0, originalname.lastIndexOf("."));

        const regex = /^[\w\d_-]*$/;

        if (!isLength(filename, { min: 1, max: 30 })) {
            throw new Error(
                `The original name of the file you are trying to upload must be between 1 and 30 characters long. Filename length is ${filename.length} characters long.`,
            );
        }

        if (isEmpty(trim(filename))) {
            throw new Error(
                "The original name of the file you are trying to upload can't be empty.",
            );
        }

        if (!matches(filename, regex)) {
            throw new Error(
                `The original name of the file you are trying to upload must only contain alphanumeric and hyphen values only ("-","_"). `,
            );
        }
    }
    return true;
}

export default validateOriginalFilenameConstraints;
