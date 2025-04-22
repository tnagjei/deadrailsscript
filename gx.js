// 初始化状态
let selectedScript = null;
let expandedScript = null;
let expandedFAQ = null;
let selectedImage = null;

// 检测移动设备
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// 复制脚本并跳转
const copyAndRedirect = (script, id, redirect = false) => {
    navigator.clipboard.writeText(script)
        .then(() => {
            selectedScript = id;
            setTimeout(() => {
                selectedScript = null;
            }, 2000);
            
            if (redirect) {
                const path = isMobile() ? "/wiki/dead-rails-script-mobile" : "/wiki/dead-rails-script-pc";
                window.location.href = path;
            }
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
            alert("Failed to copy script. Please try again.");
        });
};

// 切换脚本展开状态
const toggleScript = (id) => {
    expandedScript = expandedScript === id ? null : id;
};

// 切换FAQ展开状态
const toggleFAQ = (id) => {
    expandedFAQ = expandedFAQ === id ? id : null;
};

// 显示图片预览
const showImage = (image, event) => {
    event.stopPropagation();
    selectedImage = image;
};

// 关闭图片预览
const closeImage = () => {
    selectedImage = null;
};

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 添加动画样式
    const style = document.createElement('style');
    style.id = '1207f4a9be63969f';
    style.textContent = `
        @keyframes slideDown {
            from { max-height: 0; opacity: 0 }
            to { max-height: 500px; opacity: 1 }
        }
        @keyframes slideUp {
            from { max-height: 500px; opacity: 1 }
            to { max-height: 0; opacity: 0 }
        }
    `;
    document.head.appendChild(style);

    // 初始化脚本列表
    const scripts = [
        {
            id: 0,
            name: "KILL ALL AUTOFARM AIMBOT ESP AND MUCH MOREE MOBILE AND PC",
            code: 'loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/255ac567ced3dcb9e69aa7e44c423f19.lua"))()'
        },
        {
            id: 1,
            name: "Dark X Hub",
            code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/ovxrloadEzploits/Dead-Rails/refs/heads/main/Dark.lua"))()'
        },
        {
            id: 2,
            name: "SpineWare",
            code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/SpineWare/UniversalLoader/refs/heads/main/Load"))()'
        },
        {
            id: 3,
            name: "Best script op",
            code: 'loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/e1cfd93b113a79773d93251b61af1e2f.lua"))()'
        },
        {
            id: 4,
            name: "Dead Rails Script SpeedHubX - Auto Bond, Auto Finish Game, ESP",
            code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua", true))()',
            image: "/speedhubx_deadrailsscript.webp"
        },
        {
            id: 5,
            name: "Tbao Hub",
            code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/tbao143/thaibao/refs/heads/main/TbaoHubDeadRails"))()',
            image: "/tbaohub_deadrailsscript.webp"
        },
        {
            id: 6,
            name: "LEAF HUB",
            code: 'loadstring(game:HttpGet("https://leafhub.dev/script.lua"))()',
            image: "/leafhub_deadrailsscript.webp"
        },
        {
            id: 7,
            name: "SPEEDWAVE Ralis",
            code: 'loadstring(game:HttpGet(("https://raw.githubusercontent.com/speedwavevip/scriptspeed/refs/heads/main/Dead%20Ralis.lua")))()',
            image: "/speedwave_deadrailsscript.webp"
        },
        {
            id: 8,
            name: "zenox | Airflow FIXED",
            code: 'loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/255ac567ced3dcb9e69aa7e44c423f19.lua"))()',
            image: "/zenox_deadrailsscript.webp"
        },
        {
            id: 9,
            name: "strelizia script hub",
            code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/0vma/Strelizia/refs/heads/main/Standalone/DeadRails.lua", true))()'
        },
        {
            id: 10,
            name: "Sypher hub [Need Key]",
            code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/nocturnal631/Dead-ra/refs/heads/main/Mmm"))()'
        }
    ];

    // 初始化FAQ列表
    const faqs = [
        {
            id: 1,
            question: "Are Dead Rails script safe to use?",
            answer: "While our scripts are regularly scanned and verified, using any third-party scripts always carries risks. Scripts could potentially contain malicious code or trigger Roblox's anti-cheat systems. Use at your own risk and preferably on alternative accounts."
        },
        {
            id: 2,
            question: "Will I get banned for using Dead Rails script?",
            answer: "There is always a risk of being banned when using scripts in Roblox games. Roblox actively monitors for cheating behavior and violations of their Terms of Service. We recommend using alternative accounts and being discreet with script features to minimize risks."
        },
        {
            id: 3,
            question: "How often are the Dead Rails script updated?",
            answer: "Our Dead Rails script are updated regularly to ensure compatibility with the latest game updates, typically within 24-48 hours of major game changes. We monitor game updates closely to maintain script functionality and add new features when possible."
        },
        {
            id: 4,
            question: "Do I need a specific executor to run these scripts?",
            answer: "Most scripts will work with popular executors like Synapse X, KRNL, and JJSploit, but premium executors often provide better compatibility and security. The specific requirements may vary by script, so check the documentation for each script you're interested in using."
        },
        {
            id: 5,
            question: "What features do Dead Rails script typically include?",
            answer: "Common features include ESP (seeing items/players through walls), auto-farm capabilities, item teleportation, NoClip movement (walking through objects), speed modifications, and various combat advantages. Different scripts may offer different feature sets."
        },
        {
            id: 6,
            question: "Can I use these scripts on mobile devices?",
            answer: "Some scripts are compatible with mobile executors like Arceus X for Android. However, mobile script execution is generally more limited and less stable than PC alternatives. iOS users have very limited options due to Apple's strict security policies."
        },
        {
            id: 7,
            question: "Why isn't the script working after a game update?",
            answer: "Game updates often change code structures that scripts rely on, causing them to break. When Dead Rails updates, wait for script developers to release compatible versions, which usually happens within 1-2 days for popular scripts."
        }
    ];

    // 渲染脚本列表
    const renderScripts = () => {
        const scriptsContainer = document.getElementById('scripts');
        if (!scriptsContainer) return;

        scripts.forEach(script => {
            const scriptElement = document.createElement('div');
            scriptElement.className = 'jsx-1207f4a9be63969f p-6 hover:bg-gray-700 transition-colors';
            scriptElement.innerHTML = `
                <div class="jsx-1207f4a9be63969f flex flex-col space-y-3">
                    <div class="jsx-1207f4a9be63969f flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h3 class="jsx-1207f4a9be63969f font-bold text-lg text-blue-400">${script.name}</h3>
                        <button onclick="copyAndRedirect('${script.code}', ${script.id}, true)" 
                                class="jsx-1207f4a9be63969f px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition-colors flex items-center justify-center gap-2">
                            <span>${selectedScript === script.id ? 'Copied!' : 'Copy & Tutorial'}</span>
                        </button>
                    </div>
                    <div onclick="toggleScript(${script.id})" 
                         class="jsx-1207f4a9be63969f relative bg-gray-900 p-4 rounded cursor-pointer">
                        <div class="jsx-1207f4a9be63969f ${expandedScript === script.id ? '' : 'overflow-hidden whitespace-nowrap'}">
                            <code class="jsx-1207f4a9be63969f text-gray-300 break-all">
                                ${expandedScript === script.id ? script.code : script.code.substring(0, 50) + '...'}
                            </code>
                        </div>
                        <span class="jsx-1207f4a9be63969f text-blue-400 text-sm mt-2 inline-block">
                            ${expandedScript === script.id ? 'Show Less' : 'Show Full Code'}
                        </span>
                    </div>
                </div>
            `;
            scriptsContainer.appendChild(scriptElement);
        });
    };

    // 渲染FAQ列表
    const renderFAQs = () => {
        const faqsContainer = document.getElementById('faqs');
        if (!faqsContainer) return;

        faqs.forEach(faq => {
            const faqElement = document.createElement('div');
            faqElement.className = 'jsx-1207f4a9be63969f border border-gray-700 rounded-lg overflow-hidden';
            faqElement.innerHTML = `
                <button onclick="toggleFAQ(${faq.id})" 
                        class="jsx-1207f4a9be63969f w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors">
                    <h3 class="jsx-1207f4a9be63969f font-bold text-lg text-blue-400">${faq.question}</h3>
                    <svg class="jsx-1207f4a9be63969f w-5 h-5 text-blue-400 transform transition-transform ${expandedFAQ === faq.id ? 'rotate-180' : ''}" 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                ${expandedFAQ === faq.id ? `
                    <div style="max-height: 500px; animation: slideDown 0.3s ease-in-out" 
                         class="jsx-1207f4a9be63969f px-6 py-4 bg-gray-750 border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out">
                        <p class="jsx-1207f4a9be63969f text-gray-300">${faq.answer}</p>
                    </div>
                ` : ''}
            `;
            faqsContainer.appendChild(faqElement);
        });
    };

    // 渲染图片预览
    const renderImagePreview = () => {
        if (selectedImage) {
            const preview = document.createElement('div');
            preview.className = 'jsx-1207f4a9be63969f fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
            preview.onclick = closeImage;
            preview.innerHTML = `
                <div class="jsx-1207f4a9be63969f relative max-w-4xl max-h-[90vh]">
                    <button onclick="closeImage()" 
                            class="jsx-1207f4a9be63969f absolute top-4 right-4 bg-gray-800 rounded-full p-2 text-white">
                        <svg class="jsx-1207f4a9be63969f w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <img src="${selectedImage}" alt="Script preview" 
                         class="max-h-[90vh] object-contain"/>
                </div>
            `;
            document.body.appendChild(preview);
        }
    };

    // 初始化渲染
    renderScripts();
    renderFAQs();
    renderImagePreview();
}); 