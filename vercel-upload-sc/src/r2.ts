import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId: "use_your_own",
    secretAccessKey: "use_your_own",
    endpoint: "https://use_your_own.r2.cloudflarestorage.com"
})

export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercel-new",
        Key: fileName,
    }).promise();
    console.log(response);
}