import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "react-responsive";
import { mobileWidth } from "@/constants/mediaQuery";

interface BottomSheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  triggerText: string;
  triggerIcon?: React.ReactNode;
  children: React.ReactNode;
  isShow?: boolean;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  onOpenChange,
  title,
  triggerText,
  triggerIcon,
  children,
  isShow = true,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${mobileWidth})` });

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {isShow && ( 
        <SheetTrigger asChild>
          <Button className="flex items-center gap-2">
            {triggerIcon}
            <span>{triggerText}</span>
          </Button>
        </SheetTrigger>
      )}

      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className={`p-4 transition-all duration-300 ${
          isMobile ? "h-[70vh] rounded-t-2xl" : "w-[400px]"
        }`}
      >
        <SheetHeader>
          {title && <SheetTitle className="text-left">{title}</SheetTitle>}
        </SheetHeader>
        <div className="mt-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default BottomSheet;
