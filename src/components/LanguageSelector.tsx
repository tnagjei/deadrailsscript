
"use client";

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const LanguageSelector = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    // Implement language change logic here (e.g., using i18n library)
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={language}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh">Chinese</SelectItem>
        <SelectItem value="ja">Japanese</SelectItem>
        <SelectItem value="ko">Korean</SelectItem>
        <SelectItem value="es">Spanish</SelectItem>
      </SelectContent>
    </Select>
  );
};
