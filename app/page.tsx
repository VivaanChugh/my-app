export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Enhanced header with better typography */}
        <header className="mb-20 text-center">
          <div className="inline-block">
            <h1 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">Vivaan Chugh</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-slate-600 font-medium">Computer Engineering @ UWaterloo</p>
            <p className="text-slate-500 mt-2">I love building projects, learning new technologies, and solving real-world problems.</p>
          </div>
        </header>

        {/* Enhanced intro with better visual treatment */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                Hey there!
                <span className="text-2xl">👋</span>
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  I'm a Computer Engineering student at the University of Waterloo with a passion for software development and emerging technologies. My experience spans full-stack development, machine learning, and robotics, with internships at leading companies like SBI Canada Bank and KnovaOne.
                </p>
                <p>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced work experience with timeline feel */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">What I've been up to</h2>

          <div className="space-y-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Data Engineering Intern</h3>
                  <p className="text-blue-600 font-semibold mb-2">Royal Bank of Canada • Toronto</p>
                </div>
                <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                  Jan 2025 - Apr 2025
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Incoming Winter 2026
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">C#</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">SQL Server</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">Python</span>
              </div>
            </div>



          <div className="space-y-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Software Engineering Intern</h3>
                  <p className="text-blue-600 font-semibold mb-2">State Bank of India (Canada) • Toronto</p>
                </div>
                <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                  May 2025 - Aug 2025
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Built an HR automation tool that cut log processing time by 60%. Also developed a DNN module for server log analysis - saved the team 8 hours of manual work per
                week.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">C#</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">SQL Server</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">Python</span>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Software Engineering Intern</h3>
                  <p className="text-purple-600 font-semibold mb-2">KnovaOne • Remote (Florida)</p>
                </div>
                <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                  May 2025 - Aug 2025
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Created a document parsing pipeline with OCR magic (Tesseract + easyOCR). Also built a full-stack PDF
                platform for merging, compressing, and redacting documents. 
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium">Python</span>
                <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium">FastAPI</span>
                <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium">React</span>
                <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium">MongoDB</span>
              </div>
            </div>

            
          </div>
        </section>

        {/* Enhanced projects with better grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Stuff I've built</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🏋️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI Fitness Tracker</h3>
              <p className="text-slate-600 text-sm mb-3 font-medium">Python • PyQt • OpenCV • Mediapipe</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Got tired of manually counting reps at the gym, so I built an app that uses your webcam to count them
                for you. Uses pose estimation to track joint angles.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Findr: Hackathon Matchmaking</h3>
              <p className="text-slate-600 text-sm mb-3 font-medium">FastAPI • React • MongoDB • Gemini AI</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Ever been to a hackathon and struggled to find teammates? This platform matches participants based on
                skills and interests. Built an AI resume parser too.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Digit Classifier CNN</h3>
              <p className="text-slate-600 text-sm mb-3 font-medium">Python • PyTorch • TensorFlow</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Classic MNIST digit classification, but I went deep into optimizing the architecture. Experimented with
                different layer configurations until I got the accuracy I wanted.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced skills section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Tech I work with</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Languages</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Python, C/C++, JavaScript, TypeScript, Java, SQL
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⚛️</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Frameworks</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  React, Next.js, FastAPI, Flask, PyTorch, TensorFlow
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Tools</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  AWS, Docker, Git, MongoDB, PostgreSQL, SolidWorks
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced contact section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Let's chat</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-slate-200/50">
            <p className="text-slate-700 mb-6 text-center text-lg">
              Always down to talk about tech, projects, or opportunities. Hit me up if you want to collaborate or just
              geek out about AI!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:vchugh@uwaterloo.ca"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-slate-700 hover:text-blue-600 font-medium"
              >
                <span>📧</span>
                vchugh@uwaterloo.ca
              </a>
              <a
                href="https://linkedin.com/in/vivaan-chugh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-slate-700 hover:text-blue-600 font-medium"
              >
                <span>💼</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/VivaanChugh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-slate-700 hover:text-blue-600 font-medium"
              >
                <span>🐙</span>
                GitHub
              </a>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm text-slate-700 font-medium">
                <span>📱</span>
                647-860-3579
              </span>
            </div>
          </div>
        </section>

        {/* Simple footer */}
        <footer className="text-center">
          <p className="text-sm text-slate-500">Built with Next.js • Last updated: January 2025</p>
        </footer>
      </div>
    </main>
  )
}
