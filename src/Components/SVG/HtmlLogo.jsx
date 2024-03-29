import React from 'react';
import styled from 'styled-components';

const SvgStyles = styled.svg`
	.a {
		fill: none;
	}
	.b {
		fill: #e44d26;
	}
	.c {
		fill: #f16529;
	}
	.d {
		fill: #ebebeb;
	}
  .e {
    fill: #fff;
  }
`;

const HtmlLogo = () => {
  return (
    <SvgStyles xmlns="http://www.w3.org/2000/svg" width="65" height="91.731" viewBox="0 0 65 91.731">
      <g transform="translate(-74.6)">
        <path className="a" d="M108.4,0h4.121V4.085h3.8V0h4.121V12.362h-4.121V8.241h-3.762v4.121H108.4m17.486-8.241h-3.637V0h11.413V4.121h-3.655v8.241h-4.121M135.471,0h4.318l2.652,4.354L145.092,0h4.318V12.362h-4.121V6.235L142.4,10.678,139.52,6.235v6.127h-4.049M151.453,0h4.121V8.277h5.841v4.085h-9.961" transform="translate(-27.744)" />
        <path className="b" d="M80.512,166.962,74.6,100.6h65l-5.912,66.326-26.641,7.381" transform="translate(0 -82.576)" />
        <path className="c" d="M256,193.617V131h26.57l-5.07,56.615" transform="translate(-148.9 -107.53)" />
        <path className="d" d="M142,176.3h20.424v8.134h-11.5l.752,8.331h10.75v8.116h-18.2m.358,4.085h8.17l.573,6.5,9.1,2.437V222.4l-16.7-4.658" transform="translate(-55.324 -144.714)" />
        <path className="e" d="M276.189,176.3H255.8v8.134h19.636m-.735,8.331H255.8V200.9h10.033l-.95,10.571-9.084,2.437v8.456l16.662-4.622" transform="translate(-148.736 -144.714)" />
      </g>
    </SvgStyles>
  );
};

export default HtmlLogo;
