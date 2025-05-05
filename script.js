let coins = 0;

function incrementCoins() {
    coins++;
    document.getElementById("coinCounter").innerText = coins;
}

document.getElementById("adButton").addEventListener("click", function() {
    alert("Смотрите рекламу для получения бонуса!");
    // Здесь можно добавить функционал для отображения рекламы.
});
