
import React from 'react';
import { Button } from "@/components/ui/button"
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <Button onClick={handleCopyClick}>
      <Copy className="mr-2 h-4 w-4" />
      Copy Code
    </Button>
  );
};

export default CopyButton;
