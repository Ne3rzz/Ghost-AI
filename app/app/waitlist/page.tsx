export default function Waitlist() {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Join the Ghost AI Waitlist</h1>
          <p className="mb-8">Be the first to create a Ghost and reconnect with your loved ones.</p>
          <iframe
            src="https://tally.so/r/w40qrk" // Apna Tally URL yahan paste karo
            className="w-full h-[600px] border-0"
            title="Ghost AI Waitlist Form"
          ></iframe>
        </div>
      </div>
    );
  }