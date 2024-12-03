const translations = {
    en: {
        header: "I Want to Learn",
        languages: {
            en: "English",
            pt: "Portuguese",
            hi: "Hindi",
            ur: "Urdu",
            de: "German",
            fr: "French"
        }
    },
    pt: {
        header: "Eu Quero Aprender",
        languages: {
            en: "Inglês",
            pt: "Português",
            hi: "Hindi",
            ur: "Urdu",
            de: "Alemão",
            fr: "Francês"
        }
    },
    hi: {
        header: "मैं सीखना चाहता हूँ",
        languages: {
            en: "अंग्रेज़ी",
            pt: "पुर्तगाली",
            hi: "हिन्दी",
            ur: "उर्दू",
            de: "जर्मन",
            fr: "फ़्रांसीसी"
        }
    },
    ur: {
        header: "میں سیکھنا چاہتا ہوں",
        languages: {
            en: "انگریزی",
            pt: "پرتگالی",
            hi: "हिन्दी",
            ur: "اردو",
            de: "جرمن",
            fr: "فرانسیسی"
        }
    },
    de: {
        header: "Ich Möchte Lernen",
        languages: {
            en: "Englisch",
            pt: "Portugiesisch",
            hi: "Hindi",
            ur: "Urdu",
            de: "Deutsch",
            fr: "Französisch"
        }
    },
    fr: {
        header: "Je Veux Apprendre",
        languages: {
            en: "Anglais",
            pt: "Portugais",
            hi: "Hindi",
            ur: "Ourdou",
            de: "Allemand",
            fr: "Français"
        }
    }
};

function changeSiteLanguage() {
    const selectedLanguage = document.getElementById('siteLanguage').value;
    const cards = document.querySelectorAll('.language-card');
    
    cards.forEach(card => {
        if (card.dataset.lang === selectedLanguage) {
            card.style.display = 'none';
        } else {
            card.style.display = 'flex';
        }
    });

    // Change header text based on selected language
    document.getElementById('headerText').textContent = translations[selectedLanguage].header;

    // Change language names in the cards
    document.querySelectorAll('.language-card').forEach(card => {
        const lang = card.dataset.lang;
        card.querySelector('h3').textContent = translations[selectedLanguage].languages[lang];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changeSiteLanguage();
});
