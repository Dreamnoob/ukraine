var svgMapDataGPD = {
    data: {
        gdp: {
            name: 'GDP per capita',
            format: '{0} USD',
            thousandSeparator: ',',
            thresholdMax: 50000,
            thresholdMin: 1000
        },
        change: {
            name: 'Change to year before',
            format: '{0} %'
        },
        gdpAdjusted: {
            name: 'Purchasing Power Parity',
            format: '{0} USD',
            thousandSeparator: ',',
            thresholdMax: 50000,
            thresholdMin: 1000
        },
        changeAdjusted: {
            name: 'Change to year before',
            format: '{0} %'
        }
    },
    applyData: 'gdpAdjusted',
    values: {
        AF: { gdp: 587, change: 4.73, gdpAdjusted: 1958, changeAdjusted: 0.02 },
        link: 'https://cssscript.com',
        linkTarget: '_blank'
    }
};

const map = document.getElementById('svgMapExample');

if (map) {
    new svgMap({
        targetElementID: "svgMapExample",
        data: svgMapDataGPD,
        colorNoData: '',
        minZoom: 0.9,
        maxZoom: 3,
        initialZoom: 0.9,
    });
}

let viewport = document.querySelector(".svg-pan-zoom_viewport");

let text = `
    <svg class="empty__svg"  width="74" height="42" viewBox="0 0 74 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_4_9071)">
    </g>
    <defs>
    <filter id="filter0_d_4_9071" x="0.945435" y="0.0412598" width="72.4776" height="41.9098" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_9071"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_9071" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_4_9071" x1="53%" y1="0%" x2="50%" y2="100%" gradientUnits="objectBoundingBox">
    <stop offset="0.392336" stop-color="#005BBB"/>
    <stop offset="0.408687" stop-color="#FFD500"/>
    </linearGradient>
    </defs>
    </svg>
`;

$(text).appendTo(viewport);

