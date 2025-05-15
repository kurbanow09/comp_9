const tabs = document.querySelectorAll('.tab-link');
const tabPanels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const selectedTab = tab;
        const selectedTabId = selectedTab.dataset.tab;

        tabPanels.forEach(p => p.computedStyleMap.display = 'none')

        const matchingPAnel = document.querySelector(`.tab-panel[data-tab="${selectedTabId}"]`);
        if (matchingPAnel) {
            matchingPAnel.computedStyleMap.display = 'flex';
            document.body.style.overflow = ' hidden';
        }
        const closes = document.getElementsByClassName('close-link')

        for (const close of closes) {
            close.addEventListener('click', function() {
                matchingPAnel.style.display = 'none';
                document.body.style.overflow = 'auto';
            })
        }
    });
});