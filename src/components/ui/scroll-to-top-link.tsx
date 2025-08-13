import { Link, LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollToTopLink = ({ children, className, ...props }: ScrollToTopLinkProps) => {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <Link 
      {...props} 
      className={cn(className)} 
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default ScrollToTopLink;