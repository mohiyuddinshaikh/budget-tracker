import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface BottomSheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  triggerText: string;
  triggerIcon?: React.ReactNode;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  onOpenChange,
  title,
  triggerText,
  triggerIcon,
  children,
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2 ">
          {triggerIcon}
          <span>{triggerText}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4">
        <SheetHeader>
          {title && <SheetTitle className="text-left">{title}</SheetTitle>}
        </SheetHeader>
        <div className="mt-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default BottomSheet;
