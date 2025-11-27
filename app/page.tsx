import FileUploader from "../components/FileUploader";
import CameraCapture from "../components/CameraCapture";

export default function Home() {
  return (
    <main>
      <h1>Tenant AI Verifier</h1>
      <CameraCapture />
      <FileUploader />
    </main>
  );
}
