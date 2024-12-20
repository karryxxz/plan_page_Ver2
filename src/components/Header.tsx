import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900 flex items-center gap-1">
              <span className="text-[#00B779] text-3xl">Pt</span>
              <span>engine</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                デモ
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                プロダクト
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              導入事例
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              料金
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                リソース
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              お問い合わせ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
            >
              Ptengineを起動する
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}