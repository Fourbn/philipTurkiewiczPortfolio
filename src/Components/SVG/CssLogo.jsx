import React from 'react';
import styled from 'styled-components';

const SvgStyles = styled.svg`
	.a {
		fill: #264de4;
	}
	.b {
		fill: #2965f1;
	}
	.c {
		fill: #ebebeb;
	}
	.d {
		fill: none;
	}
	.e {
		fill: #fff;
	}
`;

const CssLogo = () => {
  return (
    <SvgStyles xmlns="http://www.w3.org/2000/svg" width="65" height="91.748" viewBox="0 0 65 91.748">
      <g transform="translate(-193.633 -276.362)">
        <g transform="translate(193.633 276.362)">
          <path className="a" d="M139.633,100.62l-5.922,66.338-26.618,7.379-26.545-7.369L74.633,100.62Z" transform="translate(-74.633 -82.589)" />
          <path className="b" d="M277.509,187.583l5.06-56.689H256v62.652Z" transform="translate(-223.5 -107.438)" />
          <path className="c" d="M150.31,268.217l.729,8.137h18.21v-8.137Z" transform="translate(-136.749 -220.154)" />
          <path className="c" d="M162.537,176.3h-20.4l.74,8.137h19.665Z" transform="translate(-130.037 -144.712)" />
          <path className="c" d="M174.255,353.727V345.26l-.036.009-9.063-2.447-.579-6.49h-8.169l1.14,12.777,16.669,4.627Z" transform="translate(-141.755 -276.064)" />
          <path className="d" d="M160,0h9.856V4.121h-5.734V8.243h5.734v4.121H160Z" transform="translate(-144.703)" />
          <path className="d" d="M226,0h9.856V3.584h-5.734V4.3h5.734v8.243H226V8.781h5.734V8.064H226Z" transform="translate(-198.876)" />
          <path className="d" d="M292,0h9.856V3.584h-5.734V4.3h5.734v8.243H292V8.781h5.734V8.064H292Z" transform="translate(-253.049)" />
          <path className="e" d="M265.863,200.912l-.945,10.553-9.076,2.45v8.466l16.682-4.623.122-1.375,1.912-21.423.2-2.185,1.469-16.47H255.843v8.137h11.466l-.74,8.333H255.843v8.137Z" transform="translate(-223.371 -144.712)" />
        </g>
      </g>
    </SvgStyles>
  );
};

export default CssLogo;
