// components/VideoUploadForm.tsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const VideoUploadForm = () => {
  const initialValues = {
    title: '',
    description: '',
    video: null as File | null,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    video: Yup.mixed().required('Video file is required'),
  });

  const handleSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('video', values.video as File);

      // Send the form data to your server
      await axios.post('/api/upload', formData);

      // Reset the form after successful upload
      setSubmitting(false);
    } catch (error) {
      console.error('Error uploading video:', error);
      // Handle error and inform the user
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="title">Title:</label>
        <Field type="text" id="title" name="title" />
        <ErrorMessage name="title" component="div" />

        <label htmlFor="description">Description:</label>
        <Field as="textarea" id="description" name="description" />
        <ErrorMessage name="description" component="div" />

        <label htmlFor="video">Video:</label>
        <Field type="file" id="video" name="video" accept="video/*" />
        <ErrorMessage name="video" component="div" />

        <button type="submit">Upload Video</button>
      </Form>
    </Formik>
  );
};

export default VideoUploadForm;
