// Utility to upload images to Cloudinary
export async function uploadToCloudinary(file) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY ;
  const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET ;

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'portfolio_upload');
  formData.append('folder', 'portfolio'); // Ensure images go to the 'portfolio' folder

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  return data.secure_url;
}
