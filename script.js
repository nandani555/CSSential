/**
 * CSS Interactive Lab - Core Logic
 */

/**
 * CSS Interactive Lab - Comprehensive Topic Database
 */
const topics = [
    // 🟢 BEGINNER-LEVEL TOPICS
    {
        id: 'colors-bg',
        category: 'Beginner',
        title: 'Colors & Backgrounds',
        desc: 'Solid colors, linear and radial gradients.',
        html: '<div class="bg-demo">Gradient</div>',
        css: '.bg-demo {\n  width: 100%;\n  height: 100px;\n  background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  color: white;\n}'
    },
    {
        id: 'borders-radius',
        category: 'Beginner',
        title: 'Borders & Radius',
        desc: 'Border styles and rounded corners.',
        html: '<div class="border-box">Rounded Box</div>',
        css: '.border-box {\n  width: 120px;\n  height: 120px;\n  border: 4px dashed #6366f1;\n  border-radius: 20px 0 20px 0;\n  padding: 10px;\n}'
    },
    {
        id: 'box-model',
        category: 'Beginner',
        title: 'Padding & Margin',
        desc: 'The foundation of spacing (Box Model).',
        html: '<div class="parent-box"><div class="child-box">Box</div></div>',
        css: '.parent-box {\n  background: #ddd;\n  padding: 20px;\n}\n.child-box {\n  background: white;\n  margin: 15px;\n  padding: 10px;\n  border: 2px solid #333;\n}'
    },
    {
        id: 'typography',
        category: 'Beginner',
        title: 'Text Styling',
        desc: 'Fonts, weight, and alignment.',
        html: '<p class="text-style">Typography Design</p>',
        css: '.text-style {\n  font-size: 24px;\n  color: #4338ca;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-weight: 800;\n}'
    },

    // 🟡 INTERMEDIATE TOPICS
    {
        id: 'flexbox-layout',
        category: 'Intermediate',
        title: 'Flexbox Layout',
        desc: '1D alignment and distribution.',
        html: '<div class="flex-cont">\n  <div class="f-item">1</div>\n  <div class="f-item">2</div>\n  <div class="f-item">3</div>\n</div>',
        css: '.flex-cont {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n.f-item { background: #818cf8; color: white; padding: 20px; border-radius: 8px; }'
    },
    
    {
        id: 'grid-layout',
        category: 'Intermediate',
        title: 'Grid Layout',
        desc: '2D grid-based layouts.',
        html: '<div class="grid-cont">\n  <div class="g-item">1</div><div class="g-item">2</div>\n  <div class="g-item">3</div><div class="g-item">4</div>\n</div>',
        css: '.grid-cont {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.g-item { background: #fbbf24; height: 50px; border-radius: 5px; }'
    },
    
    {
        id: 'positioning-modes',
        category: 'Intermediate',
        title: 'Positioning',
        desc: 'Relative, Absolute, Fixed, and Sticky.',
        html: '<div class="rel-box">Relative\n <div class="abs-box">Abs</div>\n</div>',
        css: '.rel-box {\n  position: relative;\n  width: 150px;\n  height: 100px;\n  background: #e2e8f0;\n}\n.abs-box {\n  position: absolute;\n  top: -10px; right: -10px;\n  background: #ef4444; color: white; padding: 4px;\n}'
    },
    {
        id: 'z-index-layer',
        category: 'Intermediate',
        title: 'Z-Index',
        desc: 'Managing the stacking order of layers.',
        html: '<div class="z-stack">\n <div class="layer-1">1</div>\n <div class="layer-2">2</div>\n</div>',
        css: '.z-stack { position: relative; height: 100px; }\n.layer-1 { position: absolute; z-index: 2; width: 60px; height: 60px; background: blue; }\n.layer-2 { position: absolute; z-index: 1; top: 20px; left: 20px; width: 60px; height: 60px; background: green; }'
    },

    // 🔵 ADVANCED TOPICS
    {
        id: 'animations-kf',
        category: 'Advanced',
        title: 'Animations & Keyframes',
        desc: 'Motion effects and property transitions.',
        html: '<div class="pulse-box">Pulse</div>',
        css: '.pulse-box {\n  width: 80px; height: 80px;\n  background: #ec4899; color: white;\n  display: flex; align-items: center; justify-content: center;\n  border-radius: 50%;\n  animation: pulse 1.5s infinite alternate;\n}\n@keyframes pulse {\n  from { transform: scale(0.8); }\n  to { transform: scale(1.1); }\n}'
    },
    {
        id: 'glassmorphism-blur',
        category: 'Advanced',
        title: 'Backdrop Filter',
        desc: 'Glassmorphism and frosted glass effects.',
        html: '<div class="glass-wrap"><div class="glass-card">Frosted</div></div>',
        css: '.glass-wrap {\n  background: url("https://picsum.photos/300/200") center;\n  padding: 30px; border-radius: 10px;\n}\n.glass-card {\n  backdrop-filter: blur(12px);\n  background: rgba(255,255,255,0.2);\n  border: 1px solid rgba(255,255,255,0.3);\n  padding: 20px; color: white; font-weight: bold;\n}'
    },
    {
        id: 'css-variables',
        category: 'Advanced',
        title: 'CSS Variables',
        desc: 'Reusable custom properties.',
        html: '<div class="var-box">Scoped Color</div>',
        css: ':root {\n  --main-color: #06b6d4;\n  --main-gap: 20px;\n}\n.var-box {\n  background: var(--main-color);\n  padding: var(--main-gap);\n  color: white;\n  border-radius: 8px;\n}'
    },
    {
        id: 'media-queries-res',
        category: 'Advanced',
        title: 'Media Queries',
        desc: 'Responsive design techniques.',
        html: '<div class="res-card">Screen Size Check</div>',
        css: '.res-card {\n  padding: 20px; background: silver;\n}\n@media (max-width: 600px) {\n  .res-card { background: gold; }\n}\n@media (min-width: 1000px) {\n  .res-card { background: cyan; }\n}'
    },

    // 🟣 PRO-LEVEL / MODERN CSS
    {
        id: 'has-parent',
        category: 'Pro',
        title: 'Has() Selector',
        desc: 'The legendary parent selector.',
        html: '<div class="parent-wrap">\n <input type="checkbox" id="c1"> <label for="c1">Check parent</label>\n</div>',
        css: '.parent-wrap {\n  padding: 20px; border: 2px solid #ccc;\n  transition: 0.3s;\n}\n.parent-wrap:has(input:checked) {\n  border-color: #6366f1; background: #eef2ff;\n}'
    },
    {
        id: 'container-queries',
        category: 'Pro',
        title: 'Container Queries',
        desc: 'Element-based responsiveness.',
        html: '<div class="cont-parent"><div class="cont-child">Container Check</div></div>',
        css: '.cont-parent { container-type: inline-size; width: 100%; }\n@container (min-width: 300px) {\n  .cont-child { font-size: 2rem; color: #10b981; }\n}'
    },
    {
        id: 'clamp-function',
        category: 'Pro',
        title: 'Clamp() Function',
        desc: 'Fluid typography: min, preferred, max.',
        html: '<h2 class="fluid-text">Fluid Resize Text</h2>',
        css: '.fluid-text {\n  font-size: clamp(1rem, 5vw, 3rem);\n  color: #1e293b;\n  font-weight: 900;\n}'
    },
    {
        id: 'scroll-timeline-anim',
        category: 'Pro',
        title: 'Scroll-Animations',
        desc: 'Animate based on scroll progress.',
        html: '<div class="scroll-tracker"></div>',
        css: '.scroll-tracker {\n  height: 5px; width: 100%;\n  background: #3b82f6;\n  transform-origin: left;\n  scale: 0 1;\n  animation: scroll-fill linear both;\n  animation-timeline: scroll();\n}\n@keyframes scroll-fill {\n  to { scale: 1 1; }\n}'
    }
];

// Re-usable function to trigger ZIP download
document.getElementById('downloadAllBtn').addEventListener('click', async () => {
    const zip = new JSZip();
    topics.forEach(topic => {
        const fileContent = `
<!DOCTYPE html>
<html>
<head>
<style>
${topic.css}
</style>
</head>
<body>
${topic.html}
</body>
</html>`;
        zip.file(`${topic.category}/${topic.id}.html`, fileContent);
    });

    const content = await zip.generateAsync({type: "blob"});
    saveAs(content, "CSS_Lab_All_Examples.zip");
});

// Logic for rendering with category headers
function renderContent(filter = '', showOnlyFavs = false) {
    const content = document.getElementById('content');
    const sideNav = document.getElementById('sideNav');
    content.innerHTML = '';
    sideNav.innerHTML = '';

    const categories = [...new Set(topics.map(t => t.category))];

    categories.forEach(cat => {
        const catTopics = topics.filter(t => t.category === cat && 
            t.title.toLowerCase().includes(filter.toLowerCase()) &&
            (showOnlyFavs ? favorites.includes(t.id) : true)
        );

        if (catTopics.length > 0) {
            // Add category heading to Sidebar
            const heading = document.createElement('div');
            heading.className = "text-[10px] font-bold text-slate-400 uppercase mt-6 mb-2 tracking-widest";
            heading.innerText = cat;
            sideNav.appendChild(heading);

            catTopics.forEach(topic => {
                // Nav Link
                const navLink = document.createElement('a');
                navLink.href = `#${topic.id}`;
                navLink.className = "nav-link px-4 py-2 rounded-lg transition-all duration-200 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 block mb-1";
                navLink.innerText = topic.title;
                navLink.dataset.section = topic.id;
                sideNav.appendChild(navLink);

                // Section Article (Existing logic)
                const isFav = favorites.includes(topic.id);
                const section = document.createElement('article');
                section.id = topic.id;
                section.className = "group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-all mb-12";
                section.innerHTML = `
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <span class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 font-bold uppercase mb-2 inline-block">${topic.category}</span>
                            <h2 class="text-2xl font-bold">${topic.title}</h2>
                            <p class="text-slate-500 dark:text-slate-400 mt-1">${topic.desc}</p>
                        </div>
                        <button onclick="toggleFavorite('${topic.id}')" class="text-2xl">${isFav ? '⭐' : '☆'}</button>
                    </div>
                    <div class="grid lg:grid-cols-2 gap-8 mt-6">
                        <div class="space-y-4">
                            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Preview</h4>
                            <div class="preview-box p-4 bg-slate-50 dark:bg-slate-900/50">
                                <style>${topic.css}</style>
                                ${topic.html}
                            </div>
                            <button onclick="openEditor('${topic.id}')" class="w-full py-2 rounded-xl bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-colors">Try It Yourself 🚀</button>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest">CSS Snippet</h4>
                            <pre class="rounded-xl !m-0"><code class="language-css">${topic.css}</code></pre>
                        </div>
                    </div>
                `;
                content.appendChild(section);
            });
        }
    });
    Prism.highlightAll();
}

let favorites = JSON.parse(localStorage.getItem('cssLab_favorites')) || [];
let htmlCM, cssCM; // CodeMirror instances

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderContent();
    setupScrollSpy();
    initEditors();
});

// --- UI Rendering ---

function renderContent(filter = '', showOnlyFavs = false) {
    const content = document.getElementById('content');
    const sideNav = document.getElementById('sideNav');
    content.innerHTML = '';
    sideNav.innerHTML = '';

    const filtered = topics.filter(t => {
        const matchesSearch = t.title.toLowerCase().includes(filter.toLowerCase());
        const matchesFav = showOnlyFavs ? favorites.includes(t.id) : true;
        return matchesSearch && matchesFav;
    });

    filtered.forEach(topic => {
        // Sidebar link
        const navLink = document.createElement('a');
        navLink.href = `#${topic.id}`;
        navLink.className = "nav-link px-4 py-2 rounded-lg transition-all duration-200 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700";
        navLink.innerText = topic.title;
        navLink.dataset.section = topic.id;
        sideNav.appendChild(navLink);

        // Section article
        const isFav = favorites.includes(topic.id);
        const section = document.createElement('article');
        section.id = topic.id;
        section.className = "group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-all";
        section.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h2 class="text-2xl font-bold">${topic.title}</h2>
                    <p class="text-slate-500 dark:text-slate-400 mt-1">${topic.desc}</p>
                </div>
                <button onclick="toggleFavorite('${topic.id}')" class="text-2xl transition-transform active:scale-125">
                    ${isFav ? '⭐' : '☆'}
                </button>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-8 mt-6">
                <div class="space-y-4">
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Preview</h4>
                    <div class="preview-box p-4 bg-slate-50 dark:bg-slate-900/50">
                        <style>${topic.css}</style>
                        ${topic.html}
                    </div>
                    <button onclick="openEditor('${topic.id}')" class="w-full py-2 rounded-xl bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                        Try It Yourself 🚀
                    </button>
                </div>
                <div class="space-y-4">
                    <div class="flex justify-between items-end">
                        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest">CSS Snippet</h4>
                        <button onclick="copyCode('${topic.id}')" class="text-xs text-indigo-500 hover:underline">Copy Code</button>
                    </div>
                    <pre class="rounded-xl !m-0"><code class="language-css">${topic.css}</code></pre>
                </div>
            </div>
        `;
        content.appendChild(section);
    });

    Prism.highlightAll();
}

// --- Features ---

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('cssLab_favorites', JSON.stringify(favorites));
    renderContent(document.getElementById('searchBar').value);
}

function initTheme() {
    const savedTheme = localStorage.getItem('cssLab_theme') || 'light';
    document.documentElement.className = savedTheme;
    updateThemeIcon(savedTheme);

    document.getElementById('themeToggle').addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        const current = isDark ? 'dark' : 'light';
        localStorage.setItem('cssLab_theme', current);
        updateThemeIcon(current);
    });
}

function updateThemeIcon(theme) {
    document.getElementById('themeIcon').innerText = theme === 'dark' ? '☀️' : '🌙';
}

// --- Scroll Spy ---

function setupScrollSpy() {
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll('article');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('nav-active');
            if (link.dataset.section === current) {
                link.classList.add('nav-active');
            }
        });
    });
}

// --- Live Editor Logic ---

function initEditors() {
    htmlCM = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
        mode: "xml", theme: "dracula", lineNumbers: true, htmlMode: true
    });
    cssCM = CodeMirror.fromTextArea(document.getElementById('cssEditor'), {
        mode: "css", theme: "dracula", lineNumbers: true
    });

    [htmlCM, cssCM].forEach(cm => cm.on('change', updatePreview));
}

function openEditor(id) {
    const topic = topics.find(t => t.id === id);
    htmlCM.setValue(topic.html);
    cssCM.setValue(topic.css);
    document.getElementById('editorModal').classList.remove('hidden');
    updatePreview();
}

function closeEditor() {
    document.getElementById('editorModal').classList.add('hidden');
}

function updatePreview() {
    const html = htmlCM.getValue();
    const css = cssCM.getValue();
    const frame = document.getElementById('previewFrame').contentWindow.document;
    frame.open();
    frame.write(`<style>${css}</style>${html}`);
    frame.close();
}

// Search Logic
document.getElementById('searchBar').addEventListener('input', (e) => {
    renderContent(e.target.value);
});

// Copy Code
window.copyCode = (id) => {
    const topic = topics.find(t => t.id === id);
    navigator.clipboard.writeText(topic.css);
    alert('CSS copied!');
};