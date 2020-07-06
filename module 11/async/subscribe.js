const showPopupKey = "showSubscribePopup";

const subscribeUser = () => {
    const savedDecision = localStorage.getItem(showPopupKey);
    if (savedDecision !== "0") {
        setTimeout(() => {
            const decision = confirm("Не хотите ли вы подписаться?");
            if (decision) {
                // хочу подписаться
                localStorage.setItem(showPopupKey, "0");
            } else {
                // снова показать попап
                subscribeUser();
            }
        }, 2000);
    }
};

subscribeUser();