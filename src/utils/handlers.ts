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
