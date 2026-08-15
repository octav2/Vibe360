'use strict';
const fs = require('fs');
const files = fs.readdirSync('locations').filter(f => /^photo-booth-hire-.+\.html$/.test(f)).sort();
let allOk = true;
for (const f of files) {
  const c = fs.readFileSync('locations/' + f, 'utf8');
  const m = c.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let json = 'NO MATCH';
  let validSchema = false;
  if (m) { try { const j = JSON.parse(m[1].trim()); json = "type=" + j['@type']; validSchema = j['@type'] === 'LocalBusiness'; } catch (e) { json = 'INVALID ' + e.message; allOk = false; } } else { allOk = false; }
  const h1 = (c.match(/<h1>([^<]*)<\/h1>/) || [])[1] ? c.match(/<h1>([^<]*)<\/h1>/)[1].slice(0, 45) : '?';
  const ctas = (c.match(/Check Availability in [^<]*/g) || []).length;
  const locLinks = (c.match(/\/locations\/photo-booth-hire-/g) || []).length;
    const phoneProp = /"telephone"\s*:/.test(c);   // only the JSON-LD schema key counts
  const rawPhone = /(tel:|wa\.me|\+44)/i.test(c);   // no actual phone numbers/URLs
  if (!validSchema || phoneProp || rawPhone) allOk = false;
  console.log(f.padEnd(38) + ' h1=' + h1 + '  parse=' + json + '  availCtas= ' + ctas + '  locLinks=' + locLinks + '  telProp=' + phoneProp + '  rawPhone=' + rawPhone);
}
console.log('\nALL ' + files.length + ' files:', allOk ? 'VALID & COMPLIANT' : 'ISSUES FOUND');
