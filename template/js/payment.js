document.querySelector('.refresh-btn').addEventListener('click', () => {
    // Simulate refresh with loading state
    const btn = document.querySelector('.refresh-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '⟳ Refreshing...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Payment data refreshed!');
    }, 1500);
});

// Action buttons functionality
document.querySelectorAll('.actions-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        alert('Action menu would open here');
    });
});