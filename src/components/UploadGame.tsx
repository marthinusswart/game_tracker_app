import { ChangeEvent, FormEvent, useState } from "react";
import { Alert, Button, Form, Stack } from "react-bootstrap";

function UploadGame() {
  const [formState, setFormState] = useState({
    imageFile: "",
  });

  const [file, setFile] = useState<File | undefined>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) return;

    const filename = formState.imageFile.split("\\").pop();

    console.log(filename);
    console.log(formState.imageFile);

    const apiUrl =
      "https://vptyssegyb.execute-api.ap-southeast-2.amazonaws.com/v1/aws-applications-and-services/" + filename;
    console.log(apiUrl);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      setShowSuccess(true);
      setShowError(false);
    } else {
      console.error("Form submission failed");
      setShowError(true);
      setShowSuccess(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
    console.log(file);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Alert show={showSuccess} variant="success" dismissible>
        <Alert.Heading>Game Image Uploaded</Alert.Heading>
        <p>Game image was submitted to the Server.</p>
        <hr />
      </Alert>

      <Alert show={showError} variant="danger" dismissible>
        <Alert.Heading>Game Image Upload Failed</Alert.Heading>
        <p>Game image failed submition to the Server.</p>
        <hr />
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Stack gap={1}>
          <div className="p-2">
            <Form.Group className="mb-3" controlId="gameForm.File">
              <Form.Label>Game Name</Form.Label>
              <Form.Control type="file" name="imageFile" value={formState.imageFile} onChange={handleInputChange} />
            </Form.Group>
          </div>
        </Stack>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadGame;
