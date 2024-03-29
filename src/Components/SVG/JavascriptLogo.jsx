import React from 'react';
import styled from 'styled-components';

const SvgStyles = styled.svg`
	.a {
		fill: #ffd600;
	}
	.b {
		fill: #000001;
	}
`;

const JavascriptLogo = () => {
  return (
    <SvgStyles xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
      <g transform="translate(-6 -6)">
        <path className="a" d="M6,71V6H71V71Z" transform="translate(0 0)" />
        <path className="b" d="M40.981,41.765c1.249,2.029,2.607,3.974,5.483,3.974,2.416,0,3.683-1.2,3.683-2.862,0-1.988-1.311-2.694-3.969-3.851l-1.457-.621c-4.205-1.784-7-4.019-7-8.741,0-4.351,3.331-7.663,8.537-7.663,3.707,0,6.37,1.284,8.291,4.646l-4.539,2.9c-1-1.784-2.078-2.486-3.752-2.486a2.531,2.531,0,0,0-2.79,2.486c0,1.741,1.083,2.445,3.584,3.523l1.457.621c4.956,2.111,7.751,4.267,7.751,9.113,0,5.222-4.124,8.083-9.66,8.083a10.653,10.653,0,0,1-10.2-6.081Zm-20.919.148a4.931,4.931,0,0,0,4.3,2.894c1.91,0,3.01-.755,3.01-3.689V22h6.018V42.043c0,6.079-3.526,8.845-8.676,8.845a10.56,10.56,0,0,1-9.38-6.081Z" transform="translate(7.518 12.889)" />
      </g>
    </SvgStyles>
  );
};

export default JavascriptLogo;
