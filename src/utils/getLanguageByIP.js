export async function getLanguageByIP() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const countryCode = data.country_code;

    let lang;
    switch (countryCode) {
      case "ES":
        lang = "SPANISH";
        break;
      case "FR":
        lang = "FRENCH";
        break;
      default:
        lang = "ENGLISH";
        break;
    }

    localStorage.setItem("lang", lang);
    return lang;
  } catch (error) {
    console.error("GeoIP failed:", error);
    localStorage.setItem("lang", "ENGLISH");
    return "ENGLISH";
  }
}
