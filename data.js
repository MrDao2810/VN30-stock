
let vn100 = 'AAA,ACB,AGG,ANV,APH,ASM,BID,BMI,BMP,BVH,BWE,CII,CMG,CRE,CTD,CTG,DBC,DCM,DGC,DGW,DHC,DIG,DPM,DRC,DXG,DXS,EIB,FIT,FLC,FPT,GAS,GEG,GEX,GMD,GTN,GVR,HBC,HCM,HDB,HDG,HNG,HPG,HPX,HSG,HT1,IMP,ITA,KBC,KDC,KDH,KOS,LPB,MBB,MSB,MSN,MWG,NLG,NT2,NVL,OCB,PC1,PDR,PHR,PLX,PNJ,POW,PPC,PTB,PVD,PVT,REE,SAB,SAM,SBT,SCR,SCS,SJS,SSB,SSI,STB,SZC,TCB,TCH,TMS,TPB,VCB,VCG,VCI,VGC,VHC,VHM,VIB,VIC,VJC,VND,VNM,VPB,VPI,VRE,VSH';
vn100 = vn100.split(',');
let vn30Data = {}

function fakeData() {
    const startIndex = 2000;
    for (let i = 0; i < 100; i++) {
        const randomTickers = getRandom30Tickers();
        const tickerDatas = [];
        for (let i = 0; i < 30 ; i++) {
            const tickerData = {
                "ticker": randomTickers[i],
                "capital": getRandInteger(300, 5000)
            }
            tickerDatas.push(tickerData);
        }
    vn30Data[startIndex + i + ''] = tickerDatas;
    }
    return vn30Data;
}

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getRandom30Tickers() {
    const randomIndexes = [];
    const randomTickers = [];
    for (let i = 0; i < 30; i++) {
      const randomIndex = getRandInteger(0, 100);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
        randomTickers.push(vn100[randomIndex]);
      } else {
          i--;
      }
    }
    return randomTickers;
  }

  console.log('data', fakeData());