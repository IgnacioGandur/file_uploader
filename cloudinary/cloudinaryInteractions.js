import { v2 as cloudinary } from "cloudinary";

const cloudinaryInteractions = {
    createUserFolder: (username) => {
        cloudinary.api.create_folder(username);
    },

    uploadFile: (fileBuffer, public_id, folder) => {
        const options = {
            public_id: public_id,
            folder: folder,
            resource_type: "raw",
        };

        return new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream(options, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                })
                .end(fileBuffer);
        });
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
            console.error(error.message);
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
