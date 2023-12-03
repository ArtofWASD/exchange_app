interface getMinimalExchangeAmountProps {
  ticker: string;
  network: string;
}

export const getListOfAvailableCurrencies = async () => {
  const data = await fetch(
    "https://api.changenow.io/v2/exchange/currencies?active=true&flow=standard",
    {
      headers: {
        "Access-Control-Allow-Headers":
          "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd",
      },
    }
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  });
  return data;
};

export const getMinimalExchangeAmount = async (
  firstCoin: getMinimalExchangeAmountProps,
  secondCoin: getMinimalExchangeAmountProps
) => {
  const data = await fetch(
    `https://api.changenow.io/v2/exchange/range?fromCurrency=${firstCoin.ticker}&fromNetwork=${firstCoin.network}&toCurrency=${secondCoin.ticker}&toNetwork=${secondCoin.network}`,
    {
      headers: {
        "X-CHANGENOW-API-KEY":
          "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd",
      },
    }
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  });
  return data;
};

export const getEstimatedExchangeAmount = async (
  firstCoin: getMinimalExchangeAmountProps,
  secondCoin: getMinimalExchangeAmountProps
) => {
  const data = await fetch(
    `https://api.changenow.io/v2/exchange/estimated-amount?fromCurrency=${firstCoin.ticker}&toCurrency=${secondCoin.ticker}&fromAmount=0.1&toAmount=10000&fromNetwork=${firstCoin.network}&toNetwork=${secondCoin.network}&flow=fixed-rate&type=&useRateId=true`,
    {
      headers: {
        "X-CHANGENOW-API-KEY":
          "0eb24a19932e7c1a3d7c3473375cb60fb36e83ca83137243729fbbc867184234",
      },
    }
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  }).catch(error => console.log('error', error));
  return data;
};
