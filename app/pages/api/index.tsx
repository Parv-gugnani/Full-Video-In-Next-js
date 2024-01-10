// pages/index.tsx
import React from "react";
import VideoUploadForm from ".../component/VideoUploadForm";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Video Upload</h1>
      <VideoUploadForm />
    </div>
  );
};

export default Home;
