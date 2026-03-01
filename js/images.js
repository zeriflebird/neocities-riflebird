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
    "tags": "oc cosette blue"
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
]

const TARGET = document.getElementById('gallery');

FILES.forEach(e =>{
  // create an anchor tag
  const link = document.createElement('a');
  link.href = e.file;
  link.classList.add('gallery-item');
  link.dataset.tags = e.tags;
  // Maybe you can use the tags here for the filtering
  
  // create and img tag and append to anchor
  let img = document.createElement('img');
  img.src = e.file;
  link.append(img);
  
  // append anchor tag to target the #gallery div
  TARGET.append(link);
})