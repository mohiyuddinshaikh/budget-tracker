import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface BottomSheetProps {
  open?: boolean;
  title?: string;
  triggerText?: string;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  title,
  triggerText = "Open Sheet",
  children,
}) => {
  return (
    <Sheet open={open}>
       <SheetTrigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {triggerText}
        </button>
      </SheetTrigger>
      <SheetContent className="p-4">
          <SheetHeader>
            {title && <SheetTitle>{title}</SheetTitle>}
          </SheetHeader>
        <div className="mt-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default BottomSheet;
