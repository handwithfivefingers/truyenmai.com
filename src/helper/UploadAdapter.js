import React, { useState, useEffect } from 'react';

class MyUploadAdapter {
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const toBase64 = (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error) => reject(error);
            });

          return toBase64(file).then((cFile) => {
            // return Fetch('admin/uploadimage', {
            //   imageBinary: cFile,
            // }).then((d) => {
            //   if (d.status) {
            //     this.loader.uploaded = true;
            //     resolve({
            //       default: d.response.url,
            //     });
            //   } else {
            //     reject(`Couldn't upload file: ${file.name}.`);
            //   }
            // });
          });
        })
    );
  }
}

function MyCustomUploadAdapterPlugin(props) {
  console.log(props);
  return <>ReactJS Starter Template by Varun Bardwaj</>;
}

export default MyCustomUploadAdapterPlugin;
