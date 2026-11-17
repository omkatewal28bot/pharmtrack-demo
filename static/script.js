// PharmTrack frontend: sample catalog, dashboard, authentication and CRUD.

const RAW = `Paracetamol|an|250,500,650|mg
Ibuprofen|an|200,400,600|mg
Diclofenac|an|50,75,100|mg
Aspirin|an|75,150,325|mg
Naproxen|an|250,500,750|mg
Tramadol|an|50,100,200|mg|Capsule
Aceclofenac|an|100,150,200|mg
Etoricoxib|an|60,90,120|mg
Amoxicillin|ab|250,500,875|mg|Capsule
Azithromycin|ab|250,500,1000|mg
Ciprofloxacin|ab|250,500,750|mg
Doxycycline|ab|50,100,200|mg|Capsule
Cefixime|ab|100,200,400|mg
Metronidazole|ab|200,400,500|mg
Levofloxacin|ab|250,500,750|mg
Clarithromycin|ab|250,500,750|mg
Cefuroxime|ab|125,250,500|mg
Co-amoxiclav|ab|375,625,1000|mg
Ofloxacin|ab|100,200,400|mg
Metformin|ad|500,850,1000|mg
Glimepiride|ad|1,2,4|mg
Gliclazide|ad|40,80,160|mg
Sitagliptin|ad|25,50,100|mg
Pioglitazone|ad|15,30,45|mg
Vildagliptin|ad|50,100,150|mg
Dapagliflozin|ad|5,10,20|mg
Amlodipine|cv|2.5,5,10|mg
Atenolol|cv|25,50,100|mg
Losartan|cv|25,50,100|mg
Telmisartan|cv|20,40,80|mg
Atorvastatin|cv|10,20,40|mg
Rosuvastatin|cv|5,10,20|mg
Metoprolol|cv|25,50,100|mg
Clopidogrel|cv|75,150,300|mg
Ramipril|cv|2.5,5,10|mg
Furosemide|cv|20,40,80|mg
Enalapril|cv|2.5,5,10|mg
Omeprazole|gi|10,20,40|mg|Capsule
Pantoprazole|gi|20,40,80|mg
Famotidine|gi|10,20,40|mg
Domperidone|gi|10,20,30|mg
Ondansetron|gi|4,8,16|mg
Loperamide|gi|1,2,4|mg|Capsule
Rabeprazole|gi|10,20,40|mg
Esomeprazole|gi|20,40,80|mg|Capsule
Bisacodyl|gi|5,10,15|mg
Salbutamol|rs|100,200,400|mcg|Inhaler
Montelukast|rs|4,5,10|mg
Budesonide|rs|100,200,400|mcg|Inhaler
Theophylline|rs|100,200,300|mg
Ambroxol|rs|15,30,60|mg|Syrup
Levosalbutamol|rs|50,100,200|mcg|Inhaler
Cetirizine|al|5,10,20|mg
Loratadine|al|5,10,20|mg
Fexofenadine|al|60,120,180|mg
Levocetirizine|al|2.5,5,10|mg
Chlorpheniramine|al|2,4,8|mg
Desloratadine|al|2.5,5,10|mg
Sertraline|ne|25,50,100|mg
Escitalopram|ne|5,10,20|mg
Alprazolam|ne|0.25,0.5,1|mg
Levetiracetam|ne|250,500,750|mg
Gabapentin|ne|100,300,400|mg|Capsule
Amitriptyline|ne|10,25,50|mg
Carbamazepine|ne|100,200,400|mg
Pregabalin|ne|75,150,300|mg|Capsule
Clonazepam|ne|0.25,0.5,2|mg
Vitamin D3|vt|1000,2000,60000|IU|Capsule
Vitamin B12|vt|500,1000,1500|mcg
Folic acid|vt|1,5,10|mg
Iron + folic acid|vt|60,100,150|mg
Calcium + D3|vt|250,500,1000|mg
Zinc|vt|20,50,100|mg
Vitamin C|vt|250,500,1000|mg
Omega-3|vt|500,1000,1200|mg|Capsule
Prednisolone|ot|5,10,20|mg
Levothyroxine|ot|25,50,100|mcg
Hydroxychloroquine|ot|200,300,400|mg
Allopurinol|ot|100,200,300|mg
Ivermectin|ot|3,6,12|mg
Fluconazole|ot|50,150,200|mg
Acyclovir|ot|200,400,800|mg
Clotrimazole|ot|1,2,5|%|Cream
Albendazole|ot|200,400,600|mg
Mupirocin|ot|1,2,3|%|Ointment
Tamsulosin|ot|0.2,0.4,0.8|mg|Capsule
Betamethasone|ot|0.025,0.05,0.1|%|Cream
Ketoprofen|ot|Demo| |Unspecified
Sulindac|ot|Demo| |Unspecified
Meloxicam|ot|Demo| |Unspecified
Piroxicam|ot|Demo| |Unspecified
Indomethacin|ot|Demo| |Unspecified
Celecoxib|ot|Demo| |Unspecified
Nabumetone|ot|Demo| |Unspecified
Mefenamic acid|ot|Demo| |Unspecified
Ketorolac|ot|Demo| |Unspecified
Flurbiprofen|ot|Demo| |Unspecified
Penicillin V|ot|Demo| |Unspecified
Ampicillin|ot|Demo| |Unspecified
Flucloxacillin|ot|Demo| |Unspecified
Cloxacillin|ot|Demo| |Unspecified
Cefalexin|ot|Demo| |Unspecified
Cefadroxil|ot|Demo| |Unspecified
Cefpodoxime|ot|Demo| |Unspecified
Cefdinir|ot|Demo| |Unspecified
Cefaclor|ot|Demo| |Unspecified
Cefprozil|ot|Demo| |Unspecified
Cefditoren|ot|Demo| |Unspecified
Minocycline|ot|Demo| |Unspecified
Tetracycline|ot|Demo| |Unspecified
Erythromycin|ot|Demo| |Unspecified
Roxithromycin|ot|Demo| |Unspecified
Clindamycin|ot|Demo| |Unspecified
Linezolid|ot|Demo| |Unspecified
Nitrofurantoin|ot|Demo| |Unspecified
Fosfomycin|ot|Demo| |Unspecified
Rifampicin|ot|Demo| |Unspecified
Ethambutol|ot|Demo| |Unspecified
Isoniazid|ot|Demo| |Unspecified
Pyrazinamide|ot|Demo| |Unspecified
Acarbose|ot|Demo| |Unspecified
Miglitol|ot|Demo| |Unspecified
Repaglinide|ot|Demo| |Unspecified
Nateglinide|ot|Demo| |Unspecified
Linagliptin|ot|Demo| |Unspecified
Saxagliptin|ot|Demo| |Unspecified
Alogliptin|ot|Demo| |Unspecified
Empagliflozin|ot|Demo| |Unspecified
Canagliflozin|ot|Demo| |Unspecified
Glipizide|ot|Demo| |Unspecified
Bisoprolol|ot|Demo| |Unspecified
Nebivolol|ot|Demo| |Unspecified
Carvedilol|ot|Demo| |Unspecified
Propranolol|ot|Demo| |Unspecified
Labetalol|ot|Demo| |Unspecified
Nifedipine|ot|Demo| |Unspecified
Felodipine|ot|Demo| |Unspecified
Diltiazem|ot|Demo| |Unspecified
Verapamil|ot|Demo| |Unspecified
Candesartan|ot|Demo| |Unspecified
Irbesartan|ot|Demo| |Unspecified
Olmesartan|ot|Demo| |Unspecified
Valsartan|ot|Demo| |Unspecified
Lisinopril|ot|Demo| |Unspecified
Perindopril|ot|Demo| |Unspecified
Captopril|ot|Demo| |Unspecified
Spironolactone|ot|Demo| |Unspecified
Eplerenone|ot|Demo| |Unspecified
Torsemide|ot|Demo| |Unspecified
Bumetanide|ot|Demo| |Unspecified
Indapamide|ot|Demo| |Unspecified
Chlorthalidone|ot|Demo| |Unspecified
Hydrochlorothiazide|ot|Demo| |Unspecified
Ezetimibe|ot|Demo| |Unspecified
Fenofibrate|ot|Demo| |Unspecified
Bezafibrate|ot|Demo| |Unspecified
Pravastatin|ot|Demo| |Unspecified
Simvastatin|ot|Demo| |Unspecified
Ticagrelor|ot|Demo| |Unspecified
Prasugrel|ot|Demo| |Unspecified
Warfarin|ot|Demo| |Unspecified
Apixaban|ot|Demo| |Unspecified
Rivaroxaban|ot|Demo| |Unspecified
Dabigatran|ot|Demo| |Unspecified
Digoxin|ot|Demo| |Unspecified
Ivabradine|ot|Demo| |Unspecified
Ranolazine|ot|Demo| |Unspecified
Nicorandil|ot|Demo| |Unspecified
Lansoprazole|ot|Demo| |Unspecified
Dexlansoprazole|ot|Demo| |Unspecified
Cimetidine|ot|Demo| |Unspecified
Itopride|ot|Demo| |Unspecified
Mosapride|ot|Demo| |Unspecified
Metoclopramide|ot|Demo| |Unspecified
Granisetron|ot|Demo| |Unspecified
Mebeverine|ot|Demo| |Unspecified
Dicyclomine|ot|Demo| |Unspecified
Lactulose|ot|Demo| |Unspecified
Mesalazine|ot|Demo| |Unspecified
Sulfasalazine|ot|Demo| |Unspecified
Ursodeoxycholic acid|ot|Demo| |Unspecified
Acetylcysteine|ot|Demo| |Unspecified
Bromhexine|ot|Demo| |Unspecified
Guaifenesin|ot|Demo| |Unspecified
Dextromethorphan|ot|Demo| |Unspecified
Roflumilast|ot|Demo| |Unspecified
Zafirlukast|ot|Demo| |Unspecified
Bilastine|ot|Demo| |Unspecified
Rupatadine|ot|Demo| |Unspecified
Ebastine|ot|Demo| |Unspecified
Hydroxyzine|ot|Demo| |Unspecified
Promethazine|ot|Demo| |Unspecified
Ketotifen|ot|Demo| |Unspecified
Fluoxetine|ot|Demo| |Unspecified
Paroxetine|ot|Demo| |Unspecified
Citalopram|ot|Demo| |Unspecified
Venlafaxine|ot|Demo| |Unspecified
Duloxetine|ot|Demo| |Unspecified
Mirtazapine|ot|Demo| |Unspecified
Bupropion|ot|Demo| |Unspecified
Trazodone|ot|Demo| |Unspecified
Nortriptyline|ot|Demo| |Unspecified
Imipramine|ot|Demo| |Unspecified
Lamotrigine|ot|Demo| |Unspecified
Topiramate|ot|Demo| |Unspecified
Zonisamide|ot|Demo| |Unspecified
Oxcarbazepine|ot|Demo| |Unspecified
Lacosamide|ot|Demo| |Unspecified
Phenytoin|ot|Demo| |Unspecified
Valproate|ot|Demo| |Unspecified
Baclofen|ot|Demo| |Unspecified
Tizanidine|ot|Demo| |Unspecified
Ropinirole|ot|Demo| |Unspecified
Pramipexole|ot|Demo| |Unspecified
Levodopa|ot|Demo| |Unspecified
Donepezil|ot|Demo| |Unspecified
Rivastigmine|ot|Demo| |Unspecified
Memantine|ot|Demo| |Unspecified
Melatonin|ot|Demo| |Unspecified
Pyridoxine|ot|Demo| |Unspecified
Thiamine|ot|Demo| |Unspecified
Riboflavin|ot|Demo| |Unspecified
Biotin|ot|Demo| |Unspecified
Niacin|ot|Demo| |Unspecified
Tocopherol|ot|Demo| |Unspecified
Ascorbic acid|ot|Demo| |Unspecified
Magnesium|ot|Demo| |Unspecified
Potassium iodide|ot|Demo| |Unspecified
Dexamethasone|ot|Demo| |Unspecified
Hydrocortisone|ot|Demo| |Unspecified
Methylprednisolone|ot|Demo| |Unspecified
Deflazacort|ot|Demo| |Unspecified
Methimazole|ot|Demo| |Unspecified
Carbimazole|ot|Demo| |Unspecified
Colchicine|ot|Demo| |Unspecified
Febuxostat|ot|Demo| |Unspecified
Terbinafine|ot|Demo| |Unspecified
Itraconazole|ot|Demo| |Unspecified
Voriconazole|ot|Demo| |Unspecified
Valacyclovir|ot|Demo| |Unspecified
Famciclovir|ot|Demo| |Unspecified
Oseltamivir|ot|Demo| |Unspecified
Mebendazole|ot|Demo| |Unspecified
Praziquantel|ot|Demo| |Unspecified
Permethrin|ot|Demo| |Unspecified
Finasteride|ot|Demo| |Unspecified
Dutasteride|ot|Demo| |Unspecified
Alfuzosin|ot|Demo| |Unspecified
Silodosin|ot|Demo| |Unspecified
Solifenacin|ot|Demo| |Unspecified
Tolterodine|ot|Demo| |Unspecified
Mirabegron|ot|Demo| |Unspecified
Oxybutynin|ot|Demo| |Unspecified
Methotrexate|ot|Demo| |Unspecified
Azathioprine|ot|Demo| |Unspecified
Mycophenolate|ot|Demo| |Unspecified
Tacrolimus|ot|Demo| |Unspecified
Ciclosporin|ot|Demo| |Unspecified`;
const CAT = { an: ['Pain & fever', 'Relief of pain, inflammation and fever.', 'Nausea, stomach upset; liver or kidney strain at high doses.', 'Below 30 °C, dry, away from light.'],
    ab: ['Antibiotic', 'Treatment of bacterial infections. Use only as prescribed.', 'Diarrhoea, nausea, rash; rare allergic reactions.', 'Below 25 °C, tightly closed.'],
    ad: ['Diabetes', 'Blood-sugar control in type 2 diabetes.', 'Low blood sugar, stomach upset, weight change.', 'Below 30 °C, protected from moisture.'],
    cv: ['Heart & blood pressure', 'Control of blood pressure, cholesterol and heart conditions.', 'Dizziness, fatigue, swelling of ankles, dry cough (ACE inhibitors).', 'Below 30 °C, dry place.'],
    gi: ['Digestive', 'Acid reflux, ulcers, nausea and bowel problems.', 'Headache, bloating, constipation or loose stools.', 'Below 25 °C, dry place.'],
    rs: ['Respiratory', 'Asthma, wheeze, cough and airway relief.', 'Tremor, palpitations, throat irritation, headache.', 'Below 25 °C; do not puncture inhalers.'],
    al: ['Allergy', 'Relief from hay fever, hives and allergic reactions.', 'Drowsiness, dry mouth, headache.', 'Below 30 °C, dry place.'],
    ne: ['Brain & mental health', 'Depression, anxiety, seizures and nerve pain.', 'Drowsiness, dizziness, weight change; dependence with some drugs.', 'Below 25 °C, locked controlled-drug cabinet where required.'],
    vt: ['Vitamins & minerals', 'Corrects deficiencies and supports bone and blood health.', 'Mild stomach upset; dark stools with iron.', 'Below 30 °C, away from humidity.'],
    ot: ['Hormonal, skin & other', 'Thyroid, inflammation, infections, parasites and skin conditions.', 'Varies by drug; see prescriber guidance.', 'Below 30 °C unless the pack says otherwise.'] };
const MFR = ['Sun Pharma', 'Cipla', 'Lupin', 'Zydus', 'Dr. Reddy’s', 'Mankind', 'Alkem', 'Torrent'];

// Generate repeatable synthetic demo values.
function rng(a) {
    return () => {
        a |= 0;
        a = a + 0x6D2B79F5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const R = rng(20261117), DAY = 864e5, NOW = new Date();
NOW.setHours(0, 0, 0, 0);
const DB = [], MEDS = Object.create(null);
RAW.split('\n').forEach((l, i) => {
    const [n, c, ss, u, f] = l.split('|');
    const form = f || (c === 'ab' || c === 'ne' && 0 ? 'Tablet' : 'Tablet');
    const mfr = MFR[Math.floor(R() * MFR.length)];
    MEDS[n] = { name: n, cat: c, mfr, form, items: [] };
    ss.split(',').forEach((s, j) => {
        const daily = +(0.6 + R() * R() * 14).toFixed(1), trend = +(R() * .6 - .25).toFixed(2), r = R();
        let dte = r < .03 ? -Math.ceil(5 + R() * 50) : r < .08 ? Math.ceil(1 + R() * 29) : r < .20 ? Math.ceil(31 + R() * 59) : Math.ceil(91 + R() * 630);
        let stock = R() < .04 ? 0 : Math.round(daily * (4 + R() * 140));
        const fc = daily * (1 + trend), price = Math.round(12 + R() * 380), reorder = Math.round(daily * 14);
        const sell = fc > 0 ? stock / fc : 999, sold = Math.max(0, fc * Math.max(dte, 0)), waste = dte < 0 ? stock : Math.max(0, Math.round(stock - sold));
        const ratio = stock ? waste / stock : 0;
        let score = dte < 0 ? 100 : Math.min(99, Math.round(ratio * 75 + (dte < 30 ? 25 : dte < 90 ? 12 : 0)));
        if (!stock) {
            score = 0;
        }
        const level = dte < 0 && stock ? 'Critical' : score >= 70 ? 'Critical' : score >= 40 ? 'High' : score >= 15 ? 'Medium' : 'Low';
        const status = !stock ? 'Out' : stock < reorder ? 'Low-stock' : 'In';
        const m = { id: 'PT-' + String(DB.length + 1).padStart(4, '0'), name: n, strength: s === 'Demo' ? '' : s + ' ' + u, form, cat: c, mfr, batch: 'B' + Math.floor(10000 + R() * 89999), stock, reorder, daily: fc, expiry: new Date(NOW.getTime() + dte * DAY), dte, price, sell, waste, score, level, status,
            expired: dte < 0 && stock > 0,
            action: !stock ? 'Reorder now' : dte < 0 ? 'Quarantine and dispose' : level === 'Critical' ? 'Review supplier return' : level === 'High' ? 'Review for priority dispensing' : status === 'Low-stock' ? 'Reorder soon' : level === 'Medium' ? 'Monitor weekly' : 'No action needed' };
        DB.push(m);
        MEDS[n].items.push(m);
    });
});
const $ = s => document.querySelector(s), esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = n => Math.round(n).toLocaleString('en-IN'), inr = n => '₹' + fmt(n);
const dt = d => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
const temporaryStore = new Map();
const store = { get(k) {
        if (temporaryStore.has(k)) {
            return temporaryStore.get(k);
        }
        try {
            return localStorage.getItem(k);
        }
        catch (e) {
            return null;
        }
    }, set(k, v) {
        temporaryStore.set(k, v);
        try {
            localStorage.setItem(k, v);
        }
        catch (e) {
        }
    }, del(k) {
        temporaryStore.set(k, null);
        try {
            localStorage.removeItem(k);
        }
        catch (e) {
        }
    } };
const L2S = { Low: 'Safe', Medium: 'Warning', High: 'Warning', Critical: 'Danger' }, T2S = { In: 'Safe', 'Low-stock': 'Warning', Out: 'Danger' }, TL = { In: 'In stock', 'Low-stock': 'Low stock', Out: 'Out of stock' };
const tag = (c, l) => `<span class="b ${c}">${l}</span>`, lt = m => tag(L2S[m.level], m.level);
let S = { v: 'dash', q: '', cat: '', stat: '', group: true, page: 1, lvl: '' };

// Switch between dashboard pages.
function go(v) {
    S = { ...S, v, q: '', cat: '', stat: '', lvl: '', page: 1 };
    document.querySelectorAll('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
    scrollTo(0, 0);
    ({ dash, inv, risk, info, alerts, add, states, usability, users })[v]();
}
const head = (t, s) => `<h1>${t}</h1><p class="muted">${s}</p>`;
setInterval(() => {
    const r = $('#rf');
    if (r) {
        r.textContent = new Date().toLocaleTimeString('en-GB');
    }
}, 10000);
/* dashboard */
function mcard(m) {
    const s = L2S[m.level];
    return `<button class="mc c-${s}" onclick="openMed(decodeURIComponent('${encodeURIComponent(m.name).replace(/'/g, '%27')}'))"><div class="r"><div><strong>${esc(m.name)} ${esc(m.strength)}</strong><br><small>${esc(m.form)} · ${esc(m.mfr)}</small></div>${tag(s, m.level)}</div>
 <div class="big">${fmt(m.stock)} <span>units</span></div><div class="pb"><i style="width:${m.score}%"></i></div><small class="muted">Risk score ${m.score} · Warning 40 / Danger 70</small>
 <div class="f"><span>${m.dte < 0 ? 'Expired' : m.dte + ' days left'}</span><span>${esc(m.batch)}</span></div></button>`;
}
const regions = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi'];
const originalCount = DB.length;
for (let i = 0; i < 75; i++) {
    let m = DB[i];
    DB.push({ ...m, id: 'PT-EX-' + String(i + 1).padStart(3, '0'), batch: 'EX-' + (1000 + i), stock: 100 + i * 3, expiry: new Date(NOW.getTime() + (120 + i * 4) * DAY), dte: 120 + i * 4, expired: false, level: 'Low', score: 0, waste: 0 });
}
for (let i = 0; i < 25; i++) {
    let m = DB[i], dte = -i - 2;
    DB.push({ ...m, id: 'PT-OLD-' + String(i + 1).padStart(3, '0'), batch: 'OLD-' + (2000 + i), stock: 30 + i * 2, expiry: new Date(NOW.getTime() + dte * DAY), dte, expired: true, level: 'Critical', score: 100, waste: 30 + i * 2, action: 'Quarantine and dispose' });
}
DB.forEach((m, i) => m.state = regions[i % regions.length]);
const status = m => m.dte < 0 ? 'Expired' : m.dte <= 30 ? 'Critical' : m.dte <= 90 ? 'Warning' : 'Safe';

// Build inventory table rows according to user permissions.
function rows(list, actions = false) {
    return list.map((m, i) => `<tr><td>${i + 1}</td><td><b>${esc(m.name)} ${esc(m.strength)}</b></td><td>${esc(m.mfr)}</td><td>${esc(m.batch)}</td><td>${CAT[m.cat][0]}</td><td>${dt(m.expiry)}</td><td>${m.dte}</td><td>${fmt(m.stock)}</td><td>${inr(m.price)}</td><td>${tag(status(m) === 'Expired' || status(m) === 'Critical' ? 'Danger' : status(m), status(m))}</td><td>${actions ? `<button class="btn alt sm" onclick="openMed(DB[${DB.indexOf(m)}].name)">View</button> ${canWrite() ? `<button class="btn alt sm" onclick="editBatch(${DB.indexOf(m)})">Edit</button>` : ''} ${user?.role === 'admin' ? `<button class="btn alt sm" onclick="deleteBatch(${DB.indexOf(m)})">Delete</button>` : ''}` : '—'}</td></tr>`).join('');
}
const columns = '<thead><tr>' + ['#', 'Medicine', 'Manufacturer', 'Batch', 'Category', 'Expiry', 'Days left', 'Qty', 'Price', 'Status', 'Actions'].map(x => `<th>${x}</th>`).join('') + '</tr></thead>';
function stateRows() {
    return regions.map(r => {
        let a = DB.filter(m => m.state === r);
        return `<tr><td>${r}</td><td>${a.length}</td><td>${fmt(a.reduce((n, m) => n + m.stock, 0))}</td></tr>`;
    }).join('');
}

// Render dashboard counts and inventory search.
function overview(target, auth) {
    const counts = ['Total', 'Expired', 'Critical', 'Warning', 'Safe'].map((x, i) => [x, i ? DB.filter(m => status(m) === x).length : DB.length, ['#4165e5', '#c33430', '#d15725', '#cf802b', '#4c9b55'][i]]);
    $(target).innerHTML = head('Medicine Dashboard', 'Expiry prediction & inventory overview — India · Sample inventory') + `<div class="kpis five">${counts.map(([l, n, c]) => `<div class="box kpi metric" style="--metric:${c}"><small>${l}</small><b>${n}</b><hr></div>`).join('')}</div><div class="summary-grid"><div class="box panel"><div class="panel-head">🗺️ State-wise Distribution ${auth ? '<button class="btn alt sm" onclick="go(\'states\')">View All →</button>' : ''}</div><div class="tw"><table class="mini"><thead><tr><th>State</th><th>Medicines</th><th>Total qty</th></tr></thead><tbody>${stateRows()}</tbody></table></div></div></div><div class="box panel"><div class="panel-head">🗃️ Inventory (${DB.length} medicines / batches)<input type="search" placeholder="Search medicines..." class="ds"></div><div class="tw"><table>${columns}<tbody class="dr">${rows(DB, auth)}</tbody></table></div></div>`;
    $(target + ' .ds').oninput = e => $(target + ' .dr').innerHTML = rows(DB.filter(m => (m.name + ' ' + m.batch).toLowerCase().includes(e.target.value.toLowerCase())), auth);
}
function dash() {
    overview('#main', true);
}

// Display inventory grouped by state.
function states() {
    $('#main').innerHTML = head('State-wise Distribution', 'Inventory by state') + `<div class="box tw"><table><thead><tr><th>State</th><th>Medicines</th><th>Total qty</th></tr></thead><tbody>${stateRows()}</tbody></table></div>`;
}

// Filter batches by expiry date.
function usability() {
    const expired = DB.filter(m => m.dte < 0).length;
    $('#main').innerHTML = head('Usability', 'Expiry-date screening only; pharmacist verification required. Expired stock must not be dispensed.') + `<div class="kpis"><div class="box kpi"><b>${expired}</b><small>Expired batches</small></div><div class="box kpi"><b>${DB.length - expired}</b><small>Unexpired batches</small></div></div><div class="tools"><select id="uf"><option value="Expired">Expired medicines</option><option value="All">All medicines</option><option value="Unexpired">Unexpired medicines</option><option value="Critical">Critical (0–30 days)</option><option value="Warning">Warning (31–90 days)</option><option value="Safe">Over 90 days remaining</option></select></div><div class="box tw"><table>${columns}<tbody id="ur"></tbody></table></div>`;
    function render() {
        let f = $('#uf').value;
        $('#ur').innerHTML = rows(DB.filter(m => f === 'All' || (f === 'Unexpired' ? m.dte >= 0 : status(m) === f)).sort((a, b) => a.dte - b.dte), true) || '<tr><td colspan="11">No matching batches</td></tr>';
    }
    $('#uf').onchange = render;
    render();
}

// Read the medicine form and submit a new batch.
function add() {
    $('#main').innerHTML = head('Add Medicine', 'Add an inventory batch.') + `<form id="af" class="box kpi"><label>Medicine name<input id="aname" required></label><label>Batch<input id="abatch" required></label><label>Manufacturer<input id="amfr" required></label><label>Expiry date<input type="date" id="aexp" required></label><label>Quantity<input type="number" id="aqty" min="0" required></label><label>Price<input type="number" id="aprice" min="0" required></label><p><button class="btn">Add medicine</button></p></form>`;
    $('#af').onsubmit = async (e) => {
        e.preventDefault();
        let name = $('#aname').value.trim();
        if (!name) {
            return;
        }
        let expiry = new Date($('#aexp').value + 'T00:00:00'), dte = Math.round((expiry - NOW) / DAY), stock = +$('#aqty').value, level = dte < 0 ? 'Critical' : dte <= 30 ? 'High' : dte <= 90 ? 'Medium' : 'Low', m = { id: 'PT-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8), name, strength: '', form: 'Unspecified', cat: 'ot', mfr: $('#amfr').value, batch: $('#abatch').value, stock, reorder: 0, daily: 0, expiry, dte, price: +$('#aprice').value, sell: 999, waste: dte < 0 ? stock : 0, score: dte < 0 ? 100 : 0, level, status: stock ? 'In' : 'Out', expired: dte < 0 && stock > 0, action: 'Review manually', state: regions[0] };
        if (await saveChange('medicines', 'POST', m, () => DB.push(m))) {
            go('dash');
        }
    };
}
/* shared */
function pager(n, per, id) {
    const p = Math.max(1, Math.ceil(n / per));
    S.page = Math.min(S.page, p);
    return `<div class="pg"><span class="muted">${n} results</span><span><button class="btn alt sm" ${S.page < 2 ? 'disabled' : ''} onclick="S.page--;${id}()">Previous</button> Page ${S.page} of ${p} <button class="btn alt sm" ${S.page >= p ? 'disabled' : ''} onclick="S.page++;${id}()">Next</button></span></div>`;
}
const catOpts = () => '<option value="">All categories</option>' + Object.entries(CAT).map(([k, v]) => `<option value="${k}" ${S.cat === k ? 'selected' : ''}>${v[0]}</option>`).join('');
function bind(fn) {
    const q = $('#q');
    q.oninput = () => {
        S.q = q.value;
        S.page = 1;
        fn();
    };
    document.querySelectorAll('[data-f]').forEach(s => s.onchange = () => {
        S[s.dataset.f] = s.value;
        S.page = 1;
        fn();
    });
}
const match = m => (!S.q || (m.name + ' ' + m.strength + ' ' + m.mfr + ' ' + m.id).toLowerCase().includes(S.q.toLowerCase())) && (!S.cat || m.cat === S.cat);
/* inventory */
function inv() {
    $('#main').innerHTML = head('Inventory', 'Total medicines and available stock. Select a row for full details.') + `<div class="tools"><input id="q" type="search" placeholder="Search medicine, strength or manufacturer" aria-label="Search"><select data-f="cat" aria-label="Category">${catOpts()}</select>
 <select data-f="stat" aria-label="Stock status"><option value="">Any stock status</option><option value="In">In stock</option><option value="Low-stock">Low stock</option><option value="Out">Out of stock</option></select>
 <div class="seg"><button id="g1" class="${S.group ? 'on' : ''}">By medicine</button><button id="g0" class="${S.group ? '' : 'on'}">By batch</button></div></div><div class="box"><div class="tw" id="tbl"></div></div><div id="pgr"></div>`;
    bind(invT);
    $('#g1').onclick = () => {
        S.group = true;
        S.page = 1;
        inv();
    };
    $('#g0').onclick = () => {
        S.group = false;
        S.page = 1;
        inv();
    };
    invT();
}
function invT() {
    const per = 20;
    let h, n, pg;
    if (S.group) {
        let l = Object.values(MEDS).filter(m => (!S.q || m.name.toLowerCase().includes(S.q.toLowerCase())) && (!S.cat || m.cat === S.cat)).map(m => ({ ...m, stock: m.items.reduce((a, x) => a + x.stock, 0), reorder: m.items.reduce((a, x) => a + x.reorder, 0), risky: m.items.filter(x => x.stock && (x.level === 'Critical' || x.level === 'High')).length, next: m.items.filter(x => x.stock).sort((a, b) => a.dte - b.dte)[0] }));
        l = l.filter(m => !S.stat || (S.stat === 'Out' ? m.stock === 0 : S.stat === 'Low-stock' ? m.stock > 0 && m.stock < m.reorder : m.stock >= m.reorder));
        n = l.length;
        pg = l.slice((S.page - 1) * per, S.page * per);
        h = `<table><thead><tr><th>Medicine</th><th>Category</th><th>Packs</th><th>Total units</th><th>Status</th><th>Nearest expiry</th><th>Risky batches</th></tr></thead><tbody>` + pg.map(m => {
            const s = m.stock === 0 ? 'Out' : m.stock < m.reorder ? 'Low-stock' : 'In';
            return `<tr onclick="openMed(decodeURIComponent('${encodeURIComponent(m.name).replace(/'/g, '%27')}'))"><td><b>${esc(m.name)}</b><br><small class="muted">${esc(m.mfr)}</small></td><td>${CAT[m.cat][0]}</td><td class="n">${m.items.length}</td><td class="n">${fmt(m.stock)}</td><td>${tag(T2S[s], TL[s])}</td><td>${m.next ? dt(m.next.expiry) : '–'}</td><td class="n">${m.risky}</td></tr>`;
        }).join('');
    }
    else {
        const l = DB.filter(m => match(m) && (!S.stat || m.status === S.stat));
        n = l.length;
        pg = l.slice((S.page - 1) * per, S.page * per);
        h = `<table><thead><tr><th>ID</th><th>Medicine</th><th>Form</th><th>Batch</th><th>Available</th><th>Status</th><th>Expiry</th><th>Risk</th></tr></thead><tbody>` + pg.map(m => `<tr onclick="openMed(decodeURIComponent('${encodeURIComponent(m.name).replace(/'/g, '%27')}'))"><td class="muted">${esc(m.id)}</td><td><b>${esc(m.name)}</b> ${esc(m.strength)}</td><td>${esc(m.form)}</td><td>${esc(m.batch)}</td><td class="n">${fmt(m.stock)}</td><td>${tag(T2S[m.status], TL[m.status])}</td><td>${dt(m.expiry)}</td><td>${m.stock ? lt(m) : '–'}</td></tr>`).join('');
    }
    $('#tbl').innerHTML = n ? h + '</tbody></table>' : '<div class="empty">No medicines match. Clear the search or change a filter.</div>';
    $('#pgr').innerHTML = pager(n, per, 'invT');
}
/* risk */
function risk() {
    $('#main').innerHTML = head('Expiry Risk Analysis', 'Demo heuristic (not a trained ML model): each batch is scored by comparing estimated demand with days left before expiry. 70 and above is danger, 40 to 69 is warning.') + `<div class="tools"><input id="q" type="search" placeholder="Search medicine" aria-label="Search"><select data-f="cat" aria-label="Category">${catOpts()}</select>
 <select data-f="lvl" aria-label="Risk level"><option value="">All risk levels</option>${['Critical', 'High', 'Medium', 'Low'].map(l => `<option>${l}</option>`).join('')}</select></div><div class="box"><div class="tw" id="tbl"></div></div><div id="pgr"></div>`;
    bind(riskT);
    riskT();
}
function riskT() {
    const per = 20, l = DB.filter(m => m.stock && match(m) && (!S.lvl || m.level === S.lvl)).sort((a, b) => b.score - a.score || b.waste * b.price - a.waste * a.price), n = l.length, pg = l.slice((S.page - 1) * per, S.page * per);
    $('#tbl').innerHTML = n ? `<table><thead><tr><th>Medicine</th><th>Stock</th><th>Days to expiry</th><th>Forecast sell-out</th><th>Risk</th><th>Units at risk</th><th>Value</th><th>Recommended action</th></tr></thead><tbody>` + pg.map(m => `<tr onclick="openMed(decodeURIComponent('${encodeURIComponent(m.name).replace(/'/g, '%27')}'))"><td><b>${esc(m.name)}</b> ${esc(m.strength)}<br><small class="muted">${esc(m.batch)}</small></td><td class="n">${fmt(m.stock)}</td><td class="n">${m.dte < 0 ? tag('Danger', 'Expired') : m.dte}</td><td class="n">${m.sell > 900 ? 'No demand' : Math.round(m.sell) + ' days'}</td><td>${lt(m)} <small>${m.score}</small></td><td class="n">${fmt(m.waste)}</td><td class="n">${inr(m.waste * m.price)}</td><td>${esc(m.action)}</td></tr>`).join('') + '</tbody></table>' : '<div class="empty">No batches at this risk level.</div>';
    $('#pgr').innerHTML = pager(n, per, 'riskT');
}
/* medicine info */
function info() {
    $('#main').innerHTML = head('Medicine Information', `${Object.keys(MEDS).length} medicines with uses, side effects, storage and stock.`) + `<div class="tools"><input id="q" type="search" placeholder="Search medicines" aria-label="Search"><select data-f="cat" aria-label="Category">${catOpts()}</select></div><div class="cards" id="cds"></div>`;
    bind(infoT);
    infoT();
}
function infoT() {
    const l = Object.values(MEDS).filter(m => (!S.q || m.name.toLowerCase().includes(S.q.toLowerCase())) && (!S.cat || m.cat === S.cat));
    $('#cds').innerHTML = l.length ? l.map(m => {
        const u = m.items.reduce((a, x) => a + x.stock, 0), r = m.items.reduce((a, x) => a + x.reorder, 0), s = u === 0 ? 'Out' : u < r ? 'Low-stock' : 'In';
        return `<button class="mc c-${T2S[s]}" onclick="openMed(decodeURIComponent('${encodeURIComponent(m.name).replace(/'/g, '%27')}'))"><div class="r"><strong>${esc(m.name)}</strong>${tag(T2S[s], TL[s])}</div><small>${CAT[m.cat][0]} · ${esc(m.form)}</small><div class="big">${fmt(u)} <span>units</span></div><div class="f"><span>${m.items.length} strengths</span><span>${esc(m.mfr)}</span></div></button>`;
    }).join('') : '<div class="empty">No medicines found for that search.</div>';
}
/* alerts + admin */
function alerts() {
    const A = [];
    DB.forEach(m => {
        if (m.expired) {
            A.push([0, m, 'Expired – ' + fmt(m.stock) + ' units must be removed from stock', 'Danger']);
        }
        else if (m.stock && m.level === 'Critical') {
            A.push([1, m, 'Expires in ' + m.dte + ' days with ' + fmt(m.waste) + ' units unlikely to sell', 'Danger']);
        }
        else if (!m.stock) {
            A.push([2, m, 'Out of stock – reorder now', 'Danger']);
        }
        else if (m.stock && m.level === 'High') {
            A.push([3, m, 'High expiry risk – dispense first', 'Warning']);
        }
        else if (m.status === 'Low-stock') {
            A.push([4, m, 'Low stock – ' + fmt(m.stock) + ' left, reorder level ' + fmt(m.reorder), 'Warning']);
        }
    });
    A.sort((a, b) => a[0] - b[0]);
    $('#main').innerHTML = head('Alerts', `${A.length} active alerts, most urgent first.`) + A.slice(0, 60).map(([, m, t, s]) => `<div class="al c-${s}" onclick="openMed(decodeURIComponent('${encodeURIComponent(m.name).replace(/'/g, '%27')}'))"><span><b>${esc(m.name)} ${esc(m.strength)}</b> · ${esc(m.batch)}<br><span class="muted">${t}</span></span>${tag(s, s)}</div>`).join('') + (A.length > 60 ? `<p class="muted">Showing the 60 most urgent alerts.</p>` : '');
}
function openMed(n) {
    const m = MEDS[n], c = CAT[m.cat];
    $('#mbody').innerHTML = `<div style="display:flex;justify-content:space-between;gap:1rem"><div><h2>${esc(m.name)}</h2><span class="muted">${c[0]} · ${esc(m.form)}</span></div><button class="btn alt sm" id="x">Close</button></div>
 <dl class="dl"><dt>Used for</dt><dd>See verified product information</dd><dt>Common side effects</dt><dd>See package leaflet</dd><dt>Storage</dt><dd>Follow product label</dd><dt>Manufacturer</dt><dd>${esc(m.mfr)}</dd></dl>
 <h3 style="font-size:1rem;margin-bottom:.5rem">Stock by strength</h3><div class="tw"><table style="min-width:520px"><thead><tr><th>Strength</th><th>Available</th><th>Expiry</th><th>Risk</th><th>Price</th></tr></thead><tbody>${m.items.map(x => `<tr style="cursor:default"><td>${esc(x.strength)}</td><td class="n">${fmt(x.stock)}</td><td>${dt(x.expiry)}</td><td>${x.stock ? lt(x) : tag('Danger', 'Out of stock')}</td><td>${inr(x.price)}</td></tr>`).join('')}</tbody></table></div>
 <p class="muted" style="font-size:12px;margin-bottom:0">Illustrative category information and synthetic stock data; not verified product-specific guidance. Check the actual medicine label and pharmacist guidance.</p>`;
    $('#modal').classList.remove('hide');
    $('#x').focus();
    $('#x').onclick = closeM;
}
function closeM() {
    $('#modal').classList.add('hide');
}
$('#modal').onclick = e => {
    if (e.target.id === 'modal') {
        closeM();
    }
};
addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeM();
    }
});
const V = [['dash', 'Dashboard'], ['add', '+ Add Medicine'], ['states', 'States'], ['usability', 'Usability'], ['info', 'Knowledge']];
$('#tabs').innerHTML = V.map(([k, l]) => `<button data-v="${k}">${l}</button>`).join('');
$('#tabs').onclick = e => {
    const b = e.target.closest('button');
    if (b) {
        go(b.dataset.v);
    }
};
const expandedSeeds = DB.filter(m => m.id.startsWith("PT-EX-") || m.id.startsWith("PT-OLD-"));
let online = false;

// Recalculate expiry information and group medicine batches.
function rebuild() {
    Object.keys(MEDS).forEach(k => delete MEDS[k]);
    DB.forEach(m => {
        m.expiry = new Date(m.expiry);
        m.dte = Math.round((m.expiry - NOW) / DAY);
        m.expired = m.dte < 0 && m.stock > 0;
        m.level = m.dte < 0 ? 'Critical' : m.dte <= 30 ? 'High' : m.dte <= 90 ? 'Medium' : 'Low';
        m.status = m.stock ? 'In' : 'Out';
        (MEDS[m.name] ??= { name: m.name, cat: m.cat, mfr: m.mfr, form: m.form, items: [] }).items.push(m);
    });
}

// Send a JSON request to the Flask backend.
async function api(path, method = 'GET', data) {
    const r = await fetch('/api/' + path, { method, headers: { 'Content-Type': 'application/json' }, ...(data === undefined ? {} : { body: JSON.stringify(data) }) });
    if (!r.ok) {
        throw Error(await r.text());
    }
    return r.json();
}
let user = null, registering = false;
const canWrite = () => ['admin', 'shopkeeper'].includes(user?.role);

// Load real inventory records from MongoDB through the API.
async function init() {
    let data = await api('inventory');
    DB.splice(0, DB.length, ...data.medicines);
    online = true;
    rebuild();
    $('#dbstatus').textContent = 'MongoDB connected';
    go('dash');
}

// Update the server before updating the local interface.
async function saveChange(path, method, data, local) {
    try {
        await api(path, method, data);
        local();
        rebuild();
        return true;
    }
    catch (e) {
        alert('Save failed: ' + e.message);
        return false;
    }
}

// Switch between login and registration forms.
function toggleAuth() {
    registering = !registering;
    $('#regfields').classList.toggle('hide', !registering);
    $('#uname').required = registering;
    $('#password').autocomplete = registering ? 'new-password' : 'current-password';
    $('#authsubmit').textContent = registering ? 'Register' : 'Sign in';
    $('#switchauth').textContent = registering ? 'Back to login' : 'Create account';
    $('#authmsg').textContent = '';
}
$('#switchauth').onclick = toggleAuth;

// Display the signed-in user and permitted navigation tabs.
async function enter(u) {
    user = u;
    await init();
    $('#identity').textContent = u.name + ' · ' + u.role;
    $('#tabs').innerHTML = [...V.filter(([k]) => k !== 'add' || canWrite()), ...(u.role === 'admin' ? [['users', 'Manage Users']] : [])].map(([k, l]) => `<button data-v="${k}">${l}</button>`).join('');
    $('#auth').classList.add('hide');
    $('#app').classList.remove('hide');
    go('dash');
}
$('#authform').onsubmit = async (e) => {
    e.preventDefault();
    $('#authsubmit').disabled = true;
    try {
        let data = { email: $('#email').value, password: $('#password').value, name: $('#uname').value, role: $('#urole').value };
        if (registering) {
            let result = await api('register', 'POST', data);
            toggleAuth();
            $('#authmsg').textContent = result.approved ? 'Account created. Sign in.' : 'Account created. Await admin approval.';
        }
        else {
            await enter(await api('login', 'POST', data));
        }
        $('#password').value = '';
    }
    catch (e) {
        $('#authmsg').textContent = e.message;
    }
    finally {
        $('#authsubmit').disabled = false;
    }
};
$('#logout').onclick = async () => {
    try {
        await api('logout', 'POST', {});
        location.reload();
    }
    catch (e) {
        alert(e.message);
    }
};

// Allow the administrator to approve or suspend shopkeepers.
async function users() {
    try {
        let list = await api('users');
        $('#main').innerHTML = head('Manage Users', 'Approve or suspend shopkeeper accounts.') + '<div class="box tw"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Action</th></tr></thead><tbody>' + list.map((u, i) => `<tr><td>${esc(u.name)}</td><td>${esc(u.email)}</td><td>${esc(u.role)}</td><td>${u.approved ? 'Active' : 'Pending / suspended'}</td><td>${u.role === 'shopkeeper' ? `<button class="btn alt sm" data-user="${i}">${u.approved ? 'Suspend' : 'Approve'}</button>` : '—'}</td></tr>`).join('') + '</tbody></table></div>';
        document.querySelectorAll('[data-user]').forEach(b => b.onclick = async () => {
            let u = list[+b.dataset.user];
            try {
                await api('users/' + encodeURIComponent(u.email), 'PATCH', { approved: !u.approved });
                users();
            }
            catch (e) {
                alert(e.message);
            }
        });
    }
    catch (e) {
        $('#main').textContent = e.message;
    }
}

// Validate and update stock, price and expiry.
async function editBatch(i) {
    if (!canWrite()) {
        return;
    }
    let m = DB[i];
    let q = prompt('New quantity', m.stock);
    if (q === null) {
        return;
    }
    let p = prompt('New price', m.price);
    if (p === null) {
        return;
    }
    let ex = prompt('Expiry date (YYYY-MM-DD)', m.expiry.toISOString().slice(0, 10));
    if (ex === null) {
        return;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(ex) || !Number.isFinite(Date.parse(ex)) || !Number.isInteger(+q) || +q < 0 || !Number.isFinite(+p) || +p < 0) {
        return alert('Invalid values');
    }
    let patch = { stock: +q, price: +p, expiry: new Date(ex + 'T00:00:00').toISOString() };
    if (await saveChange('medicines/' + encodeURIComponent(m.id), 'PATCH', patch, () => Object.assign(m, patch))) {
        go('dash');
    }
}

// Allow only administrators to request deletion.
async function deleteBatch(i) {
    if (user?.role !== 'admin') {
        return;
    }
    let m = DB[i];
    if (confirm('Delete ' + m.name + '?') && await saveChange('medicines/' + encodeURIComponent(m.id), 'DELETE', undefined, () => DB.splice(i, 1))) {
        go('dash');
    }
}
api('me').then(enter).catch(() => {
});
