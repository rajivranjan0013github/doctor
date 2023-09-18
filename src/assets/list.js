import doctor from "./navbar_icons/doctor.png";
import treatment from "./navbar_icons/treatment.png";
import blog from "./navbar_icons/blogging.png";
import review from "./navbar_icons/reviews.png";
import contact from "./navbar_icons/contact-me.png";

export const links = [
  {
    name: "About Us",
    img: doctor,
    link: "urologist-in-bhagalpur",
  },
  {
    name: "Treatments",
    img: treatment,
    submenu: true,
    sublinks: [
      { name: "Kidney Stone Removal", link: "/Kidney%20Stone" },
      { name: "Endourology", link: "/Endourology" },
      { name: "Lithotripsy", link: "/Lithotripsy" },
      { name: "Andrology & Infertility", link: "/Andrology%20&%20Infertility" },
      { name: "Laparoscopic Urology", link: "/Laparoscopic%20Urology" },
      { name: "Urethral Stricture", link: "/Urethral%20Stricture" },
      { name: "Prostate", link: "/Prostate" },
      { name: "Bladder Cancer", link: "/Bladder%20Cancer" },
      { name: "Laser Urology", link: "/Laser%20Urology" },
      { name: "Reconstructive Urology", link: "/Reconstructive%20Urology" },
    ],
  },
  { name: "Blog", img: blog, link: "/urologist-blog" },
  {
    name: "review",
    img: review,
    link: `https://www.google.com/search?q=Dr+Rajan+Kumar+Sinha+urologist&sca_esv=557502889&rlz=1C1ONGR_enIN998IN998&sxsrf=AB5stBiDyI171j7KB1fBVrHxjh9F9mKY7A%3A1692223090463&ei=ckbdZMrzG9Od4-EP3I6MiA8&ved=0ahUKEwjK9L-hluKAAxXTzjgGHVwHA_EQ4dUDCA8&uact=5&oq=Dr+Rajan+Kumar+Sinha+urologist&gs_lp=Egxnd3Mtd2l6LXNlcnAiHkRyIFJhamFuIEt1bWFyIFNpbmhhIHVyb2xvZ2lzdDIFECEYoAEyBRAhGKABSOJAUABYwz1wAHgAkAEAmAHKAaABiA6qAQYwLjEwLjG4AQPIAQD4AQL4AQHCAhAQLhiABBgUGIcCGMcBGK8BwgIGEAAYFhgewgIfEC4YgAQYFBiHAhjHARivARiXBRjcBBjeBBjgBNgBAcICCxAuGIAEGMcBGK8BwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgQQIRgVwgIHECEYoAEYCuIDBBgAIEGIBgG6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x39f036209d394ebb:0xed9af541658ee7f5,1,,,,`,
  },
  { name: "Contact Us", img: contact, link: "contact-us" },
];
