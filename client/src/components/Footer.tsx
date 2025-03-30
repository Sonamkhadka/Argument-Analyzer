import React from "react";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-gray-900">
              Logos Argument Analyzer
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Analyze arguments using AI for logical structure and fallacies
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="text-sm text-gray-500">
              Powered by OpenAI, DeepSeek, and Google Gemini
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/yourusername/logos-argument-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="text-center text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Logos Argument Analyzer. Open source project for
              critical thinking and rhetorical analysis.
            </p>
            <p className="mt-1">
              This is an educational tool and not a substitute for professional logical analysis.
            </p>
            <p className="mt-1">
              <span className="font-medium">Privacy-focused:</span> All data is stored locally in your browser - we don't store any user information on servers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}