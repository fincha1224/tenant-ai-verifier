export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">AI Document Verification</h1>
      <a
        className="px-6 py-3 bg-blue-600 text-white rounded-xl"
        href="/upload"
      >
        Start Verification
      </a>
    </main>
  );
}
