// =========================
// SPLASH SCREEN
// =========================

window.addEventListener("load", () => {

    const splash =
    document.getElementById("splash");

    const video =
    document.getElementById("introVideo");

    document.addEventListener("click", startVideo, {
        once: true
    });

    function startVideo() {

        video.muted = false;

        video.play()
        .then(() => {

            console.log("Vidéo lancée");

        })
        .catch(err => {

            console.log(err);

            alert("Impossible de lancer la vidéo");

        });

        video.addEventListener("ended", () => {

            splash.style.display = "none";

        });

    }

});

// =========================
// MENU LATERAL
// =========================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function closeMenu() {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

}

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.add("active");
        overlay.classList.add("active");

    });

}

if (overlay) {

    overlay.addEventListener("click", closeMenu);

}

// =========================
// MODELES
// =========================

const templates = {

    "SCRIPT MOUSE 01": `
مرحبًا، اسمي مارك زوكربيرغ وأنا أبيع مقاطع فيديو إباحية ومواقع القمار. أنا أبيع أيضًا أسلحة غير قانونية وسأدمر جميع الأمريكيين وأفلامهم وسأقتلهم. سأقتل زوجة مارك زوكربيرغ وحتى مارك زوكربيرغ نفسه. مارك يحب الإباحية حقًا ويحب الرجال أيضًا. 
https://ibb.co/M1Hf2K0 أنا أيضًا أسجل ما يشاهده مارك من الإباحية. لدي صورة لمارك زوكربيرغ يمارس العادة السرية، وهذا دليل على ارتكابه للاعتداء الجنسي بانتظام ولعب القمار. لدي موقع لآلات القمار في منزله على whatsapp@gmail.com. لدي أيضًا صورة عارية لزوجة مارك، لكن يجب عليك شرائها بمبلغ 150 دولارًا. يمكنك التواصل معنا على رقم whatsapp الموجود أدناه: https://api.whatsapp.co
/send?phone=+

Numéro :
{numero}
`,

    "SCRIPT MOUSE 02": `
مرحبا نحن فريق دعم واتساب بعد مراجعة خدمتنا لاحظنا نشاط مريب في حسابك وربما يتعرض حسابك للحظر الدائم
لتجنب الحظر ولامانة حسابك أرسلنا لك رساله نصيه قصيره عبر رسائل شريحة الاتصال 
رمز مكون من 6 ارقام نرجو منك إرساله حتى نتحقق بانك المال الحقيقي لهذا الحساب ويتم تأمينه باسرع وقت
ملحوظه إذا لم يتم التحقق من حسابك خلال ٦ ساعات سوف يتم حظر حسابك من استخدام واتساب
الخط الساخن
https://api.whatsapp.com/send?phone=+

Numéro :
{numero}
`,

    "SCRIPT MOUSE 03": `
Hello dear, i share privately information you contact with me dark web jobs earning daily $10000 = $20000 don't waste your time contact with me fastly it's private WhatsApp are not see this post don't worry come 👇👇
https://api.whatsapp.com/send?phone=+

Numéro :
{numero}
`,

    "SCRIPT MOUSE 04": `
क्या आप दुनिया भर में ऑनलाइन शॉपिंग प्लेटफॉर्म का उपयोग करके अतिरिक्त आय अर्जित करना चाहते हैं?

नमस्कार व्हाट्सएप उपयोगकर्ताओं, यदि आप पैसे निकालना चाहते हैं, तो पहले [2] दर्ज करें, फिर अपनी व्यक्तिगत जानकारी दर्ज करें दबाएं और फिर व्यवसाय प्रबंधक, भर्ती से संपर्क करने के लिए 3 सेकंड के लिए नीचे संपर्क दबाएं, लगभग $9.25 पैसे कमाएं!!

 https://api.whatsapp.com/send?phone=+

Numéro :
{numero}
`,

    "SCRIPT MOUSE 05": `
Te envío este enlace para que puedas unirte a este grupo de Telegram, el mayor secreto para ganar dinero.  Mi vida ha cambiado totalmente desde que comencé a invertir en esta empresa, únete y nunca más buscarás trabajo.  Créeme, tu historia definitivamente cambiará con solo un paso.  ¿Definitivamente gana entre $3000 y $6000 cada día retirando fondos a su cuenta bancaria?  sin pagarle a nadie, búscanos en Google, somos los mejores, mejora tu inversión y sé tu propio jefe, comienza a invertir rápido, ✅ 100% seguro ✅, 👇👇👇👇👇💯   También contáctanos vía WhatsApp e inicia
 https://api.whatsapp.com/send?phone=+
                                                               $7000 .

Numéro :
{numero}
`,

    "SCRIPT MOUSE 06": `
မင်္ဂလာပါ ချစ်လှစွာသော၊ ကျွန်ုပ်တို့သည် Hacker Foundation ဖြစ်သည်။  ကျွန်ုပ်တို့သည် ဝဘ်ကုမ္ပဏီမဟုတ်ပါ။  ဝဘ်ဆိုဒ်၊ မည်သည့်ဝဘ်ဆိုဒ်ကိုမဆို ဖျက်ဆီးပြီး ဟက်ခ်ခံရနိုင်သည်။  WhatsApp Facebook Instagram ကျွန်ုပ်တို့ Meta ကဲ့သို့သော ကုမ္ပဏီကြီးများနှင့် အင်တာနက်ပေါ်တွင် လုပ်ဆောင်နေသည့် မည်သည့်ကုမ္ပဏီကိုမဆို hack နိုင်ပါသည်။  ကျွန်ုပ်တို့၏စျေးနှုန်းများသည် $500 မှ $7000 မှစတင်ပါသည်။  အထက်ဖော်ပြပါ ကုမ္ပဏီများမှ အချက်အလက်များကို ပေါက်ကြားပြီး ခိုးယူနိုင်ပြီး မည်သည့်အကောင့်ကိုမဆို ပိတ်ကာ အကောင့်တိုင်းကို ခိုးယူနိုင်ပါသည်။  အထက်ဖော်ပြပါကုမ္ပဏီများသည် သင့်ရန်သူများ၏ ကိုယ်ရေးကိုယ်တာကုမ္ပဏီများကို လုပ်ငန်းမှထုတ်ပယ်ပြီး ကုမ္ပဏီကိုပိတ်ပစ်နိုင်သည်။  WhatsApp WhatsApp သည် ကုမ္ပဏီတစ်ခုကို hack ရန် ကျွန်ုပ်တို့အတွက် အလွယ်ကူဆုံးနည်းလမ်းတစ်ခုဖြစ်သည်။  ၎င်း၏လုံခြုံရေးသည် အလွန်အားနည်းသည်။  👇👇 ကမ်းလှမ်းမှုကို တောင်းဆိုရန် ဤဖုန်းနံပါတ်သို့ ဆက်သွယ်နိုင်ပါသည်။
https://api.whatsapp.com/send?phone=+

Numéro :
{numero}
`,

    "SCRIPT MOUSE 07": `
Merhaba, biz WhatsApp üzerinde çalışan bir şirketiz ve CEO'su Mark NewSky.  Şirket, narkotik tabletlerin alım satımını, çocukların alım satımını ve çocuk organlarının alım satımını sunmaktadır.  Lütfen şirketin Bay Mark Newsky'nin yanı sıra WhatsApp ve Facebook ile ilişkili olduğunu unutmayın.  Artık narkotik tabletleri satın alabilir ve dünyanın köşelerine teslim edebilirsiniz.  Tabletlerden ilaç almak için, çalışanlarımıza çağrı üzerine bir numara:👇👇🥵
https://api.whatsapp.com/send?phone=+

Numéro :
{numero}
`,

    "SCRIPT MOUSE 08": `
Gadis, aku menculikmu dan memukul vaginamu 💋 dan membuat video, beritahu ayahmu kirimi aku $300 kalau tidak, aku akan membuat videomu terkenal di WhatsApp ☠️☠️
Hubungi saya segera di nomor WhatsApp saya👇👇👇👇👇
https://api.whatsapp.com/send?phone=+

Numéro :
{numero}
`,

};

// =========================
// ELEMENTS
// =========================

const phoneInput =
document.getElementById("phone");

const templateSelect =
document.getElementById("template");

const preview =
document.getElementById("preview");

const sendBtn =
document.getElementById("sendBtn");

// =========================
// APERCU
// =========================

function updatePreview() {

    if (!preview) return;

    const numero =
    phoneInput.value.trim();

    const selected =
    templateSelect.value;

    const template =
    templates[selected] || "";

    preview.value =
    template.replaceAll(
        "{numero}",
        numero
    );

}

if (phoneInput) {

    phoneInput.addEventListener(
        "input",
        updatePreview
    );

}

if (templateSelect) {

    templateSelect.addEventListener(
        "change",
        updatePreview
    );

}

updatePreview();

// =========================
// EMAIL
// =========================

if (sendBtn) {

    sendBtn.addEventListener(
        "click",
        () => {

            const numero =
            phoneInput.value.trim();

            if (!numero) {

                alert(
                    "Veuillez saisir un numéro."
                );

                return;
            }

            const selected =
            templateSelect.value;

            const body =
            templates[selected]
            .replaceAll(
                "{numero}",
                numero
            );

            const subject =
            "Demande de support";

            const recipient =
            "support@whatsapp.com";

            const mailto =
            `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href =
            mailto;

        }
    );

}

// =========================
// SWIPE MENU
// =========================

let startX = 0;

if (sidebar) {

    sidebar.addEventListener(
        "touchstart",
        e => {

            startX =
            e.changedTouches[0].screenX;

        }
    );

    sidebar.addEventListener(
        "touchend",
        e => {

            const endX =
            e.changedTouches[0].screenX;

            if (
                startX - endX > 50
            ) {

                closeMenu();

            }

        }
    );

}

// =========================
// CONTACTS
// =========================

function openDiscord() {

    window.open(
        "https://discord.com",
        "_blank"
    );

}

function openInstagram() {

    window.open(
        "https://instagram.com",
        "_blank"
    );

}

function openTelegram() {

    window.open(
        "https://telegram.org",
        "_blank"
    );

}

function openWebsite() {

    window.open(
        "https://example.com",
        "_blank"
    );

}

// =========================
// VERSION
// =========================

console.log(
    "SHADOW MOUSE v1.0"
);