document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;

        if (!amount || amount <= 0) {
            result.textContent = "Please enter a valid amount!";
            return;
        }

        // استدعاء API لتحويل العملات (API مجانية وهمية)
        const apiKey = 'YOUR_API_KEY';
        const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                const convertedAmount = (amount * rate).toFixed(2);
                result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
                result.textContent = "Error fetching exchange rates. Try again later!";
            });
    });
});
