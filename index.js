import figlet from 'figlet';
import fs from 'fs/promises';
import { createInterface } from 'readline/promises';
import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { ethers } from 'ethers';
import randomUseragent from 'random-useragent';
import ora from 'ora';
import chalk from 'chalk';
import moment from 'moment-timezone';
import crypto from 'crypto';
import FormData from 'form-data';

function getTimestamp() {
  return moment().tz('Asia/Jakarta').format('D/M/YYYY, HH:mm:ss');
}

function displayBanner() {
  const width = process.stdout.columns || 80;
  const banner = figlet.textSync('\n NT EXHAUST', { font: "ANSI Shadow", horizontalLayout: 'Speed' });
  banner.split('\n').forEach(line => {
    console.log(chalk.cyanBright(line.padStart(line.length + Math.floor((width - line.length) / 2))));
  });
  console.log(chalk.cyanBright(' '.repeat((width - 50) / 2) + '=== Telegram Channel 🚀 : NT Exhaust ( @NTExhaust ) ==='));
  console.log(chalk.yellowBright(' '.repeat((width - 30) / 2) + '✪ BOT PERSPECTIVE AI AUTO DAILY CHAT ✪\n'));
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function promptUser(question) {
  const answer = await rl.question(chalk.white(question));
  return answer.trim();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(text, color, noType = false) {
  if (isSpinnerActive) await sleep(500);
  const maxLength = 80;
  const displayText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  if (noType) {
    console.log(color(` ┊ │ ${displayText}`));
    return;
  }
  const totalTime = 200;
  const sleepTime = displayText.length > 0 ? totalTime / displayText.length : 1;
  console.log(color(' ┊ ┌── Response Chat API ──'));
  process.stdout.write(color(' ┊ │ '));
  for (const char of displayText) {
    process.stdout.write(char);
    await sleep(sleepTime);
  }
  process.stdout.write('\n');
  console.log(color(' ┊ └──'));
}

function createProgressBar(current, total) {
  const barLength = 30;
  const filled = Math.round((current / total) * barLength);
  return `[${'█'.repeat(filled)}${' '.repeat(barLength - filled)} ${current}/${total}]`;
}

function displayHeader(text, color, forceClear = false) {
  if (isSpinnerActive) return;
  if (forceClear) console.clear();
  console.log(color(text));
}

function isValidPrivateKey(pk) {
  return /^0x[a-fA-F0-9]{64}$|^[a-fA-F0-9]{64}$/.test(pk);
}

let isSpinnerActive = false;

async function clearConsoleLine() {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
}

function a0_0x14b0(_0x45c329,_0x5ab0e7){const _0x37d245=a0_0x37d2();return a0_0x14b0=function(_0x14b0be,_0x449733){_0x14b0be=_0x14b0be-0x1d8;let _0x41e559=_0x37d245[_0x14b0be];if(a0_0x14b0['\x72\x6c\x59\x71\x73\x67']===undefined){var _0x3ed5e4=function(_0x41e276){const _0x11cdc4='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x59fe89='',_0x215d1e='';for(let _0x2583eb=0x0,_0x4140b1,_0x33ec18,_0xf6f47=0x0;_0x33ec18=_0x41e276['\x63\x68\x61\x72\x41\x74'](_0xf6f47++);~_0x33ec18&&(_0x4140b1=_0x2583eb%0x4?_0x4140b1*0x40+_0x33ec18:_0x33ec18,_0x2583eb++%0x4)?_0x59fe89+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x4140b1>>(-0x2*_0x2583eb&0x6)):0x0){_0x33ec18=_0x11cdc4['\x69\x6e\x64\x65\x78\x4f\x66'](_0x33ec18);}for(let _0x58d3c3=0x0,_0x1290aa=_0x59fe89['\x6c\x65\x6e\x67\x74\x68'];_0x58d3c3<_0x1290aa;_0x58d3c3++){_0x215d1e+='\x25'+('\x30\x30'+_0x59fe89['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x58d3c3)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x215d1e);};a0_0x14b0['\x58\x66\x5a\x69\x47\x52']=_0x3ed5e4,_0x45c329=arguments,a0_0x14b0['\x72\x6c\x59\x71\x73\x67']=!![];}const _0x5911a6=_0x37d245[0x0],_0x12bcc8=_0x14b0be+_0x5911a6,_0x4a6b4c=_0x45c329[_0x12bcc8];return!_0x4a6b4c?(_0x41e559=a0_0x14b0['\x58\x66\x5a\x69\x47\x52'](_0x41e559),_0x45c329[_0x12bcc8]=_0x41e559):_0x41e559=_0x4a6b4c,_0x41e559;},a0_0x14b0(_0x45c329,_0x5ab0e7);}(function(_0x33ac46,_0x2cdd26){const _0x558847=a0_0x14b0,_0x2a1528=_0x33ac46();while(!![]){try{const _0xb90221=-parseInt(_0x558847(0x1ef))/0x1*(-parseInt(_0x558847(0x239))/0x2)+-parseInt(_0x558847(0x220))/0x3*(parseInt(_0x558847(0x250))/0x4)+-parseInt(_0x558847(0x215))/0x5+-parseInt(_0x558847(0x1f9))/0x6*(parseInt(_0x558847(0x25b))/0x7)+-parseInt(_0x558847(0x21c))/0x8+parseInt(_0x558847(0x25f))/0x9+parseInt(_0x558847(0x224))/0xa;if(_0xb90221===_0x2cdd26)break;else _0x2a1528['push'](_0x2a1528['shift']());}catch(_0x3640cd){_0x2a1528['push'](_0x2a1528['shift']());}}}(a0_0x37d2,0xdd0a0));async function initSiwe(_0x4be1ff,_0x203bff=null,_0x1cbb4e=0x0){const _0x3eb408=a0_0x14b0,_0x108154={'\x76\x77\x68\x6b\x42':function(_0x41e306){return _0x41e306();},'\x72\x6b\x71\x73\x4e':function(_0x1d2ac5,_0x10a982){return _0x1d2ac5(_0x10a982);},'\x6a\x42\x73\x5a\x57':function(_0x156836,_0x5d2948){return _0x156836>_0x5d2948;},'\x62\x62\x69\x61\x4d':_0x3eb408(0x234),'\x72\x52\x76\x4f\x48':_0x3eb408(0x1d9),'\x64\x6e\x4d\x4c\x6d':_0x3eb408(0x235),'\x66\x74\x66\x6b\x73':'\x65\x6e\x2d\x55\x53\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x39\x2c\x69\x64\x3b\x71\x3d\x30\x2e\x38','\x63\x70\x66\x56\x52':'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x70\x2e\x70\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65\x61\x69\x2e\x78\x79\x7a','\x4a\x45\x61\x50\x72':_0x3eb408(0x22e),'\x4a\x4e\x53\x59\x65':_0x3eb408(0x227),'\x65\x41\x76\x4e\x74':_0x3eb408(0x244),'\x68\x6c\x48\x42\x51':_0x3eb408(0x1f2),'\x57\x76\x62\x46\x73':_0x3eb408(0x20b),'\x50\x78\x43\x55\x48':_0x3eb408(0x1f8),'\x58\x44\x56\x6a\x77':_0x3eb408(0x23d),'\x67\x48\x6a\x51\x53':_0x3eb408(0x25a),'\x55\x78\x53\x62\x45':_0x3eb408(0x210),'\x53\x58\x6a\x76\x50':_0x3eb408(0x206),'\x72\x45\x6e\x4b\x77':function(_0x540e74,_0x4625df){return _0x540e74(_0x4625df);},'\x41\x61\x4a\x65\x72':function(_0x3e74d5,_0x37dd21){return _0x3e74d5<_0x37dd21;},'\x6e\x72\x65\x6d\x72':function(_0x56b962,_0x2cfdb2){return _0x56b962+_0x2cfdb2;},'\x50\x57\x65\x4b\x73':function(_0x5ef785,_0x422ea7,_0x24e5b2,_0x217c41){return _0x5ef785(_0x422ea7,_0x24e5b2,_0x217c41);},'\x74\x67\x6f\x48\x71':function(_0x4f7c12,_0x3cc08c){return _0x4f7c12(_0x3cc08c);},'\x6e\x72\x43\x45\x70':function(_0x3900c5){return _0x3900c5();}},_0x551735=0x5;await _0x108154[_0x3eb408(0x1fe)](clearConsoleLine);const _0x1b1c85=_0x108154[_0x3eb408(0x21e)](ora,{'\x74\x65\x78\x74':chalk['\x63\x79\x61\x6e'](_0x3eb408(0x1f7)+(_0x108154[_0x3eb408(0x1f6)](_0x1cbb4e,0x0)?'\x20\x5b\x52\x65\x74\x72\x79\x20\x6b\x65\x2d'+_0x1cbb4e+'\x2f'+_0x551735+'\x5d':'')),'\x70\x72\x65\x66\x69\x78\x54\x65\x78\x74':'','\x73\x70\x69\x6e\x6e\x65\x72':_0x108154['\x62\x62\x69\x61\x4d'],'\x69\x6e\x74\x65\x72\x76\x61\x6c':0x78})[_0x3eb408(0x230)]();isSpinnerActive=!![];try{let _0x195d04={'\x68\x65\x61\x64\x65\x72\x73':{'\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65':_0x3eb408(0x1d9),'\x41\x63\x63\x65\x70\x74':_0x108154[_0x3eb408(0x23b)],'\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':_0x108154[_0x3eb408(0x1f0)],'\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':_0x108154[_0x3eb408(0x263)],'\x4f\x72\x69\x67\x69\x6e':_0x108154[_0x3eb408(0x202)],'\x50\x72\x69\x6f\x72\x69\x74\x79':_0x108154[_0x3eb408(0x22d)],'\x50\x72\x69\x76\x79\x2d\x41\x70\x70\x2d\x49\x64':_0x108154[_0x3eb408(0x20c)],'\x50\x72\x69\x76\x79\x2d\x43\x61\x2d\x49\x64':_0x108154[_0x3eb408(0x216)],'\x50\x72\x69\x76\x79\x2d\x43\x6c\x69\x65\x6e\x74':_0x3eb408(0x25c),'\x52\x65\x66\x65\x72\x65\x72':_0x108154[_0x3eb408(0x222)],'\x53\x65\x63\x2d\x43\x68\x2d\x55\x61':_0x108154[_0x3eb408(0x1e6)],'\x53\x65\x63\x2d\x43\x68\x2d\x55\x61\x2d\x4d\x6f\x62\x69\x6c\x65':'\x3f\x30','\x53\x65\x63\x2d\x43\x68\x2d\x55\x61\x2d\x50\x6c\x61\x74\x66\x6f\x72\x6d':_0x108154[_0x3eb408(0x23f)],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x44\x65\x73\x74':_0x108154[_0x3eb408(0x1e4)],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x4d\x6f\x64\x65':_0x3eb408(0x1da),'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x53\x69\x74\x65':_0x108154['\x67\x48\x6a\x51\x53'],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x53\x74\x6f\x72\x61\x67\x65\x2d\x41\x63\x63\x65\x73\x73':_0x3eb408(0x22f),'\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':randomUseragent[_0x3eb408(0x204)]()}};_0x203bff&&(_0x195d04[_0x3eb408(0x259)]=new HttpsProxyAgent(_0x203bff),_0x195d04[_0x3eb408(0x1ed)]=new HttpsProxyAgent(_0x203bff));const _0x575d89={'\x61\x64\x64\x72\x65\x73\x73':_0x4be1ff},_0x4241ab=await axios[_0x3eb408(0x260)](_0x108154[_0x3eb408(0x24d)],_0x575d89,_0x195d04),{nonce:_0x3328ec}=_0x4241ab[_0x3eb408(0x262)];if(!_0x3328ec)throw new Error(_0x108154[_0x3eb408(0x1fb)]);return _0x1b1c85['\x73\x75\x63\x63\x65\x65\x64'](chalk[_0x3eb408(0x1db)](_0x3eb408(0x229))),await _0x108154[_0x3eb408(0x209)](sleep,0x1f4),_0x3328ec;}catch(_0x4379d4){if(_0x108154[_0x3eb408(0x226)](_0x1cbb4e,_0x551735-0x1))return _0x1b1c85[_0x3eb408(0x20a)]=chalk['\x63\x79\x61\x6e']('\x20\u250a\x20\u2192\x20\x49\x6e\x69\x74\x69\x61\x6c\x69\x7a\x69\x6e\x67\x20\x5b\x52\x65\x74\x72\x79\x20\x6b\x65\x2d'+_0x108154[_0x3eb408(0x1d8)](_0x1cbb4e,0x1)+'\x2f'+_0x551735+'\x5d'),await _0x108154[_0x3eb408(0x209)](sleep,0x1388),_0x108154[_0x3eb408(0x1f1)](initSiwe,_0x4be1ff,_0x203bff,_0x108154[_0x3eb408(0x1d8)](_0x1cbb4e,0x1));_0x1b1c85[_0x3eb408(0x22a)](chalk[_0x3eb408(0x254)](_0x3eb408(0x23e)+_0x4379d4['\x6d\x65\x73\x73\x61\x67\x65'])),await _0x108154[_0x3eb408(0x228)](sleep,0x1f4);throw _0x4379d4;}finally{_0x1b1c85['\x73\x74\x6f\x70'](),isSpinnerActive=![],await _0x108154[_0x3eb408(0x1fa)](clearConsoleLine);}}async function authenticateSiwe(_0xbaad8e,_0x1b774a,_0x3baf97,_0x2be65c=null,_0x330750=0x0){const _0x523104=a0_0x14b0,_0x2845e6={'\x73\x7a\x48\x66\x59':function(_0x15d71f){return _0x15d71f();},'\x4e\x52\x43\x4e\x6c':function(_0x25eb56,_0x31cbee){return _0x25eb56(_0x31cbee);},'\x55\x59\x48\x48\x62':function(_0x1e387c,_0x41b3b6){return _0x1e387c>_0x41b3b6;},'\x42\x6e\x4b\x6e\x44':_0x523104(0x234),'\x71\x6f\x6f\x48\x79':_0x523104(0x235),'\x59\x4d\x77\x55\x65':_0x523104(0x258),'\x5a\x4d\x68\x63\x43':_0x523104(0x22e),'\x61\x64\x69\x6f\x69':'\x63\x6d\x63\x33\x37\x33\x75\x75\x63\x30\x31\x65\x39\x6a\x70\x30\x6d\x34\x70\x78\x33\x72\x6a\x63\x63','\x78\x78\x73\x42\x57':_0x523104(0x244),'\x5a\x6d\x78\x6c\x50':_0x523104(0x25c),'\x77\x6f\x58\x47\x56':_0x523104(0x1f2),'\x63\x61\x67\x50\x77':_0x523104(0x20b),'\x69\x66\x4b\x70\x7a':_0x523104(0x1f8),'\x61\x51\x58\x47\x4d':_0x523104(0x23d),'\x41\x42\x62\x50\x65':_0x523104(0x25a),'\x54\x48\x61\x42\x43':_0x523104(0x22f),'\x4e\x61\x47\x6e\x78':'\x65\x69\x70\x31\x35\x35\x3a\x31','\x4b\x78\x53\x56\x6f':_0x523104(0x221),'\x4c\x63\x72\x55\x78':_0x523104(0x21a),'\x41\x6c\x55\x58\x7a':_0x523104(0x22c),'\x77\x77\x4a\x58\x79':_0x523104(0x25d),'\x76\x55\x74\x44\x4e':_0x523104(0x1e3),'\x54\x73\x5a\x49\x46':function(_0x15b8d4,_0x331e62){return _0x15b8d4<_0x331e62;},'\x44\x67\x4e\x64\x55':function(_0x369d13,_0x229679){return _0x369d13+_0x229679;},'\x63\x56\x41\x44\x47':function(_0x4fe65f,_0x1b0214,_0x2f9dd5,_0x4b9fe5,_0x120910,_0x4bf201){return _0x4fe65f(_0x1b0214,_0x2f9dd5,_0x4b9fe5,_0x120910,_0x4bf201);},'\x64\x45\x78\x70\x49':function(_0x194f1b,_0x416fb2){return _0x194f1b+_0x416fb2;},'\x41\x66\x63\x4e\x61':function(_0x5907ed,_0xfff1b){return _0x5907ed(_0xfff1b);},'\x7a\x54\x75\x42\x4c':function(_0x845ac6){return _0x845ac6();}},_0x17edc6=0x5;await _0x2845e6['\x73\x7a\x48\x66\x59'](clearConsoleLine);const _0xc4c33=_0x2845e6['\x4e\x52\x43\x4e\x6c'](ora,{'\x74\x65\x78\x74':chalk[_0x523104(0x245)](_0x523104(0x233)+(_0x2845e6[_0x523104(0x25e)](_0x330750,0x0)?_0x523104(0x257)+_0x330750+'\x2f'+_0x17edc6+'\x5d':'')),'\x70\x72\x65\x66\x69\x78\x54\x65\x78\x74':'','\x73\x70\x69\x6e\x6e\x65\x72':_0x2845e6[_0x523104(0x203)],'\x69\x6e\x74\x65\x72\x76\x61\x6c':0x78})[_0x523104(0x230)]();isSpinnerActive=!![];try{const _0x5a4e56=new ethers[(_0x523104(0x251))](_0x1b774a),_0x2538ef=new Date()[_0x523104(0x1e9)](),_0x1bf9ed=_0x523104(0x21d)+_0xbaad8e+_0x523104(0x1eb)+_0x3baf97+_0x523104(0x1e1)+_0x2538ef+_0x523104(0x261),_0x24ab85=await _0x5a4e56[_0x523104(0x246)](_0x1bf9ed);let _0x411cbd={'\x68\x65\x61\x64\x65\x72\x73':{'\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65':_0x523104(0x1d9),'\x41\x63\x63\x65\x70\x74':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':_0x2845e6[_0x523104(0x20d)],'\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':'\x65\x6e\x2d\x55\x53\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x39\x2c\x69\x64\x3b\x71\x3d\x30\x2e\x38','\x4f\x72\x69\x67\x69\x6e':_0x2845e6[_0x523104(0x1f3)],'\x50\x72\x69\x6f\x72\x69\x74\x79':_0x2845e6[_0x523104(0x1f5)],'\x50\x72\x69\x76\x79\x2d\x41\x70\x70\x2d\x49\x64':_0x2845e6[_0x523104(0x1e5)],'\x50\x72\x69\x76\x79\x2d\x43\x61\x2d\x49\x64':_0x2845e6[_0x523104(0x218)],'\x50\x72\x69\x76\x79\x2d\x43\x6c\x69\x65\x6e\x74':_0x2845e6[_0x523104(0x238)],'\x52\x65\x66\x65\x72\x65\x72':_0x2845e6[_0x523104(0x237)],'\x53\x65\x63\x2d\x43\x68\x2d\x55\x61':_0x2845e6['\x63\x61\x67\x50\x77'],'\x53\x65\x63\x2d\x43\x68\x2d\x55\x61\x2d\x4d\x6f\x62\x69\x6c\x65':'\x3f\x30','\x53\x65\x63\x2d\x43\x68\x2d\x55\x61\x2d\x50\x6c\x61\x74\x66\x6f\x72\x6d':_0x2845e6['\x69\x66\x4b\x70\x7a'],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x44\x65\x73\x74':_0x2845e6[_0x523104(0x252)],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x4d\x6f\x64\x65':_0x523104(0x1da),'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x53\x69\x74\x65':_0x2845e6[_0x523104(0x211)],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x53\x74\x6f\x72\x61\x67\x65\x2d\x41\x63\x63\x65\x73\x73':_0x2845e6['\x54\x48\x61\x42\x43'],'\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':randomUseragent['\x67\x65\x74\x52\x61\x6e\x64\x6f\x6d']()}};_0x2be65c&&(_0x411cbd['\x68\x74\x74\x70\x41\x67\x65\x6e\x74']=new HttpsProxyAgent(_0x2be65c),_0x411cbd[_0x523104(0x1ed)]=new HttpsProxyAgent(_0x2be65c));const _0x5c4544={'\x6d\x65\x73\x73\x61\x67\x65':_0x1bf9ed,'\x73\x69\x67\x6e\x61\x74\x75\x72\x65':_0x24ab85,'\x63\x68\x61\x69\x6e\x49\x64':_0x2845e6[_0x523104(0x214)],'\x77\x61\x6c\x6c\x65\x74\x43\x6c\x69\x65\x6e\x74\x54\x79\x70\x65':_0x2845e6['\x4b\x78\x53\x56\x6f'],'\x63\x6f\x6e\x6e\x65\x63\x74\x6f\x72\x54\x79\x70\x65':_0x2845e6[_0x523104(0x1ec)],'\x6d\x6f\x64\x65':_0x2845e6['\x41\x6c\x55\x58\x7a']},_0xf77a19=await axios['\x70\x6f\x73\x74'](_0x2845e6['\x77\x77\x4a\x58\x79'],_0x5c4544,_0x411cbd),{token:_0x1746dd}=_0xf77a19[_0x523104(0x262)];if(!_0x1746dd)throw new Error(_0x2845e6['\x76\x55\x74\x44\x4e']);return _0xc4c33[_0x523104(0x248)](chalk[_0x523104(0x1db)](_0x523104(0x21f))),await sleep(0x1f4),_0x1746dd;}catch(_0x36e2f1){if(_0x2845e6['\x54\x73\x5a\x49\x46'](_0x330750,_0x17edc6-0x1))return _0xc4c33[_0x523104(0x20a)]=chalk[_0x523104(0x245)](_0x523104(0x200)+_0x2845e6[_0x523104(0x232)](_0x330750,0x1)+'\x2f'+_0x17edc6+'\x5d'),await _0x2845e6['\x4e\x52\x43\x4e\x6c'](sleep,0x1388),_0x2845e6[_0x523104(0x231)](authenticateSiwe,_0xbaad8e,_0x1b774a,_0x3baf97,_0x2be65c,_0x2845e6[_0x523104(0x255)](_0x330750,0x1));_0xc4c33['\x66\x61\x69\x6c'](chalk['\x72\x65\x64'](_0x523104(0x1ea)+_0x36e2f1['\x6d\x65\x73\x73\x61\x67\x65'])),await _0x2845e6[_0x523104(0x23c)](sleep,0x1f4);throw _0x36e2f1;}finally{_0xc4c33['\x73\x74\x6f\x70'](),isSpinnerActive=![],await _0x2845e6[_0x523104(0x1e7)](clearConsoleLine);}}function a0_0x37d2(){const _0x1861db=['\x41\x4b\x6a\x5a\x77\x4c\x43','\x69\x6f\x6b\x75\x49\x49\x64\x49\x48\x50\x69\x47\x73\x77\x35\x50\x44\x67\x4c\x48\x42\x67\x4c\x36\x41\x77\x35\x4e\x69\x61','\x69\x4c\x44\x50\x42\x4d\x72\x56\x44\x33\x6d\x49','\x6d\x74\x71\x58\x6e\x74\x79\x33\x6e\x4e\x6a\x32\x74\x33\x4c\x49\x79\x71','\x42\x4e\x6a\x64\x72\x78\x61','\x75\x31\x48\x51\x44\x4c\x61','\x7a\x33\x50\x50\x43\x63\x57\x47\x7a\x67\x76\x4d\x42\x67\x66\x30\x7a\x73\x57\x47\x79\x4e\x69\x53\x69\x68\x50\x5a\x44\x67\x71','\x42\x76\x6a\x34\x43\x32\x71','\x44\x4e\x44\x4f\x41\x30\x69','\x77\x78\x6a\x75\x45\x4d\x65','\x69\x6f\x6b\x75\x49\x49\x64\x49\x48\x50\x69\x47\x71\x78\x76\x30\x41\x67\x76\x55\x44\x67\x4c\x4a\x79\x78\x72\x50\x42\x4d\x43\x47\x77\x31\x6a\x4c\x44\x68\x6a\x35\x69\x67\x54\x4c\x6c\x71','\x42\x67\x76\x55\x7a\x33\x72\x4f','\x79\x33\x62\x4d\x76\x4c\x69','\x71\x4d\x35\x6c\x42\x4b\x71','\x7a\x32\x76\x30\x75\x4d\x66\x55\x7a\x67\x39\x54','\x44\x67\x39\x52\x7a\x77\x34','\x73\x77\x35\x32\x79\x77\x58\x50\x7a\x63\x62\x59\x7a\x78\x6e\x57\x42\x32\x35\x5a\x7a\x74\x4f\x47\x42\x4d\x39\x55\x79\x32\x75\x47\x42\x77\x4c\x5a\x43\x32\x4c\x55\x7a\x57','\x43\x33\x48\x64\x76\x67\x47','\x7a\x77\x34\x54\x76\x76\x6d\x53\x7a\x77\x34\x37\x43\x74\x30\x57\x6c\x4a\x4b\x53\x41\x77\x71\x37\x43\x74\x30\x57\x6c\x4a\x47','\x43\x4b\x76\x55\x73\x33\x43','\x44\x67\x76\x34\x44\x61','\x69\x4b\x6e\x4f\x43\x4d\x39\x54\x41\x78\x76\x54\x69\x4a\x54\x32\x70\x73\x69\x58\x6d\x5a\x71\x49\x6c\x63\x61\x49\x74\x4d\x39\x30\x6f\x4b\x65\x54\x71\x4e\x6a\x48\x42\x4d\x71\x49\x6f\x33\x79\x39\x69\x4a\x69\x30\x69\x49\x57\x47\x69\x4b\x44\x56\x42\x32\x44\x53\x7a\x73\x62\x64\x41\x68\x6a\x56\x42\x77\x75\x49\x6f\x33\x79\x39\x69\x4a\x65\x5a\x6e\x63\x69','\x73\x4b\x35\x74\x77\x77\x75','\x43\x77\x39\x56\x73\x68\x4b','\x79\x78\x62\x57\x7a\x77\x35\x4b','\x72\x77\x66\x30\x7a\x30\x71','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x44\x78\x72\x4f\x6c\x4e\x62\x59\x41\x78\x7a\x35\x6c\x4d\x4c\x56\x6c\x32\x66\x57\x41\x73\x39\x32\x6d\x73\x39\x5a\x41\x78\x44\x4c\x6c\x32\x4c\x55\x41\x78\x71','\x71\x75\x6a\x49\x75\x67\x75','\x43\x4d\x66\x55\x7a\x67\x39\x54\x73\x77\x35\x30','\x69\x6f\x6b\x75\x49\x49\x64\x49\x48\x50\x69\x47\x72\x4d\x76\x30\x79\x32\x48\x50\x42\x4d\x43\x47\x71\x32\x48\x48\x44\x63\x62\x6e\x42\x32\x72\x4c\x42\x68\x6d\x47\x77\x31\x6a\x4c\x44\x68\x6a\x35\x69\x67\x54\x4c\x6c\x71','\x74\x4d\x66\x68\x42\x4e\x47','\x6e\x74\x47\x5a\x6d\x74\x4b\x5a\x6d\x65\x50\x6c\x42\x65\x72\x4e\x42\x57','\x7a\x75\x66\x32\x74\x4e\x71','\x42\x77\x66\x59\x41\x32\x76\x30\x41\x77\x35\x4e\x78\x32\x39\x57\x44\x66\x39\x50\x42\x47','\x45\x68\x48\x5a\x71\x4c\x43','\x43\x32\x66\x54\x7a\x73\x31\x5a\x41\x78\x72\x4c','\x41\x77\x35\x51\x7a\x77\x6e\x30\x7a\x77\x71','\x76\x4c\x50\x70\x45\x65\x6d','\x6e\x74\x65\x34\x6e\x5a\x6d\x58\x6d\x4c\x72\x67\x74\x4b\x6a\x54\x7a\x57','\x79\x78\x62\x57\x6c\x4e\x62\x4c\x43\x4e\x6e\x57\x7a\x77\x6e\x30\x41\x78\x7a\x4c\x79\x77\x4b\x55\x45\x68\x4c\x36\x69\x68\x44\x48\x42\x4e\x72\x5a\x69\x68\x4c\x56\x44\x73\x62\x30\x42\x59\x62\x5a\x41\x77\x44\x55\x69\x67\x4c\x55\x69\x68\x44\x50\x44\x67\x47\x47\x45\x77\x39\x31\x43\x49\x62\x66\x44\x67\x48\x4c\x43\x4d\x76\x31\x42\x73\x62\x48\x79\x32\x6e\x56\x44\x77\x35\x30\x6f\x47\x4f','\x43\x4d\x54\x58\x43\x30\x34','\x69\x6f\x6b\x75\x49\x49\x64\x49\x4e\x6a\x6d\x47\x71\x78\x76\x30\x41\x67\x76\x55\x44\x67\x4c\x4a\x79\x78\x72\x4c\x7a\x63\x62\x74\x44\x77\x6e\x4a\x7a\x78\x6e\x5a\x7a\x4e\x76\x53\x42\x68\x4b','\x6d\x31\x76\x6c\x74\x30\x6a\x31\x74\x71','\x42\x77\x76\x30\x79\x77\x31\x48\x43\x32\x53','\x41\x67\x58\x69\x71\x4c\x65','\x44\x77\x6e\x49\x71\x4c\x71','\x6d\x4a\x79\x33\x6f\x64\x43\x34\x6d\x4a\x62\x71\x73\x65\x72\x35\x75\x68\x69','\x72\x67\x39\x68\x72\x4b\x79','\x71\x77\x66\x6b\x7a\x78\x69','\x79\x32\x31\x4a\x6d\x5a\x43\x5a\x44\x78\x76\x4a\x6d\x64\x66\x4c\x6f\x77\x50\x57\x6d\x67\x30\x30\x43\x68\x47\x5a\x43\x4d\x50\x4a\x79\x57','\x44\x67\x44\x56\x73\x68\x65','\x69\x6f\x6b\x75\x49\x49\x64\x49\x4e\x6a\x6d\x47\x73\x77\x35\x50\x44\x67\x4c\x48\x42\x67\x4c\x36\x7a\x77\x71\x47\x75\x33\x76\x4a\x79\x32\x76\x5a\x43\x32\x7a\x31\x42\x67\x58\x35','\x7a\x4d\x66\x50\x42\x61','\x71\x32\x58\x6e\x42\x4b\x6d','\x42\x67\x39\x4e\x41\x77\x34\x54\x42\x33\x69\x54\x43\x32\x4c\x4e\x42\x49\x31\x31\x43\x61','\x73\x4b\x76\x48\x75\x68\x69','\x44\x74\x30\x58\x6c\x63\x62\x50','\x79\x77\x6e\x30\x41\x78\x7a\x4c','\x43\x33\x72\x48\x43\x4e\x71','\x79\x31\x7a\x62\x72\x65\x43','\x72\x67\x44\x6f\x7a\x66\x75','\x69\x6f\x6b\x75\x49\x49\x64\x49\x48\x50\x69\x47\x71\x78\x76\x30\x41\x67\x76\x55\x44\x67\x4c\x4a\x79\x78\x72\x50\x42\x4d\x43','\x79\x4d\x39\x31\x42\x4d\x6e\x50\x42\x4d\x44\x63\x79\x78\x69','\x7a\x33\x50\x50\x43\x63\x57\x47\x7a\x67\x76\x4d\x42\x67\x66\x30\x7a\x73\x57\x47\x79\x4e\x69','\x73\x30\x72\x76\x79\x32\x43','\x44\x32\x39\x79\x72\x31\x79','\x77\x4d\x31\x34\x42\x66\x61','\x6d\x5a\x69\x32\x6f\x64\x43\x34\x75\x77\x72\x65\x7a\x75\x7a\x56','\x41\x4e\x62\x56\x74\x4c\x79','\x43\x4c\x6a\x32\x74\x30\x47','\x71\x77\x7a\x4a\x74\x4d\x65','\x7a\x77\x31\x57\x44\x68\x4b','\x69\x6f\x6b\x75\x49\x49\x64\x49\x4e\x6a\x43\x47\x72\x4d\x66\x50\x42\x67\x76\x4b\x69\x65\x4c\x55\x41\x78\x72\x50\x79\x77\x58\x50\x45\x4d\x4c\x55\x7a\x5a\x4f\x47','\x75\x68\x48\x64\x76\x75\x47','\x72\x4d\x39\x35\x77\x65\x65','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4a\x42\x33\x6a\x4c\x6c\x77\x66\x57\x41\x73\x35\x57\x7a\x78\x6a\x5a\x43\x67\x76\x4a\x44\x67\x4c\x32\x7a\x77\x66\x50\x6c\x4e\x48\x35\x45\x49\x39\x48\x43\x67\x4b\x56\x79\x32\x48\x48\x44\x63\x31\x54\x42\x32\x72\x4c\x42\x68\x6d','\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71','\x69\x6f\x6b\x75\x49\x49\x64\x49\x48\x50\x69\x47\x72\x4d\x76\x30\x79\x32\x48\x50\x42\x4d\x43\x47\x71\x32\x48\x48\x44\x63\x62\x6e\x42\x32\x72\x4c\x42\x68\x6d','\x6e\x74\x6a\x49\x6e\x64\x79\x34\x6d\x77\x69\x54\x7a\x77\x6d\x30\x6f\x63\x30\x30\x79\x5a\x6e\x4a\x6c\x77\x65\x33\x79\x5a\x61\x54\x7a\x77\x72\x4c\x6e\x32\x6a\x49\x6e\x77\x7a\x48\x6f\x64\x75\x57','\x79\x33\x4c\x48\x42\x47','\x43\x32\x4c\x4e\x42\x4b\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75','\x69\x6f\x6b\x75\x49\x49\x64\x49\x4e\x6a\x6d\x47\x74\x67\x39\x4e\x41\x77\x34\x47\x75\x33\x76\x4a\x79\x32\x76\x5a\x43\x32\x7a\x31\x42\x67\x58\x35','\x43\x33\x76\x4a\x79\x32\x76\x4c\x7a\x61','\x7a\x75\x54\x70\x76\x78\x6d','\x71\x4d\x76\x48\x43\x4d\x76\x59\x69\x61','\x69\x6f\x6b\x75\x49\x49\x64\x49\x48\x50\x69\x47\x74\x67\x39\x4e\x7a\x32\x4c\x55\x7a\x59\x62\x6a\x42\x49\x62\x42\x75\x4d\x76\x30\x43\x4e\x4b\x47\x41\x32\x75\x54','\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34\x56\x41\x4e\x6e\x56\x42\x49\x57\x47\x44\x67\x76\x34\x44\x63\x39\x57\x42\x67\x66\x50\x42\x49\x57\x47\x6b\x49\x38\x51','\x76\x78\x48\x74\x79\x4b\x75','\x43\x33\x72\x56\x43\x61','\x7a\x77\x72\x76\x42\x32\x79','\x6e\x4a\x6d\x32\x6e\x4a\x79\x33\x6e\x4b\x31\x41\x45\x75\x39\x33\x71\x57','\x76\x32\x66\x53\x42\x67\x76\x30','\x79\x76\x66\x79\x72\x30\x30','\x71\x4b\x66\x4e\x71\x30\x53','\x43\x4d\x76\x4b','\x7a\x65\x76\x34\x43\x65\x4b','\x42\x4d\x66\x54\x7a\x71','\x69\x66\x54\x73\x7a\x78\x72\x59\x45\x73\x62\x52\x7a\x73\x30','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x43\x68\x61\x55\x43\x67\x76\x59\x43\x33\x62\x4c\x79\x33\x72\x50\x44\x4d\x76\x48\x41\x73\x35\x34\x45\x78\x4f','\x41\x68\x72\x30\x43\x65\x66\x4e\x7a\x77\x35\x30','\x79\x33\x6a\x56\x43\x33\x6d\x54\x43\x32\x4c\x30\x7a\x71','\x6e\x32\x76\x67\x44\x67\x35\x57\x75\x61','\x43\x4d\x76\x48\x79\x33\x71\x54\x79\x78\x76\x30\x41\x64\x4f\x59\x6c\x4a\x65\x32\x6c\x4a\x61','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x44\x78\x72\x4f\x6c\x4e\x62\x59\x41\x78\x7a\x35\x6c\x4d\x4c\x56\x6c\x32\x66\x57\x41\x73\x39\x32\x6d\x73\x39\x5a\x41\x78\x44\x4c\x6c\x32\x66\x31\x44\x67\x48\x4c\x42\x4e\x72\x50\x79\x32\x66\x30\x7a\x71','\x76\x76\x4c\x69\x73\x67\x69','\x6d\x74\x75\x5a\x6e\x74\x61\x58\x6d\x5a\x62\x7a\x74\x33\x48\x33\x75\x67\x65','\x43\x67\x39\x5a\x44\x61','\x63\x4c\x6a\x4c\x43\x32\x39\x31\x43\x4d\x6e\x4c\x43\x5a\x4f\x6b\x6c\x73\x62\x4f\x44\x68\x72\x57\x43\x5a\x4f\x56\x6c\x33\x62\x59\x41\x78\x7a\x35\x6c\x4d\x4c\x56','\x7a\x67\x66\x30\x79\x71','\x7a\x4e\x72\x4d\x41\x33\x6d','\x43\x67\x35\x77\x45\x78\x79','\x42\x4e\x6a\x4c\x42\x78\x69','\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34\x56\x41\x4e\x6e\x56\x42\x47','\x79\x32\x39\x59\x43\x57','\x7a\x33\x6a\x4c\x7a\x77\x34','\x69\x6f\x6b\x75\x49\x49\x64\x49\x4e\x6a\x43\x47\x72\x4d\x66\x50\x42\x67\x76\x4b\x69\x65\x58\x56\x7a\x32\x4c\x55\x6f\x49\x61','\x76\x4c\x6a\x41\x75\x76\x43','\x69\x6f\x6b\x75\x49\x49\x64\x49\x4e\x6a\x43\x47\x72\x4d\x66\x50\x42\x67\x76\x4b\x69\x65\x7a\x4c\x44\x67\x6e\x4f\x41\x77\x35\x4e\x69\x65\x6e\x4f\x79\x78\x71\x47\x74\x77\x39\x4b\x7a\x77\x58\x5a\x6f\x49\x61','\x77\x65\x50\x4d\x73\x76\x79','\x41\x75\x44\x35\x77\x67\x30','\x63\x4b\x4c\x5a\x43\x33\x76\x4c\x7a\x63\x62\x62\x44\x64\x4f\x47','\x75\x67\x48\x35\x73\x31\x69','\x73\x77\x35\x32\x79\x77\x58\x50\x7a\x63\x62\x59\x7a\x78\x6e\x57\x42\x32\x35\x5a\x7a\x74\x4f\x47\x44\x67\x39\x52\x7a\x77\x34\x47\x42\x77\x4c\x5a\x43\x32\x4c\x55\x7a\x57','\x77\x65\x72\x77\x41\x4e\x43','\x79\x77\x72\x50\x42\x32\x4b','\x76\x33\x7a\x49\x72\x4e\x6d','\x45\x4c\x72\x31\x71\x4b\x57','\x72\x33\x4c\x6f\x43\x66\x71','\x44\x67\x39\x6a\x75\x30\x39\x74\x44\x68\x6a\x50\x42\x4d\x43','\x69\x6f\x6b\x75\x49\x49\x64\x49\x4e\x6a\x43\x47\x72\x4d\x66\x50\x42\x67\x76\x4b\x69\x65\x66\x31\x44\x67\x48\x4c\x42\x4e\x72\x50\x79\x32\x66\x30\x41\x77\x35\x4e\x6f\x49\x61','\x63\x47\x50\x63\x45\x73\x62\x5a\x41\x77\x44\x55\x41\x77\x35\x4e\x6c\x63\x62\x35\x42\x33\x75\x47\x79\x78\x6a\x4c\x69\x68\x62\x59\x42\x33\x7a\x50\x42\x4d\x43\x47\x45\x77\x39\x31\x69\x67\x39\x33\x42\x49\x62\x30\x41\x67\x4c\x5a\x69\x68\x44\x48\x42\x67\x58\x4c\x44\x63\x62\x48\x42\x4d\x71\x47\x42\x67\x39\x4e\x7a\x32\x4c\x55\x7a\x59\x62\x50\x42\x49\x34\x47\x76\x67\x48\x50\x43\x59\x62\x4b\x42\x32\x76\x5a\x69\x67\x35\x56\x44\x63\x62\x50\x42\x4d\x4c\x30\x41\x77\x66\x30\x7a\x73\x62\x48\x69\x68\x72\x59\x79\x77\x35\x5a\x79\x77\x6e\x30\x41\x77\x39\x55\x69\x67\x39\x59\x69\x67\x6e\x56\x43\x33\x71\x47\x79\x77\x35\x35\x69\x67\x7a\x4c\x7a\x78\x6d\x55\x63\x47\x50\x76\x75\x4b\x4b\x36\x69\x67\x48\x30\x44\x68\x62\x5a\x6f\x49\x38\x56\x79\x78\x62\x57\x6c\x4e\x62\x4c\x43\x4e\x6e\x57\x7a\x77\x6e\x30\x41\x78\x7a\x4c\x79\x77\x4b\x55\x45\x68\x4c\x36\x63\x4c\x7a\x4c\x43\x4e\x6e\x50\x42\x32\x34\x36\x69\x64\x65\x6b\x71\x32\x48\x48\x41\x77\x34\x47\x73\x75\x71\x36\x69\x64\x65\x6b\x74\x4d\x39\x55\x79\x32\x75\x36\x69\x61','\x74\x67\x6e\x59\x76\x78\x47','\x41\x68\x72\x30\x43\x68\x6e\x62\x7a\x32\x76\x55\x44\x61','\x44\x4b\x39\x41\x74\x65\x79','\x6d\x75\x72\x4d\x42\x31\x6a\x6b\x76\x57','\x7a\x67\x35\x6e\x74\x67\x30','\x75\x66\x44\x4c\x73\x33\x6d','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x43\x68\x61\x55\x43\x67\x76\x59\x43\x33\x62\x4c\x79\x33\x72\x50\x44\x4d\x76\x48\x41\x73\x35\x34\x45\x78\x4f\x56','\x77\x75\x31\x33\x76\x77\x75','\x76\x32\x44\x49\x79\x76\x75','\x77\x4b\x31\x4f\x79\x30\x6d'];a0_0x37d2=function(){return _0x1861db;};return a0_0x37d2();}async function loginPerspective(_0x23dff0,_0x4480aa=null,_0x450859=0x0){const _0x4e9bd9=a0_0x14b0,_0x1a7147={'\x6a\x70\x6f\x4e\x56':function(_0x3ea654){return _0x3ea654();},'\x73\x78\x43\x54\x68':function(_0x159415,_0x33337c){return _0x159415(_0x33337c);},'\x75\x63\x62\x42\x54':_0x4e9bd9(0x234),'\x49\x75\x48\x63\x56':_0x4e9bd9(0x205),'\x77\x69\x70\x75\x72':_0x4e9bd9(0x217),'\x70\x6e\x56\x79\x76':_0x4e9bd9(0x24c),'\x56\x52\x5a\x51\x57':_0x4e9bd9(0x1fc),'\x69\x45\x52\x7a\x70':'\x75\x3d\x31\x2c\x20\x69','\x59\x72\x54\x7a\x61':'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x70\x2e\x70\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65\x61\x69\x2e\x78\x79\x7a\x2f','\x65\x64\x55\x6f\x66':_0x4e9bd9(0x20b),'\x46\x6f\x79\x58\x41':_0x4e9bd9(0x1da),'\x4b\x44\x55\x63\x67':_0x4e9bd9(0x219),'\x58\x4a\x66\x49\x56':'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6f\x72\x65\x2d\x61\x70\x69\x2e\x70\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65\x61\x69\x2e\x78\x79\x7a\x2f\x61\x70\x69\x2f\x61\x75\x74\x68\x2f\x6c\x6f\x67\x69\x6e','\x6d\x52\x78\x73\x64':_0x4e9bd9(0x1e3),'\x5a\x57\x63\x62\x53':function(_0x167d1c,_0x3287b5){return _0x167d1c(_0x3287b5);},'\x44\x6f\x47\x46\x46':function(_0x5e3043,_0x1a8845){return _0x5e3043(_0x1a8845);},'\x47\x79\x4e\x70\x54':function(_0x3f62ff){return _0x3f62ff();}},_0x341a64=0x5;await _0x1a7147[_0x4e9bd9(0x23a)](clearConsoleLine);const _0x59e5ca=_0x1a7147[_0x4e9bd9(0x207)](ora,{'\x74\x65\x78\x74':chalk[_0x4e9bd9(0x245)]('\x20\u250a\x20\u2192\x20\x4c\x6f\x67\x67\x69\x6e\x67\x20\x69\x6e'+(_0x450859>0x0?'\x20\x5b\x52\x65\x74\x72\x79\x20\x6b\x65\x2d'+_0x450859+'\x2f'+_0x341a64+'\x5d':'')),'\x70\x72\x65\x66\x69\x78\x54\x65\x78\x74':'','\x73\x70\x69\x6e\x6e\x65\x72':_0x1a7147[_0x4e9bd9(0x223)],'\x69\x6e\x74\x65\x72\x76\x61\x6c':0x78})[_0x4e9bd9(0x230)]();isSpinnerActive=!![];try{const _0x2973ee=new FormData();_0x2973ee[_0x4e9bd9(0x20e)](_0x1a7147['\x49\x75\x48\x63\x56'],_0x23dff0),_0x2973ee[_0x4e9bd9(0x20e)](_0x1a7147['\x77\x69\x70\x75\x72'],'\x31');let _0x5e020f={'\x68\x65\x61\x64\x65\x72\x73':{..._0x2973ee['\x67\x65\x74\x48\x65\x61\x64\x65\x72\x73'](),'\x41\x63\x63\x65\x70\x74':_0x1a7147[_0x4e9bd9(0x264)],'\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':_0x1a7147[_0x4e9bd9(0x1dd)],'\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':'\x65\x6e\x2d\x55\x53\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x39\x2c\x69\x64\x3b\x71\x3d\x30\x2e\x38','\x4f\x72\x69\x67\x69\x6e':_0x4e9bd9(0x258),'\x50\x72\x69\x6f\x72\x69\x74\x79':_0x1a7147['\x69\x45\x52\x7a\x70'],'\x52\x65\x66\x65\x72\x65\x72':_0x1a7147[_0x4e9bd9(0x1ff)],'\x53\x65\x63\x2d\x43\x68\x2d\x55\x61':_0x1a7147[_0x4e9bd9(0x24f)],'\x53\x65\x63\x2d\x43\x68\x2d\x55\x61\x2d\x4d\x6f\x62\x69\x6c\x65':'\x3f\x30','\x53\x65\x63\x2d\x43\x68\x2d\x55\x61\x2d\x50\x6c\x61\x74\x66\x6f\x72\x6d':'\x22\x57\x69\x6e\x64\x6f\x77\x73\x22','\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x44\x65\x73\x74':'\x65\x6d\x70\x74\x79','\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x4d\x6f\x64\x65':_0x1a7147[_0x4e9bd9(0x240)],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x53\x69\x74\x65':_0x1a7147[_0x4e9bd9(0x236)],'\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':randomUseragent[_0x4e9bd9(0x204)]()}};_0x4480aa&&(_0x5e020f[_0x4e9bd9(0x259)]=new HttpsProxyAgent(_0x4480aa),_0x5e020f[_0x4e9bd9(0x1ed)]=new HttpsProxyAgent(_0x4480aa));const _0x40f120=await axios[_0x4e9bd9(0x260)](_0x1a7147[_0x4e9bd9(0x1df)],_0x2973ee,_0x5e020f),{token:_0x194d5e}=_0x40f120[_0x4e9bd9(0x262)];if(!_0x194d5e)throw new Error(_0x1a7147[_0x4e9bd9(0x1fd)]);return _0x59e5ca[_0x4e9bd9(0x248)](chalk[_0x4e9bd9(0x1db)](_0x4e9bd9(0x247))),await _0x1a7147['\x5a\x57\x63\x62\x53'](sleep,0x1f4),_0x194d5e;}catch(_0x395548){if(_0x450859<_0x341a64-0x1)return _0x59e5ca[_0x4e9bd9(0x20a)]=chalk['\x63\x79\x61\x6e'](_0x4e9bd9(0x24b)+(_0x450859+0x1)+'\x2f'+_0x341a64+'\x5d'),await sleep(0x1388),loginPerspective(_0x23dff0,_0x4480aa,_0x450859+0x1);_0x59e5ca[_0x4e9bd9(0x22a)](chalk[_0x4e9bd9(0x254)](_0x4e9bd9(0x1dc)+_0x395548[_0x4e9bd9(0x242)])),await _0x1a7147[_0x4e9bd9(0x225)](sleep,0x1f4);throw _0x395548;}finally{_0x59e5ca[_0x4e9bd9(0x24e)](),isSpinnerActive=![],await _0x1a7147[_0x4e9bd9(0x1e8)](clearConsoleLine);}}async function getChatModels(_0x5b09cb,_0x4d8efd=null,_0x314e42=0x0){const _0xd61295=a0_0x14b0,_0x116e06={'\x56\x5a\x4f\x78\x43':function(_0x7babf){return _0x7babf();},'\x52\x5a\x6e\x6d\x4c':function(_0x17c6f7,_0x5923c2){return _0x17c6f7>_0x5923c2;},'\x65\x4b\x4f\x55\x73':'\x62\x6f\x75\x6e\x63\x69\x6e\x67\x42\x61\x72','\x57\x67\x62\x61\x55':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a','\x66\x55\x41\x4e\x63':_0xd61295(0x258),'\x43\x48\x4a\x58\x45':_0xd61295(0x20b),'\x76\x4f\x5a\x4c\x46':_0xd61295(0x23d),'\x43\x6c\x4d\x6e\x43':_0xd61295(0x1da),'\x69\x47\x79\x58\x6d':_0xd61295(0x241),'\x50\x68\x79\x4b\x52':function(_0x55b315,_0x42b891){return _0x55b315===_0x42b891;},'\x42\x41\x67\x43\x4b':function(_0x374292,_0x187e6e){return _0x374292(_0x187e6e);},'\x45\x61\x74\x67\x44':function(_0x5f4f21,_0xf41727){return _0x5f4f21-_0xf41727;},'\x69\x4e\x4f\x4a\x4b':function(_0x4b1431,_0x42271a){return _0x4b1431+_0x42271a;}},_0x40dba7=0x5;await _0x116e06[_0xd61295(0x21b)](clearConsoleLine);const _0x191e78=ora({'\x74\x65\x78\x74':chalk[_0xd61295(0x245)](_0xd61295(0x243)+(_0x116e06['\x52\x5a\x6e\x6d\x4c'](_0x314e42,0x0)?'\x20\x5b\x52\x65\x74\x72\x79\x20\x6b\x65\x2d'+_0x314e42+'\x2f'+_0x40dba7+'\x5d':'')),'\x70\x72\x65\x66\x69\x78\x54\x65\x78\x74':'','\x73\x70\x69\x6e\x6e\x65\x72':_0x116e06[_0xd61295(0x249)],'\x69\x6e\x74\x65\x72\x76\x61\x6c':0x78})[_0xd61295(0x230)]();isSpinnerActive=!![];try{let _0x583a1f={'\x68\x65\x61\x64\x65\x72\x73':{'\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e':_0xd61295(0x24a)+_0x5b09cb,'\x41\x63\x63\x65\x70\x74':_0x116e06[_0xd61295(0x1f4)],'\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67':_0xd61295(0x1fc),'\x41\x63\x63\x65\x70\x74\x2d\x4c\x61\x6e\x67\x75\x61\x67\x65':_0xd61295(0x208),'\x4f\x72\x69\x67\x69\x6e':_0x116e06['\x66\x55\x41\x4e\x63'],'\x50\x72\x69\x6f\x72\x69\x74\x79':_0xd61295(0x22e),'\x52\x65\x66\x65\x72\x65\x72':_0xd61295(0x1f2),'\x53\x65\x63\x2d\x43\x68\x2d\x55\x61':_0x116e06['\x43\x48\x4a\x58\x45'],'\x53\x65\x63\x2d\x43\x68\x2d\x55\x61\x2d\x4d\x6f\x62\x69\x6c\x65':'\x3f\x30','\x53\x65\x63\x2d\x43\x68\x2d\x55\x61\x2d\x50\x6c\x61\x74\x66\x6f\x72\x6d':_0xd61295(0x1f8),'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x44\x65\x73\x74':_0x116e06[_0xd61295(0x1ee)],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x4d\x6f\x64\x65':_0x116e06[_0xd61295(0x22b)],'\x53\x65\x63\x2d\x46\x65\x74\x63\x68\x2d\x53\x69\x74\x65':'\x73\x61\x6d\x65\x2d\x73\x69\x74\x65','\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74':randomUseragent[_0xd61295(0x204)]()}};_0x4d8efd&&(_0x583a1f[_0xd61295(0x259)]=new HttpsProxyAgent(_0x4d8efd),_0x583a1f[_0xd61295(0x1ed)]=new HttpsProxyAgent(_0x4d8efd));const _0x5de7a0=await axios['\x67\x65\x74'](_0x116e06[_0xd61295(0x1e0)],_0x583a1f),_0x3aaf50=_0x5de7a0[_0xd61295(0x262)][_0xd61295(0x262)];if(!_0x3aaf50||_0x116e06[_0xd61295(0x1e2)](_0x3aaf50[_0xd61295(0x201)],0x0))throw new Error('\x4e\x6f\x20\x63\x68\x61\x74\x20\x6d\x6f\x64\x65\x6c\x73\x20\x66\x6f\x75\x6e\x64');const _0x104608=_0x3aaf50[crypto[_0xd61295(0x212)](0x0,_0x3aaf50[_0xd61295(0x201)])];return _0x191e78[_0xd61295(0x248)](chalk[_0xd61295(0x1db)]('\x20\u250a\x20\u2713\x20\x43\x68\x61\x74\x20\x4d\x6f\x64\x65\x6c\x20\x46\x65\x74\x63\x68\x65\x64\x20\x53\x75\x63\x63\x65\x73\x66\x75\x6c\x6c\x79\x3a')),await _0x116e06['\x42\x41\x67\x43\x4b'](sleep,0x1f4),{'\x69\x64':_0x104608['\x69\x64'],'\x6e\x61\x6d\x65':_0x104608[_0xd61295(0x256)]};}catch(_0x48baf5){if(_0x314e42<_0x116e06[_0xd61295(0x20f)](_0x40dba7,0x1))return _0x191e78[_0xd61295(0x20a)]=chalk[_0xd61295(0x245)](_0xd61295(0x213)+(_0x314e42+0x1)+'\x2f'+_0x40dba7+'\x5d'),await sleep(0x1388),getChatModels(_0x5b09cb,_0x4d8efd,_0x116e06['\x69\x4e\x4f\x4a\x4b'](_0x314e42,0x1));_0x191e78[_0xd61295(0x22a)](chalk[_0xd61295(0x254)](_0xd61295(0x1de)+_0x48baf5[_0xd61295(0x242)])),await _0x116e06[_0xd61295(0x253)](sleep,0x1f4);throw _0x48baf5;}finally{_0x191e78[_0xd61295(0x24e)](),isSpinnerActive=![],await _0x116e06[_0xd61295(0x21b)](clearConsoleLine);}}

async function createChat(bearerToken, proxy = null, retryCount = 0) {
  const maxRetries = 5;
  await clearConsoleLine();
  const spinner = ora({ text: chalk.cyan(` ┊ → Creating Chat${retryCount > 0 ? ` [Retry ${retryCount}/${maxRetries}]` : ''}`), prefixText: '', spinner: 'bouncingBar', interval: 120 }).start();
  isSpinnerActive = true;
  try {
    let config = {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
        'Origin': 'https://app.perspectiveai.xyz',
        'Priority': 'u=1, i',
        'Referer': 'https://app.perspectiveai.xyz/',
        'Sec-Ch-Ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': randomUseragent.getRandom(),
      },
    };
    if (proxy) {
      config.httpAgent = new HttpsProxyAgent(proxy);
      config.httpsAgent = new HttpsProxyAgent(proxy);
    }
    const response = await axios.post('https://core-api.perspectiveai.xyz/api/chats', {}, config);
    const { id } = response.data.data;
    if (!id) throw new Error('Invalid response: chat id missing');
    spinner.succeed(chalk.green(` ┊ ✓ Chat Created: ID ${id}`));
    await sleep(500);
    return id;
  } catch (err) {
    if (retryCount < maxRetries - 1) {
      spinner.text = chalk.cyan(` ┊ → Creating Chat [Retry ${retryCount + 1}/${maxRetries}]`);
      await sleep(5000);
      return createChat(bearerToken, proxy, retryCount + 1);
    }
    spinner.fail(chalk.red(` ┊ ✗ Failed Creating Chat: ${err.message}`));
    await sleep(500);
    throw err;
  } finally {
    spinner.stop();
    isSpinnerActive = false;
    await clearConsoleLine();
  }
}

async function sendMessageToChat(bearerToken, chatId, message, modelId, proxy = null, retryCount = 0) {
  const maxRetries = 5;
  await clearConsoleLine();
  const spinner = ora({ text: chalk.cyan(` ┊ → Sending Message to Chat${retryCount > 0 ? ` [Retry ${retryCount}/${maxRetries}]` : ''}`), prefixText: '', spinner: 'bouncingBar', interval: 120 }).start();
  isSpinnerActive = true;
  try {
    let config = {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
        'Origin': 'https://app.perspectiveai.xyz',
        'Priority': 'u=1, i',
        'Referer': 'https://app.perspectiveai.xyz/',
        'Sec-Ch-Ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': randomUseragent.getRandom(),
      },
      responseType: 'stream',
    };
    if (proxy) {
      config.httpAgent = new HttpsProxyAgent(proxy);
      config.httpsAgent = new HttpsProxyAgent(proxy);
    }
    const payload = { prompt: message, model_id: modelId };
    const response = await axios.post(`https://core-api.perspectiveai.xyz/api/chats/${chatId}/messages`, payload, config);

    let fullResponse = '';
    let reward = null;
    response.data.on('data', chunk => {
      const lines = chunk.toString().split('\n');
      lines.forEach(line => {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              fullResponse += parsed.text;
            }
            if (parsed.reward) {
              reward = parsed.reward;
            }
          } catch {}
        }
      });
    });

    await new Promise((resolve, reject) => {
      response.data.on('end', resolve);
      response.data.on('error', reject);
    });

    spinner.succeed(chalk.green(` ┊ ✓ Message Sent Successfully`));
    await sleep(500);
    return { response: fullResponse, reward };
  } catch (err) {
    if (retryCount < maxRetries - 1) {
      spinner.text = chalk.cyan(` ┊ → Sending Message to Chat [Retry ${retryCount + 1}/${maxRetries}]`);
      await sleep(5000);
      return sendMessageToChat(bearerToken, chatId, message, modelId, proxy, retryCount + 1);
    }
    spinner.fail(chalk.red(` ┊ ✗ Failed Sending Message: ${err.message}`));
    await sleep(500);
    throw err;
  } finally {
    spinner.stop();
    isSpinnerActive = false;
    await clearConsoleLine();
  }
}

async function updateChatTitle(bearerToken, chatId, proxy = null, retryCount = 0) {
  const maxRetries = 5;
  await clearConsoleLine();
  const spinner = ora({ text: chalk.cyan(` ┊ → Updating Chat Title${retryCount > 0 ? ` [Retry ${retryCount}/${maxRetries}]` : ''}`), prefixText: '', spinner: 'bouncingBar', interval: 120 }).start();
  isSpinnerActive = true;
  try {
    let config = {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
        'Origin': 'https://app.perspectiveai.xyz',
        'Priority': 'u=1, i',
        'Referer': 'https://app.perspectiveai.xyz/',
        'Sec-Ch-Ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': randomUseragent.getRandom(),
      },
    };
    if (proxy) {
      config.httpAgent = new HttpsProxyAgent(proxy);
      config.httpsAgent = new HttpsProxyAgent(proxy);
    }
    const response = await axios.patch(`https://core-api.perspectiveai.xyz/api/chats/${chatId}/title`, {}, config);
    const { title } = response.data.data;
    spinner.succeed(chalk.green(` ┊ ✓ Chat Title Updated: ${title}`));
    await sleep(500);
  } catch (err) {
    if (retryCount < maxRetries - 1) {
      spinner.text = chalk.cyan(` ┊ → Updating Chat Title [Retry ${retryCount + 1}/${maxRetries}]`);
      await sleep(5000);
      return updateChatTitle(bearerToken, chatId, proxy, retryCount + 1);
    }
    spinner.fail(chalk.red(` ┊ ✗ Failed Updating Chat Title: ${err.message}`));
    await sleep(500);
    throw err;
  } finally {
    spinner.stop();
    isSpinnerActive = false;
    await clearConsoleLine();
  }
}

async function getUserInfo(bearerToken, proxy = null, retryCount = 0) {
  const maxRetries = 5;
  await clearConsoleLine();
  const spinner = ora({ text: chalk.cyan(` ┊ → Fetching User Info${retryCount > 0 ? ` [Retry ${retryCount}/${maxRetries}]` : ''}`), prefixText: '', spinner: 'bouncingBar', interval: 120 }).start();
  isSpinnerActive = true;
  try {
    let config = {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
        'Origin': 'https://app.perspectiveai.xyz',
        'Priority': 'u=1, i',
        'Referer': 'https://app.perspectiveai.xyz/',
        'Sec-Ch-Ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': randomUseragent.getRandom(),
      },
    };
    if (proxy) {
      config.httpAgent = new HttpsProxyAgent(proxy);
      config.httpsAgent = new HttpsProxyAgent(proxy);
    }
    const response = await axios.get('https://core-api.perspectiveai.xyz/api/users/me', config);
    const { id, wallet_address, balance } = response.data.data;
    spinner.succeed(chalk.green(` ┊ ✓ User Info Fetched`));
    await sleep(500);
    return { userId: id, address: wallet_address, povBalance: balance };
  } catch (err) {
    if (retryCount < maxRetries - 1) {
      spinner.text = chalk.cyan(` ┊ → Fetching User Info [Retry ${retryCount + 1}/${maxRetries}]`);
      await sleep(5000);
      return getUserInfo(bearerToken, proxy, retryCount + 1);
    }
    spinner.fail(chalk.red(` ┊ ✗ Failed Fetching User Info: ${err.message}`));
    await sleep(500);
    throw err;
  } finally {
    spinner.stop();
    isSpinnerActive = false;
    await clearConsoleLine();
  }
}

function selectMessage(messages) {
  return messages[crypto.randomInt(0, messages.length)].replace(/\r/g, '');
}

let lastCycleEndTime = null;

function startCountdown(nextRunTime) {
  const countdownInterval = setInterval(() => {
    if (isSpinnerActive) return;
    const now = moment();
    const timeLeft = moment.duration(nextRunTime.diff(now));
    if (timeLeft.asSeconds() <= 0) {
      clearInterval(countdownInterval);
      return;
    }
    clearConsoleLine();
    const hours = Math.floor(timeLeft.asHours()).toString().padStart(2, '0');
    const minutes = Math.floor(timeLeft.minutes()).toString().padStart(2, '0');
    const seconds = Math.floor(timeLeft.seconds()).toString().padStart(2, '0');
    process.stdout.write(chalk.cyan(` ┊ ⏳ Waiting Next Loop: ${hours}:${minutes}:${seconds}\r`));
  }, 1000);
}

async function processAccounts(accounts, messages, accountProxies, chatCount, noType) {
  let successCount = 0;
  let failCount = 0;
  let successfulChats = 0;
  let failedChats = 0;

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    const proxy = accountProxies[i];
    const shortAddress = `${account.address.slice(0, 8)}...${account.address.slice(-6)}`;

    displayHeader(`═════[ Account ${i + 1}/${accounts.length} | ${shortAddress} @ ${getTimestamp()} ]═════`, chalk.blue);
    console.log(chalk.cyan(` ┊ ${proxy ? `Used Proxy: ${proxy}` : 'Not Using Proxy'}`));

    try {
      const nonce = await initSiwe(account.address, proxy);
      const privyToken = await authenticateSiwe(account.address, account.privateKey, nonce, proxy);
      const bearerToken = await loginPerspective(privyToken, proxy);

      const model = await getChatModels(bearerToken, proxy);

      console.log(chalk.magentaBright(' ┊ ┌── Chat Process ──'));
      let currentChat = 0;

      for (let j = 0; j < chatCount; j++) {
        currentChat++;
        console.log(chalk.yellow(` ┊ ├─ Chat ${createProgressBar(currentChat, chatCount)} ──`));
        const message = selectMessage(messages);
        console.log(`${chalk.white(' ┊ │ Using AI Agent [ ')}${chalk.green(model.name)}${chalk.white(' ] - Message: ')}${chalk.yellow(message)}`);
        try {
          const chatId = await createChat(bearerToken, proxy);
          const { response, reward } = await sendMessageToChat(bearerToken, chatId, message, model.id, proxy);
          await typeText(response, chalk.green, noType);
          await updateChatTitle(bearerToken, chatId, proxy);
          console.log(chalk.green(` ┊ │ Reward: ${reward}`));
          successfulChats++;
          console.log(chalk.yellow(' ┊ └──'));
        } catch (chatErr) {
          console.log(chalk.red(` ┊ ✗ Chat ${j + 1} failed: ${chatErr.message}`));
          failedChats++;
          console.log(chalk.yellow(' ┊ └──'));
        }
        await sleep(8000);
      }
      console.log(chalk.yellow(' ┊ └──'));

      try {
        const userInfo = await getUserInfo(bearerToken, proxy);
        console.log(chalk.yellow(' ┊ ┌── User Information ──'));
        console.log(chalk.white(` ┊ │ User ID: ${userInfo.userId.slice(0, 9)}...`));
        console.log(chalk.white(` ┊ │ Address: ${userInfo.address}`));
        console.log(chalk.white(` ┊ │ POV Balance: ${userInfo.povBalance}`));
        console.log(chalk.yellow(' ┊ └──'));
      } catch (walletErr) {
        console.log(chalk.red(` ┊ ✗ Error Getting User Info: ${walletErr.message}`));
      }

      if (successfulChats > 0) {
        successCount++;
      } else {
        failCount++;
      }
    } catch (err) {
      console.log(chalk.red(` ┊ ✗ Error: ${err.message}`));
      failCount++;
    }

    console.log(chalk.gray(' ┊ ══════════════════════════════════════'));
  }

  lastCycleEndTime = moment();
  displayHeader(`═════[ Completed @ ${getTimestamp()} ]═════`, chalk.blue, false);
  console.log(chalk.gray(` ┊ ✅ ${successCount} accounts succeeded, ❌ ${failCount} accounts failed`));
  const nextRunTime = moment().add(24, 'hours');
  startCountdown(nextRunTime);
}

let isProcessing = false;

function scheduleNextRun(accounts, messages, accountProxies, chatCount, noType) {
  const delay = 24 * 60 * 60 * 1000;
  console.log(chalk.cyan(` ┊ ⏰ Process will repeat every 24 hours...`));
  setInterval(async () => {
    if (isProcessing || isSpinnerActive) return;
    try {
      isProcessing = true;
      const nextRunTime = moment().add(24, 'hours');
      await processAccounts(accounts, messages, accountProxies, chatCount, noType);
      startCountdown(nextRunTime);
    } catch (err) {
      console.log(chalk.red(` ✗ Error during cycle: ${err.message}`));
    } finally {
      isProcessing = false;
    }
  }, delay);
}

async function main() {
  console.log('\n');
  displayBanner();
  const noType = process.argv.includes('--no-type');
  let accounts = [];
  try {
    const accountsData = await fs.readFile('pk.txt', 'utf8');
    const lines = accountsData.split('\n').filter(line => line.trim() !== '');
    for (let i = 0; i < lines.length; i++) {
      const privateKey = lines[i].trim();
      if (!isValidPrivateKey(privateKey)) {
        console.log(chalk.red(`✗ privateKey on line ${i + 1} is invalid or incorrect.`));
        rl.close();
        return;
      }
      const wallet = new ethers.Wallet(privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`);
      accounts.push({ address: wallet.address, privateKey });
    }
  } catch (err) {
    console.log(chalk.red('✗ File pk.txt not found or empty! Ensure it contains privateKey per line.'));
    rl.close();
    return;
  }

  if (accounts.length === 0) {
    console.log(chalk.red('✗ No valid accounts in pk.txt!'));
    rl.close();
    return;
  }

  let messages = [];
  try {
    const msgData = await fs.readFile('message.txt', 'utf8');
    messages = msgData.split('\n').filter(line => line.trim() !== '').map(line => line.replace(/\r/g, ''));
  } catch (err) {
    console.log(chalk.red('✗ File message.txt not found or empty!'));
    rl.close();
    return;
  }

  if (messages.length === 0) {
    console.log(chalk.red('✗ File message.txt is empty!'));
    rl.close();
    return;
  }

  let chatCount;
  while (true) {
    const input = await promptUser('Enter the number of chats per account: ');
    chatCount = parseInt(input, 10);
    if (!isNaN(chatCount) && chatCount > 0) break;
    console.log(chalk.red('✗ Enter a valid number!'));
  }

  let useProxy;
  while (true) {
    const input = await promptUser('Use proxy? (y/n) ');
    if (input.toLowerCase() === 'y' || input.toLowerCase() === 'n') {
      useProxy = input.toLowerCase() === 'y';
      break;
    }
    console.log(chalk.red('✗ Enter "y" or "n"!'));
  }

  let proxies = [];
  if (useProxy) {
    try {
      const proxyData = await fs.readFile('proxy.txt', 'utf8');
      proxies = proxyData.split('\n').filter(line => line.trim() !== '');
      if (proxies.length === 0) {
        console.log(chalk.yellow('✗ File proxy.txt is empty. Continuing without proxy.'));
      }
    } catch (err) {
      console.log(chalk.yellow('✗ File proxy.txt not found. Continuing without proxy.'));
    }
  }

  const accountProxies = accounts.map((_, index) => proxies.length > 0 ? proxies[index % proxies.length] : null);

  console.log(chalk.cyan(` ┊ ⏰ Starting process for ${accounts.length} accounts...`));
  await processAccounts(accounts, messages, accountProxies, chatCount, noType);
  scheduleNextRun(accounts, messages, accountProxies, chatCount, noType);
  rl.close();
}

main();

