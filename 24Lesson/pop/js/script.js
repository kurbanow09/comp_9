const tabs = document.querySelectorAll('.tab-link');
const tabPanels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const selectedTab = tab;
        const selectedTabId = selectedTab.dataset.tab;
        tabPanels.forEach(p => p.style.display = 'none')

        const matchingPanel = document.querySelector(`.tab-panel[data-tab="${selectedTabId}"]`);
        if (matchingPanel) {
            matchingPanel.style.display = 'flex';
            document.body.style.overflow = 'hidden';

        }
        const closes = document.getElementsByClassName('close-link')

        for (const close of closes) {
            close.addEventListener('click', function () {
                matchingPanel.style.display = 'none';
                document.body.style.overflow = 'auto';
            })
        }
    });
});