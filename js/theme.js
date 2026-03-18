const THEME_STORAGE_KEY = 'siteTheme';

const getSavedTheme = () => localStorage.getItem(THEME_STORAGE_KEY) || 'light';

const saveTheme = (theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
};

const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.textContent = theme === 'dark' ? 'Light' : 'Dark';
    }
};

const toggleTheme = () => {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    saveTheme(nextTheme);
};

const initTheme = () => {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
};

document.addEventListener('DOMContentLoaded', initTheme);
