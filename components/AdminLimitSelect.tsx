'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface AdminLimitSelectProps {
  defaultValue: number;
  options: number[];
}

export default function AdminLimitSelect({ defaultValue, options }: AdminLimitSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <input type="hidden" name="limit" value={selected} />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-20 items-center justify-between rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#091e44] transition-all text-left"
      >
        <span>{selected}</span>
        <ChevronDown size={14} className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-1 z-50 left-0 right-0 bg-white border border-black/10 rounded-lg shadow-xl overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm text-black transition-colors ${
                selected === opt ? 'bg-[#091e44]/10 font-semibold' : 'hover:bg-[#091e44]/5'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
