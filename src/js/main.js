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



