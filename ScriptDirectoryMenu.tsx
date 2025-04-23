import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

type Script = {
  id: number;
  name: string;
  codeSnippet: string;
  fullCode: string;
  image?: string;
};

interface ScriptDirectoryMenuProps {
  scriptList: Script[];
}

export const ScriptDirectoryMenu: React.FC<ScriptDirectoryMenuProps> = ({ scriptList }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-primary text-primary-foreground py-2 px-6 rounded-md mb-6">
        Dead Rails 脚本目录
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-96 overflow-y-auto min-w-[300px]">
        {scriptList.map((script) => (
          <DropdownMenuSub key={script.id}>
            <DropdownMenuSubTrigger>{script.name}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="max-w-[400px]">
              <div className="mb-2">
                <div className="font-bold mb-1">简要代码：</div>
                <pre className="bg-gray-100 rounded p-2 text-xs whitespace-pre-wrap break-all mb-2">{script.codeSnippet}</pre>
                {script.fullCode && (
                  <>
                    <div className="font-bold mb-1">完整代码：</div>
                    <pre className="bg-gray-200 rounded p-2 text-xs whitespace-pre-wrap break-all">{script.fullCode}</pre>
                  </>
                )}
              </div>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
