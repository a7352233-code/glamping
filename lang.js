
const translations = {
  en: {
    hero_title: "Experience Luxury in Nature",
    hero_sub: "Unique glamping stays near Almaty — comfort, design and adventure combined.",
    explore: "Explore Glamps",
    reserve: "Reserve Now",
    our_glamps: "Our Glamps",
    glamp1_title: "Mountain View Dome",
    glamp1_text: "Panoramic views, king-size bed, private deck and morning tea.",
    glamp2_title: "Lakeside Yurt",
    glamp2_text: "Cozy yurt by the lake, bonfire spot and fishing nearby.",
    glamp3_title: "Forest Cabin",
    glamp3_text: "Wooden cabin hidden in the forest — serenity and birdsong.",
    gallery: "Gallery",
    about: "About the Project",
    about_text: "We manage a network of premium glamping locations around Almaty. Sustainable design, curated experiences and unforgettable stays.",
    booking_section: "Reserve / Booking",
    student_name: "Name",
    phone_label: "Phone",
    message_label: "Message",
    send: "Send via WhatsApp",
    call: "Call",
    contact_us: "Contact",
    manager: "Manager",
    phone: "Phone",
    book: "Book"
  },
  ru: {
    hero_title: "Путешествуйте с комфортом на природе",
    hero_sub: "Уникальные глэмпинги рядом с Алматы — уют, дизайн и приключения.",
    explore: "Посмотреть глэмпинги",
    reserve: "Забронировать",
    our_glamps: "Наши глэмпинги",
    glamp1_title: "Купол с видом на горы",
    glamp1_text: "Панорамные виды, огромная кровать, приватная терраса и утренний чай.",
    glamp2_title: "Юрта у озера",
    glamp2_text: "Уютная юрта у озера, костровище и рыбалка рядом.",
    glamp3_title: "Лесная хижина",
    glamp3_text: "Деревянная хижина в лесу — тишина и пение птиц.",
    gallery: "Галерея",
    about: "О проекте",
    about_text: "Мы управляeм сетью премиальных глэмпингов вокруг Алматы. Устойчивый дизайн, curated experience и незабываемые впечатления.",
    booking_section: "Бронь",
    student_name: "ФИО",
    phone_label: "Телефон",
    message_label: "Комментарий",
    send: "Отправить через WhatsApp",
    call: "Позвонить",
    contact_us: "Контакты",
    manager: "Жетекші",
    phone: "Тел.",
    book: "Забронировать"
  },
  kz: {
    hero_title: "Табиғатта сәнді демалыс",
    hero_sub: "Алматы маңындағы бірегей глэмпингтер — жайлылық, дизайн және шытырман.",
    explore: "Глэмпингтер",
    reserve: "Брондау",
    our_glamps: "Біздің глэмпингтер",
    glamp1_title: "Тауға қараған купол",
    glamp1_text: "Панорамалық көрініс, үлкен кереует, жеке дәліз және таңғы шай.",
    glamp2_title: "Көл жағындағы үй",
    glamp2_text: "Көл жанындағы жайлы үй, от жағатын орын және балық аулауға ыңғайлы.",
    glamp3_title: "Ормандық кабина",
    glamp3_text: "Орманда жасырын ағаш үй — тыныштық пен құстардың әні.",
    gallery: "Галерея",
    about: "Жоба туралы",
    about_text: "Біз Алматы маңында премиум глэмпингтер желісін басқарамыз. Тұрақты дизайн, таңдаулы тәжірибе және ұмытылмас демалыс.",
    booking_section: "Брондау",
    student_name: "Аты-жөні",
    phone_label: "Телефон",
    message_label: "Хабарлама",
    send: "WhatsApp арқылы жіберу",
    call: "Қоңырау шалу",
    contact_us: "Байланыс",
    manager: "Жетекші",
    phone: "Тел.",
    book: "Брондау"
  }
};

function setLanguage(lang){
  document.querySelectorAll('[data-key]').forEach(el=>{
    const key = el.getAttribute('data-key');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
}

document.addEventListener('DOMContentLoaded', ()=>{
  // default lang en
  const defaultLang = 'en';
  setLanguage(defaultLang);
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.addEventListener('click', ()=> setLanguage(b.dataset.lang));
  });

  // booking form submit -> open whatsapp
  const form = document.getElementById('bookingForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('clientName').value);
    const phone = document.getElementById('clientPhone').value.replace(/\s+/g,'');
    const msg = encodeURIComponent(document.getElementById('clientMsg').value || 'Hello, I want to book a glamping stay.');
    // example: send to manager's number
    const managerNumber = '+77001234567';
    const url = `https://wa.me/${managerNumber.replace(/\D/g,'')}?text=${encodeURIComponent('Name: ' + name + '\nPhone: ' + phone + '\nMessage: ' + msg)}`;
    window.open(url, '_blank');
  });

  // prefill whatsapp link
  const whatsappLink = document.getElementById('whatsappLink');
  whatsappLink.addEventListener('click', (e)=>{
    e.preventDefault();
    const managerNumber = '+77001234567';
    const url = `https://wa.me/${managerNumber.replace(/\D/g,'')}`;
    window.open(url, '_blank');
  });
});
