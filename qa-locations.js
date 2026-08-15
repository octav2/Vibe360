'use strict';
const fs = require('fs');
const dir = 'locations';
const files = fs.readdirSync(dir).filter(f => /^photo-booth-hire-.+\.html$/.test(f)).sort();
let bad = 0;
for (const f of files) {
  const c = fs.readFileSync(dir + '/' + f, 'utf8');
  const m = c.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let parse = 'NO-LDJSON';
  let validSchema = false;
  if (m) {
    try { const j = JSON.parse(m[1].trim()); parse = 'LocalBusiness:' + j['@type']; validSchema = j['@type'] === 'LocalBusiness'; }
    catch (e) { parse = 'INVALID ' + e.message; }
  }
  const phoneProp = /"telephone"/.test(c);
  const rawPhone = /(tel:|wa\.me|\+44)/i.test(c);
  const nonAscii = Buffer.byteLength(c, 'utf8') - Buffer.from(c, 'ascii').length;
  const whyCards = (c.match(/class="why-card"/g) || []).length;
  const checks = {
    grid2x2: c.includes('class="grid-2x2"'),
    whyCards: whyCards === 4,
    venuePill: c.includes('class="venue-pills-container"'),
    venueLabel: c.includes('TRUSTED BY TOP VENUES'),
    popular: c.includes('class="badge-popular">MOST POPULAR'),
    bundle: c.includes('badge-bundle'),
    highlight: c.includes('class="pricing-card featured card-highlight"'),
    btns: c.includes('Book Selfie Pod') && c.includes('Book 360 Experience') && c.includes('Reserve VIP Bundle'),
    footerNoDot: c.includes('Event Rentals, Buckinghamshire') && !c.includes('Event Rentals &middot;'),
    coverage: c.includes('coverage-grid loc-coverage'),
    charset: c.includes('<meta charset="UTF-8"'),
    parse,
    phoneProp,
    rawPhone,
    nonAscii,
  };
  const ok = checks.grid2x2 && checks.whyCards && checks.venuePill && checks.venueLabel && checks.popular && checks.bundle && checks.highlight && checks.btns && checks.footerNoDot && checks.coverage && checks.charset && validSchema && !phoneProp && !rawPhone && nonAscii === 0;
  if (!ok) bad++;
  console.log((ok ? 'OK   ' : 'FAIL ') + f.padEnd(40) + ' | nonAscii=' + nonAscii + ' phone=' + rawPhone + ' telProp=' + phoneProp + ' parse=' + parse + ' whyCards=' + whyCards + ' badges=' + (checks.popular && checks.bundle) + ' btns=' + checks.btns + ' footerClean=' + checks.footerNoDot);
}
console.log('\n' + bad + ' of ' + files.length + ' pages FAILED');
