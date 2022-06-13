(function() {
    // Init const elements
    const chartTickerListDiv = document.getElementsByClassName('chart-ticker-list')[0];
    const runOneYearSelectorText = document.getElementsByClassName('run-one-year-selector')[0];
    const runOneYearButton = document.getElementsByClassName('run-one-year-button')[0];
    runOneYearButton.addEventListener('click', () => {
        playOneYear();
    })

    // Init data
    let defaultCapitalImgOffer = 150;
    const maxCapitalImgWidth = 1000;
    let vn30Data = {
        '2000': [
            {
                'ticker': 'AAA',
                'capital': 1000,
                'capitalImgWidth': 0
            },
            {
                'ticker': 'BBB',
                'capital': 5000,
                'capitalImgWidth': 0
            },
            {
                'ticker': 'CCC',
                'capital': 9000,
                'capitalImgWidth': 0
            }
        ],
        '2001': [
            {
                'ticker': 'AAA',
                'capital': 5000,
                'capitalImgWidth': 0
            },
            {
                'ticker': 'BBB',
                'capital': 4000,
                'capitalImgWidth': 0
            },
            {
                'ticker': 'CCC',
                'capital': 1000,
                'capitalImgWidth': 0
            }
        ],
        '2002': [
            {
                'ticker': 'AAA',
                'capital': 3000,
                'capitalImgWidth': 0
            },
            {
                'ticker': 'BBB',
                'capital': 8000,
                'capitalImgWidth': 0
            },
            {
                'ticker': 'CCC',
                'capital': 5000,
                'capitalImgWidth': 0
            }
        ]
    }

    function createDiv(className, innerHTML) {
        let divElement = document.createElement('DIV');
        divElement.setAttribute('class', className);
        if (innerHTML) {
            divElement.innerHTML = innerHTML;
        }
        return divElement;
    }

    function createTickerItem(tickerData) {
        // Create ticker item div
        let tickerItemDiv = createDiv('chart-ticker-item');

        // Create ticker item name div
        let tickerItemNameDiv = createDiv('chart-ticker-item-name', tickerData.ticker);

        // Create ticker item capital img div
        let tickerItemCapitalImgDiv = createDiv('chart-ticker-item-capital-img');
        tickerItemCapitalImgDiv.style.setProperty('width', tickerData.capitalImgWidth + 'px');

        // Create ticker item capital text div
        let tickerItemCapitalTextDiv = createDiv('chart-ticker-item-capital-text', tickerData.capital);

        // Construct ticker item div by append all children div
        tickerItemDiv.append(tickerItemNameDiv);
        tickerItemDiv.append(tickerItemCapitalImgDiv);
        tickerItemDiv.append(tickerItemCapitalTextDiv);
        return tickerItemDiv;
    }

    function calculateCapitalWidth(sortedTickerDataList) {
        const maxCapital = sortedTickerDataList[0].capital;
        for(let tickerData of sortedTickerDataList) {
            tickerData.capitalImgWidth = tickerData.capital / maxCapital * maxCapitalImgWidth;
        }
        return sortedTickerDataList;
    }

    function createTickerItemOfASpecificTime(tickerDataList) {
        // 1. Clear the chart ticker list
        chartTickerListDiv.innerHTML = '';
        // 2. Sort the data list
        tickerDataList.sort((item1, item2) => {
            return item1.capital > item2.capital ? -1 : item1.capital < item2.capital? 1 : 0;
        });
        // 3. Calculate capital width
        tickerDataList = calculateCapitalWidth(tickerDataList);
        // 4. Create ticker item div and append to the chart-ticker-list div
        for(const tickerData of tickerDataList) {
            const tickerItemDiv = createTickerItem(tickerData)
            chartTickerListDiv.append(tickerItemDiv);
        }
    }

    function playOneYear() {
        let selectedYear = runOneYearSelectorText.value;
        let specificYearTickerData = vn30Data[selectedYear];
        if(specificYearTickerData) {
            createTickerItemOfASpecificTime(specificYearTickerData);
        }
    }

    createTickerItemOfASpecificTime(vn30Data['2000']);
})()
