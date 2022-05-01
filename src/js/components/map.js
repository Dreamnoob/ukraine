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
        maxZoom: 10,
        initialZoom: 0.9,
    });
}

let viewport = document.querySelector(".svg-pan-zoom_viewport");
let viewport2 = document.querySelector(".svgMap-map-wrapper");

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

let text2 = `
<svg width="1398" height="651" viewBox="0 0 1398 651" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M1325 181L1325.52 177.937L1337.29 165.091H1327.66L1328.42 160.636H1345.05L1344.53 163.699L1332.76 176.545H1342.38L1341.62 181H1325Z" fill="white"/>
<path d="M1352.25 171.415V166.96H1366.96V171.415H1352.25ZM1352.25 178.494V174.04H1366.96V178.494H1352.25Z" fill="white"/>
</g>
<g clip-path="url(#clip0_276_9)">
<path opacity="0.8" d="M1388.76 164.393V168.835H1397.26V181.267H1393.2V172.888H1388.76V181.659H1375.6V177.606H1384.71V172.888H1375.94V160.637H1379.99V168.836H1384.71V160.341H1397.6V164.393H1388.76Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_276_9">
<rect width="22" height="22" fill="white" transform="translate(1375.6 160)"/>
</clipPath>
</defs>
</svg>
`;


$(text).appendTo(viewport);
$(text2).appendTo(viewport);

function toggleLegend() {
    const btn = document.querySelector(".map__legend-btn");
    const overley = document.querySelector('.overley');
    const legend = document.querySelector('.map__legend');

    if (btn) {
        btn.addEventListener('click', () => {
            legend.classList.add("active");
            overley.classList.add("active");
            hideScroll();
            document.addEventListener('click', clickPast);
        });

        function closeLegend() {
            legend.classList.remove("active");
            overley.classList.remove("active");
            showScroll();
            document.removeEventListener('click', clickPast);
        }

        function clickPast(e) {
            let withinBoundaries = e.composedPath().includes(legend);
            let withinBoundaries2 = e.composedPath().includes(btn);
            if (!withinBoundaries && !withinBoundaries2) {
                closeLegend();
            }
        }
    }
}

toggleLegend();

function initFilterTabs() {
    const filters = document.querySelectorAll(".map__filter-item");
    const map = document.querySelector(".svgMap-map-image");
    let tabClass;

    if (filters.length != 0) {
        filters.forEach(function (item) {
            item.addEventListener('click', function () {
                map.classList.remove(tabClass);

                filters.forEach(function (item) {
                    item.classList.remove('active');
                });

                item.classList.add("active");
                tabClass = item.getAttribute("data-id");
                map.classList.add(tabClass);
                console.log(tabClass);
            });
        });
    }
}

initFilterTabs();