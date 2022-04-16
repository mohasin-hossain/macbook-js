// Calculate Total
function updateTotal() {
    const bestPrice = parseInt(document.getElementById('best_price').innerText);
    const memoryCost = parseInt(document.getElementById('memory_cost').innerText);
    const storageCost = parseInt(document.getElementById('storage_cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery_cost').innerText);
    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('total').innerText = totalPrice;
    document.getElementById('final_total').innerText = totalPrice;
}

// Update Feature Price
function updateFeaturePrice(featureID, cost) {
    const featureField = document.getElementById(featureID);
    featureField.innerText = cost;
    updateTotal()
}

// Event Handlers
document.getElementById("memory_option-1").addEventListener('click', () => {
    updateFeaturePrice('memory_cost', 0);
})
document.getElementById("memory_option-2").addEventListener('click', () => {
    updateFeaturePrice('memory_cost', 100);
})
document.getElementById("storage_option-1").addEventListener('click', () => {
    updateFeaturePrice('storage_cost', 0);
})
document.getElementById("storage_option-2").addEventListener('click', () => {
    updateFeaturePrice('storage_cost', 100);
})
document.getElementById("storage_option-3").addEventListener('click', () => {
    updateFeaturePrice('storage_cost', 180);
})
document.getElementById("delivery_option-1").addEventListener('click', () => {
    updateFeaturePrice('delivery_cost', 0);
})
document.getElementById("delivery_option-2").addEventListener('click', () => {
    updateFeaturePrice('delivery_cost', 20);
})

// Apply Promo code
document.getElementById('promo_btn').addEventListener('click', () => {
    const totalPrice = parseInt(document.getElementById('total').innerText);
    const promoFieldValue = document.getElementById('promo_field').value;

    if(promoFieldValue.toLowerCase() == 'student') {
        const newPrice = totalPrice - (totalPrice * 0.2);
        document.getElementById('total').innerText = newPrice;
        document.getElementById('final_total').innerText = newPrice;
        document.getElementById('promo_btn').setAttribute('disabled', true);
        document.getElementById('promo').style.display = 'none';
        document.getElementById('promo_field').value = "";
    } else {
        document.getElementById('promo').innerText = "Please insert a Valid promo code";
        document.getElementById('promo_field').value = "";
    }
})
