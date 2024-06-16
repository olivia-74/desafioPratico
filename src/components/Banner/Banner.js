import React from 'react';
import { ContainerImagem, CardContent } from './styledBanner';

function Banner({ TopBanner, PaddingBanner, children }) {
  const ajustes = { // ajuste do top por causa do header
    top: TopBanner ? `${TopBanner}vh` : '0',
    paddingTop: PaddingBanner ? `${PaddingBanner}vh` : '0', 
  };
  

  return (
    <ContainerImagem style={ajustes}>
      <CardContent>
        {children} {/* conteudo no app */}
      </CardContent>
    </ContainerImagem>
  );
}

export default Banner;
