// controllers/translationController.js
export const getTranslations = (req, res) => {
  // i18next middleware automatically loads the correct JSON based on `req.language`
  // Tum sirf namespace ko specify karke JSON return kar sakte ho
  const lng = req.language; // "en", "hi", etc.
  const ns = "dashboard";   // tumhara page namespace

  // i18next ka instance
  //console.log("Loading translations for", lng);
  //console.log(req.i18n.getResourceBundle(lng, ns));
  const i18nextInstance = req.i18n;

  i18nextInstance.loadLanguages(lng, () => {
    const translations = i18nextInstance.getResourceBundle(lng, ns);
    res.json(translations);
  });
};

