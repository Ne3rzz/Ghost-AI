import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans transition-all duration-300">
      {/* Navigation */}
      <nav className="absolute top-0 right-0 p-6">
        <Link href="/signin" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
          Sign In
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-28 bg-gradient-to-b from-gray-900 to-gray-800 animate-fade-in">
        <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Talk to the People You’ve Lost
        </h1>
        <p className="text-2xl mb-10 text-gray-300">Ghost AI: A Grok-inspired platform to connect with digital echoes of your loved ones.</p>
        <Link
          href="/waitlist"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Train My Ghost Now
        </Link>
      </header>

      {/* How It Works */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-slide-up">How It Works</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div className="text-center p-8 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-4 text-blue-400">📤</span>
            <h3 className="text-2xl font-semibold mb-4">1. Upload Memories</h3>
            <p className="text-gray-400">Share voice clips, text messages, photos, and key life moments of your loved ones.</p>
          </div>
          <div className="text-center p-8 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-4 text-blue-400">🤖</span>
            <h3 className="text-2xl font-semibold mb-4">2. Train Your Ghost</h3>
            <p className="text-gray-400">Our advanced AI, powered by cutting-edge NLP, recreates their personality and voice.</p>
          </div>
          <div className="text-center p-8 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-4 text-blue-400">🎙️</span>
            <h3 className="text-2xl font-semibold mb-4">3. Connect Forever</h3>
            <p className="text-gray-400">Chat or call your Ghost anytime, with lifelike responses and emotional depth.</p>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-slide-up">Our Technology</h2>
        <div className="max-w-6xl mx-auto text-center px-6">
          <p className="text-xl text-gray-300 mb-8">
            Built with xAI’s Grok-inspired AI, Ghost AI uses state-of-the-art natural language processing and voice synthesis to bring your memories to life. Secure, private, and scalable—designed for the future.
          </p>
          <div className="flex justify-center space-x-6">
            <span className="text-4xl text-blue-400">🧠</span>
            <span className="text-4xl text-blue-400">🔒</span>
            <span className="text-4xl text-blue-400">🌐</span>
          </div>
        </div>
      </section>

      {/* Plans & Pricing */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-slide-up">Plans & Pricing</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="p-8 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Free</h3>
            <p className="text-gray-400 mb-6">1 Ghost • Chat-only experience • Basic memory upload</p>
            <p className="text-3xl font-bold text-blue-400 mb-4">$0</p>
            <Link href="/waitlist" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block">
              Get Started
            </Link>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Pro – $15/mo</h3>
            <p className="text-gray-400 mb-6">Voice calls • Memory updates • Photo memory bank • Priority support</p>
            <p className="text-3xl font-bold text-blue-400 mb-4">$15/month</p>
            <Link href="/waitlist" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block">
              Subscribe
            </Link>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Legacy – $500/lifetime</h3>
            <p className="text-gray-400 mb-6">Forever Ghost • Shared with family • Post-death activation • Full archive</p>
            <p className="text-3xl font-bold text-blue-400 mb-4">$500 one-time</p>
            <Link href="/waitlist" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block">
              Join Legacy
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-slide-up">Frequently Asked Questions</h2>
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <details className="bg-gray-900 p-6 rounded-lg shadow-md">
            <summary className="text-lg font-semibold cursor-pointer">Is this ethical?</summary>
            <p className="mt-2 text-gray-400">We prioritize consent, transparency, and mental well-being. Ghosts are only created with full permission or legacy authorization from family.</p>
          </details>
          <details className="bg-gray-900 p-6 rounded-lg shadow-md">
            <summary className="text-lg font-semibold cursor-pointer">How accurate is the Ghost?</summary>
            <p className="mt-2 text-gray-400">Accuracy improves with more data—voice clips, chats, and personal values create a lifelike experience.</p>
          </details>
          <details className="bg-gray-900 p-6 rounded-lg shadow-md">
            <summary className="text-lg font-semibold cursor-pointer">Can I delete my Ghost?</summary>
            <p className="mt-2 text-gray-400">Yes, you can delete or export your Ghost and all data anytime with a single click.</p>
          </details>
          <details className="bg-gray-900 p-6 rounded-lg shadow-md">
            <summary className="text-lg font-semibold cursor-pointer">What happens when someone dies?</summary>
            <p className="mt-2 text-gray-400">With the Legacy plan, the Ghost becomes accessible to assigned family or friends after verification.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center px-6">
          <p className="text-gray-400 mb-4">© 2025 Ghost AI — Your voice. Your thoughts. Forever.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Twitter</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Discord</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}