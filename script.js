// ==========================================
// 1. TÀI NGUYÊN ẢNH (ASSETS)
// ==========================================
const ASSETS = {
    playerIdle: new Image(),
    playerMove: [], 
    playerAttack: [], 
    playerDash: new Image(), 
    enemies: [], bg: new Image(), menuBg: new Image(), trees: [], stones: [],
    skills: {},
    enemyProjectiles: {
        badFire: new Image(),
        darkPurple: new Image()
    }
};

// Nạp ảnh đứng yên
ASSETS.playerIdle.src = 'Assets/Characters/Hero_Knight/UI/hero_knight.png';

// Nạp bộ ảnh di chuyển của Hero
for(let i = 1; i <= 4; i++) { 
    let img = new Image(); 
    img.src = `Assets/Characters/Hero_Knight/Animations/hero_knight_move_0${i}.png`; 
    ASSETS.playerMove.push(img); 
}

// Nạp bộ ảnh tay vung vũ khí
for(let i = 1; i <= 2; i++) { 
    let img = new Image(); 
    img.src = `Assets/Characters/Hero_Knight/Animations/hero_knight_attack_0${i}.png`; 
    ASSETS.playerAttack.push(img); 
}

// Nạp ảnh lướt
ASSETS.playerDash.src = 'Assets/Characters/Hero_Knight/Animations/hero_knight_dash.png';

// Nạp ảnh hệ thống kỹ năng nguyên tố, Hiệu ứng chém & Các Icon Trạng thái
const skillImages = {
    normalSlash: 'Assets/Effects/Attacks/NormalAttack.png',
    fireBall: 'Assets/Effects/Skills/Fire_Ball.png', 
    fireExplosion: 'Assets/Effects/Skills/Fire_Explosion.png', 
    fireZone: 'Assets/Effects/Skills/Fire_Zone.png', 
    fireSlash: 'Assets/Effects/Attacks/Fire_Slash.png',
    waterWave: 'Assets/Effects/Skills/Water_Wave.png', 
    waterBall: 'Assets/Effects/Attacks/Water_Ball.png', 
    mudPuddle: 'Assets/Effects/Skills/Mud_Puddle.png',
    tornado: 'Assets/Effects/Skills/Tornado.png', 
    windSlash: 'Assets/Effects/Attacks/Wind_Slash.png', 
    dustStorm: 'Assets/Effects/Skills/Dust_Storm.png',
    earthSpike: 'Assets/Effects/Skills/Earth_Spike.png', 
    earthSmash: 'Assets/Effects/Attacks/Earth_Smash.png', 
    rockFragment: 'Assets/Effects/Skills/Rock_Fragment.png',
    vfxThermal: 'Assets/Effects/VFX/VFX_Thermal.png', 
    vfxIceStorm: 'Assets/Effects/VFX/VFX_IceStorm.png', 
    vfxFireStorm: 'Assets/Effects/VFX/VFX_FireStorm.png',
    rockZone: 'Assets/Effects/Skills/Rock_Zone.png', 
    vfxSandStorm: 'Assets/Effects/VFX/VFX_SandStorm.png',
    burn: 'Assets/Effects/DBbuff/Burn.png', 
    wet: 'Assets/Effects/DeBuff/Wet.png', 
    stun: 'Assets/Effects/DeBuff/Stun.png', 
    freeze: 'Assets/Effects/DeBuff/Freeze.png'
};

for (const [key, src] of Object.entries(skillImages)) {
    ASSETS.skills[key] = new Image();
    ASSETS.skills[key].src = src;
}

// Nạp ảnh đạn của quái
ASSETS.enemyProjectiles.badFire.src = 'Assets/Effects/MonsterSkills/BadFire_Ball.png';
ASSETS.enemyProjectiles.darkPurple.src = 'Assets/Effects/MonsterSkills/DarkPurple_Ball.png';

// Backgrounds
ASSETS.bg.src = 'Assets/Backgrounds/Green_Backgrounds/Green_Backgrounds.png'; 
ASSETS.menuBg.src = 'Assets/Backgrounds/LoadingScreen/LoadingScreen.png';

// Resources (Cây và Đá)
for(let i = 1; i <= 3; i++) { let img = new Image(); img.src = `Assets/Resources/Tree/TheTree${i}.png`; ASSETS.trees.push(img); }
for(let i = 1; i <= 2; i++) { let img = new Image(); img.src = `Assets/Resources/Rock/TheRock${i}.png`; ASSETS.stones.push(img); }

// Monsters
const enemyNames = ['TheSlime.png', 'TheGoblin.png', 'TheSkeleton.png', 'TheBat.png', 'TheFire.png', 'TheWizard.png', 'TheOrc.png'];
enemyNames.forEach(name => {
    let img = new Image();
    img.src = `Assets/Monsters/${name}`;
    ASSETS.enemies.push(img);
});

// ==========================================
// 1.5. HỆ THỐNG UI CHỌN VŨ KHÍ (CẤP 8)
// ==========================================
const setupWeaponUI = () => {
    if(document.getElementById('screen-weapon')) return;
    const weaponUI = document.createElement('div');
    weaponUI.id = 'screen-weapon';
    weaponUI.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.85);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;';
    weaponUI.classList.add('hidden');
    weaponUI.innerHTML = `
        <h1 style="color:#f1c40f;font-size:40px;margin-bottom:30px;font-family:sans-serif;text-shadow: 2px 2px #000;">ĐẠT CẤP 8! CHỌN VŨ KHÍ VĨNH VIỄN</h1>
        <div style="display:flex;gap:20px;flex-wrap:wrap;justify-content:center;">
            <button onclick="chooseWeapon('blades')" style="padding:15px 25px;font-size:18px;background:#2ecc71;border:3px solid #fff;border-radius:15px;cursor:pointer;color:white;font-weight:bold;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">⚔️ Song Đao (Gió)</button>
            <button onclick="chooseWeapon('hammer')" style="padding:15px 25px;font-size:18px;background:#95a5a6;border:3px solid #fff;border-radius:15px;cursor:pointer;color:white;font-weight:bold;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🔨 Búa Tạ (Đất)</button>
            <button onclick="chooseWeapon('fire_sword')" style="padding:15px 25px;font-size:18px;background:#e74c3c;border:3px solid #fff;border-radius:15px;cursor:pointer;color:white;font-weight:bold;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🗡️ Kiếm Lửa (Lửa)</button>
            <button onclick="chooseWeapon('water_wand')" style="padding:15px 25px;font-size:18px;background:#3498db;border:3px solid #fff;border-radius:15px;cursor:pointer;color:white;font-weight:bold;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🪄 Trượng (Nước)</button>
            <button onclick="chooseWeapon('skip')" style="padding:15px 25px;font-size:18px;background:#7f8c8d;border:3px solid #fff;border-radius:15px;cursor:pointer;color:white;font-weight:bold;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">❌ Bỏ Qua</button>
        </div>
    `;
    document.body.appendChild(weaponUI);

    window.chooseWeapon = function(type) {
        if (type === 'skip') {
            gameState = STATE.PLAY;
            document.getElementById('screen-weapon').classList.add('hidden');
            return;
        }
        player.weapon = type;
        player.permanentWeapon = true;
        let name = '';
        if(type === 'blades') name = "Song Đao (Gió)";
        if(type === 'hammer') name = "Búa Tạ (Đất)";
        if(type === 'fire_sword') name = "Kiếm Lửa (Lửa)";
        if(type === 'water_wand') name = "Trượng (Nước)";
        document.getElementById('weapon-display').innerText = `Vũ khí: ${name} (Vĩnh viễn)`;
        SFX.levelUp();
        gameState = STATE.PLAY;
        document.getElementById('screen-weapon').classList.add('hidden');
    };
};
setupWeaponUI();

// ==========================================
// 2. AUDIO & FX
// ==========================================
let audioCtx = null; let masterVol = 0.5; let enableShake = true; let precalculatedNoise = null;

function initAudioEngine() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const bufferSize = audioCtx.sampleRate * 2.0; 
            precalculatedNoise = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = precalculatedNoise.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        } catch(e) {}
    }
    if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}

function playTone(freq, type, duration, vol=0.1) {
    if(!audioCtx || audioCtx.state === 'suspended') return;
    try {
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.type = type; osc.frequency.setValueAtTime(freq, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(freq*0.5, audioCtx.currentTime + duration);
        gain.gain.setValueAtTime(vol * masterVol, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
        osc.connect(gain); gain.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + duration);
    } catch(e) {}
}

function playNoise(duration, vol=0.1) {
    if(!audioCtx || audioCtx.state === 'suspended' || !precalculatedNoise) return;
    try {
        const noise = audioCtx.createBufferSource(); noise.buffer = precalculatedNoise; const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(vol * masterVol, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
        noise.connect(gain); gain.connect(audioCtx.destination); noise.start(); noise.stop(audioCtx.currentTime + duration);
    } catch(e) {}
}

const SFX = {
    hit: () => playNoise(0.1, 0.1), swing: () => playNoise(0.1, 0.05), slash: () => playTone(300, 'triangle', 0.1, 0.1),
    dash: () => playNoise(0.2, 0.2), magic: () => playTone(600, 'sine', 0.3, 0.2), heavy: () => playTone(150, 'square', 0.3, 0.4),
    pickup: () => playTone(900, 'sine', 0.1, 0.05), explosion: () => playNoise(0.4, 0.4),
    levelUp: () => { playTone(400, 'sine', 0.1, 0.2); setTimeout(()=>playTone(600, 'sine', 0.4, 0.2), 100); }
};

let nextBeatTime = 0; let beatStep = 0;
function updateBGM() {
    if (gameState !== STATE.PLAY || !audioCtx || audioCtx.state === 'suspended') return;
    if (audioCtx.currentTime >= nextBeatTime) {
        let step = beatStep % 16;
        if(step === 0 || step === 4 || step === 8 || step === 12) playTone(60, 'sine', 0.2, 0.4); 
        if(step % 2 !== 0) playNoise(0.05, 0.05); 
        const bassNotes = [110, 110, 220, 110, 98, 98, 196, 98]; playTone(bassNotes[step % 8], 'triangle', 0.15, 0.15);
        nextBeatTime += 0.14; beatStep++;
    }
}

// ==========================================
// 3. INPUT & CORE 
// ==========================================
const canvas = document.getElementById('game'); const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth; let height = canvas.height = window.innerHeight;
window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; initMenuArt(); });

const STATE = { MAIN: 0, PLAY: 1, PAUSE: 2, OVER: 3, WEAPON_SELECT: 4 }; 
let gameState = STATE.MAIN; 
let lastTime = 0, dt = 0, gameTime = 0; let shakeTime = 0, shakeIntensity = 0;
let survivalTime = 0; let killCount = 0;
let controlType = 'wasd';

const skillKeyMap = {
    wasd:   { s1: 'C', s2: 'F', s3: 'G', s4: 'V', s1_raw: 'c', s2_raw: 'f', s3_raw: 'g', s4_raw: 'v' },
    arrows: { s1: 'J', s2: 'K', s3: 'L', s4: 'O', s1_raw: 'j', s2_raw: 'k', s3_raw: 'l', s4_raw: 'o' }
};

const INPUT = { w:false, a:false, s:false, d:false, shift:false, space:false, skill1:false, skill2:false, skill3:false, skill4:false };
const MOUSE = { x: 0, y: 0, wx: 0, wy: 0, left: false };

function changeControls(val) {
    controlType = val;
    const km = skillKeyMap[val];
    if(document.getElementById('guide-move')) document.getElementById('guide-move').innerText = val === 'wasd' ? 'WASD' : '⬆⬇⬅➡'; 
    if(document.getElementById('guide-s1')) document.getElementById('guide-s1').innerText = km.s1;
    if(document.getElementById('guide-s2')) document.getElementById('guide-s2').innerText = km.s2;
    if(document.getElementById('guide-s3')) document.getElementById('guide-s3').innerText = km.s3;
    if(document.getElementById('guide-s4')) document.getElementById('guide-s4').innerText = km.s4;
    if(document.getElementById('hint-1')) document.getElementById('hint-1').innerText = km.s1;
    if(document.getElementById('hint-2')) document.getElementById('hint-2').innerText = km.s2;
    if(document.getElementById('hint-3')) document.getElementById('hint-3').innerText = km.s3;
    if(document.getElementById('hint-4')) document.getElementById('hint-4').innerText = km.s4;
    Object.keys(INPUT).forEach(k => INPUT[k] = false);
}

// Cập nhật UI ngay khi khởi động
window.addEventListener('DOMContentLoaded', () => {
    changeControls('wasd');
});

document.getElementById('vol-slider').addEventListener('input', e => masterVol = parseFloat(e.target.value));
document.getElementById('shake-toggle').addEventListener('change', e => enableShake = e.target.checked);

window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    if(controlType === 'wasd') {
        if(key === 'w') INPUT.w = true; if(key === 'a') INPUT.a = true; if(key === 's') INPUT.s = true; if(key === 'd') INPUT.d = true;
    } else {
        if(e.key === 'ArrowUp') INPUT.w = true; if(e.key === 'ArrowLeft') INPUT.a = true; if(e.key === 'ArrowDown') INPUT.s = true; if(e.key === 'ArrowRight') INPUT.d = true;
    }
    if(key === 'shift') INPUT.shift = true; if(key === ' ') INPUT.space = true;
    const km = skillKeyMap[controlType];
    if(key === km.s1_raw) INPUT.skill1 = true;
    if(key === km.s2_raw) INPUT.skill2 = true;
    if(key === km.s3_raw) INPUT.skill3 = true;
    if(key === km.s4_raw) INPUT.skill4 = true;
    if(key === 'escape') { if(gameState === STATE.PLAY) pauseGame(); else if(gameState === STATE.PAUSE) resumeGame(); }
});

window.addEventListener('keyup', e => {
    const key = e.key.toLowerCase();
    if(controlType === 'wasd') {
        if(key === 'w') INPUT.w = false; if(key === 'a') INPUT.a = false; if(key === 's') INPUT.s = false; if(key === 'd') INPUT.d = false;
    } else {
        if(e.key === 'ArrowUp') INPUT.w = false; if(e.key === 'ArrowLeft') INPUT.a = false; if(e.key === 'ArrowDown') INPUT.s = false; if(e.key === 'ArrowRight') INPUT.d = false;
    }
    if(key === 'shift') INPUT.shift = false; if(key === ' ') INPUT.space = false;
    const km = skillKeyMap[controlType];
    if(key === km.s1_raw) INPUT.skill1 = false;
    if(key === km.s2_raw) INPUT.skill2 = false;
    if(key === km.s3_raw) INPUT.skill3 = false;
    if(key === km.s4_raw) INPUT.skill4 = false;
});
window.addEventListener('mousemove', e => { MOUSE.x = e.clientX; MOUSE.y = e.clientY; });
window.addEventListener('mousedown', e => { if(e.button===0) MOUSE.left = true; });
window.addEventListener('mouseup', e => { if(e.button===0) MOUSE.left = false; });
window.addEventListener('contextmenu', e => e.preventDefault());

function dist(x1, y1, x2, y2) { return Math.hypot(x2-x1, y2-y1); }
function angle(x1, y1, x2, y2) { return Math.atan2(y2-y1, x2-x1); }
function screenShake(amt, time) { if(enableShake) { shakeIntensity = amt; shakeTime = time; } }
function formatTime(secs) { let m = Math.floor(secs/60); let s = Math.floor(secs%60); return `${m<10?'0':''}${m}:${s<10?'0':''}${s}`; }

let windParticles = [];
function initMenuArt() { windParticles = []; for (let i = 0; i < 80; i++) { windParticles.push({ x: Math.random() * width, y: Math.random() * height, l: Math.random() * 40 + 10, v: Math.random() * 800 + 400, a: Math.random() * 0.3 + 0.1 }); } }
function drawMainMenuCanvas(dt) {
    if (ASSETS.menuBg.complete && ASSETS.menuBg.naturalWidth !== 0) { ctx.drawImage(ASSETS.menuBg, 0, 0, width, height); } 
    else { ctx.fillStyle = '#111'; ctx.fillRect(0, 0, width, height); }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'; ctx.lineWidth = 1.5;
    windParticles.forEach(p => { p.x += p.v * dt; if (p.x > width) { p.x = -p.l; p.y = Math.random() * height; } ctx.globalAlpha = p.a; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.l, p.y); ctx.stroke(); }); ctx.globalAlpha = 1.0;
}
initMenuArt();

// ==========================================
// 4. HIỆU ỨNG ĐỒ HỌA & MÔI TRƯỜNG 
// ==========================================
let entities = [], particles = [], popups = [], projectiles = [], vfxs = [], drops = [], burnZones = [], mudZones = [], worldObjects = [];
let enemyProjectiles = []; 
let eliteTimer = 45; 

class VisualFX {
    constructor(x, y, type, a, color, scale=1) { this.x = x; this.y = y; this.type = type; this.a = a; this.color = color; this.scale = scale; this.life = 0.3; this.maxLife = 0.3; }
    update(dt) { this.life -= dt; }
    draw(ctx) {
        if(this.life <= 0) return;
        let p = 1 - (this.life / this.maxLife); 
        ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(this.a); ctx.scale(this.scale, this.scale); 
        ctx.globalAlpha = Math.max(0, this.life / this.maxLife); 
        
        let img = null;
        if(this.type === 'cleave_normal') img = ASSETS.skills.normalSlash;
        else if(this.type === 'cleave_fire') img = ASSETS.skills.fireSlash;
        else if(this.type === 'fire_explosion') img = ASSETS.skills.fireExplosion;
        else if(this.type === 'spin_slash') img = ASSETS.skills.windSlash;
        else if(this.type === 'smash') img = ASSETS.skills.earthSmash;
        else if(this.type === 'earth_spike') img = ASSETS.skills.earthSpike;
        else if(this.type === 'vfx_thermal') img = ASSETS.skills.vfxThermal;
        else if(this.type === 'vfx_icestorm') img = ASSETS.skills.vfxIceStorm;
        else if(this.type === 'vfx_firestorm') img = ASSETS.skills.vfxFireStorm;
        else if(this.type === 'vfx_sandstorm') img = ASSETS.skills.vfxSandStorm;
        else if(this.type === 'rock_fragment') img = ASSETS.skills.rockFragment;

       if (img && img.complete && img.naturalWidth !== 0) {
            let s = 200; 
            if (this.type === 'cleave_normal') {
                ctx.translate(30, 0); 
                ctx.scale(0.5, 1.1); 
                ctx.rotate(Math.PI / 2); 
            } 
            else if (this.type === 'cleave_fire') {
                ctx.translate(30, 0); 
                ctx.scale(-0.5, 1.1); 

            }
            if (this.type === 'fire_explosion') s = 250; 
            if (this.type === 'smash') s = 300; 
            if (this.type === 'vfx_sandstorm') s = 150; 
            if (this.type === 'rock_fragment') { s = 120; ctx.rotate(this.a); } 
            
            ctx.drawImage(img, -s/2, -s/2, s, s);
        } else {
            ctx.fillStyle = this.color; ctx.strokeStyle = this.color;
            if(this.type === 'cleave_normal') { ctx.beginPath(); ctx.arc(0, 0, 90, -Math.PI/2, Math.PI/2); ctx.arc(0, 0, 50, Math.PI/2, -Math.PI/2, true); ctx.fill(); }
            else if(this.type === 'spin_slash') { ctx.lineWidth = 15; ctx.beginPath(); ctx.arc(0, 0, 100, 0, Math.PI*2); ctx.stroke(); }
            else if(this.type === 'smash' || this.type.startsWith('vfx_') || this.type === 'fire_explosion') { ctx.beginPath(); ctx.arc(0, 0, 160 * p, 0, Math.PI*2); ctx.lineWidth = 25 * (1-p); ctx.stroke(); }
            else if(this.type === 'earth_spike') { ctx.beginPath(); ctx.moveTo(-30, 30); ctx.lineTo(-10, -80 * p); ctx.lineTo(10, -50 * p); ctx.lineTo(30, 30); ctx.fill(); }
            else if(this.type === 'target_circle') { ctx.strokeStyle = this.color; ctx.lineWidth = 4; ctx.fillStyle = 'rgba(231, 76, 60, 0.15)'; ctx.beginPath(); ctx.arc(0, 0, 70, 0, Math.PI*2); ctx.fill(); ctx.stroke(); }
        }
        ctx.restore();
    }
}

class BurnZone {
    constructor(x, y, duration = 7.5, isMagma = false) { 
        this.x = x; this.y = y; 
        this.r = isMagma ? 90 : 112; 
        this.life = duration; 
        this.tick = 0; 
        this.isMagma = isMagma; 
    }
    update(dt) {
        this.life -= dt; this.tick -= dt;
        if(Math.random()<0.2) createParticles(this.x + (Math.random()-0.5)*this.r, this.y + (Math.random()-0.5)*this.r, '#e74c3c', 1, 20);
        if(this.tick <= 0) { this.tick = 0.2; entities.forEach(e => { if(e.isEnemy && dist(this.x, this.y, e.x, e.y) < this.r + e.r) e.applyElement('fire', player.dmgBase * 0.2); }); }
    }
    draw(ctx) { 
        let img = this.isMagma ? ASSETS.skills.rockZone : ASSETS.skills.fireZone;
        if (img && img.complete && img.naturalWidth !== 0) {
            ctx.drawImage(img, this.x - this.r, this.y - this.r, this.r*2, this.r*2);
        } else {
            ctx.fillStyle = this.isMagma ? 'rgba(211, 84, 0, 0.5)' : 'rgba(231, 76, 60, 0.3)'; 
            ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2); ctx.fill(); 
        }
    }
}

class MudZone {
    constructor(x, y, duration = 1.5) { this.x = x; this.y = y; this.r = 90; this.life = duration; this.tick = 0; }
    update(dt) {
        this.life -= dt; this.tick -= dt;
        if(Math.random()<0.1) createParticles(this.x + (Math.random()-0.5)*this.r, this.y + (Math.random()-0.5)*this.r, '#8b4513', 1, 10);
        if(this.tick <= 0) { this.tick = 0.2; entities.forEach(e => { if(e.isEnemy && dist(this.x, this.y, e.x, e.y) < this.r + e.r) { e.slowTimer = 0.5; e.hp -= player.dmgBase*0.1; } }); }
    }
    draw(ctx) { 
        let img = ASSETS.skills.mudPuddle;
        if (img && img.complete && img.naturalWidth !== 0) {
            ctx.drawImage(img, this.x - this.r, this.y - this.r*0.7, this.r*2, this.r*1.4);
        } else {
            ctx.fillStyle = 'rgba(139, 69, 19, 0.5)'; ctx.beginPath(); ctx.ellipse(this.x, this.y, this.r, this.r*0.7, 0, 0, Math.PI*2); ctx.fill(); 
        }
    }
}

class ItemDrop {
    constructor(x, y, type) { 
        this.x = x; this.y = y; this.type = type; this.r = type==='gem'?6:15; 
        this.life = (type.startsWith('wpn_') || type === 'potion_cd' || type === 'magnet') ? 10 : 30;
        this.yOffset = 0; this.time = Math.random()*10; this.isMagnetized = false; 
    }
    update(dt) {
        this.life -= dt; this.time += dt*5; this.yOffset = Math.sin(this.time)*5;
        if((this.type === 'gem' && dist(this.x, this.y, player.x, player.y) < 150) || this.isMagnetized) { 
            let a = angle(this.x, this.y, player.x, player.y); let s = this.isMagnetized ? 800 : 400; 
            this.x += Math.cos(a)*s*dt; this.y += Math.sin(a)*s*dt; 
        }
    }
    draw(ctx) {
        ctx.save(); ctx.translate(this.x, this.y + this.yOffset);
        let color = '#fff'; let icon = ''; let size = "18px";
        if(this.type === 'gem') { ctx.fillStyle = '#3498db'; ctx.beginPath(); ctx.moveTo(0,-6); ctx.lineTo(6,0); ctx.lineTo(0,6); ctx.lineTo(-6,0); ctx.fill(); }
        else if(this.type === 'wpn_blades') { color = '#2ecc71'; icon = "⚔️"; }
        else if(this.type === 'wpn_hammer') { color = '#95a5a6'; icon = "🔨"; }
        else if(this.type === 'wpn_fire_sword') { color = '#e74c3c'; icon = "🗡️"; }
        else if(this.type === 'wpn_water_wand') { color = '#3498db'; icon = "🪄"; }
        else if(this.type === 'potion_cd') { color = '#9b59b6'; icon = "🧪"; }
        else if(this.type === 'magnet') { color = '#f1c40f'; icon = "🧲"; }
        else { color = '#e74c3c'; icon = "❤️"; size = "15px"; }
        if(this.type !== 'gem') { ctx.fillStyle = color; ctx.font=`${size} sans-serif`; ctx.fillText(icon, -9, 6); ctx.strokeStyle=color; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(0,0,this.r,0,Math.PI*2); ctx.stroke(); }
        ctx.restore();
    }
}

class WorldObject {
    constructor(x, y, type, imgId, size) { this.x = x; this.y = y; this.type = type; this.imgId = imgId; this.s = size; }
    draw(ctx) {
        let imgArray = this.type === 'tree' ? ASSETS.trees : ASSETS.stones; let img = imgArray[this.imgId];
        ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.beginPath(); ctx.ellipse(this.x, this.y, this.s * 0.3, this.s * 0.15, 0, 0, Math.PI*2); ctx.fill();
        if (img && img.complete && img.naturalWidth !== 0) { ctx.drawImage(img, this.x - this.s/2, this.y - this.s*0.9, this.s, this.s); } 
    }
}

class EnemyProjectile {
    constructor(x, y, a, pType, dmg) {
        this.x = x; this.y = y; this.a = a; this.pType = pType; this.dmg = dmg; 
        this.life = 3.5; 
        
        if(pType === 'straight') { 
            this.vx = Math.cos(a)*350; this.vy = Math.sin(a)*350; 
            this.r = 18; 
            this.color = '#9b59b6'; 
        }
        else if(pType === 'homing') { 
            this.currentAngle = a; 
            this.vx = Math.cos(a)*180; this.vy = Math.sin(a)*180; 
            this.r = 20; 
            this.color = '#e67e22'; 
            this.speed = 180; 
        }
    }
    update(dt) {
        this.life -= dt;
        if (this.pType === 'homing') { 
            let targetAng = angle(this.x, this.y, player.x, player.y); 
            let diff = targetAng - this.currentAngle;
            while(diff > Math.PI) diff -= Math.PI*2;
            while(diff < -Math.PI) diff += Math.PI*2;
            this.currentAngle += diff * dt * 1.5; 
            
            this.vx = Math.cos(this.currentAngle) * this.speed; 
            this.vy = Math.sin(this.currentAngle) * this.speed; 
            if(Math.random()<0.3) createParticles(this.x, this.y, '#e67e22', 1, 10); 
        } 
        else { if(Math.random()<0.3) createParticles(this.x, this.y, '#9b59b6', 1, 10); }
        
        this.x += this.vx * dt; this.y += this.vy * dt;
        
        if (dist(this.x, this.y, player.x, player.y) < this.r + player.r && player.iFrame <= 0) { 
            player.hp -= this.dmg; screenShake(6, 0.1); SFX.hit(); player.iFrame = 0.5; this.life = 0; 
        }
    }
    draw(ctx) { 
        ctx.save(); ctx.translate(this.x, this.y); 
        
        let img = null;
        if(this.pType === 'homing') img = ASSETS.enemyProjectiles.badFire;
        else if(this.pType === 'straight') img = ASSETS.enemyProjectiles.darkPurple;

        if (img && img.complete && img.naturalWidth !== 0) {
            let s = this.r * 2.5;
            if (this.pType === 'homing') ctx.rotate(this.currentAngle);
            else ctx.rotate(Math.atan2(this.vy, this.vx));
            ctx.drawImage(img, -s/2, -s/2, s, s);
        } else {
            ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(0, 0, this.r, 0, Math.PI*2); ctx.fill(); 
        }
        ctx.restore(); 
    }
}

// ==========================================
// 5. CLASS PLAYER 
// ==========================================
class Player {
    constructor(x, y) {
        this.x = x; this.y = y; this.r = 20; this.baseSpeed = 280; 
        this.maxHp = 100; this.hp = 100; this.maxSta = 100; this.sta = 100;
        this.level = 1; this.xp = 0; this.maxXp = 10; this.dmgBase = 20;
        this.weapon = 'default'; this.permanentWeapon = false; 
        this.attackTimer = 0; this.dashCd = 0; this.iFrame = 0; this.facing = 0; 
        this.skillCds = [0, 0, 0, 0]; this.skillMaxCds = [3, 4, 6, 8]; 
        this.buffCdTimer = 0; 

        this.currentFrame = 0;
        this.frameTimer = 0;
        this.frameSpeed = 0.12; 
        this.isMoving = false;
        this.facingRight = true;
    }

    gainXp(amt) {
        this.xp += amt; SFX.pickup();
        if(this.xp >= this.maxXp) {
            this.level++; this.xp -= this.maxXp; this.maxXp = Math.floor(this.maxXp * 1.5);
            this.maxHp += 20; this.hp = this.maxHp; this.maxSta += 20; this.sta = this.maxSta; this.dmgBase += 5; 
            document.getElementById('level-display').innerText = `CẤP ĐỘ ${this.level}`;
            popups.push(new TextPopup(this.x, this.y-50, "TĂNG CẤP!", '#f1c40f', 24));
            popups.push(new TextPopup(this.x, this.y-25, "Hồi Phục Hoàn Toàn!", '#2ecc71', 16));
            SFX.levelUp();
            if (this.level === 3) { document.getElementById('icon-3').innerText = '🌪️'; document.getElementById('btn-3').classList.remove('locked'); popups.push(new TextPopup(this.x, this.y-80, "MỞ KHÓA HỆ GIÓ!", '#2ecc71', 26)); }
            if (this.level === 5) { document.getElementById('icon-4').innerText = '🪨'; document.getElementById('btn-4').classList.remove('locked'); popups.push(new TextPopup(this.x, this.y-80, "MỞ KHÓA HỆ ĐẤT!", '#e67e22', 26)); }
            
            if (this.level === 8 && !this.permanentWeapon) {
                gameState = STATE.WEAPON_SELECT;
                document.getElementById('screen-weapon').classList.remove('hidden');
            }
        }
    }

    update(dt) {
        if(this.hp <= 0) { gameState = STATE.OVER; document.getElementById('death-stats').innerText = `Sinh tồn: ${formatTime(survivalTime)} - Diệt: ${killCount}`; document.getElementById('screen-gameover').classList.remove('hidden'); return; }
        
        this.facing = angle(this.x, this.y, MOUSE.wx, MOUSE.wy);
        if (MOUSE.wx < this.x) this.facingRight = false; else this.facingRight = true;
        
        let vx = 0, vy = 0; if(INPUT.w) vy -= 1; if(INPUT.s) vy += 1; if(INPUT.a) vx -= 1; if(INPUT.d) vx += 1;
        this.isMoving = (vx !== 0 || vy !== 0);

        if (this.isMoving) {
            this.frameTimer += dt;
            if (this.frameTimer >= this.frameSpeed) {
                this.currentFrame = (this.currentFrame + 1) % 4;
                this.frameTimer = 0;
            }
        } else { this.currentFrame = 0; }

        if(this.dashCd > 0) this.dashCd -= dt; if(this.iFrame > 0) this.iFrame -= dt;
        if(this.attackTimer > 0) this.attackTimer -= dt;
        if (this.buffCdTimer > 0) { this.buffCdTimer -= dt; this.skillCds = [0, 0, 0, 0]; } else { for(let i=0; i<4; i++) { if(this.skillCds[i] > 0) this.skillCds[i] -= dt; } }
        
        let currentSpeed = this.baseSpeed; 
        if(INPUT.shift && this.sta > 0 && this.isMoving) { currentSpeed *= 1.4; this.sta -= 25*dt; } else if(this.sta < this.maxSta) { this.sta += 25*dt; } 
        if(INPUT.space && this.dashCd <= 0 && this.sta >= 20) { this.sta -= 20; this.dashCd = 0.5; this.iFrame = 0.3; let dx = Math.cos(this.facing)*250, dy = Math.sin(this.facing)*250; if(vx||vy) { let len = Math.hypot(vx,vy); dx = (vx/len)*250; dy = (vy/len)*250; } this.x += dx; this.y += dy; SFX.dash(); createParticles(this.x, this.y, '#fff', 15); }
        if(this.isMoving) { let len = Math.hypot(vx, vy); this.x += (vx/len) * currentSpeed * dt; this.y += (vy/len) * currentSpeed * dt; }
        
        // ĐÁNH THƯỜNG
        if(MOUSE.left && this.attackTimer <= 0) {
            if (this.weapon === 'blades') { this.attackTimer = 0.15; this.meleeHit(this.dmgBase*2, 110, Math.PI*2, 'wind'); vfxs.push(new VisualFX(this.x, this.y, 'spin_slash', 0, '#2ecc71')); SFX.swing(); } 
            else if (this.weapon === 'hammer') { this.attackTimer = 0.8; this.meleeHit(this.dmgBase*3, 140, Math.PI*2, 'earth', true); vfxs.push(new VisualFX(this.x, this.y, 'smash', 0, '#95a5a6')); vfxs.push(new VisualFX(this.x + Math.cos(this.facing)*50, this.y + Math.sin(this.facing)*50, 'rock_fragment', this.facing, '#fff', 1.0)); SFX.heavy(); screenShake(6, 0.2); } 
            else if (this.weapon === 'fire_sword') { 
                this.attackTimer = 0.35; 
                this.meleeHit(this.dmgBase*2, 100, Math.PI, 'fire'); // Math.PI là chuẩn 180 độ
                vfxs.push(new VisualFX(this.x, this.y, 'cleave_fire', this.facing, '#e74c3c')); 
                SFX.slash(); 
            } 
            else if (this.weapon === 'water_wand') { 
                this.attackTimer = 0.4; projectiles.push(new Projectile(this.x, this.y, this.facing - 0.2, 'waterball_small', this.dmgBase*0.5)); projectiles.push(new Projectile(this.x, this.y, this.facing, 'waterball_small', this.dmgBase*0.5)); projectiles.push(new Projectile(this.x, this.y, this.facing + 0.2, 'waterball_small', this.dmgBase*0.5)); SFX.magic(); 
            } 
            else { 
                this.attackTimer = 0.4; 
                this.meleeHit(this.dmgBase, 90, Math.PI, 'none'); 
                vfxs.push(new VisualFX(this.x, this.y, 'cleave_normal', this.facing, '#bdc3c7')); 
                SFX.slash(); 
            }
        }
        
        // KỸ NĂNG VỚI TÊN GỌI CHUNG
        if(INPUT.skill1 && this.skillCds[0] <= 0 && this.sta >= 15) { this.sta -= 15; this.skillCds[0] = this.skillMaxCds[0]; projectiles.push(new Projectile(this.x, this.y, this.facing, 'fire_bomb', this.dmgBase*1.5)); SFX.heavy(); INPUT.skill1 = false; }
        if(INPUT.skill2 && this.skillCds[1] <= 0 && this.sta >= 15) { this.sta -= 15; this.skillCds[1] = this.skillMaxCds[1]; projectiles.push(new Projectile(this.x, this.y, this.facing, 'tidal_wave', this.dmgBase*1.2)); SFX.magic(); INPUT.skill2 = false; }
        if(INPUT.skill3 && this.skillCds[2] <= 0 && this.sta >= 15 && this.level >= 3) { this.sta -= 15; this.skillCds[2] = this.skillMaxCds[2]; projectiles.push(new Projectile(this.x, this.y, this.facing, 'tornado', this.dmgBase*0.5)); SFX.swing(); INPUT.skill3 = false; }
        if(INPUT.skill4 && this.skillCds[3] <= 0 && this.sta >= 15 && this.level >= 5) { this.sta -= 15; this.skillCds[3] = this.skillMaxCds[3]; let distStep = 110; for(let i=1; i<=5; i++) { setTimeout(() => { if(gameState !== STATE.PLAY) return; let tx = this.x + Math.cos(this.facing) * distStep * i; let ty = this.y + Math.sin(this.facing) * distStep * i; vfxs.push(new VisualFX(tx, ty, 'earth_spike', 0, '#7f8c8d', 1.5)); vfxs.push(new VisualFX(tx, ty, 'rock_fragment', Math.random()*Math.PI*2, '#fff', 0.8)); createParticles(tx, ty, '#95a5a6', 30, 80); screenShake(10, 0.2); SFX.heavy(); entities.forEach(e => { if(e.isEnemy && Math.hypot(e.x-tx, e.y-ty) < 90) { e.applyElement('earth', this.dmgBase*4); e.stunTimer = 1.5; } }); }, i * 120); } INPUT.skill4 = false; }
        
        drops = drops.filter(d => {
            if(dist(this.x, this.y, d.x, d.y) < this.r + d.r + 20) {
                if(d.type === 'gem') {
                    this.gainXp(1);
                } else if(d.type === 'heal') { 
                    this.hp = Math.min(this.maxHp, this.hp + 30); SFX.pickup(); popups.push(new TextPopup(this.x, this.y-40, "+30 HP", '#2ecc71')); 
                } else if(d.type.startsWith('wpn_')) { 
                    if (this.permanentWeapon) {
                        this.gainXp(15);
                        SFX.pickup();
                        popups.push(new TextPopup(this.x, this.y-40, "+15 EXP", '#f1c40f'));
                    } else {
                        if(d.type === 'wpn_blades') { this.weapon = 'blades'; document.getElementById('weapon-display').innerText = "Vũ khí: Song Đao (Gió)"; SFX.pickup(); popups.push(new TextPopup(this.x, this.y-40, "Song Đao!", '#2ecc71')); }
                        else if(d.type === 'wpn_hammer') { this.weapon = 'hammer'; document.getElementById('weapon-display').innerText = "Vũ khí: Búa Tạ (Đất)"; SFX.pickup(); popups.push(new TextPopup(this.x, this.y-40, "Búa Tạ!", '#95a5a6')); }
                        else if(d.type === 'wpn_fire_sword') { this.weapon = 'fire_sword'; document.getElementById('weapon-display').innerText = "Vũ khí: Kiếm Lửa (Lửa)"; SFX.pickup(); popups.push(new TextPopup(this.x, this.y-40, "Kiếm Lửa!", '#e74c3c')); }
                        else if(d.type === 'wpn_water_wand') { this.weapon = 'water_wand'; document.getElementById('weapon-display').innerText = "Vũ khí: Trượng (Nước)"; SFX.pickup(); popups.push(new TextPopup(this.x, this.y-40, "Trượng Phép!", '#3498db')); }
                    }
                }
                else if(d.type === 'potion_cd') { this.buffCdTimer = 6.5; SFX.levelUp(); popups.push(new TextPopup(this.x, this.y-40, "HỒI CHIÊU 0s!", '#e056fd', 22)); }
                else if(d.type === 'magnet') { SFX.pickup(); popups.push(new TextPopup(this.x, this.y-40, "NAM CHÂM!", '#f1c40f', 22)); drops.forEach(gem => { if(gem.type === 'gem') gem.isMagnetized = true; }); }
                return false;
            } return d.life > 0;
        });
    }

    meleeHit(dmg, range, hitArc, elemType, knockback=false) {
        let hitAny = false;
        entities.forEach(e => {
            if(e.isEnemy && dist(this.x, this.y, e.x, e.y) < range + e.r) {
                let a = angle(this.x, this.y, e.x, e.y); let adiff = Math.abs(a - this.facing); if(adiff > Math.PI) adiff = 2*Math.PI - adiff;
                if(adiff < hitArc/2 || hitArc >= Math.PI*2) { hitAny = true; e.applyElement(elemType, dmg); if(knockback) { e.vx = Math.cos(a)*600; e.vy = Math.sin(a)*600; } }
            }
        });
        if(hitAny) SFX.hit(); 
    }

    draw(ctx) {
        ctx.save(); ctx.translate(this.x, this.y); 
        
        ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.beginPath(); ctx.ellipse(0, 15, 20, 10, 0, 0, Math.PI*2); ctx.fill(); 
        if (!this.facingRight) ctx.scale(-1, 1);

        let imgToDraw = null;
        if (this.dashCd > 0 && ASSETS.playerDash.complete && ASSETS.playerDash.naturalWidth !== 0) {
            imgToDraw = ASSETS.playerDash;
        } else if (this.attackTimer > 0 && ASSETS.playerAttack.length > 0) {
            let attackFrame = this.attackTimer > 0.2 ? 0 : 1;
            imgToDraw = ASSETS.playerAttack[attackFrame] || ASSETS.playerAttack[0];
        } else if (this.isMoving) {
            imgToDraw = ASSETS.playerMove[this.currentFrame]; 
        } else {
            imgToDraw = ASSETS.playerIdle; 
        }

        if (imgToDraw && imgToDraw.complete && imgToDraw.naturalWidth > 0) {
            ctx.drawImage(imgToDraw, -32, -32, 64, 64);
        } else if (ASSETS.playerIdle && ASSETS.playerIdle.complete && ASSETS.playerIdle.naturalWidth > 0) {
            ctx.drawImage(ASSETS.playerIdle, -32, -32, 64, 64);
        }

        ctx.restore();
    }
}

// ==========================================
// KẺ ĐỊCH 
// ==========================================
class Enemy {
    constructor(x, y, type, isElite = false) {
        this.x = x; this.y = y; this.type = type; this.isEnemy = true; this.isElite = isElite;
        this.vx = 0; this.vy = 0; this.burnTimer = 0; this.wetTimer = 0; this.windTimer = 0; this.earthTimer = 0; 
        this.stunTimer = 0; this.slowTimer = 0; this.burnTick = 0; this.attackCd = Math.random() * 5 + 5;
        this.freezeTimer = 0; 
        
        let scale = 1 + Math.floor(survivalTime/60) * 0.4;
        
        if(type === 'slime') { this.baseR = 15; this.hp = 80; this.baseSpeed = 140; this.imgId = 0; } 
        else if(type === 'goblin') { this.baseR = 18; this.hp = 80; this.baseSpeed = 180; this.imgId = 1; }
        else if(type === 'bat') { this.baseR = 12; this.hp = 80; this.baseSpeed = 220; this.imgId = 3; } 
        else if(type === 'skeleton') { this.baseR = 25; this.hp = 120; this.baseSpeed = 100; this.imgId = 2; } 
        else if(type === 'fire') { this.baseR = 20; this.hp = 140; this.baseSpeed = 90; this.imgId = 4; } 
        else if(type === 'wizard') { this.baseR = 20; this.hp = 140; this.baseSpeed = 110; this.imgId = 5; } 
        else if(type === 'orc') { this.baseR = 30; this.hp = 160; this.baseSpeed = 80; this.imgId = 6; } 
        
        if (isElite) { this.hp += 100; this.r = this.baseR * 2.5; } else { this.r = this.baseR; } 
        this.hp *= scale; 
        this.isJumping = false; this.jumpTime = 0; this.jumpDuration = 2.0;
    }

    applyElement(type, dmg) {
        let isFire = this.burnTimer > 0; let isWater = this.wetTimer > 0; let isWind = this.windTimer > 0; let isEarth = this.earthTimer > 0;
        if (type === 'fire') {
            if (isWater) { this.wetTimer = 0; this.hp -= dmg * 3; popups.push(new TextPopup(this.x, this.y, "SỐC NHIỆT!", '#e056fd', 24)); vfxs.push(new VisualFX(this.x, this.y, 'vfx_thermal', 0, '#e056fd', 1.5)); SFX.explosion(); } 
            else if (isWind) { this.windTimer = 0; this.hp -= dmg * 2; this.burnTimer = 5; popups.push(new TextPopup(this.x, this.y, "BÃO LỬA!", '#e74c3c', 24)); vfxs.push(new VisualFX(this.x, this.y, 'vfx_firestorm', 0, '#e74c3c', 1.5)); entities.forEach(e => { if(e.isEnemy && e!==this && dist(this.x, this.y, e.x, e.y) < 150) e.burnTimer = 3; }); } 
            else if (isEarth) { this.earthTimer = 0; this.hp -= dmg * 3; popups.push(new TextPopup(this.x, this.y, "NHAM THẠCH!", '#d35400', 24)); vfxs.push(new VisualFX(this.x, this.y, 'smash', 0, '#d35400', 1.5)); burnZones.push(new BurnZone(this.x, this.y, 7.5, true)); SFX.heavy(); } 
            else { this.hp -= dmg; this.burnTimer = 4; }
        } else if (type === 'water') {
            if (isFire) { this.burnTimer = 0; this.hp -= dmg * 3; popups.push(new TextPopup(this.x, this.y, "SỐC NHIỆT!", '#e056fd', 24)); vfxs.push(new VisualFX(this.x, this.y, 'vfx_thermal', 0, '#e056fd', 1.5)); SFX.explosion(); } 
            else if (isWind) { this.windTimer = 0; this.hp -= dmg; this.stunTimer = 2; this.freezeTimer = 2; popups.push(new TextPopup(this.x, this.y, "BÃO TUYẾT!", '#00ffff', 24)); vfxs.push(new VisualFX(this.x, this.y, 'vfx_icestorm', 0, '#00ffff', 1.5)); } 
            else if (isEarth) { this.earthTimer = 0; this.hp -= dmg; this.stunTimer = 3; popups.push(new TextPopup(this.x, this.y, "BÙN LẦY!", '#8b4513', 24)); mudZones.push(new MudZone(this.x, this.y, 1.5)); } 
            else { this.hp -= dmg; this.wetTimer = 4; }
        } else if (type === 'wind') {
            if (isFire) { this.burnTimer = 0; this.hp -= dmg * 2; this.burnTimer = 5; popups.push(new TextPopup(this.x, this.y, "BÃO LỬA!", '#e74c3c', 24)); vfxs.push(new VisualFX(this.x, this.y, 'vfx_firestorm', 0, '#e74c3c', 1.5)); entities.forEach(e => { if(e.isEnemy && e!==this && dist(this.x, this.y, e.x, e.y) < 150) e.burnTimer = 3; }); } 
            else if (isWater) { this.wetTimer = 0; this.hp -= dmg; this.stunTimer = 2; this.freezeTimer = 2; popups.push(new TextPopup(this.x, this.y, "BÃO TUYẾT!", '#00ffff', 24)); vfxs.push(new VisualFX(this.x, this.y, 'vfx_icestorm', 0, '#00ffff', 1.5)); } 
            else if (isEarth) { 
                this.earthTimer = 0; this.hp -= dmg * 2; popups.push(new TextPopup(this.x, this.y, "BÃO CÁT!", '#f1c40f', 24)); SFX.explosion();
                vfxs.push(new VisualFX(this.x, this.y, 'vfx_sandstorm', 0, '#f1c40f', 1.0)); 
                for(let i=0; i<3; i++) projectiles.push(new Projectile(this.x, this.y, Math.random() * Math.PI * 2, 'yellow_tornado', player.dmgBase)); 
            } 
            else { this.hp -= dmg; this.windTimer = 0.75; } 
        } else if (type === 'earth') {
            if (isFire) { this.burnTimer = 0; this.hp -= dmg * 3; popups.push(new TextPopup(this.x, this.y, "NHAM THẠCH!", '#d35400', 24)); vfxs.push(new VisualFX(this.x, this.y, 'smash', 0, '#d35400', 1.5)); burnZones.push(new BurnZone(this.x, this.y, 7.5, true)); SFX.heavy(); } 
            else if (isWater) { this.wetTimer = 0; this.hp -= dmg; this.stunTimer = 3; popups.push(new TextPopup(this.x, this.y, "BÙN LẦY!", '#8b4513', 24)); mudZones.push(new MudZone(this.x, this.y, 1.5)); } 
            else if (isWind) { 
                this.windTimer = 0; this.hp -= dmg * 2; popups.push(new TextPopup(this.x, this.y, "BÃO CÁT!", '#f1c40f', 24)); SFX.explosion();
                vfxs.push(new VisualFX(this.x, this.y, 'vfx_sandstorm', 0, '#f1c40f', 1.0)); 
                for(let i=0; i<3; i++) projectiles.push(new Projectile(this.x, this.y, Math.random() * Math.PI * 2, 'yellow_tornado', player.dmgBase)); 
            } 
            else { this.hp -= dmg; this.earthTimer = 4; this.stunTimer = 0.5; }
        } else { this.hp -= dmg; }
    }

    update(dt) {
        if (this.isJumping) {
            this.jumpTime += dt; let t = this.jumpTime / this.jumpDuration;
            if (t >= 1) { 
                this.isJumping = false; this.x = this.targetX; this.y = this.targetY; 
                let dr = this.isElite ? this.r + 150 : this.r + 70; 
                if (dist(this.x, this.y, player.x, player.y) < dr && player.iFrame <= 0) { 
                    player.hp -= 40; screenShake(10, 0.2); SFX.heavy(); player.iFrame = 0.5; 
                } 
                vfxs.push(new VisualFX(this.x, this.y, 'smash', 0, '#95a5a6', 1.5)); 
                vfxs.push(new VisualFX(this.x, this.y, 'rock_fragment', Math.random()*Math.PI*2, '#fff', 1.2)); 
                SFX.heavy(); 
                this.attackCd = 15; 
            } 
            else { this.x = this.startX + (this.targetX - this.startX) * t; this.y = this.startY + (this.targetY - this.startY) * t; } return;
        }
        if(this.stunTimer > 0) { this.stunTimer -= dt; return; } 
        if(this.freezeTimer > 0) { this.freezeTimer -= dt; } 
        // BỔ SUNG ĐẾM NGƯỢC THỜI GIAN CHO HIỆU ỨNG GIÓ VÀ ĐẤT TẠI ĐÂY
        if(this.windTimer > 0) { this.windTimer -= dt; } 
        if(this.earthTimer > 0) { this.earthTimer -= dt; } 
        
        if(this.burnTimer > 0) { this.burnTimer -= dt; this.burnTick -= dt; if (Math.random() < 0.2) createParticles(this.x, this.y, '#e74c3c', 1, 30); if(this.burnTick <= 0) { this.hp -= player.dmgBase*0.2; this.burnTick = 0.5; } }
        let currentSpeed = this.baseSpeed; if(this.slowTimer > 0) { this.slowTimer -= dt; currentSpeed *= 0.2; } if(this.wetTimer > 0) { this.wetTimer -= dt; currentSpeed *= 0.6; if(Math.random() < 0.1) createParticles(this.x, this.y, '#3498db', 1, 20); }
        if(this.attackCd > 0) this.attackCd -= dt;
        
        if(this.attackCd <= 0) {
            if(this.type === 'fire') { 
                let a = angle(this.x, this.y, player.x, player.y);
                enemyProjectiles.push(new EnemyProjectile(this.x, this.y, a - 0.4, 'homing', 20)); 
                enemyProjectiles.push(new EnemyProjectile(this.x, this.y, a + 0.4, 'homing', 20)); 
                this.attackCd = 7.5; 
            }
            else if(this.type === 'wizard') { 
                enemyProjectiles.push(new EnemyProjectile(this.x, this.y, angle(this.x, this.y, player.x, player.y), 'straight', 20)); 
                this.attackCd = 7.5; 
            }
            else if(this.type === 'orc') { 
                this.isJumping = true; this.jumpTime = 0; this.startX = this.x; this.startY = this.y; 
                this.targetX = player.x; this.targetY = player.y; 
                vfxs.push(new VisualFX(this.targetX, this.targetY, 'target_circle', 0, 'rgba(231, 76, 60, 0.8)', (this.isElite ? this.r + 150 : this.r + 70))); 
                this.attackCd = 15; 
            }
        }

        if(this.hp <= 0) {
            killCount++; drops.push(new ItemDrop(this.x, this.y, 'gem'));
            let roll = Math.random();
            if(roll < 0.05) drops.push(new ItemDrop(this.x+10, this.y, 'heal')); 
            else if(roll < 0.07) drops.push(new ItemDrop(this.x+10, this.y, 'wpn_blades'));
            else if(roll < 0.09) drops.push(new ItemDrop(this.x+10, this.y, 'wpn_hammer'));
            else if(roll < 0.11) drops.push(new ItemDrop(this.x+10, this.y, 'wpn_fire_sword'));
            else if(roll < 0.13) drops.push(new ItemDrop(this.x+10, this.y, 'wpn_water_wand'));
            else if(roll < 0.15) drops.push(new ItemDrop(this.x-10, this.y, 'potion_cd')); 
            else if(roll < 0.17) drops.push(new ItemDrop(this.x-10, this.y, 'magnet')); 
            
            if(this.isElite) { for(let i=0;i<30;i++) drops.push(new ItemDrop(this.x+(Math.random()-0.5)*100, this.y+(Math.random()-0.5)*100, 'gem')); }
            createParticles(this.x, this.y, '#9b59b6', 30); return;
        }
        let a = angle(this.x, this.y, player.x, player.y); this.vx += Math.cos(a)*currentSpeed*dt; this.vy += Math.sin(a)*currentSpeed*dt; if(dist(this.x, this.y, player.x, player.y) < this.r + player.r && player.iFrame <= 0) { player.hp -= 15; screenShake(4, 0.1); SFX.hit(); player.iFrame = 0.5; }
        this.x += this.vx * dt; this.y += this.vy * dt; this.vx *= 0.85; this.vy *= 0.85;
    }
    
    draw(ctx) { 
        ctx.save(); let dY = this.y; 
        if (this.isJumping) { let t = this.jumpTime / this.jumpDuration; dY -= Math.sin(t * Math.PI) * 200; } 
        ctx.translate(this.x, this.y); 
        ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.beginPath(); ctx.ellipse(0, this.r*0.8, this.r, this.r/2, 0, 0, Math.PI*2); ctx.fill(); 
        ctx.translate(0, dY - this.y); 
        
        let flipped = false;
        if (player.x < this.x) { ctx.scale(-1, 1); flipped = true; } 
        
        let img = ASSETS.enemies[this.imgId]; 
        let size = this.r * 2.5; 
        if (img && img.complete && img.naturalWidth !== 0) { 
            ctx.drawImage(img, -size/2, -size/2, size, size); 
        } 
        
        if (flipped) ctx.scale(-1, 1); 
        
        ctx.globalAlpha = 0.6; 
        if (this.stunTimer > 0 && this.freezeTimer <= 0) {
            if (ASSETS.skills.stun && ASSETS.skills.stun.complete && ASSETS.skills.stun.naturalWidth > 0) {
                ctx.drawImage(ASSETS.skills.stun, -20, -size/2 - 40, 40, 40); 
            }
        }
        if (this.freezeTimer > 0) {
            if (ASSETS.skills.freeze && ASSETS.skills.freeze.complete && ASSETS.skills.freeze.naturalWidth > 0) {
                ctx.drawImage(ASSETS.skills.freeze, -30, -30, 60, 60); 
            }
        }
        if (this.burnTimer > 0) {
            if (ASSETS.skills.burn && ASSETS.skills.burn.complete && ASSETS.skills.burn.naturalWidth > 0) {
                ctx.drawImage(ASSETS.skills.burn, -25, -25, 50, 50); 
            }
        }
        if (this.wetTimer > 0 && this.freezeTimer <= 0) {
            if (ASSETS.skills.wet && ASSETS.skills.wet.complete && ASSETS.skills.wet.naturalWidth > 0) {
                ctx.drawImage(ASSETS.skills.wet, -20, -20, 40, 40); 
            }
        }
        ctx.globalAlpha = 1.0;

        ctx.restore(); 
    }
}

// ==========================================
// KỸ NĂNG BAY CỦA PLAYER
// ==========================================
class Projectile {
   constructor(x, y, a, pType, dmg) {
        this.x = x; this.y = y; this.a = a; this.pType = pType; this.dmg = dmg; this.hitList = [];
        if(pType === 'fire_bomb') { this.vx = Math.cos(a)*800; this.vy = Math.sin(a)*800; this.life = 1.0; this.r = 20; this.color = '#e74c3c'; } 
        // SỬA this.r = 50 THÀNH this.r = 100 ĐỂ X2 BỀ NGANG SÓNG NƯỚC
        else if(pType === 'tidal_wave') { this.vx = Math.cos(a)*400; this.vy = Math.sin(a)*400; this.life = 1.5; this.r = 100; this.color = '#3498db'; }
        else if(pType === 'waterball_small') { this.vx = Math.cos(a)*500; this.vy = Math.sin(a)*500; this.life = 1.0; this.r = 15; this.color = '#00ffff'; }
        else if(pType === 'tornado') { this.vx = Math.cos(a)*150; this.vy = Math.sin(a)*150; this.life = 4.0; this.r = 70; this.color = '#1abc9c'; this.seed1 = Math.random(); this.seed2 = Math.random(); }
        else if(pType === 'yellow_tornado') { this.vx = Math.cos(a)*350; this.vy = Math.sin(a)*350; this.life = 3.0; this.r = 25; this.color = '#f1c40f'; this.seed1 = Math.random(); this.seed2 = Math.random(); } 
    }
    update(dt) {
        this.x += this.vx*dt; this.y += this.vy*dt; this.life -= dt;
        if(this.pType === 'fire_bomb') { 
            let exploded = false; 
            if (this.life <= 0) exploded = true; 
            else { entities.forEach(e => { if(e.isEnemy && dist(this.x, this.y, e.x, e.y) < this.r + e.r) exploded = true; }); } 
            
            if (exploded) { 
                vfxs.push(new VisualFX(this.x, this.y, 'fire_explosion', 0, '#e74c3c'));
                burnZones.push(new BurnZone(this.x, this.y, 7.5, false)); 
                createParticles(this.x, this.y, '#e74c3c', 30, 100); 
                SFX.explosion(); 
                this.life = 0; 
                this.pType = 'exploded'; 
            } 
        }
        else if (this.pType === 'tornado' || this.pType === 'yellow_tornado') { 
            entities.forEach(e => { 
                if(e.isEnemy && dist(this.x, this.y, e.x, e.y) < this.r + 150) { 
                    let pullAngle = angle(e.x, e.y, this.x, this.y); 
                    if (this.pType === 'tornado') { 
                        e.vx += Math.cos(pullAngle) * 300 * dt; 
                        e.vy += Math.sin(pullAngle) * 300 * dt; 
                    } 
                    if(dist(this.x, this.y, e.x, e.y) < this.r && !this.hitList.includes(e)) { 
                        e.applyElement('wind', this.dmg); 
                        this.hitList.push(e); 
                        
                        if (this.pType === 'yellow_tornado') {
                            let pushA = angle(this.x, this.y, e.x, e.y);
                            e.vx += Math.cos(pushA) * 250;
                            e.vy += Math.sin(pushA) * 250;
                        }
                        
                        setTimeout(()=>{ let idx = this.hitList.indexOf(e); if(idx>-1) this.hitList.splice(idx, 1); }, 500); 
                    } 
                } 
            }); 
        }
        else { entities.forEach(e => { if(e.isEnemy && dist(this.x, this.y, e.x, e.y) < this.r + e.r) { if(this.pType === 'tidal_wave' && !this.hitList.includes(e)) { e.applyElement('water', this.dmg); e.vx += Math.cos(this.a)*1000; e.vy += Math.sin(this.a)*1000; this.hitList.push(e); } else if(this.pType === 'waterball_small') { e.applyElement('water', this.dmg); createParticles(this.x, this.y, '#3498db', 5, 20); this.life = 0; } } }); }
    }
    
    draw(ctx) { 
        if(this.pType === 'exploded') return; 
        ctx.save(); ctx.translate(this.x, this.y); 
        
        if (this.pType !== 'tornado' && this.pType !== 'yellow_tornado') {
            ctx.rotate(this.a);
        }
        
        let img = null;
        if(this.pType === 'fire_bomb') { img = ASSETS.skills.fireBall; }
        else if(this.pType === 'tidal_wave') { 
            img = ASSETS.skills.waterWave; 
            ctx.rotate(Math.PI); 
        }
        else if(this.pType === 'waterball_small') { img = ASSETS.skills.waterBall; }
        else if(this.pType === 'tornado') { img = ASSETS.skills.tornado; }
        else if(this.pType === 'yellow_tornado') { img = ASSETS.skills.dustStorm; }

        if (img && img.complete && img.naturalWidth !== 0) {
            let s = this.r * 2.5; 
            if(this.pType === 'tidal_wave') s = 200; 
            
            if (this.pType === 'tornado' || this.pType === 'yellow_tornado') {
                ctx.drawImage(img, -s/2, -s, s, s*1.5); 
            } else {
                ctx.drawImage(img, -s/2, -s/2, s, s);
            }
        } else {
            ctx.fillStyle = this.color; 
            ctx.rotate(this.a); 
            if(this.pType === 'tidal_wave') { ctx.beginPath(); ctx.arc(0, 0, this.r, -Math.PI/2, Math.PI/2); ctx.lineTo(-20, 0); ctx.fill(); } 
            else if (this.pType === 'tornado' || this.pType === 'yellow_tornado') { ctx.lineWidth = 6; ctx.strokeStyle = this.color; ctx.beginPath(); ctx.ellipse(0, 0, this.r * (0.5 + this.seed1*0.5), this.r*(0.2+this.seed2*0.3), 0, 0, Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.ellipse(0, 0, this.r * (0.7 + this.seed2*0.3), this.r*(0.4+this.seed1*0.4), Math.PI/3, 0, Math.PI*2); ctx.stroke(); if(this.pType === 'yellow_tornado') ctx.fillStyle = 'rgba(241, 196, 15, 0.4)'; else ctx.fillStyle = 'rgba(26, 188, 156, 0.4)'; ctx.fill(); } 
            else { ctx.beginPath(); ctx.arc(0, 0, this.r, 0, Math.PI*2); ctx.fill(); } 
        }
        ctx.restore(); 
    }
}

class TextPopup { constructor(x, y, text, color, size=16) { this.x=x; this.y=y; this.text=text; this.color=color; this.size=size; this.vy=-30; this.life=1.5; } update(dt) { this.y += this.vy*dt; this.life -= dt; } draw(ctx) { ctx.save(); ctx.fillStyle = this.color; ctx.font = `bold ${this.size}px sans-serif`; ctx.textAlign = 'center'; ctx.globalAlpha = Math.max(0, this.life/1.5); ctx.strokeStyle = '#000'; ctx.lineWidth = 3; ctx.strokeText(this.text, this.x, this.y); ctx.fillText(this.text, this.x, this.y); ctx.restore(); } }
class Particle { constructor(x, y, color, speedScale=40) { this.x = x; this.y = y; this.color = color; let a = Math.random() * Math.PI * 2; let s = Math.random() * speedScale + 10; this.vx = Math.cos(a)*s; this.vy = Math.sin(a)*s; this.life = Math.random() * 0.4 + 0.2; this.maxLife = this.life; } update(dt) { this.x += this.vx*dt; this.y += this.vy*dt; this.life -= dt; } draw(ctx) { ctx.fillStyle = this.color; ctx.globalAlpha = this.life/this.maxLife; ctx.beginPath(); ctx.fillRect(this.x-2, this.y-2, 4, 4); ctx.globalAlpha = 1; } }
function createParticles(x, y, color, count, speed=40) { for(let i=0; i<count; i++) particles.push(new Particle(x, y, color, speed)); }

// ==========================================
// GAME ENGINE & LOGIC SPAWN
// ==========================================
function spawnEnvironment() { if (worldObjects.length > 50) return; let objX = player.x + (Math.random()-0.5)*width*2.5; let objY = player.y + (Math.random()-0.5)*height*2.5; if (dist(objX, objY, player.x, player.y) > 600) { let isTree = Math.random() > 0.5; let id = isTree ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 2); worldObjects.push(new WorldObject(objX, objY, isTree ? 'tree' : 'stone', id, 60+Math.random()*40)); } }
function startGame() { initAudioEngine(); player = new Player(0, 0); entities = []; particles = []; popups = []; projectiles = []; burnZones = []; mudZones = []; worldObjects = []; drops = []; enemyProjectiles = []; survivalTime = 0; killCount = 0; spawnTimer = 0; eliteTimer = 45; document.getElementById('screen-main').classList.add('hidden'); document.getElementById('hud').classList.remove('hidden'); gameState = STATE.PLAY; if (audioCtx) nextBeatTime = audioCtx.currentTime + 0.1; beatStep = 0; }

let spawnTimer = 0;
function handleSpawns(dt) {
    spawnTimer -= dt;
    if(spawnTimer <= 0) {
        spawnTimer = Math.max(0.3, 1.2 - survivalTime/100);
        let spawnSide = Math.floor(Math.random() * 4); let sx, sy; let m = 50;
        if(spawnSide === 0) { sx = player.x + (Math.random()-0.5)*width; sy = player.y - height/2 - m; }
        else if(spawnSide === 1) { sx = player.x + (Math.random()-0.5)*width; sy = player.y + height/2 + m; }
        else if(spawnSide === 2) { sx = player.x - width/2 - m; sy = player.y + (Math.random()-0.5)*height; }
        else { sx = player.x + width/2 + m; sy = player.y + (Math.random()-0.5)*height; }

        let availableTypes = ['slime', 'goblin', 'skeleton', 'bat'];
        if (survivalTime >= 510) {
            let currentOrcs = entities.filter(e => e.type === 'orc' && !e.isElite).length;
            let currentFires = entities.filter(e => e.type === 'fire' && !e.isElite).length;
            let currentWizards = entities.filter(e => e.type === 'wizard' && !e.isElite).length;

            if (currentOrcs < 3) availableTypes.push('orc');
            if (currentFires < 2) availableTypes.push('fire');
            if (currentWizards < 4) availableTypes.push('wizard');
        } 
        else if (survivalTime >= 210) {
            let currentOrcs = entities.filter(e => e.type === 'orc' && !e.isElite).length;
            let currentFires = entities.filter(e => e.type === 'fire' && !e.isElite).length;
            let currentWizards = entities.filter(e => e.type === 'wizard' && !e.isElite).length;

            if (currentOrcs < 1) availableTypes.push('orc');
            if (currentFires < 2) availableTypes.push('fire');
            if (currentWizards < 2) availableTypes.push('wizard');
        }

        let type = availableTypes[Math.floor(Math.random() * availableTypes.length)];
        let e = new Enemy(sx, sy, type); if(Math.random() > 0.8) { e.baseSpeed *= 1.8; } entities.push(e); spawnEnvironment(); 
    }
    
    let currentElites = entities.filter(e => e.isElite).length;
    if (currentElites >= 3) {
        eliteTimer = 45; 
    } else {
        eliteTimer -= dt;
        if (eliteTimer <= 0) {
            eliteTimer = 45;
            let a = Math.random() * Math.PI * 2; 
            let types = ['slime', 'goblin', 'skeleton', 'bat', 'fire', 'wizard', 'orc'];
            let eliteType = types[Math.floor(Math.random() * types.length)];
            entities.push(new Enemy(player.x + Math.cos(a)*800, player.y + Math.sin(a)*800, eliteType, true)); 
            popups.push(new TextPopup(width/2, height/4, "🔥 QUÁI TINH ANH XUẤT HIỆN! 🔥", '#f1c40f', 24));
        }
    }
}

function updateHUD() { document.getElementById('hp-bar').style.width = (player.hp/player.maxHp*100) + '%'; document.getElementById('hp-text').innerText = `HP: ${Math.floor(player.hp)}/${player.maxHp}`; document.getElementById('sta-bar').style.width = (player.sta/player.maxSta*100) + '%'; document.getElementById('exp-bar').style.width = (player.xp/player.maxXp*100) + '%'; document.getElementById('timer-display').innerText = formatTime(survivalTime); document.getElementById('kill-counter').innerText = `Kẻ địch tiêu diệt: ${killCount}`; let hasUrfBuff = player.buffCdTimer > 0; for(let i=0; i<4; i++) { let cdElem = document.getElementById(`cd-${i+1}`); let btnElem = document.getElementById(`btn-${i+1}`); if (btnElem.classList.contains('locked')) continue; if (hasUrfBuff) { cdElem.style.height = '0%'; btnElem.classList.add('skill-ready'); btnElem.style.boxShadow = '0 0 20px #e056fd'; } else { btnElem.style.boxShadow = ''; if(player.skillCds[i] > 0) { let pct = (player.skillCds[i] / player.skillMaxCds[i]) * 100; cdElem.style.height = pct + '%'; btnElem.classList.remove('skill-ready'); } else { cdElem.style.height = '0%'; btnElem.classList.add('skill-ready'); } } } }
function drawInfiniteWorld(ctx) { 
    ctx.fillStyle = '#1e272e'; 
    ctx.fillRect(Math.floor(player.x - width), Math.floor(player.y - height), width * 2, height * 2); 
    
    if (ASSETS.bg.complete && ASSETS.bg.naturalWidth !== 0) { 
     
        ctx.imageSmoothingEnabled = false; 
        
        let bgScale = 0.15; 
        let drawW = ASSETS.bg.width * bgScale;
        let drawH = ASSETS.bg.height * bgScale;
        
        let startX = Math.floor((player.x - width / 2) / drawW) * drawW;
        let startY = Math.floor((player.y - height / 2) / drawH) * drawH;
        let endX = player.x + width / 2;
        let endY = player.y + height / 2;
        
        for (let x = startX - drawW; x < endX + drawW; x += drawW) {
            for (let y = startY - drawH; y < endY + drawH; y += drawH) {
                ctx.drawImage(ASSETS.bg, Math.floor(x), Math.floor(y), Math.ceil(drawW) + 1.5, Math.ceil(drawH) + 1.5);
            }
        }
    } 
}
function loop(timestamp) {
    if(!lastTime) lastTime = timestamp; dt = (timestamp - lastTime)/1000; if(isNaN(dt) || dt > 0.1) dt = 0.1; lastTime = timestamp; gameTime += dt;
    if(gameState === STATE.MAIN) drawMainMenuCanvas(dt);
    if(gameState === STATE.PLAY) {
        survivalTime += dt; updateBGM(); MOUSE.wx = MOUSE.x - width/2 + player.x; MOUSE.wy = MOUSE.y - height/2 + player.y; player.update(dt); handleSpawns(dt);
        burnZones.forEach(b => b.update(dt)); burnZones = burnZones.filter(b => b.life > 0); mudZones.forEach(m => m.update(dt)); mudZones = mudZones.filter(m => m.life > 0); projectiles.forEach(p => p.update(dt)); projectiles = projectiles.filter(p => p.life > 0); enemyProjectiles.forEach(ep => ep.update(dt)); enemyProjectiles = enemyProjectiles.filter(ep => ep.life > 0); vfxs.forEach(v => v.update(dt)); vfxs = vfxs.filter(v => v.life > 0); drops.forEach(d => d.update(dt)); drops = drops.filter(d => d.life > 0); entities.forEach(e => e.update(dt)); entities = entities.filter(e => e.hp > 0); particles.forEach(p => p.update(dt)); particles = particles.filter(p => p.life > 0); popups.forEach(p => p.update(dt)); popups = popups.filter(p => p.life > 0); worldObjects = worldObjects.filter(o => dist(o.x, o.y, player.x, player.y) < 2500); updateHUD(); 
        ctx.fillStyle = '#000'; ctx.fillRect(0,0,width,height); ctx.save(); let cx = width/2 - (isNaN(player.x) ? 0 : player.x); let cy = height/2 - (isNaN(player.y) ? 0 : player.y); if(shakeTime > 0) { shakeTime -= dt; if(enableShake) { cx += (Math.random()-0.5)*shakeIntensity; cy += (Math.random()-0.5)*shakeIntensity; } }
        ctx.translate(Math.floor(cx), Math.floor(cy)); 
        drawInfiniteWorld(ctx);
        mudZones.forEach(m => m.draw(ctx)); burnZones.forEach(b => b.draw(ctx)); drops.forEach(d => d.draw(ctx)); vfxs.forEach(v => v.draw(ctx)); let drawables = [player, ...entities, ...projectiles, ...enemyProjectiles, ...worldObjects].sort((a,b)=>a.y-b.y); drawables.forEach(d => d.draw(ctx)); particles.forEach(p => p.draw(ctx)); popups.forEach(p => p.draw(ctx)); ctx.restore();
    }
    requestAnimationFrame(loop);
}

function pauseGame() { gameState = STATE.PAUSE; document.getElementById('screen-pause').classList.remove('hidden'); }
function resumeGame() { gameState = STATE.PLAY; document.getElementById('screen-pause').classList.add('hidden'); }
function toggleSettings(from) { document.getElementById('screen-main').classList.add('hidden'); document.getElementById('screen-pause').classList.add('hidden'); document.getElementById('screen-settings').classList.remove('hidden'); }
function closeSettings() { document.getElementById('screen-settings').classList.add('hidden'); if(survivalTime > 0) document.getElementById('screen-pause').classList.remove('hidden'); else document.getElementById('screen-main').classList.remove('hidden'); }
requestAnimationFrame(loop);
