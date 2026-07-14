/* =========================================================
   ============  CONFIG: แก้ข้อมูลตรงนี้ได้เลย  ============
   ========================================================= */
const CONFIG = {
  // ชื่อแฟน
  partnerName: "พู่กันนนนน",

  // ข้อความหน้าแรก
  heroTitle: "Happy Anniversary",
  heroSubtitle: "ครบรอบ 1 ปี 10 เดือนเปิดๆๆๆๆ",

  // ระยะเวลาความสัมพันธ์ (ใช้แสดงในหน้าต่างๆ)
  relationshipDuration: "1 ปี 10 เดือน",

  // วันครบรอบ (ใช้แสดงใน Timeline ได้ ถ้าต้องการ)
  anniversaryDate: "11 กันยายนน พ.ศ.2569",

  // ข้อความ Typing Effect (ส่วนที่สอง)
  typingLines: [
    "สุขสันต์วันครบรอบนะคนสวยยย",
    "1 ปี 10 เดือนที่หนูเข้ามาเป็นรอยยิ้มให้ผมในทุกๆวัน",
    "ขอบคุณที่อยู่ด้วยกันมาตลอด ทะเลาะกันบ้างก็ดี",
    "เเต่ผมจะอยู่ข้างๆพู่กันนเสมอนะคะ"
  ],

  // เพลงประกอบ (วางไฟล์ mp3 ไว้โฟลเดอร์เดียวกับ index.html แล้วตั้งชื่อไฟล์ตรงนี้)
  musicSrc: "music/HONNE Day 1 ◑.mp3",

  // รูปภาพ Album (ใส่ path/URL รูปได้สูงสุด 12 รูป)
  albumPhotos: [
    "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.15752-9/745356413_1738652163993521_9027751265336785250_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ItGhmxagDEUQ7kNvwFcfLCh&_nc_oc=AdpWF_MW9O02Xu7j22pwxCQAdFlFh8aoTkJiZLsGfUmfbgYRvNR_aqWcMftbT8zgqk-dsbRke-2Ko-IdR_TWGUOT&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_ss=7b6a8&oh=03_Q7cD5wEA-oNqnbWm8S_8zcQuvT42My_rmF4CkQzDCfKVEIvBFg&oe=6A7BCBBD",
    "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.15752-9/742711442_999313752970676_4983093461511636617_n.webp?stp=dst-webp_s960x960&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=zg3sG38RI6cQ7kNvwEYEbNo&_nc_oc=AdrPaU7UaKBI73RoWgQJiVMgcvjXacNTzyus3wyVz_och6XgKhqhlcaPpAGust3nKMynoDe6wWG9AE7ITla-Z4nC&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_ss=7b6a8&oh=03_Q7cD5wFul3y_ju6ULxXMru1z8C-F-PWTYrGpxN8HDNGsx8Nlzg&oe=6A7BECED",
    "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/741464303_2897997463704230_1194958247575340067_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=QoK6StN2eWkQ7kNvwHps_bx&_nc_oc=AdrFK5vWIgqE8-OcWq0zKulFF3BlGciCN7C6sbbbPvn7LKnEBh5gG615oQLU1OLONLeYFTmMOjzKlDONYsYwQITl&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&_nc_ss=7b6a8&oh=03_Q7cD5wE-7YtfAkAk-Akj-BS5bVq_geR2D0LaJS9uxBVcHFQJPg&oe=6A7BE06F",
    "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/741948123_2099690830984416_7658938603299498921_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=W6uoeX2gnwoQ7kNvwFy4SRM&_nc_oc=AdohObmVI4gtdlrtJysTeUThR7ddzoL-CrVsB4ZEMwG4Vc9g8aQVyfeARInZKiFyRXN-xILqU2-Do5yCAzmFvSmy&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&_nc_ss=7b6a8&oh=03_Q7cD5wFn9PIwurkPsG6ZGYGIjFOiT7wUeM5DQonD6Qc_2w_xFA&oe=6A7BC796",
    "https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.15752-9/742277989_779439995245051_111097099293121248_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=JvEPJ5413RwQ7kNvwH33P4y&_nc_oc=Adr6kXxrtTICj0leRfX2v2eHM33rip9ut25LZ8QqlCfQJX7jdMDp09BZ2nIajx0AXt7wmwgmT0wJCRjf6biB57Nh&_nc_zt=23&_nc_ht=scontent.fbkk22-4.fna&_nc_ss=7b6a8&oh=03_Q7cD5wGG2wOzAn97suHGEf0M-rugo17_cptFz2Tgeli31I-2Dw&oe=6A7BBE8B",
    "https://scontent.fbkk22-5.fna.fbcdn.net/v/t1.15752-9/741977745_1434212302088165_6762555190524855129_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=UIGCxPRZpfUQ7kNvwFcmkkY&_nc_oc=AdqUEqXdHRSfx-L5lqns6uU-o44FlkEU3PPfkjuU9hQvZjfawcxWLwqhQSeUnhAUDglE61wwZ5nHlkVm8cOg2xlO&_nc_zt=23&_nc_ht=scontent.fbkk22-5.fna&_nc_ss=7b6a8&oh=03_Q7cD5wHqBtUJRpsApKvhD3E8srRI-OIvLcW5fzCnO0zLtNqAJg&oe=6A7BE113",
    "https://scontent.fbkk22-5.fna.fbcdn.net/v/t1.15752-9/742101381_4654919684836526_4261518587611661436_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ae8eKg_iuxcQ7kNvwE2LtdC&_nc_oc=Adqd-9ylatcXFumoCRrMiLlsU-ZbSNzFRNzzCH1DvhrxJ9Rqa6qYpfWIblIMxbxh-QSydW-AnGh0IF6S2dxYdqyk&_nc_zt=23&_nc_ht=scontent.fbkk22-5.fna&_nc_ss=7b6a8&oh=03_Q7cD5wHj9stfKtWjHABTO6TonZTfb0p0EPVhtTiZrTy9AFoGhw&oe=6A7BE1F6",
    "https://scontent.fbkk22-5.fna.fbcdn.net/v/t1.15752-9/744657736_1008532541923653_6120651452000941230_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=0DDzjGVlwk0Q7kNvwEN9TQj&_nc_oc=Ado_TIcM6N7xRUjaT-SIQ2SuejJxA4lSYgXaT56V1knaiZvBwUPUp2yvWhxCsfs31kGf3nhvGC8HdmmI-BcHR5X5&_nc_zt=23&_nc_ht=scontent.fbkk22-5.fna&_nc_ss=7b6a8&oh=03_Q7cD5wE_wwsoxPyPlZs89XwbJP7byFsCvn0YBfsusiTTQcOfDA&oe=6A7BBCDF",
    "https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.15752-9/744272331_1729615921686615_6149290419059754736_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=DKdXQY0M7kkQ7kNvwE87yQy&_nc_oc=Adp5Ht5yw_oqxWts1nyZRnmrifWpnDWcyTrI9P_7v_6MldyQo67Czxt6KHcd9zxzYB7G2I3GOR2xl2fMg9RX_jPy&_nc_zt=23&_nc_ht=scontent.fbkk22-4.fna&_nc_ss=7b6a8&oh=03_Q7cD5wGuu7UlJV1bb82dwM5coq4tsYFTDTfhFJOj2ePBccbukA&oe=6A7BE341",
    "https://scontent.fbkk22-7.fna.fbcdn.net/v/t1.15752-9/745010397_1321793979668038_1451567462788346699_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=LnHK_fUuw6QQ7kNvwHeWe8D&_nc_oc=AdqRswt6wcojCRUCJ4w4a_Rj7PUna2t8a5dIeasWPG400_m09J6GeVOP55g5Mt7aOxqphFflw5BPL6FbNNnPNtjq&_nc_zt=23&_nc_ht=scontent.fbkk22-7.fna&_nc_ss=7b6a8&oh=03_Q7cD5wHdX40ZCeGPwXJ-CGeRrpmFKh6FL677200IQ5eTcQ896w&oe=6A7BEE2B",
    "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.15752-9/743081384_1983866685595345_7447478826284447474_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=wRaPxktoQEMQ7kNvwEKDtaV&_nc_oc=AdoCFgIhYGkGjQxDBFZnQrLZ-d7YeGrCiPXLmr-q4xDfNz4Eisb1Pm_PLHLST5P-GdLnl_i6n7lMGgT5d4Gl0sRA&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_ss=7b6a8&oh=03_Q7cD5wGwvg0A5KpHH3rCl06cEMpA-Khuq8L_Pg86KSWf_XcWDQ&oe=6A7BE41C",
    "https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.15752-9/743131920_1648667322895264_4312024097224031970_n.webp?stp=dst-webp_s960x960&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=pX8pirl4eC0Q7kNvwEtdWiL&_nc_oc=AdoarOy42EsYFbl3eKVwAgyK4AwY1fOEAPA9c8HQvdXAOcjcyaowwx3-pSAlmNeOlEGhTXfrpd8CdG-ejnycGHVx&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_ss=7b6a8&oh=03_Q7cD5wHKTu1GQoQivch0YnMLo-4yYLaq0jncIMTvtfvzuMvntg&oe=6A7BC9A7"
  ],

  // ข้อความจดหมายรัก (ขึ้นบรรทัดใหม่ด้วย \n)
  loveLetter:
`ถึงน้องงงอ้วนนสุดดดคิ้วที่สุดในโลก,

ขอบคุณที่เหนู เข้ามาในชีวิตผมมมผมรักู่กันมากๆอาจจะมีทำได้ดี
บ้าง ผิดพลาดบ้าง เเต่ก็ยังให้อภัยยกันขอบคุณที่หนูไม่ทิ้งผม
ผมดีใจมากกกกกกก จริงๆที่ได้เจออพู่กัน
1 ปี 10 เดือน เเล้วที่อยู่ด้วยกัน ใกล้จะ 2 ปี 
หลังจากนี้ผมขอ ปีที่เราอยู่ด้วยกันไม่หยุดนับไปข้างหน้าของให้เรา
อยู่ด้วยกันไป ขอให้พพู่กันนมีความสขขขมากกกกนะคะ
และขอให้เราได้อยู่ด้วยกันไปอีกนานๆ นะ รักกน้องงพุ่กันนน

รักที่สุดด จาก
- คนที่รักเธอเสมอ`,

  // Memory Timeline
  timeline: [
    { icon: "💖", date: "11 กันยาาา", title: "วันเเรกที่คบกันน", desc: "เป็นวันที่ไม่คิดว่าจะมาไกลขนาดนี้" },
    { icon: "🎁", date: "10 ตุลาา ", title: "วันเกิดคนอ้วน", desc: "วันเกิดดของพู่กัน ได้ซื้อเค้กให้ด้วย" },
    { icon: "💑", date: "วันนี้", title: "ครบรอบ 1 ปี 10 เดือน", desc: "ขอบคุณที่อยู่กับผมด้วยกันมาจนถึงวันนี้" },
    { icon: "❤️", date: "อนาาคตต", title: "อนาคต", desc: "จะทำตัวเองให้เป็นเเฟนนที่ดีสำหรับนูตลอดไปเลย" }
  ],

  // Coupon
  coupons: [
    { icon: "🍰", title: "กินของอร่อยฟรี", desc: "เลือกร้านไหนก็ได้ แล้วแต่เธอเลย หมดดอายุ 11 สิงหาคม 2569 ตังไม่มี" },
    { icon: "🍿", title: "ดูหนังด้วยกัน", desc: "จะดูกี่รอบก็ได้ไม่มีเบื่อ หมดดอายุ 11 สิงหาคม 2569 เดี๋ยวตังหมด" },
    { icon: "🛍️", title: "พาไปเที่ยว", desc: "ที่ไหนก็ได้ที่เธออยากไป ไม่มีกำหนด" },
    { icon: "🤍", title: "กอดฟรีไม่จำกัด", desc: "ตลอดชีวิตเลยนะ" }
  ],

  // ข้อความลับ (Secret Button)
  secretMessage: "เธอเจอปุ่มลับแล้ว มีความลับอย่างหนึ่งที่อยากบอก... ฉันรักเธอมากกว่าที่เธอคิดไว้อีกนะ ขอบคุณที่เป็นของขวัญที่ดีที่สุดในชีวิตฉัน",

  // ข้อความ Final Section
  finalQuote: "I Love You More Than Yesterday, But Less Than Tomorrow.",

  // ข้อความ Ending
  endingMessage: "สุขสันต์วันครบรอบนะ\nขอบคุณที่อยู่ด้วยกันมา 1 ปี 10 เดือน\nและอีกหลายๆปีต่อจากนี้\nรักเธอที่สุด"
};
/* =========================================================
   ============  MAIN APP LOGIC  ============
   ========================================================= */
(function(){
  "use strict";

  /* ---------- 1) เติมข้อความจาก CONFIG ลงหน้าเว็บ ---------- */
  document.getElementById('hero-title').textContent = CONFIG.heroTitle + " " + CONFIG.partnerName;
  document.getElementById('hero-sub').textContent = CONFIG.heroSubtitle;
  document.getElementById('final-quote').textContent = "\u201C" + CONFIG.finalQuote + "\u201D";
  document.getElementById('ending-message').textContent = CONFIG.endingMessage;
  document.getElementById('letter-text').textContent = CONFIG.loveLetter;
  document.getElementById('secret-msg').textContent = CONFIG.secretMessage;
  document.getElementById('env-to-name').textContent = CONFIG.partnerName;

  /* ---------- 2) ระบบเปลี่ยนหน้า (Section Navigation) ---------- */
  const sections = Array.from(document.querySelectorAll('.section'));
  const dotsWrap = document.getElementById('progress-dots');
  sections.forEach((s,i)=>{
    const d = document.createElement('div');
    d.className = 'dot' + (i===0 ? ' active':'');
    d.dataset.index = i;
    dotsWrap.appendChild(d);
  });
  const dots = Array.from(dotsWrap.children);

  let currentIndex = 0;
  function goToSection(targetId){
    const target = document.getElementById(targetId);
    if(!target) return;
    const current = sections[currentIndex];
    const targetIdx = sections.indexOf(target);
    if(target === current) return;

    current.classList.add('fade-out');
    setTimeout(()=>{
      current.classList.remove('active','fade-out');
      target.classList.add('active');
      const inner = target.querySelector('.section-inner');
      if(inner){ inner.classList.remove('fade-in'); void inner.offsetWidth; inner.classList.add('fade-in'); }
      currentIndex = targetIdx;
      dots.forEach((d,i)=>d.classList.toggle('active', i===targetIdx));
      window.scrollTo({top:0,behavior:'instant' in window ? 'instant':'auto'});
      onEnterSection(targetId);
    }, 550);
  }

  // ผูกปุ่ม "ไปต่อ" ทุกปุ่มแบบ data-driven
  const navMap = {
    'btn-to-album':'sec-album',
    'btn-to-letter':'sec-letter',
    'btn-to-timeline':'sec-timeline',
    'btn-to-lovemeter':'sec-lovemeter',
    'btn-to-game':'sec-game',
    'btn-to-coupon':'sec-coupon',
    'btn-to-final':'sec-final',
    'btn-to-ending':'sec-ending'
  };
  Object.keys(navMap).forEach(btnId=>{
    const btn = document.getElementById(btnId);
    if(btn) btn.addEventListener('click', ()=>goToSection(navMap[btnId]));
  });

  function onEnterSection(id){
    if(id === 'sec-typing') startTyping();
    if(id === 'sec-timeline') revealTimeline();
    if(id === 'sec-final') spawnStars();
  }

  /* ---------- 3) พื้นหลัง Ambient: หัวใจ / ดาว / ฟองอากาศ / กลีบดอกไม้ ---------- */
  const bgLayer = document.getElementById('bg-layer');
  const HEARTS = ['💗','❤️'];
  const PETALS = ['🌸','🌷'];

  function spawnAmbient(){
    // หัวใจลอย
    for(let i=0;i<6;i++){
      const el = document.createElement('div');
      el.className = 'bg-heart';
      el.textContent = HEARTS[Math.floor(Math.random()*HEARTS.length)];
      const size = 0.9 + Math.random()*1.4;
      el.style.left = Math.random()*100+'vw';
      el.style.fontSize = size+'rem';
      el.style.setProperty('--s', (0.7+Math.random()*0.6).toFixed(2));
      el.style.setProperty('--drift', (Math.random()*80-40)+'px');
      el.style.animationDuration = (10+Math.random()*10)+'s';
      el.style.animationDelay = (Math.random()*14)+'s';
      bgLayer.appendChild(el);
    }
    // ดาวระยิบระยับ
    for(let i=0;i<26;i++){
      const el = document.createElement('div');
      el.className = 'bg-sparkle';
      const s = 2+Math.random()*3;
      el.style.width = s+'px'; el.style.height = s+'px';
      el.style.background = '#fff';
      el.style.borderRadius = '50%';
      el.style.boxShadow = '0 0 6px 1px rgba(255,255,255,.8)';
      el.style.left = Math.random()*100+'vw';
      el.style.top = Math.random()*100+'vh';
      el.style.animationDuration = (2+Math.random()*3)+'s';
      el.style.animationDelay = (Math.random()*4)+'s';
      bgLayer.appendChild(el);
    }
    // ฟองอากาศ
    for(let i=0;i<8;i++){
      const el = document.createElement('div');
      el.className = 'bg-bubble';
      const s = 14+Math.random()*30;
      el.style.width = s+'px'; el.style.height = s+'px';
      el.style.left = Math.random()*100+'vw';
      el.style.setProperty('--drift', (Math.random()*60-30)+'px');
      el.style.animationDuration = (12+Math.random()*10)+'s';
      el.style.animationDelay = (Math.random()*12)+'s';
      bgLayer.appendChild(el);
    }
    // กลีบดอกไม้ร่วง
    for(let i=0;i<6;i++){
      const el = document.createElement('div');
      el.className = 'bg-petal';
      el.textContent = PETALS[Math.floor(Math.random()*PETALS.length)];
      el.style.left = Math.random()*100+'vw';
      el.style.fontSize = (0.9+Math.random()*0.8)+'rem';
      el.style.setProperty('--drift', (Math.random()*100-50)+'px');
      el.style.animationDuration = (14+Math.random()*10)+'s';
      el.style.animationDelay = (Math.random()*14)+'s';
      bgLayer.appendChild(el);
    }
  }
  spawnAmbient();

  /* ---------- Cursor sparkle trail (subtle UI effect, CSS dot instead of emoji) ---------- */
  let lastTrail = 0;
  window.addEventListener('pointermove', (e)=>{
    const now = Date.now();
    if(now - lastTrail < 60) return;
    lastTrail = now;
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.left = e.clientX+'px';
    el.style.top = e.clientY+'px';
    el.style.width = '5px';
    el.style.height = '5px';
    el.style.borderRadius = '50%';
    el.style.background = 'radial-gradient(circle, #fff 0%, var(--pink-deep) 70%)';
    el.style.pointerEvents = 'none';
    el.style.zIndex = 99;
    el.style.transition = 'transform .6s ease, opacity .6s ease';
    el.style.transform = 'translate(-50%,-50%) scale(1)';
    document.body.appendChild(el);
    requestAnimationFrame(()=>{
      el.style.transform = 'translate(-50%,-140%) scale(0.2)';
      el.style.opacity = '0';
    });
    setTimeout(()=>el.remove(), 650);
  }, {passive:true});

  /* ---------- Ripple effect for all .btn ---------- */
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('click', function(e){
      const r = document.createElement('span');
      r.className = 'ripple';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      r.style.width = r.style.height = size+'px';
      r.style.left = (e.clientX - rect.left - size/2)+'px';
      r.style.top = (e.clientY - rect.top - size/2)+'px';
      this.appendChild(r);
      setTimeout(()=>r.remove(), 650);
    });
  });

  /* ---------- 4) กล่องของขวัญ (Section 1) ---------- */
  const giftBox = document.getElementById('gift-box');
  const btnOpenGift = document.getElementById('btn-open-gift');
  let giftOpened = false;

  function openGift(){
    if(giftOpened) return;
    giftOpened = true;
    giftBox.classList.add('opening');
    setTimeout(()=>{
      giftBox.classList.remove('opening');
      giftBox.classList.add('opened');
      // หัวใจพุ่งออกจากกล่อง
      for(let i=0;i<14;i++){
        const h = document.createElement('div');
        h.className = 'burst-heart';
        h.textContent = HEARTS[Math.floor(Math.random()*HEARTS.length)];
        const angle = Math.random()*Math.PI - Math.PI/2 - Math.PI/2;
        const dist = 90+Math.random()*90;
        h.style.setProperty('--bx',(Math.cos(angle)*dist)+'px');
        h.style.setProperty('--by',(Math.sin(angle)*dist - 40)+'px');
        h.style.animationDelay = (Math.random()*0.15)+'s';
        giftBox.appendChild(h);
        setTimeout(()=>h.remove(), 1200);
      }
      setTimeout(()=>goToSection('sec-typing'), 900);
    }, 480);
  }
  giftBox.addEventListener('click', openGift);
  giftBox.addEventListener('keypress', (e)=>{ if(e.key==='Enter') openGift(); });
  btnOpenGift.addEventListener('click', openGift);

  /* ---------- 5) Typing Effect (Section 2) ---------- */
  let typingStarted = false;
  function startTyping(){
    if(typingStarted) return;
    typingStarted = true;
    const textEl = document.getElementById('typing-text');
    const lines = CONFIG.typingLines;
    const fullText = lines.join('\n');
    let i = 0;
    function tick(){
      if(i <= fullText.length){
        textEl.textContent = fullText.slice(0,i);
        i++;
        const ch = fullText[i-1];
        const delay = ch === '\n' ? 260 : (28 + Math.random()*38);
        setTimeout(tick, delay);
      } else {
        document.getElementById('btn-to-album').style.display = 'inline-flex';
      }
    }
    setTimeout(tick, 500);
  }

  /* ---------- 6) Album + Lightbox (Section 3) ---------- */
  const albumGrid = document.getElementById('album-grid');
  const photos = CONFIG.albumPhotos.slice(0,12);
  photos.forEach((src,i)=>{
    const p = document.createElement('div');
    p.className = 'polaroid';
    p.style.setProperty('--r', (Math.random()*10-5)+'deg');
    p.innerHTML = `<img src="${src}" alt="memory ${i+1}" loading="lazy"><div class="cap">#${i+1}</div>`;
    p.addEventListener('click', ()=>openLightbox(i));
    albumGrid.appendChild(p);
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  let lbIndex = 0;
  function openLightbox(i){
    lbIndex = i;
    lightboxImg.src = photos[lbIndex];
    lightbox.classList.add('active');
  }
  function closeLightbox(){ lightbox.classList.remove('active'); }
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
  document.getElementById('lb-prev').addEventListener('click', ()=>{ lbIndex = (lbIndex-1+photos.length)%photos.length; lightboxImg.src = photos[lbIndex]; });
  document.getElementById('lb-next').addEventListener('click', ()=>{ lbIndex = (lbIndex+1)%photos.length; lightboxImg.src = photos[lbIndex]; });
  window.addEventListener('keydown',(e)=>{
    if(!lightbox.classList.contains('active')) return;
    if(e.key==='Escape') closeLightbox();
    if(e.key==='ArrowLeft') document.getElementById('lb-prev').click();
    if(e.key==='ArrowRight') document.getElementById('lb-next').click();
  });

  /* ---------- 7) Love Letter (Section 4) ---------- */
  const envelope = document.getElementById('envelope');
  const letterModal = document.getElementById('letter-modal');
  function openEnvelope(){
    envelope.classList.add('open');
    setTimeout(()=>{ letterModal.classList.add('active'); }, 550);
  }
  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keypress', (e)=>{ if(e.key==='Enter') openEnvelope(); });
  document.getElementById('letter-close').addEventListener('click', ()=>letterModal.classList.remove('active'));
  letterModal.addEventListener('click',(e)=>{ if(e.target===letterModal) letterModal.classList.remove('active'); });

  /* ---------- 8) Memory Timeline (Section 5) ---------- */
  const timelineList = document.getElementById('timeline-list');
  CONFIG.timeline.forEach(item=>{
    const el = document.createElement('div');
    el.className = 'tl-item';
    el.innerHTML = `
      <div class="tl-icon">${item.icon}</div>
      <div class="tl-body">
        <div class="tl-date">${item.date}</div>
        <div class="tl-title">${item.title}</div>
        <div class="tl-desc">${item.desc}</div>
      </div>`;
    timelineList.appendChild(el);
  });
  let timelineRevealed = false;
  function revealTimeline(){
    if(timelineRevealed) return;
    timelineRevealed = true;
    timelineList.classList.add('grow');
    const items = Array.from(timelineList.querySelectorAll('.tl-item'));
    items.forEach((it,i)=>setTimeout(()=>it.classList.add('show'), 300 + i*260));
  }

  /* ---------- 9) Love Meter (Section 6) ---------- */
  const loveHeartBtn = document.getElementById('love-heart');
  const loveCountNum = document.getElementById('love-count-num');
  let loveCount = 0;
  loveHeartBtn.addEventListener('click', (e)=>{
    loveCount++;
    loveCountNum.textContent = loveCount;
    loveHeartBtn.classList.remove('pulse'); void loveHeartBtn.offsetWidth; loveHeartBtn.classList.add('pulse');
    const f = document.createElement('div');
    f.className = 'floaty-heart';
    f.textContent = HEARTS[Math.floor(Math.random()*HEARTS.length)];
    f.style.left = e.clientX+'px';
    f.style.top = e.clientY+'px';
    f.style.setProperty('--fx', (Math.random()*100-50)+'px');
    document.body.appendChild(f);
    setTimeout(()=>f.remove(), 1450);
  });

  /* ---------- 10) Mini Game: ตามหาหัวใจ (Section 7) ---------- */
  const gameField = document.getElementById('game-field');
  const gameStatus = document.getElementById('game-status');
  const gameWin = document.getElementById('game-win');
  const TARGET_FOUND = 5;
  let foundCount = 0;
  let gameStarted = false;
  let gameRoundActive = false;

  function placeRandomHeart(){
    if(foundCount >= TARGET_FOUND) return;
    const fieldRect = gameField.getBoundingClientRect();
    const h = document.createElement('div');
    const isTarget = true; // แต่ละรอบมีเป้าหมาย 1 ดวง ปนกับตัวหลอก 4 ดวง
    h.className = 'game-heart';
    h.style.left = (10+Math.random()*80)+'%';
    h.style.top = (10+Math.random()*76)+'%';
    h.style.animationDelay = (Math.random()*1.5)+'s';

    // สุ่มว่าดวงนี้เป็นเป้าหมาย (สีชมพูสด) หรือหัวใจหลอก (สีอื่น)
    const chance = Math.random();
    if(chance < 0.35){
      h.textContent = '💗';
      h.dataset.target = 'true';
    } else {
      h.textContent = ['🤍','💙'][Math.floor(Math.random()*2)];
      h.dataset.target = 'false';
    }
    h.addEventListener('click', ()=>{
      if(h.dataset.target === 'true'){
        foundCount++;
        gameStatus.textContent = `เจอแล้ว: ${foundCount} / ${TARGET_FOUND}`;
        clearField();
        if(foundCount >= TARGET_FOUND){
          winGame();
        } else {
          spawnGameRound();
        }
      } else {
        h.style.transform = 'scale(0.6)';
        h.style.opacity = '0.3';
        setTimeout(()=>{ h.style.transform=''; h.style.opacity='1'; }, 260);
      }
    });
    gameField.appendChild(h);
  }
  function clearField(){ gameField.innerHTML = ''; }
  function spawnGameRound(){
    clearField();
    const count = 5;
    for(let i=0;i<count;i++) placeRandomHeart();
  }
  function winGame(){
    gameWin.style.display = 'block';
    launchConfetti(40);
  }
  function initGameOnEnter(){
    if(gameStarted) return;
    gameStarted = true;
    spawnGameRound();
  }
  // เริ่มเกมเมื่อเข้าหน้านี้ครั้งแรก
  const gameSection = document.getElementById('sec-game');
  const gameObserver = new MutationObserver(()=>{
    if(gameSection.classList.contains('active')) initGameOnEnter();
  });
  gameObserver.observe(gameSection, {attributes:true, attributeFilter:['class']});

  /* ---------- 11) Coupons (Section 8) ---------- */
  const couponGrid = document.getElementById('coupon-grid');
  CONFIG.coupons.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'coupon';
    el.innerHTML = `
      <div class="coupon-inner">
        <div class="coupon-face coupon-front">
          <div class="cf-icon">${c.icon}</div>
          <div class="cf-text">แตะเพื่อเปิดคูปอง</div>
        </div>
        <div class="coupon-face coupon-back">
          <div class="cb-title">${c.title}</div>
          <div class="cb-desc">${c.desc}</div>
        </div>
      </div>`;
    el.addEventListener('click', ()=>el.classList.toggle('flipped'));
    couponGrid.appendChild(el);
  });

  /* ---------- Confetti helper (ใช้ทั้ง Mini Game และ Ending) ---------- */
  const CONFETTI_COLORS = ['#FFB3D1','#FFD9A0','#B8E7FF','#DCC6FF','#FF9EC7','#FFF3C4'];
  function launchConfetti(count){
    for(let i=0;i<count;i++){
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      const size = 6+Math.random()*8;
      c.style.width = size+'px';
      c.style.height = (size*0.4)+'px';
      c.style.left = Math.random()*100+'vw';
      c.style.background = CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)];
      c.style.setProperty('--rot', (Math.random()*720-360)+'deg');
      c.style.animationDuration = (2.4+Math.random()*1.6)+'s';
      c.style.animationDelay = (Math.random()*0.4)+'s';
      document.body.appendChild(c);
      setTimeout(()=>c.remove(), 4200);
    }
  }

  /* ---------- 12) Music (floating widget) ---------- */
  const bgMusic = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');
  const musicVol = document.getElementById('music-vol');
  if(CONFIG.musicSrc){ bgMusic.src = CONFIG.musicSrc; }
  bgMusic.volume = parseFloat(musicVol.value);
  let musicPlaying = false;
  musicToggle.classList.add('paused');
  musicToggle.addEventListener('click', ()=>{
    if(!CONFIG.musicSrc){
      musicToggle.classList.add('paused');
      setTimeout(()=>{ musicToggle.classList.remove('paused'); }, 400);
      return; // ยังไม่ได้ใส่ไฟล์เพลงใน CONFIG.musicSrc
    }
    if(musicPlaying){
      bgMusic.pause();
      musicToggle.classList.remove('spin');
      musicToggle.classList.add('paused');
    } else {
      bgMusic.play().catch(()=>{});
      musicToggle.classList.add('spin');
      musicToggle.classList.remove('paused');
    }
    musicPlaying = !musicPlaying;
  });
  musicVol.addEventListener('input', ()=>{ bgMusic.volume = parseFloat(musicVol.value); });

  /* ---------- Music Gate: บังคับกดเปิดเพลงก่อนเข้าเว็บ ---------- */
  const musicGate = document.getElementById('music-gate');
  const btnOpenMusic = document.getElementById('btn-open-music');
  btnOpenMusic.addEventListener('click', ()=>{
    // เล่นเพลงทันทีตอนกด (การคลิกของผู้ใช้ทำให้เบราว์เซอร์อนุญาตให้เล่นเสียงอัตโนมัติได้)
    if(CONFIG.musicSrc){
      bgMusic.play().then(()=>{
        musicPlaying = true;
        musicToggle.classList.add('spin');
        musicToggle.classList.remove('paused');
      }).catch(()=>{
        // เผื่อกรณียังไม่ได้ใส่ไฟล์เพลงจริง หรือเบราว์เซอร์บล็อกไว้ ก็ให้เข้าเว็บต่อได้ปกติ
      });
    }
    musicGate.classList.add('hidden');
    setTimeout(()=>{ musicGate.style.display = 'none'; }, 750);
  });

  /* ---------- 13) Secret Button ---------- */
  const secretBtn = document.getElementById('secret-btn');
  const secretOverlay = document.getElementById('secret-overlay');
  // สุ่มตำแหน่งใหม่ทุกครั้งที่เปลี่ยน section เพื่อให้ต้องหา
  function relocateSecretBtn(){
    secretBtn.style.bottom = (10+Math.random()*70)+'vh';
    secretBtn.style.right = (6+Math.random()*80)+'vw';
  }
  relocateSecretBtn();
  setInterval(relocateSecretBtn, 6000);
  secretBtn.addEventListener('click', ()=>{
    secretOverlay.classList.add('active');
    for(let i=0;i<20;i++){
      const h = document.createElement('span');
      h.textContent = HEARTS[Math.floor(Math.random()*HEARTS.length)];
      h.style.position='absolute';
      h.style.left = Math.random()*100+'vw';
      h.style.bottom = '-10vh';
      h.style.fontSize = (1+Math.random()*1.6)+'rem';
      h.style.animation = `floatUp ${2+Math.random()*2}s linear forwards`;
      secretOverlay.appendChild(h);
      setTimeout(()=>h.remove(), 4000);
    }
  });
  secretOverlay.addEventListener('click', ()=>secretOverlay.classList.remove('active'));

  /* ---------- 14) Final Section: ดาวระยิบระยับ ---------- */
  const finalSection = document.getElementById('sec-final');
  let starsSpawned = false;
  function spawnStars(){
    if(starsSpawned) return;
    starsSpawned = true;
    for(let i=0;i<60;i++){
      const s = document.createElement('div');
      s.className = 'star';
      const size = 1+Math.random()*2.4;
      s.style.width = size+'px'; s.style.height = size+'px';
      s.style.left = Math.random()*100+'%';
      s.style.top = Math.random()*90+'%';
      s.style.animationDuration = (1.6+Math.random()*2.6)+'s';
      s.style.animationDelay = (Math.random()*3)+'s';
      finalSection.appendChild(s);
    }
  }

  /* ---------- 15) Ending: หัวใจเต็มจอ + Confetti + ดอกไม้ตก + พลุ ---------- */
  const btnFinalHeart = document.getElementById('btn-final-heart');
  const endingPre = document.getElementById('ending-pre');
  const endingPost = document.getElementById('ending-post');
  const fullHeartOverlay = document.getElementById('full-heart-overlay');

  btnFinalHeart.addEventListener('click', ()=>{
    fullHeartOverlay.classList.add('active');
    // หัวใจเต็มหน้าจอ
    for(let i=0;i<50;i++){
      const h = document.createElement('div');
      h.className = 'rain-heart';
      h.textContent = HEARTS[Math.floor(Math.random()*HEARTS.length)];
      h.style.left = Math.random()*100+'vw';
      h.style.fontSize = (1+Math.random()*1.8)+'rem';
      h.style.animationDuration = (2+Math.random()*2.4)+'s';
      h.style.animationDelay = (Math.random()*1.2)+'s';
      fullHeartOverlay.appendChild(h);
    }
    // ดอกไม้ร่วง (ใช้กลีบดอกไม้)
    for(let i=0;i<24;i++){
      const p = document.createElement('div');
      p.className = 'rain-heart';
      p.textContent = PETALS[Math.floor(Math.random()*PETALS.length)];
      p.style.left = Math.random()*100+'vw';
      p.style.fontSize = (0.9+Math.random()*1.2)+'rem';
      p.style.animationDuration = (2.6+Math.random()*2.6)+'s';
      p.style.animationDelay = (Math.random()*1.6)+'s';
      fullHeartOverlay.appendChild(p);
    }
    launchConfetti(70);

    // พลุเบาๆ (fireworks)
    function spawnFirework(){
      const fx = document.createElement('div');
      const colors = CONFETTI_COLORS;
      const color = colors[Math.floor(Math.random()*colors.length)];
      const size = 60+Math.random()*60;
      fx.className = 'firework';
      fx.style.width = size+'px'; fx.style.height = size+'px';
      fx.style.left = (10+Math.random()*80)+'vw';
      fx.style.top = (10+Math.random()*50)+'vh';
      fx.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
      document.body.appendChild(fx);
      setTimeout(()=>fx.remove(), 1300);
    }
    let fwCount = 0;
    const fwInterval = setInterval(()=>{
      spawnFirework();
      fwCount++;
      if(fwCount>=8) clearInterval(fwInterval);
    }, 420);

    setTimeout(()=>{
      endingPre.style.display = 'none';
      endingPost.style.display = 'block';
    }, 900);

    setTimeout(()=>{
      fullHeartOverlay.classList.remove('active');
      fullHeartOverlay.innerHTML = '';
    }, 5000);
  });

})();