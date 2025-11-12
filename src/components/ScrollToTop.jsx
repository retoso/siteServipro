import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente garante que a navegação para uma nova página sempre comece no topo.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // A cada mudança no 'pathname' (URL), a janela é rolada para as coordenadas (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // O efeito é re-executado toda vez que o pathname muda

  return null; // O componente em si não renderiza nenhum elemento visual
}

export default ScrollToTop;
