import React, { useState } from 'react';
import { Shield, Train, Zap, Package, Ghost, Database, Globe } from 'lucide-react';

// Language data
const languages = {
  en: { code: 'en', name: 'English' },
  fr: { code: 'fr', name: 'Français' },
  de: { code: 'de', name: 'Deutsch' },
  it: { code: 'it', name: 'Italiano' },
  ja: { code: 'ja', name: '日本語' },
  ko: { code: 'ko', name: '한국어' },
  zh: { code: 'zh', name: '中文' },
  hi: { code: 'hi', name: 'हिंदी' },
  es: { code: 'es', name: 'Español' }
};

const translations = {
  en: {
    description: "Dead Rails has rapidly emerged as one of Roblox's most thrilling survival experiences, captivating players with its unique post-apocalyptic rail combat mechanics. Its blend of resource management, tactical battles, and immersive environments has made it a standout hit.",
    scriptFeatures: "Many players enhance their experience with Dead Rails scripts, gaining advantages like ESP, Bring Items, and NoClip for unrestricted movement. These tools make survival easier and let you explore with freedom that regular players simply don't have!",
    getrich: "Want to Get Rich in DeadRails Game?",
    strategies: "Learn effective strategies to earn in-game currency and rare items faster than other players.",
    viewStrategies: "View Strategies",
    availableScripts: "Available Scripts",
    copyTutorial: "Copy & Tutorial",
    features: "Understanding Script Features",
    esp: "Environmental ESP",
    espDesc: "Revealing hidden loot opportunities",
    noclip: "Phantom NoClip",
    noclipDesc: "Advanced movement capabilities",
    resource: "Resource Collection",
    resourceDesc: "Automated gathering systems",
    tutorialTitle: "How to Run Dead Rails Script (2024)",
    tutorialSteps: [
      {title: "Prepare a Roblox Executor:", desc: "You need a Roblox script executor (such as Synapse X, KRNL, Fluxus, Trigon, Script-Ware, etc.). Make sure to download from the official website and keep it updated."},
      {title: "Copy the Script:", desc: "In the script list above, click the 'Copy & Tutorial' button to copy the script code you want."},
      {title: "Open Roblox and Enter Dead Rails:", desc: "Launch Roblox, search for and enter the Dead Rails game."},
      {title: "Paste and Execute the Script:", desc: "Open your executor, paste the copied script into the executor's text box, then click the 'Execute' button."},
      {title: "Enjoy Script Features:", desc: "Depending on the script, you can experience features like auto-farming, ESP, NoClip, and more."},
      {title: "Important Note:", desc: "Do not test risky scripts on your main account to avoid bans. It is recommended to use an alternate account."},
      {title: "Script Not Working or Error?:", desc: "Try switching executors or wait for the author to update the script. Some scripts may require a key or special settings. Refer to the script instructions for details."},
      {title: "Script Safety Disclaimer:", desc: "This site only collects publicly available scripts for learning and entertainment purposes. Do not use scripts for illegal activities. Use at your own risk."}
    ],
    tutorialTip: "Do not download or run scripts from unknown sources. Beware of account theft or malware. Always enable antivirus software and regularly back up important data.",
    tutorialTipTitle: "Friendly Reminder:"
  },
  zh: {
    description: "《死亡轨道》迅速成为 Roblox 最刺激的生存游戏之一。其独特的末世铁路战斗机制让玩家欲罢不能。它融合了资源管理、战术战斗和沉浸式环境，使其成为一款出色的热门游戏。",
    scriptFeatures: "许多玩家使用 Dead Rails 脚本来提升游戏体验，获得诸如 ESP、携带物品和 NoClip 等优势，从而获得不受限制的移动能力。这些工具让生存变得更容易，并让你拥有普通玩家无法拥有的自由探索体验！",
    getrich: "想在死亡轨道中快速致富？",
    strategies: "学习有效策略，更快赚取游戏币和稀有物品。",
    viewStrategies: "查看策略",
    availableScripts: "可用脚本",
    copyTutorial: "复制和教程",
    features: "脚本功能说明",
    esp: "环境透视",
    espDesc: "揭示隐藏的战利品机会",
    noclip: "幻影穿墙",
    noclipDesc: "高级移动能力",
    resource: "资源收集",
    resourceDesc: "自动采集系统",
    tutorialTitle: "如何运行 Dead Rails 脚本（2024）",
    tutorialSteps: [
      {title: "准备 Roblox 执行器：", desc: "你需要一个 Roblox 脚本执行器（如 Synapse X、KRNL、Fluxus、Trigon、Script-Ware 等）。请确保从官方网站下载并保持更新。"},
      {title: "复制脚本：", desc: "在上方脚本列表中，点击“复制和教程”按钮，复制你想要的脚本代码。"},
      {title: "打开 Roblox 并进入 Dead Rails：", desc: "启动 Roblox，搜索并进入 Dead Rails 游戏。"},
      {title: "粘贴并执行脚本：", desc: "打开你的执行器，将复制的脚本粘贴到执行器的文本框中，然后点击“执行”按钮。"},
      {title: "享受脚本功能：", desc: "根据脚本功能，你可以体验自动刷物品、透视、穿墙等多种强大功能。"},
      {title: "注意事项：", desc: "请勿在主账号上测试高风险脚本，避免封号风险。建议使用小号体验。"},
      {title: "脚本失效或报错怎么办？", desc: "尝试更换执行器或等待作者更新脚本。部分脚本可能需要密钥或特殊设置，具体请参考脚本说明。"},
      {title: "脚本安全声明：", desc: "本站仅收集网络公开脚本，所有脚本仅供学习和娱乐，请勿用于非法用途。使用脚本有一定风险，请自行承担。"}
    ],
    tutorialTip: "请勿随意下载和运行未知来源的脚本，谨防账号被盗或电脑中毒。务必开启杀毒软件并定期备份重要数据。",
    tutorialTipTitle: "温馨提示："
  }
  // Add other languages similarly...
};

// Script data
const scripts = [
  {
    id: 0,
    name: "KILL ALL AUTOFARM AIMBOT ESP AND MUCH MOREE MOBILE AND PC",
    nameCn: "杀死所有自动农场 AIMBOT ESP 以及更多移动和 PC",
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
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua", true))()'
  },
  {
    id: 5,
    name: "Tbao Hub",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Tb0a/Tb0aHub/main/DeadRails"))()'
  },
  {
    id: 6,
    name: "LEAF HUB",
    code: 'loadstring(game:HttpGet("https://leafhub.dev/script/DeadRails.lua"))()'
  },
  {
    id: 7,
    name: "SPEEDWAVE Rails",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/SpeedWaveHub/SpeedWave/main/DeadRails.lua"))()'
  },
  {
    id: 8,
    name: "zenox | Airflow FIXED",
    code: 'loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/7e8e6e8e8e8e8e8e8e8e8e8e8e8e8e8e.lua"))()'
  },
  {
    id: 9,
    name: "strelizia script hub",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/StreliziaScript/Loader/main/Loader.lua"))()'
  },
  {
    id: 10,
    name: "Sypher hub [Need Key]",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/SypherHub/SypherHub/main/Loader.lua"))()'
  }
];

function App() {
  const [expandedScript, setExpandedScript] = useState<number | null>(null);
  const [currentLang, setCurrentLang] = useState('en');

  const copyAndRedirect = async (script: string) => {
    try {
      await navigator.clipboard.writeText(script);
      alert('Script copied! Check the tutorial for instructions.');
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy script. Please try again.");
    }
  };

  const t = translations[currentLang as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">DeadRailsScript.com</h1>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-900 hover:text-blue-600">
                <Globe className="w-5 h-5" />
                {languages[currentLang as keyof typeof languages].name}
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block border border-gray-200">
                {Object.values(languages).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            <nav className="flex gap-4">
              <a href="#" className="text-gray-900 hover:text-blue-600">DeadRails Wiki</a>
              <a href="#" className="bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 text-white shadow">More Roblox Scripts</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Home</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white/70 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">
            Dead Rails Script<span className="text-blue-500">(2025)</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <p className="text-gray-700">{t.description}</p>
              <p className="text-gray-700">{t.scriptFeatures}</p>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://i.imgur.com/placeholder.jpg" 
                alt="Dead Rails Gameplay" 
                className="rounded-2xl shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scripts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.availableScripts}</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {scripts.map((script) => (
              <div key={script.id} className="bg-white rounded-2xl overflow-hidden shadow border border-gray-100">
                <div className="p-4">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{script.name}</h3>
                      {script.nameCn && currentLang === 'zh' && (
                        <p className="text-gray-500 text-sm">{script.nameCn}</p>
                      )}
                    </div>
                    <button
                      onClick={() => copyAndRedirect(script.code)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap shadow"
                    >
                      {t.copyTutorial}
                    </button>
                  </div>
                  <div 
                    className="bg-gray-100 p-3 rounded-xl cursor-pointer border border-gray-200"
                    onClick={() => setExpandedScript(expandedScript === script.id ? null : script.id)}
                  >
                    <pre className={`font-mono text-sm text-gray-700 ${expandedScript === script.id ? 'whitespace-pre-wrap break-all' : 'overflow-hidden text-ellipsis whitespace-nowrap'}`}>{script.code}</pre>
                    <span className="text-blue-500 text-sm mt-2 block">
                      {expandedScript === script.id ? 'Hide Full Code' : 'Show Full Code'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-blue-50 rounded-2xl p-6 mt-8 shadow border border-blue-100">
              <h2 className="text-xl font-bold mb-2 text-blue-700">{t.getrich}</h2>
              <p className="text-gray-700 mb-4">{t.strategies}</p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-full shadow">
                {t.viewStrategies} →
              </button>
            </div>
            {/* Dead Rails 脚本使用教程区块 */}
            <div className="bg-white rounded-2xl p-6 mt-8 shadow border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">{t.tutorialTitle}</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-800">
                {t.tutorialSteps.map((step, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-gray-900">{step.title}</span> {step.desc}
                  </li>
                ))}
              </ol>
              <div className="mt-6 text-sm text-red-500 border-t border-gray-200 pt-4">
                <strong>{t.tutorialTipTitle}</strong> {t.tutorialTip}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">Dead Rails Script FAQs</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Is it safe to use Dead Rails scripts?</h3>
              <p className="text-gray-700">Most scripts are safe if downloaded from trusted sources. However, using scripts always carries some risk, including possible bans or malware. Always use an alternate account for testing and keep your antivirus enabled.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-orange-400">How do I get a script key?</h3>
              <p className="text-gray-700">Some scripts require a key for activation. Usually, the script provider will give instructions on how to obtain the key, often involving joining a Discord server or completing a verification step. Always follow the official instructions and avoid suspicious links.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Why does my script stop working?</h3>
              <p className="text-gray-700">Scripts may stop working after a game update or if the script author discontinues support. Try switching to another executor or wait for the script to be updated. Check the script provider's page for updates.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Are Dead Rails scripts compatible with all executors?</h3>
              <p className="text-gray-700">Not all scripts work with every executor. Popular executors like Synapse X, KRNL, and Fluxus are recommended. If you encounter errors, try a different executor or check compatibility notes from the script author.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Will I get banned for using scripts?</h3>
              <p className="text-gray-700">There is always a risk of being banned when using scripts, especially if you abuse features or use outdated scripts. To minimize risk, use scripts responsibly, avoid obvious cheating, and never use your main account for testing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 Dead Rails Script. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;