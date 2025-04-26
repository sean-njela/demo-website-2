
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paleblue p-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-5xl font-bold text-navy mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Ups! Strona której szukasz nie istnieje.
        </p>
        <Button asChild className="bg-navy hover:bg-navy-light">
          <Link to="/">Wróć do Strony Głównej</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
