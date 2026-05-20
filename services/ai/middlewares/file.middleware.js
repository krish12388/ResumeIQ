import multer from "multer";


const storage = multer.memoryStorage();
const limits = {
  fileSize: 5 * 1024 * 1024 //5mb
};
const fileMiddleware = multer({ storage, limits });
export default fileMiddleware;