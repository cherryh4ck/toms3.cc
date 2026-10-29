// fix para gmod pq el browser es una mierda
const title = document.getElementById("toms3-title");
const url = window.location;
const params = new URLSearchParams(url.search);
const faq_href = document.getElementById("faq-href");

if (params.has("no-title")) {
    title.style.display = "none";
}

if (faq_href) {
    faq_href.href = "faq?no-title";
}
