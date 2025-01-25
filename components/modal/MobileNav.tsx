 
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
 
import Navigation from "../ui/navigation";

interface MobileNavProps {
  children: React.ReactNode;
}

const MobileNav = ({ children }: MobileNavProps) => {
 
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-48 absolute right-0">
        <Navigation />
      </PopoverContent>
    </Popover>
  );
};

export default MobileNav;
