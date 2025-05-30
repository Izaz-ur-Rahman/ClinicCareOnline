(function() {
	"use strict";

    window.onload = function(){

        // Check if elements with the class "search-toggler" exist
        const searchTogglers = document.querySelectorAll(".search-toggler");
            if (searchTogglers.length > 0) {
            // Attach a click event listener to each "search-toggler" element
            searchTogglers.forEach((searchToggler) => {
                searchToggler.addEventListener("click", function (e) {
                e.preventDefault();

                // Toggle the class "active" on elements with the class "search-popup"
                const searchPopup = document.querySelector(".search-popup");
                if (searchPopup) {
                    searchPopup.classList.toggle("active");
                }

                // Remove the class "expanded" from elements with the class "mobile-nav__wrapper"
                const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");
                if (mobileNavWrapper) {
                    mobileNavWrapper.classList.remove("expanded");
                }
                });
            });
        }

        // Back to Top
        const getId = document.getElementById("back-to-top");
        if (getId) {
            const topbutton = document.getElementById("back-to-top");
            topbutton.onclick = function (e) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
            window.onscroll = function () {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    topbutton.style.opacity = "1";
                } else {
                    topbutton.style.opacity = "0";
                }
            };
        }

        // Preloader
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            getPreloaderId.style.display = 'none';
        }

        // Counter Js
        try {
            if ("IntersectionObserver" in window) {
                let counterObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                        let counter = entry.target;
                        let target = parseInt(counter.innerText);
                        let step = target / 200;
                        let current = 0;
                        let timer = setInterval(function () {
                            current += step;
                            counter.innerText = Math.floor(current);
                            if (parseInt(counter.innerText) >= target) {
                            clearInterval(timer);
                            }
                        }, 10);
                        counterObserver.unobserve(counter);
                        }
                    });
                });

                let counters = document.querySelectorAll(".counter");
                    counters.forEach(function (counter) {
                    counterObserver.observe(counter);
                });
            }
        } catch {}

        // Plus Minus JS
        try {
            var resultEl = document.querySelector(".resultSet"),
            plusMinusWidgets = document.querySelectorAll(".add-to-cart-counter");
                for (var i = 0; i < plusMinusWidgets.length; i++) {
                    plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
                    plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
                    plusMinusWidgets[i].querySelector(".count").addEventListener("change", changeHandler);
                }
                function clickHandler(event) {
                    var countEl = event.target.parentNode.querySelector(".count");
                    if (event.target.className.match(/\bminusBtn\b/)) {
                        countEl.value = Number(countEl.value) - 1;
                    }
                    else if (event.target.className.match(/\bplusBtn\b/)) {
                        countEl.value = Number(countEl.value) + 1;
                    }
                    triggerEvent(countEl, "change");
                };
                function changeHandler(event) {
                resultEl.value = 0;
                for (var i = 0; i < plusMinusWidgets.length; i++) {
                    resultEl.value = Number(resultEl.value) + Number(plusMinusWidgets[i].querySelector('.count').value);
                }
            };
            function triggerEvent(el, type){
                if ('createEvent' in document) {
                    var e = document.createEvent('HTMLEvents');
                    e.initEvent(type, false, true);
                    el.dispatchEvent(e);
                }
                else {
                    var e = document.createEventObject();
                    e.eventType = type;
                    el.fireEvent('on'+e.eventType, e);
                }
            }
        } catch {}

        // Background Image simpleParallax
        const simpleParallax = (elem, modifier) => {
            let paras = document.getElementsByClassName(elem);
            for (let i = 0; i < paras.length; i++) {
                paras[i].setAttribute(
                    "style",
                    "background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;"
                );
            }
            const sp = () => {
                for (let i = 0; i < paras.length; i++) {
                    let x = paras[i].getBoundingClientRect().top / modifier;
                    let y = Math.round(x * 100) / 100;
                    paras[i].style.backgroundPosition = "center " + y + "px";
                }
                requestAnimationFrame(sp);
            };
            requestAnimationFrame(sp);
        };
        simpleParallax("bgImageParallax", 9);
    };

    // Dental Clinic Slider JS
    var swiper = new Swiper(".dental-clinic-slider", {
        effect: "fade",
        loop: true,
        grabCursor: true,
        spaceBetween: 0,
        speed: 1200,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dental-clinic-pagination",
            clickable: true,
        },
    });

    // Doctors Swiper JS
    var SwiperTraveler = new Swiper(".doctors-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".doctors-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },
        }
    });

    // Review Swiper JS
    var SwiperTraveler = new Swiper(".review-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
        }
    });

    // Review Wrap Swiper JS
    var SwiperTraveler = new Swiper(".review-wrap-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".review-wrap-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });

    // Real Results Swiper JS
    var SwiperTraveler = new Swiper(".real-results-slider", {
        loop: true,
        spaceBetween: 65,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".real-results-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            },
        }
    });

    // Real Results Wrap Swiper JS
    var swiper = new Swiper(".real-results-wrap-slider", {
        effect: "cards",
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 25,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".real-results-pagination",
            clickable: true,
        },
    });

    // Real Results Card Slider JS
    var SwiperTraveler = new Swiper(".real-results-card-slider", {
        loop: true,
        spaceBetween: 25,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });

    // Dental Treatment Review Swiper JS
    var swiper = new Swiper(".dental-treatment-review-slider", {
        effect: "fade",
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dental-treatment-review-pagination",
            clickable: true,
        },
    });

    // Testimonials Swiper JS
    var swiper = new Swiper(".testimonials-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".testimonials-pagination",
            clickable: true,
        },
    });

    // Hover JS
    try {
        var elements = document.querySelectorAll("[id^='services-element']");
            elements.forEach(function(element) {
            element.addEventListener("mouseover", function() {
                elements.forEach(function(el) {
                el.classList.remove("active");
                });
                element.classList.add("active");
            });
        });

    } catch (err) {}

    // scrollCue JS
    scrollCue.init();

    // Feather Icon JS
    feather.replace();

})();

// Header Sticky
window.addEventListener('scroll', event => {
    const height = 150;
    const { scrollTop } = event.target.scrollingElement;
    document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
});

// // Hide Show JS With Menu
// try {
//     function toggleElement() {
//         var element = document.getElementById('toggleElement');
//         element.classList.toggle('menu-show');
//     }
// } catch {}

// Show menu by default on desktop
document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('toggleElement');
    if (window.innerWidth >= 1200) { // XL breakpoint (Bootstrap)
        element.classList.add('menu-show');
    }
});

// Toggle function for smaller screens
function toggleElement() {
    var element = document.getElementById('toggleElement');
    if (window.innerWidth < 1200) {
        element.classList.toggle('menu-show');
    }
}

// arabic and english toggling js code is here
 const translations = {
    en: {
        home: "Home",
        longevity: "Longevity",
        diagnosticTesting: "Diagnostic Testing",
        wellnessPrograms: "Wellness Programs",
        aesthetic: "Aesthetic",
        facialAesthetics: "Facial Aesthetics",
        bodyAesthetics: "Body Aesthetics",
        hairScalp: "Hair & Scalp",
        regenerative: "Regenerative",
        advancedTherapies: "Advanced Therapies",
        skinRejuvenation: "Skin Rejuvenation",
        specializedTreatments: "Specialized Treatments",
        services: "Services",
        personalCare: "Personal Care",
        virtualCare: "Virtual Care",
        aboutUs: "About Us",
        bookAppointment: "Book Appointment",
        search: "Search",
        "banner.title": "Welcome To The Holistic Approach To Wellness, Longevity & Regeneration",
        "banner.award1": "2023 Excellence in Regenerative Medicine Award",
        "banner.award2": "2024 Leading Wellness Innovation Award",
        "banner.description": "Here at Protoclinic, we provide scientifically-backed, personalized wellness and aesthetic programs based on comprehensive diagnostics and cutting-edge regenerative therapies.",
        "banner.call": "Call: +971 4 513 6154",
        "features.getStarted": "Get Started",

        "features.longevity.title": "Longevity Assessment",
        "features.longevity.desc": "Comprehensive DNA testing and personalized health evaluations designed to optimize your biological age and extend your health span.",

        "features.aesthetics.title": "Advanced Aesthetics",
        "features.aesthetics.desc": "Non-invasive and minimally invasive treatments utilizing the latest technology for natural-looking rejuvenation and enhancement.",

        "features.regenerative.title": "Regenerative Therapies",
        "features.regenerative.desc": "Platelet-Rich Plasma and biostimulation treatments that harness your body's natural healing abilities to restore and revitalize.",

        "features.hair.title": "Hair & Scalp Solutions",
        "features.hair.desc": "Innovative approaches to hair restoration and scalp health through advanced therapeutic techniques and personalized treatment plans.",

        "section.transform_title": "Transform Your Future Self Through Wellness Innovation",
        "section.transform_subtitle": "We are recognized pioneers in the integration of longevity science, aesthetic medicine, and regenerative therapies. Our passion lies in helping you reclaim the vibrant energy and confidence that time gradually diminishes.",
        "section.transform_description": "At Protoclinic, we understand that true wellness radiates from within. Your appearance reflects your internal health, and both deserve equal attention. Our science-backed approach doesn't just mask symptoms or temporarily enhance your look—it addresses the root causes of aging, helping you feel as vibrant as you appear.",
         "about.protocols": "Scientifically Validated Protocols",
    "about.testing": "Comprehensive Wellness Testing",
    "about.plans": "Personalized Treatment Plans",
    "about.technology": "Advanced Aesthetic Technology",
    "about.button": "About ProtoClinic",
"services.section_title": "Experience Transformative Wellness & Aesthetic Services",
"services.1.title": "Longevity Medicine",
"services.1.description": "Our science-based longevity programs unlock your body's hidden potential, reversing biological aging at the cellular level while optimizing vitality for years to come.",
"services.2.title": "Aesthetic Medicine",
"services.2.description": "Non-surgical rejuvenation treatments that honor your natural beauty, enhancing your features while preserving the authentic expression that makes you uniquely you.",
"services.3.title": "Regenerative Therapies",
"services.3.description": "Revolutionary PRP and biostimulation treatments awaken your body's innate healing intelligence, creating lasting renewal from within rather than temporary fixes.",
"services.4.title": "GUT Health Optimization",
"services.4.description": "Discover the profound connection between your digestive wellness and overall vitality through advanced microbiome analysis and personalized healing protocols.",
"services.5.title": "Hair & Scalp Solutions",
"services.5.description": "Reclaim the confidence that comes with healthy, vibrant hair through cutting-edge diagnostics and regenerative treatments for thinning and loss concerns.",
"services.view_all_button": "View All Services",
  "real.image_alt": "image",
  "real.before": "Before",
  "real.after": "After",
  "real.treatments_label": "TREATMENTS:",
  "real.treatments_value": "Hair Restoration Therapy",
  "real.result_label": "RESULT:",
  "real.result_value": "Visible Hair Regrowth in Just 6 Weeks",

    },
    ar: {
        home: "الرئيسية",
        longevity: "طول العمر",
        diagnosticTesting: "الاختبارات التشخيصية",
        wellnessPrograms: "برامج العافية",
        aesthetic: "الجمال",
        facialAesthetics: "تجميل الوجه",
        bodyAesthetics: "تجميل الجسم",
        hairScalp: "الشعر وفروة الرأس",
        regenerative: "العلاجات التجديدية",
        advancedTherapies: "العلاجات المتقدمة",
        skinRejuvenation: "تجديد البشرة",
        specializedTreatments: "علاجات متخصصة",
        services: "الخدمات",
        personalCare: "الرعاية الشخصية",
        virtualCare: "الرعاية الافتراضية",
        aboutUs: "معلومات عنا",
        bookAppointment: "احجز موعدًا",
        search: "بحث",
        "banner.title": "مرحبًا بكم في النهج الشامل نحو العافية وطول العمر والتجديد",
        "banner.award1": "جائزة التميز في الطب التجديدي لعام 2023",
        "banner.award2": "جائزة الابتكار في العافية لعام 2024",
        "banner.description": "في بروتوكليك، نقدم برامج عافية وجمالية مخصصة ومدعومة علميًا بناءً على تشخيصات شاملة وعلاجات تجديدية متقدمة.",
        "banner.call": "اتصل: +971 4 513 6154",
        "features.getStarted": "ابدأ الآن",

        "features.longevity.title": "تقييم طول العمر",
        "features.longevity.desc": "اختبارات DNA شاملة وتقييمات صحية مخصصة مصممة لتحسين عمرك البيولوجي وزيادة فترة صحتك.",

        "features.aesthetics.title": "الطب التجميلي المتقدم",
        "features.aesthetics.desc": "علاجات غير جراحية وبأقل تدخل ممكن باستخدام أحدث التقنيات للتجديد الطبيعي وتحسين المظهر.",

        "features.regenerative.title": "العلاجات التجديدية",
        "features.regenerative.desc": "علاجات البلازما الغنية بالصفائح الدموية والتحفيز الحيوي التي تستفيد من قدرات جسمك الطبيعية على الشفاء والاستعادة.",

        "features.hair.title": "حلول الشعر وفروة الرأس",
        "features.hair.desc": "مقاربات مبتكرة لاستعادة الشعر وصحة فروة الرأس من خلال تقنيات علاجية متقدمة وخطط علاج مخصصة.",

        "section.transform_title": "حوّل مستقبلك من خلال ابتكارات العافية",
        "section.transform_subtitle": "نحن رواد معترف بهم في دمج علوم طول العمر، والطب التجميلي، والعلاجات التجديدية. شغفنا هو مساعدتك على استعادة الطاقة الحيوية والثقة التي يتضاءلها الزمن تدريجيًا.",
        "section.transform_description": "في بروتوكليك، نفهم أن العافية الحقيقية تنبع من الداخل. مظهرك يعكس صحتك الداخلية، وكلاهما يستحقان اهتمامًا متساويًا. نهجنا العلمي لا يقتصر على إخفاء الأعراض أو تحسين مظهرك مؤقتًا - بل يعالج الأسباب الجذرية للشيخوخة، مما يساعدك على الشعور بالحيوية كما تبدو.",
           "about.protocols": "بروتوكولات مثبتة علميًا",
    "about.testing": "اختبارات شاملة للعافية",
    "about.plans": "خطط علاجية مخصصة",
    "about.technology": "تقنيات تجميلية متقدمة",
    "about.button": "حول بروتوكليك",
    "services.section_title": "اختبر خدمات الصحة والجمال التحولية",
"services.1.title": "طب طول العمر",
"services.1.description": "برامجنا المعتمدة على العلم تطلق العنان لإمكانات جسمك الخفية، وتُعكس الشيخوخة البيولوجية على المستوى الخلوي، مع تعزيز الحيوية لسنوات قادمة.",
"services.2.title": "الطب التجميلي",
"services.2.description": "علاجات تجديد غير جراحية تحترم جمالك الطبيعي، وتعزز ملامحك مع الحفاظ على التعبير الأصيل الذي يجعلك فريدًا.",
"services.3.title": "العلاجات التجديدية",
"services.3.description": "علاجات PRP والتحفيز الحيوي الثورية تُفعّل الذكاء الشفائي الفطري في جسمك، مما يخلق تجديدًا دائمًا من الداخل بدلاً من حلول مؤقتة.",
"services.4.title": "تحسين صحة الأمعاء",
"services.4.description": "اكتشف العلاقة العميقة بين صحة جهازك الهضمي وحيويتك العامة من خلال تحليل الميكروبيوم المتقدم وبروتوكولات الشفاء المخصصة.",
"services.5.title": "حلول الشعر وفروة الرأس",
"services.5.description": "استعد الثقة التي تأتي مع شعر صحي وحيوي من خلال التشخيصات المتقدمة والعلاجات التجديدية لمشاكل التساقط والترقق.",
"services.view_all_button": "عرض جميع الخدمات",
 "real.image_alt": "صورة",
  "real.before": "قبل",
  "real.after": "بعد",
  "real.treatments_label": "العلاجات:",
  "real.treatments_value": "علاج استعادة الشعر",
  "real.result_label": "النتيجة:",
  "real.result_value": "نمو شعر واضح في 6 أسابيع فقط"


    }
};

let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    const langData = translations[currentLang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });

    const langToggleBtn = document.getElementById("langToggleBtn");
    if (langToggleBtn) {
        langToggleBtn.textContent = currentLang === "en" ? "العربية" : "English";
    }

    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.body.style.fontFamily = currentLang === "ar"
        ? "'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        : "'Roboto', Arial, sans-serif";
}
