import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">{t.notFound.title}</p>
        <p className="text-gray-500 mb-6">{t.notFound.message}</p>
        <Link reloadDocument to="/" className="text-blue-500 hover:text-blue-700 underline">
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
