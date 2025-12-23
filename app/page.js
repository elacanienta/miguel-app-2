'use client';

import { useState } from 'react';
import Avatar from './components/Avatar';
import QRCode from './components/QRCode';
import DeploymentSelector from './components/DeploymentSelector';

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(null);

  const playVideo = (videoName) => {
    setCurrentVideo(`/me/${videoName}.mp4`);
  };

  const handleVideoEnd = () => {
    setCurrentVideo(null);
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#1f1f1f]">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
              M
            </div>
            <span className="text-lg font-medium text-gray-800">Miguel Lacanienta</span>
          </div>
          <DeploymentSelector />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Avatar Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative">
          <QRCode />
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <div className="aspect-[2/3] rounded-xl overflow-hidden">
                <Avatar
                  isSpeaking={false}
                  videoToPlay={currentVideo}
                  onVideoEnd={handleVideoEnd}
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Miguel Lacanienta</h2>
                <p className="text-gray-600 mt-1">BS Computer Science • AI Specialization • Mapúa University</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => playVideo('Objective')}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  Objective
                </button>
                <button
                  onClick={() => playVideo('Skills')}
                  className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-all duration-200 cursor-pointer">
                  Skills
                </button>
                <button
                  onClick={() => playVideo('Certifications')}
                  className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-200 cursor-pointer">
                  Certifications
                </button>
                <button
                  onClick={() => playVideo('AppliedSkills')}
                  className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium border border-orange-200 hover:bg-orange-100 hover:border-orange-300 transition-all duration-200 cursor-pointer">
                  Applied Skills
                </button>
                <button
                  onClick={() => playVideo('Projects')}
                  className="px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm font-medium border border-pink-200 hover:bg-pink-100 hover:border-pink-300 transition-all duration-200 cursor-pointer">
                  Projects
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Chat Available Banner */}
        <div className="mt-8 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Want to chat with me?</h3>
              </div>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                This is a static portfolio site. For an interactive AI-powered chat experience, visit one of our mirror sites:
              </p>
              <p className="text-xs text-gray-500 max-w-2xl mx-auto italic">
                Note: Some sites may be temporarily unavailable due to free tier limitations or usage caps.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {/* Vercel Card */}
                <a
                  href="https://miguel-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <h4 className="text-base font-semibold text-gray-900">Vercel</h4>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Llama 3.3 70B</span> <span className="text-gray-400">/ Groq</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Gemma 3 27B</span> <span className="text-gray-400">/ Google</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Mistral Large</span> <span className="text-gray-400">/ Mistral AI</span></p>
                    </div>
                  </div>
                </a>

                {/* Netlify Card */}
                <a
                  href="https://miguel-ai.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-4 border border-teal-200 hover:border-teal-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <h4 className="text-base font-semibold text-teal-700">Netlify</h4>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Llama 3.3 70B</span> <span className="text-gray-400">/ Groq</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Gemma 3 27B</span> <span className="text-gray-400">/ Google</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Mistral Large</span> <span className="text-gray-400">/ Mistral AI</span></p>
                    </div>
                  </div>
                </a>

                {/* Render Card */}
                <a
                  href="https://miguel-ai.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <h4 className="text-base font-semibold text-purple-700">Render</h4>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Llama 3.3 70B</span> <span className="text-gray-400">/ Groq</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Gemma 3 27B</span> <span className="text-gray-400">/ Google</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Mistral Large</span> <span className="text-gray-400">/ Mistral AI</span></p>
                    </div>
                  </div>
                </a>

                {/* Cloudflare Card */}
                <a
                  href="https://miguel-ai.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-4 border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <h4 className="text-base font-semibold text-orange-700">Cloudflare</h4>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Mistral Large</span> <span className="text-gray-400">/ Mistral AI</span></p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
