import { v2 as cloudinary } from "cloudinary";
import createFileUri from "../utilities/createFileUri.js";

(async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    });
})();

const cloudinaryInteractions = {
    createUserFolder: (username) => {
        cloudinary.api.create_folder(username);
    },

    uploadFile: async (username, fileBuffer, fileName, fileMimetype) => {
        try {
            const fileUri = createFileUri(fileBuffer, fileMimetype);
            const options = {
                public_id: fileName,
                folder: username,
                resource_type: "raw",
            };

            const result = await cloudinary.uploader.upload(fileUri, options);

            return result;
        } catch (error) {
            console.error("Cloudinary error:", error.message);
            throw new Error(
                "Something went wrong when trying to upload file to Cluodinary.",
            );
        }
    },

    updateFilename: async (from_public_id, to_public_id) => {
        try {
            const options = {
                resource_type: "raw",
                invalidate: true,
            };

            const result = await cloudinary.uploader.rename(
                from_public_id,
                to_public_id,
                options,
            );

            return result;
        } catch (error) {
            console.error("Cloudinary error:", error.message);
            throw new Error(
                "Something went wrong when trying to update a file in Cloudinary.",
            );
        }
    },

    deleteFile: async (public_id) => {
        try {
            const options = {
                resource_type: "raw",
                invalidate: true,
            };

            await cloudinary.uploader.destroy(public_id, options);
        } catch (error) {
            console.error(error.message);
            throw new Error(
                "Something went wrong when trying to delete a file from Cloudinary.",
            );
        }
    },

    deleteFilesFromFolder: async (public_ids_array) => {
        try {
            if (public_ids_array.length === 0) {
                return;
            }
            const options = { resource_type: "raw", invalidate: true };
            const result = await cloudinary.api.delete_resources(
                public_ids_array,
                options,
            );
            return result;
        } catch (error) {
            console.error("Cloudinary error:", error.message);
            throw new Error(
                "Something went wrong when trying to delete the files from a folder in Cloudinary.",
            );
        }
    },
};

export default cloudinaryInteractions;
