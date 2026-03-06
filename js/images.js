// credit: https://codepen.io/Stupiedidiot/pen/emzVOZJ
const FILES = [
  {
    "file": "https://cdn.cara.app/production/posts/c8e4ddb1-0fde-4546-a4c4-87eacf8db1a0/riflebird-AISRPNTvdiFNoLiPYKilt-rose_2026_02_17.png",
    "tags": "2026 oc"
  },
  {
    "file": "https://cdn.cara.app/production/posts/7c302621-b5da-41f0-babf-cbfe0ee10eb0/riflebird-HWW1tZQmq4r6h-Yl7hWJo-amskyvin_2026-02-12.png",
    "tags": "2026 oc amskyvin"
  },
  {
    "file": "https://cdn.cara.app/production/posts/06bd0857-96cf-4f8f-8322-e2f7a62be44c/riflebird-p0w6BUGCb_HkMncWANIhw-mari_refsheet1_2025.jpg",
    "tags": "2025 oc mari"
  },
  {
    "file": "https://cdn.cara.app/production/posts/06bd0857-96cf-4f8f-8322-e2f7a62be44c/riflebird-puHmniy_Jm-iLTXNmTvNL-noelle_riflebird.png",
    "tags": "2025 oc mari"
  },
  {
    "file": "https://cdn.cara.app/production/posts/7cc1bcc7-929e-475b-824f-60122697bac2/riflebird-4cVEEOtrQEZ4K4U8HC3yy-cosette_2025_09_05_riflebird.png",
    "tags": "2025 oc cosette"
  },
  {
    "file": "https://cdn.cara.app/production/posts/0e5fdd5a-22f1-4594-8130-102d83fffe42/riflebird-oFvlBLJPTIb4XSrXBO_KH-kotlyn_riflebird.png",
    "tags": "2025 oc kotlyn"
  },
  {
    "file": "https://cdn.cara.app/production/posts/4a656828-eb82-4be1-903b-f21306133b1a/riflebird-oYlpN_K1S6P9ZaJKnnyp0-Illustration3.png",
    "tags": "pokemon 2020"
  },
  {
    "file": "https://cdn.cara.app/production/posts/d4a608d2-c670-4897-b756-5804290baf4a/riflebird-rTgp-4RPETn-_Z4wu6_-S-Illustration2.png",
    "tags": "pokemon 2020"
  },
  {
    "file": "https://cdn.cara.app/production/posts/f6542616-7919-49a6-bd42-34d21f88ae82/riflebird-TWtYrqymDCnFa_Ptrja1E-mualani_riflebird.png",
    "tags": "2025 genshin"
  },
  {
    "file": "https://cdn.cara.app/production/posts/4cde96ae-4594-4ea6-8483-76504a99c510/riflebird-nDpQgTCMXapcBvOlKlse6-arlette1_riflebird_2025.png",
    "tags": "2025 oc arlette"
  },
  {
    "file": "https://cdn.cara.app/production/posts/96325519-4a8b-447d-b523-f4b942832fa4/riflebird-pjOQs7H0SQGKaXafx6SoZ-cambion_smaug_challenge.png",
    "tags": "2025 cambion oc"
  },
  {
    "file": "https://cdn.cara.app/production/posts/a2c73f0d-7380-4c66-9037-5e372d869077/riflebird-kOLJiEszEEbKC8raZkXI3-cambion_1_riflebird.png",
    "tags": "2025 cambion oc"
  },
  {
    "file": "https://cdn.cara.app/production/posts/f2c21f3e-d451-49e8-a0b4-a5775de37db2/riflebird-3QyqMYiOg7gic_Lv7WujF-maybeillcomeback.jpg",
    "tags": "2019 oc cosette blue"
  },
  {
    "file": "https://cdn.cara.app/production/posts/48e729a3-c669-4e90-9fce-215a560c4756/riflebird-_bEex9biXDf7Fm91X2RcW-cossette_riflebird.png",
    "tags": "2024 oc cosette"
  },
  {
    "file": "https://cdn.cara.app/production/posts/364ce800-3792-4d88-9759-8cbf252e68bd/riflebird-bbWnybUsiWOhmQWOIeUov-blue_riflebird.png",
    "tags": "2024 blue oc"
  },
  {
    "file": "https://cdn.cara.app/production/posts/ab2e4e6f-99c5-4d1b-9090-69c8b10acf3b/riflebird-JUeb2_lq_FqmLU6u-F1KJ-vito_riflebird.png",
    "tags": "2025 vito oc"
  },
  {
    "file": "https://cdn.cara.app/production/posts/21ad31b3-ab00-4ffa-bc71-6649620c9cfb/riflebird-pB-oFY5Hi2UoBBf967Ycv-arlette_riflebird_2025.png",
    "tags": "2025 arlette oc"
  },
  {
    "file": "https://cdn.cara.app/production/posts/6e2d52e4-579e-4077-b3b6-4ba6bf79c705/riflebird-DX86dJByzlpoREeAtaZnZ-angy_blue.png",
    "tags": "2025 blue oc"
  },
  {
    "file": "https://cdn.cara.app/production/posts/0fe82e1e-75fc-4517-8712-c3ee47462575/riflebird-Yi0lQjOXMqPsrDXwqQkkr-art_trade_2026_03_02.png",
    "tags": "2026 art-trade"
  },
  {
    "file": "https://cdn.cara.app/production/posts/1ce521f2-3762-41ac-bb03-1afd75c4c68b/riflebird-LGh9cgCZgXDHg_119yGfj-quick_cloud_study_feat_toothless.png",
    "tags": "2026"
  },
  {
    "file": "https://cdn.cara.app/production/posts/2a3dbf69-0636-4c4a-8fa6-896f4c2c913b/1770901636120-9nu5p22q97k.jpg",
    "tags": "2025 oc blue sketch"
  },
  {
    "file": "https://cdn.cara.app/production/posts/2a3dbf69-0636-4c4a-8fa6-896f4c2c913b/1770901635987-0r4lzqzb7rgm.jpg",
    "tags": "2025 oc cambion sketch"
  },
  {
    "file": "https://cdn.cara.app/production/posts/449ac884-5a33-4db2-951c-125aa6baa954/1770315609121-k24e8nezdy9.jpg",
    "tags": "2026 sketch"
  },
  {
    "file": "https://cdn.cara.app/production/posts/48e729a3-c669-4e90-9fce-215a560c4756/riflebird-FYwkyv3ur34xQNsxN59Kn-megaepic.png",
    "tags": "2020 oc cosette"
  },
  {
    "file": "https://cdn.cara.app/production/posts/48e729a3-c669-4e90-9fce-215a560c4756/riflebird-hWIQTbcb7hDqHQbWcXdvq-mary-dae.jpg",
    "tags": "2019 oc cosette"
  },
  {
    "file": "https://cdn.cara.app/production/posts/48e729a3-c669-4e90-9fce-215a560c4756/riflebird-6HrGKLXscFWn_FT-Ny1zZ-20090114083.jpg",
    "tags": "2018 oc cosette"
  },
  {
    "file": "https://cdn.cara.app/production/posts/56bbb432-4537-419f-b0b4-83ef49fad2ea/riflebird-bI4ircwL5vdUiIMe07eZM-finalstrawjpeg.png",
    "tags": "2020 oc blue"
  },
  {
    "file": "https://cdn.cara.app/production/posts/364ce800-3792-4d88-9759-8cbf252e68bd/riflebird-cxhLHxRWyOeK1ALTxJeqo-i-lazy.png",
    "tags": "2020 oc blue"
  },
  {
    "file": "https://cdn.cara.app/production/posts/364ce800-3792-4d88-9759-8cbf252e68bd/riflebird-N2r6W-GvAZC_FcY7gJhW4-lilsleeper.png",
    "tags": "2019 oc blue"
  },
  {
    "file": "https://cdn.cara.app/production/posts/364ce800-3792-4d88-9759-8cbf252e68bd/riflebird-sCr2c_qDBHKoybtKEfM-a-ehmightaswell.png",
    "tags": "2018 oc blue"
  },
  {
    "file": "https://images.artfight.net/attack/cP9DMPVvuspGNVC5xaXCCiuQjIiDM9fMkA9OVjSiQ3OD7XSVQcFRwJIsV26j.png?t=1719943808",
    "tags": "2024 artfight"
  },
  {
    "file": "https://cdn.cara.app/production/posts/ab2e4e6f-99c5-4d1b-9090-69c8b10acf3b/riflebird-yixvp18nuUB-W-B76tqV0-boys.jpg",
    "tags": "2020 oc vito sketch"
  },
  {
    "file": "https://cdn.cara.app/production/posts/ab2e4e6f-99c5-4d1b-9090-69c8b10acf3b/riflebird-3MhOHml2y3IVmq7iX6KXt-image.png",
    "tags": "2020 oc vito sketch"
  },
  {
    "file": "https://images.artfight.net/attack/nqRuNXVS6IDiYdUArgUVHSRNb6nq0S3kc4tX8Wn77937f2EOikl4t9H5oNQS.jpg?t=1720291896",
    "tags": "2024 artfight",
    "credit": "https://artfight.net/character/4547795.bergamot",
  },
  {
    "file": "https://images.artfight.net/attack/5EXKiq5vWPpB9Z8QDb2IkzqAiwFitnSWcpkHJiiQU5X9GUwADF54CMVghEoX.png?t=1720978957",
    "tags": "2024 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/Gp0xolJVFkKzUgxFlTu1kcN8t4kWVXTV9ku9avwBKUS2UhRrfRDvtpQRoV2X.png?t=1721406611",
    "tags": "2024 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/quL9zqdf58pru1PLCLIv5ENacRjARpGuTVCEacmUPi3NBgl001HIQcTinwUv.png?t=1721812591",
    "tags": "2024 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/th_quL9zqdf58pru1PLCLIv5ENacRjARpGuTVCEacmUPi3NBgl001HIQcTinwUv.gif?t=1721812591",
    "tags": "2024 artfight"
  },
  {
    "file": "https://res.cloudinary.com/dqes5rgqn/image/upload/v1772796437/IMG_20260306_0001_wgnx1b.webp",
    "tags": "sketchbook 2025"
  },
  {
    "file": "https://images.artfight.net/attack/brrS4UtlLTcpfPjLCw5zmjkSKEY2qSAB77XRGth2VuMpCua3eYl42p0bqelH.jpg?t=1722190042",
    "tags": "2024 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/QoyJKGdIYF2SQd30UA402khd0tS6iN890iHdWamNt3kTFfMiYU9v8Tty0Gm7.jpg?t=1722407555",
    "tags": "2024 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/oRBkl2ojiopyGwpyvJ7N9CtYuHlg00czknfGHd3TxfdaDAj6tqJwRHzhfHjV.jpg?t=1722596061",
    "tags": "2024 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/RmcUg69MOtzh2CNmzfmnW7mP7UI1uHNJOwg290mfFP3vX1PrDduUUZJ241aH.png?t=1751465199",
    "tags": "2025 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/D4ezwpYYzAEt0PkgTc37yq36MKpSD9B6XU2ogX1iafKxTL7MelCojdv9TkSF.png?t=1751532175",
    "tags": "2025 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/dlhHFLUM2n9Qo3tziVg8BMDH3tMrtJeTYzGG2KiltXsJ4DnVKvKy80EfBpgi.png?t=1751570961",
    "tags": "2025 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/U5G757NbgG7ZP0iy6g6EXyVUIYZX6jomPiX7fzNJHaTpSSXvadPe6GyGn4gq.png?t=1751959366",
    "tags": "2025 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/mfjMgHhJZIM09syuwKnuO4kh29nvZN9PcLVKrowXpaazghQRInv3d52aLJON.png?t=1752312116",
    "tags": "2025 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/viXcKiY54CBEX2FIRUlP9kgW0xmmx7m210GEbGGFRSKANWcR5BlRpyPak8Dw.png?t=1752412894",
    "tags": "2025 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/J59ooFfkJ6CC9O4vGrxbQmGzZieynXfYRHvcwgfjEeRt26fx0ullt7TmiVyA.png?t=1753087734",
    "tags": "2025 artfight"
  },
  {
    "file": "https://images.artfight.net/attack/niRqVs753aVWSTxLqVuFaLC9okcudC6lMSU16oD1FYWdDuA9CIaLJbTprw6C.png?t=1753120181",
    "tags": "2025 artfight"
  },
]
// {
//     "file": "",
//     "tags": ""
//   },

function getYearFromTags(tags) {
  const match = tags.match(/\b(202\d|201\d)\b/);
  return match ? match[1] : 'unsorted';
}

FILES.sort((a, b) => {
  const yearA = getYearFromTags(a.tags);
  const yearB = getYearFromTags(b.tags);
  return yearB.localeCompare(yearA);
});

const TARGET = document.getElementById('gallery');
let lastYear = null;

FILES.forEach(e =>{
  const year = getYearFromTags(e.tags);
  
  if (year !== lastYear) {
    const divider = document.createElement('div');
    divider.className = 'gallery-year-divider';
    divider.textContent = year;
    TARGET.append(divider);
    lastYear = year;

    
  }
  
  // create an anchor tag
  const link = document.createElement('a');
  link.dataset.tags = e.tags;
  if (e.credit) link.dataset.credit = e.credit;
  
  // Check if it's a sketchbook item
  if (e.tags.includes('sketchbook')) {
    link.classList.add('sketchbook-item');  // Different class for styling
    link.href = 'not-found.html';  // Link to the sketchbook page (create this file separately)
  } else {
    link.classList.add('gallery-item');  // Normal gallery item
    link.href = e.file;
  }
  // Maybe you can use the tags here for the filtering
  
  // create and img tag and append to anchor
  let img = document.createElement('img');
  img.src = e.file;
  link.append(img);
  
  // append anchor tag to target the #gallery div
  TARGET.append(link);
})

// lightbox setup – create once and keep for reuse
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
const lbImg = document.createElement('img');
lightbox.appendChild(lbImg);
document.body.appendChild(lightbox);

// click on background closes the lightbox
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {             // not the image itself
    lightbox.classList.remove('visible');
    lbImg.src = '';
  }
});

function showLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add('visible');
}

// intercept gallery clicks
TARGET.addEventListener('click', e => {
  const link = e.target.closest('a.gallery-item');
  if (!link) return;               // click was outside an item
  e.preventDefault();              // don’t follow the href
    showLightbox(link.href, link.dataset.tags, link.dataset.credit);

});