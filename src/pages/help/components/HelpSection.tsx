import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { HelpSectionType } from '../types';

export default function HelpSection({ title, questions }: HelpSectionType) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <h2 className="text-lg font-semibold p-4 border-b">{title}</h2>
      
      <div className="divide-y">
        {questions.map((question, index) => (
          <div key={index} className="p-4">
            <button
              onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="font-medium">{question.q}</span>
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openQuestion === index ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {openQuestion === index && (
              <p className="mt-3 text-gray-600 text-sm">{question.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}