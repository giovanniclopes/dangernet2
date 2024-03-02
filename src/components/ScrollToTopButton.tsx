import { useState, useEffect } from "react";
import { CaretUp } from "phosphor-react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {showButton && (
        <div className="fixed z-50 bottom-2 right-2">
          <button
            className="z-50 inline-flex items-center p-3 transition-opacity bg-black border-2 rounded-full shadow-sm opacity-100 border-product-green bg-opacity-90 focus:ring-product-green focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={handleScrollToTop}
          >
            <CaretUp className="text-product-green" width={36} height={36} />
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollToTopButton;
