import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // CSS ka smooth scroll temporarily hata do
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    // ab turant top pe jump karega, animate nahi hoga
    window.scrollTo(0, 0);

    // wapas smooth scroll on kar do (baaki jagah scroll-behavior:smooth kaam karta rahe)
    html.style.scrollBehavior = previousBehavior;
  }, [pathname]);

  return null;
};

export default ScrollToTop;