
// WhatsApp-style Community JavaScript with full features

// ========== Emojis ==========
var emojis = {
    faces: [
        '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '😊',
        '😇', '🥰', '😍', '🤩', '😘', '😗', '☺', '😚', '😙', '😋',
        '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐',
        '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌',
        '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧',
        '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐',
        '😕', '😟', '🙁', '☹', '😮', '😯', '😲', '😳', '🥺', '😦',
        '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞',
        '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬', '😈', '👿',
        '💀', '☠', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖'
    ],
    hands: [
        '👋', '🤚', '🖐', '✋', '🖖', '👌', '🤏', '✌️', '🤞', '🤟',
        '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝', '👍', '👎',
        '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝', '🙏',
        '✍', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠',
        '🦷', '🦴', '👀', '👁', '👅', '👄', '💋', '👶', '👧', '🧒',
        '👦', '👩', '🧑', '👨', '👩‍🦱', '👨‍🦱', '👩‍🦰', '👨‍🦰', '👱‍♀️', '👱‍♂️',
        '👩‍🦳', '👨‍🦳', '👩‍🦲', '👨‍🦲', '🧔', '👵', '👴', '👲', '👳‍♀️', '👳‍♂️',
        '🧕', '👮‍♀️', '👮‍♂️', '👷‍♀️', '👷‍♂️', '💂‍♀️', '💂‍♂️', '🕵️‍♀️', '🕵️‍♂️', '👩‍⚕️',
        '👨‍⚕️', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🎓', '👨‍🎓', '👩‍🎤', '👨‍🎤', '👩‍🏫'
    ],
    hearts: [
        '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔',
        '❣', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️',
        '💒', '💍', '💌', '💌', '💘', '💝', '💟', '❤️', '🧡', '💛',
        '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔', '❣', '💕', '💞',
        '💓', '💗', '💖', '💘', '💒', '💍', '💌', '🥰', '😍', '🤩',
        '😘', '😗', '☺', '😚', '😙', '😋', '😛', '😜', '🤪', '😝',
        '💑', '💏', '👫', '👬', '👭', '💏', '💑', '👩‍❤‍👩', '👨‍❤‍👨', '👩‍❤‍👦',
        '👨‍❤‍👦', '👩‍❤‍👧', '👨‍❤‍👧', '👩‍❤‍💋‍👩', '👨‍❤‍💋‍👨', '💏', '💑', '💒', '💍',
        '🌹', '🥀', '🌺', '🌸', '🌼', '🌻', '💐', '🍀', '🌿', '☘️'
    ],
    animals: [
        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨',
        '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒',
        '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇',
        '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜',
        '🦟', '🦗', '🕷', '🕸', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕',
        '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳',
        '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘',
        '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎',
        '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺'
    ],
    food: [
        '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈',
        '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦',
        '🥬', '🥒', '🌶', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔',
        '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈',
        '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟',
        '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘',
        '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪',
        '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧',
        '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫'
    ],
    activities: [
        '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱',
        '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳',
        '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛼', '🛷',
        '⛸', '🥌', '🎿', '⛷', '🏂', '🪂', '🏋️', '🤼', '🤸', '🤺',
        '⛹️', '🤾', '🏌️', '🏇', '🧘', '🏄', '🏊', '🤽', '🚣', '🧗',
        '🚵', '🚴', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖', '🏵️', '🎗',
        '🎫', '🎟', '🎪', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎹',
        '🥁', '🎷', '🎺', '🎷', '🎸', '🪕', '🎻', '🎲', '♟', '🎯',
        '🎳', '🎮', '🎰', '🧩', '🎲', '🎯', '🎳', '🎮', '🎰', '🧩'
    ],
    travel: [
        '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐',
        '🛻', '🚚', '🚛', '🚜', '🏍️', '🛵', '🚲', '🛴', '🛺', '🚨',
        '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞',
        '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '✈️',
        '🛫', '🛬', '🛩️', '💺', '🛰️', '🚀', '🛸', '🚁', '🛶', '⛵',
        '🚤', '🛥️', '🛳️', '⛴️', '🚢', '⚓', '🪝', '⛽', '🚧', '🚦',
        '🚥', '🚏', '🗺️', '🗿', '🗽', '🗼', '🏰', '🏯', '🏟️', '🎡',
        '🎢', '🎠', '⛲', '⛱️', '🏖️', '🏝️', '🏜️', '🌋', '⛰️', '🏔️'
    ],
    objects: [
        '💻', '🖥️', '🖨️', '⌨️', '🖱️', '🖲️', '💽', '💾', '💿', '📀',
        '🧮', '🎥', '🎞️', '📽️', '📺', '📷', '📸', '📹', '📼', '🔍',
        '🔎', '🕯️', '💡', '🔦', '🏮', '📔', '📕', '📖', '📗', '📘',
        '📙', '📚', '📓', '📒', '📃', '📜', '📄', '📰', '🗞️', '📑',
        '🔖', '🧷', '🔗', '📎', '🖇️', '📐', '📏', '🧮', '📌', '📍',
        '✂️', '🖊️', '🖋️', '✒️', '🖌️', '🖍️', '📝', '✏️', '🔍', '🔏',
        '🔐', '🔒', '🔓', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🧧',
        '🎎', '🏮', '🎐', '🧧', '✉️', '📩', '📨', '📧', '💌', '📥'
    ],
    symbols: [
        '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
        '❣', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️',
        '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐',
        '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐',
        '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳',
        '🈶', '🈚', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️',
        '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️',
        '🆘', '❌', '⭕', '🛑', '⛔', '📛', '🚫', '💯', '💢', '♨️'
    ],
    flags: [
        '🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲', '🇦🇳', '🇦🇴',
        '🇦🇶', '🇦🇷', '🇦🇸', '🇦🇹', '🇦🇺', '🇦🇼', '🇦🇽', '🇦🇿', '🇧🇦', '🇧🇩',
        '🇧🇪', '🇧🇫', '🇧🇬', '🇧🇭', '🇧🇮', '🇧🇯', '🇧🇱', '🇧🇲', '🇧🇳', '🇧🇴',
        '🇧🇶', '🇧🇷', '🇧🇸', '🇧🇹', '🇧🇻', '🇧🇼', '🇧🇽', '🇧🇾', '🇧🇿', '🇨🇦',
        '🇨🇨', '🇨🇩', '🇨🇫', '🇨🇬', '🇨🇭', '🇨🇮', '🇨🇰', '🇨🇱', '🇨🇲', '🇨🇳',
        '🇨🇴', '🇨🇵', '🇨🇷', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇽', '🇨🇾', '🇨🇿', '🇩🇪',
        '🇩🇬', '🇩🇯', '🇩🇰', '🇩🇪', '🇩🇫', '🇩🇬', '🇩🇯', '🇩🇰', '🇩🇲', '🇩🇴',
        '🇩🇿', '🇪🇦', '🇪🇨', '🇪🇪', '🇪🇬', '🇪🇭', '🇪🇷', '🇪🇸', '🇪🇹', '🇪🇺',
        '🇫🇮', '🇫🇯', '🇫🇰', '🇫🇲', '🇫🇳', '🇫🇴', '🇫🇷', '🇬🇦', '🇬🇧', '🇬🇩'
    ],
    arabic: [
        '🇸🇦', // السعودية
        '🇦🇪', // الإمارات
        '🇰🇼', // الكويت
        '🇶🇦', // قطر
        '🇧🇭', // البحرين
        '🇴🇲', // عُمان
        '🇮🇶', // العراق
        '🇸🇾', // سوريا
        '🇯🇴', // الأردن
        '🇱🇧', // لبنان
        '🇵🇸', // فلسطين
        '🇪🇬', // مصر
        '🇸🇩', // السودان
        '🇩🇯', // جيبوتي
        '🇸🇴', // الصومال
        '🇾🇪', // اليمن
        '🇲🇦', // المغرب
        '🇹🇳', // تونس
        '🇩🇿', // الجزائر
        '🇱🇾', // ليبيا
        '🇲🇷', // موريتانيا
        '🇦🇩', // أندورا
        '🇹🇷', // تركيا
        '🇮🇷', // Iran
        '🇦🇫', // أفغانستان
        '🇵🇰', // باكستان
        '☪️', // رمز إسلامي
        '🕌', // مسجد
        '🕋', // كعبة
        '📿', // سبحة
        '🕉️', // أوم
        '✡️', // نجمة داود
        '🔯', // نجمة سداسية
        '☦️', // صليب أرثوذكسي
        '☪️', // هلال ونجمة
        '🕎', // شمعدان
        '✝️', // صليب
        '🛐', // مكان عبادة
        '⛩️', // شنتو
        '🕉️', // أوم
        '☸️', // عجلة دارما
        '☯️', // يين يانغ
        '☬', // خمير
        '🪦', // قبر
        '⚰️', // تابوت
        '🪦', '⚰️', '🪐', '🌙', '⭐', '☀️', '🌤️', '⛅', '🌥️', '☁️',
        '🌦️', '🌧️', '⛈️', '🌩️', '🌨️', '❄️', '🌬️', '💨', '🌪️', '🌈',
        '☀️', '🌙', '⭐', '💫', '✨', '🌟', '💥', '💥', '💥', '💥'
    ]
};

var currentEmojiCategory = 'faces';

var users = [];
var currentUser = null;
var messages = {};
var typingTimeout = null;
var mediaRecorder = null;
var audioChunks = [];
var isRecording = false;
var recordingTimer = null;
var recordingSeconds = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    fetchUsers();
    setupEventListeners();
    checkAudioPermission();
});

// Check audio permission
function checkAudioPermission() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                stream.getTracks().forEach(function(track) { track.stop(); });
            })
            .catch(function(e) {
                console.log('Audio permission not available');
            });
    }
}

// Load data from localStorage
function loadData() {
    try {
        var savedMessages = localStorage.getItem('community_messages');
        if (savedMessages) {
            messages = JSON.parse(savedMessages);
        }
        
        var savedUsers = localStorage.getItem('community_users');
        if (savedUsers) {
            users = JSON.parse(savedUsers);
            displayUsers();
        }
    } catch (e) {
        console.log('Error loading data:', e);
    }
}

// Save data to localStorage
function saveData() {
    try {
        localStorage.setItem('community_messages', JSON.stringify(messages));
        localStorage.setItem('community_users', JSON.stringify(users));
    } catch (e) {
        console.log('Error saving data:', e);
    }
}

// Fetch users from database
async function fetchUsers() {
    try {
        var response = await fetch('../assets/data/database.json');
        var data = await response.json();
        
        // Create users from posts if not already loaded
        if (users.length === 0) {
            users = (data.المنشورات || []).map(function(post) {
                return {
                    id: post.معرف,
                    name: post.معرف_المستخدم,
                    avatar: '#' + post.معرف,
                    color: post.اللون || 'var(--gradient-1)',
                    status: 'متصل الآن',
                    lastMessage: post.المحتوى.substring(0, 50) + '...',
                    time: post.التاريخ,
                    unread: 0,
                    posts: post,
                    isOnline: Math.random() > 0.5
                };
            });
            
            // Add more users
            users.push({
                id: 4,
                name: 'مستخدم #4',
                avatar: '#4',
                color: 'var(--gradient-2)',
                status: 'مشغول',
                lastMessage: 'شكراً على المساعدة!',
                time: 'الآن',
                unread: 2,
                isOnline: true
            });
            
            users.push({
                id: 5,
                name: 'مستخدم #5',
                avatar: '#5',
                color: 'linear-gradient(135deg, #ec4899 0%, #6366f1 100%)',
                status: 'آخر ظهور اليوم',
                lastMessage: 'سنبدأ الاجتماع غداً',
                time: 'أمس',
                unread: 0,
                isOnline: false
            });
            
            users.push({
                id: 6,
                name: 'مستخدم #6',
                avatar: '#6',
                color: 'linear-gradient(135deg, #14b8a6 0%, #6366f1 100%)',
                status: 'متصل الآن',
                lastMessage: 'ممتاز!',
                time: 'الآن',
                unread: 1,
                isOnline: true
            });
            
            saveData();
        }
        
        displayUsers();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display users in sidebar
function displayUsers() {
    var container = document.getElementById('usersList');
    if (!container) return;

    var html = users.map(function(user) {
        var onlineDot = user.isOnline ? '<span class="online-dot"></span>' : '';
        
        return '<div class="user-item" onclick="openChat(' + user.id + ')" data-user-id="' + user.id + '">' +
            '<div class="user-avatar" style="background: ' + user.color + ';">' + user.avatar + onlineDot + '</div>' +
            '<div class="user-info">' +
            '<div class="user-name">' + user.name + '</div>' +
            '<div class="user-last-message">' + user.lastMessage + '</div>' +
            '</div>' +
            '<div class="user-meta">' +
            '<span class="user-time">' + user.time + '</span>' +
            (user.unread > 0 ? '<span class="user-unread">' + user.unread + '</span>' : '') +
            '</div>' +
            '</div>';
    }).join('');

    container.innerHTML = html;
}

// Open chat with user
function openChat(userId) {
    currentUser = users.find(function(u) { return u.id === userId; });
    if (!currentUser) return;

    // Mark as read
    currentUser.unread = 0;
    saveData();
    displayUsers();

    // Highlight active user
    document.querySelectorAll('.user-item').forEach(function(el) {
        el.classList.remove('active');
        if (parseInt(el.dataset.userId) === userId) {
            el.classList.add('active');
        }
    });

    // Show chat area
    document.getElementById('emptyChat').style.display = 'none';
    document.getElementById('chatHeader').classList.add('active');
    document.getElementById('chatMessages').classList.add('active');
    document.getElementById('messageInputArea').classList.add('active');

    // Update header
    var avatar = document.getElementById('chatAvatar');
    avatar.textContent = currentUser.avatar;
    avatar.style.background = currentUser.color;
    document.getElementById('chatName').textContent = currentUser.name;
    document.getElementById('chatStatus').textContent = currentUser.isOnline ? 'متصل الآن' : currentUser.status;
    document.getElementById('onlineDot').style.display = currentUser.isOnline ? 'block' : 'none';

    // Initialize messages if not exists
    if (!messages[userId]) {
        messages[userId] = [];
        
        // Add initial messages based on post content
        if (currentUser.posts) {
            var paragraphs = currentUser.posts.المحتوى.split('\n');
            paragraphs.forEach(function(p, index) {
                if (p.trim()) {
                    messages[userId].push({
                        text: p,
                        sent: index % 2 === 1,
                        time: getTimeAgo(index * 30),
                        type: 'text'
                    });
                }
            });
        }
    }

    displayMessages();
}

// Display messages
function displayMessages() {
    if (!currentUser) return;
    
    var container = document.getElementById('chatMessages');
    if (!container) return;

    var html = messages[currentUser.id].map(function(msg) {
        var content = '';
        
        if (msg.type === 'image') {
            content = '<img src="' + msg.imageData + '" class="message-image" onclick="viewImage(\'' + msg.imageData.replace(/'/g, "\\'") + '\')" alt="صورة">';
        } else if (msg.type === 'voice') {
            content = '<div class="voice-message" onclick="playVoice(\'' + (msg.audioData || '').replace(/'/g, "\\'") + '\')">' +
                '<i class="fas fa-play" style="color: var(--primary-color); font-size: 1.2rem;"></i>' +
                '<span style="font-size: 0.9rem; color: var(--text-secondary);">' + formatDuration(msg.audioDuration || 0) + '</span>' +
                '<i class="fas fa-volume-up" style="margin-right: auto; color: var(--text-secondary); opacity: 0.5;"></i>' +
                '</div>';
        } else {
            content = msg.text;
        }
        
        return '<div class="message ' + (msg.sent ? 'sent' : 'received') + '">' +
            content +
            '<span class="message-time">' + msg.time + '</span>' +
            '</div>';
    }).join('');

    container.innerHTML = html;
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// Send message
function sendMessage() {
    var input = document.getElementById('messageInput');
    var text = input.value.trim();
    
    if (!text || !currentUser) return;

    var message = {
        text: text,
        sent: true,
        time: getTimeAgo(0),
        type: 'text'
    };

    if (!messages[currentUser.id]) {
        messages[currentUser.id] = [];
    }

    messages[currentUser.id].push(message);
    
    // Update last message
    currentUser.lastMessage = text;
    currentUser.time = 'الآن';
    saveData();
    displayUsers();

    // Clear input and display
    input.value = '';
    displayMessages();

    // Show typing indicator
    showTypingIndicator();

    // Simulate reply
    setTimeout(function() {
        hideTypingIndicator();
        
        var replies = [
            'شكراً لك!',
            'معلومة مفيدة جداً',
            'هل يمكنك شرح المزيد؟',
            'جيد جداً!',
            'أقدر مساعدتك',
            'متابعة...',
            'فهمت، شكراً',
            'ممتاز!'
        ];
        var reply = {
            text: replies[Math.floor(Math.random() * replies.length)],
            sent: false,
            time: getTimeAgo(1),
            type: 'text'
        };
        messages[currentUser.id].push(reply);
        currentUser.lastMessage = reply.text;
        saveData();
        displayUsers();
        displayMessages();
    }, 1500 + Math.random() * 1500);
}

// Show typing indicator
function showTypingIndicator() {
    var indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.classList.add('active');
    }
    displayMessages();
}

// Hide typing indicator
function hideTypingIndicator() {
    var indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.classList.remove('active');
    }
}

// Trigger image upload
function triggerImageUpload() {
    var input = document.getElementById('imageInput');
    if (input) input.click();
}

// Handle image upload
function handleImageUpload(event) {
    var file = event.target.files[0];
    if (!file || !currentUser) return;

    var reader = new FileReader();
    reader.onload = function(e) {
        var imageData = e.target.result;
        
        var message = {
            imageData: imageData,
            sent: true,
            time: getTimeAgo(0),
            type: 'image',
            text: '📷 صورة'
        };

        if (!messages[currentUser.id]) {
            messages[currentUser.id] = [];
        }

        messages[currentUser.id].push(message);
        
        currentUser.lastMessage = message.text;
        currentUser.time = 'الآن';
        saveData();
        displayUsers();
        displayMessages();

        // Simulate reply
        setTimeout(function() {
            var replies = ['صورة جميلة!', 'ممتاز', '👍'];
            var reply = {
                text: replies[Math.floor(Math.random() * replies.length)],
                sent: false,
                time: getTimeAgo(1),
                type: 'text'
            };
            messages[currentUser.id].push(reply);
            currentUser.lastMessage = reply.text;
            saveData();
            displayUsers();
            displayMessages();
        }, 1500);
    };
    reader.readAsDataURL(file);
    
    // Clear input
    event.target.value = '';
}

// View image in fullscreen
function viewImage(imageData) {
    var win = window.open('');
    win.document.write('<img src="' + imageData + '" style="max-width:100%; max-height:100%; display:block; margin:auto;">');
}

// Get time ago string
function getTimeAgo(minutes) {
    if (minutes === 0) return new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
    if (minutes < 60) return 'منذ ' + minutes + ' د';
    if (minutes < 1440) return 'منذ ' + Math.floor(minutes / 60) + ' س';
    return 'منذ ' + Math.floor(minutes / 1440) + ' ي';
}

// Setup event listeners
function setupEventListeners() {
    // Send button click
    var sendBtn = document.getElementById('sendBtn');
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    // Enter key to send
    var messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Search functionality
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            var query = e.target.value.toLowerCase();
            var filteredUsers = users.filter(function(u) {
                return u.name.toLowerCase().includes(query) || 
                       u.lastMessage.toLowerCase().includes(query);
            });
            displayFilteredUsers(filteredUsers);
        });
    }
}

// Display filtered users
function displayFilteredUsers(filteredUsers) {
    var container = document.getElementById('usersList');
    if (!container) return;

    if (filteredUsers.length === 0) {
        container.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-secondary);">لا توجد نتائج</div>';
        return;
    }

    var html = filteredUsers.map(function(user) {
        var onlineDot = user.isOnline ? '<span class="online-dot"></span>' : '';
        
        return '<div class="user-item" onclick="openChat(' + user.id + ')" data-user-id="' + user.id + '">' +
            '<div class="user-avatar" style="background: ' + user.color + ';">' + user.avatar + onlineDot + '</div>' +
            '<div class="user-info">' +
            '<div class="user-name">' + user.name + '</div>' +
            '<div class="user-last-message">' + user.lastMessage + '</div>' +
            '</div>' +
            '<div class="user-meta">' +
            '<span class="user-time">' + user.time + '</span>' +
            (user.unread > 0 ? '<span class="user-unread">' + user.unread + '</span>' : '') +
            '</div>' +
            '</div>';
    }).join('');

    container.innerHTML = html;
}

// Go back to users list (mobile)
function goBack() {
    currentUser = null;
    document.getElementById('chatHeader').classList.remove('active');
    document.getElementById('chatMessages').classList.remove('active');
    document.getElementById('messageInputArea').classList.remove('active');
    document.getElementById('emptyChat').style.display = 'flex';
    document.getElementById('sidebar').classList.remove('hidden');
    
    document.querySelectorAll('.user-item').forEach(function(el) {
        el.classList.remove('active');
    });
}

// Placeholder functions for menu actions
function showNewGroup() {
    alert('ميزة إنشاء مجموعة جديدة');
}

function showStatus() {
    alert('ميزة الحالة');
}

function showNewChat() {
    alert('ميزة محادثة جديدة');
}

function showMenu() {
    alert('قائمة الخيارات');
}

// ========== Emoji Picker Functions ==========

// Show emoji picker
function showEmojiPicker() {
    var picker = document.getElementById('emojiPicker');
    var overlay = document.getElementById('emojiOverlay');
    
    if (picker && overlay) {
        picker.classList.add('active');
        overlay.classList.add('active');
        loadEmojis(currentEmojiCategory);
    }
}

// Hide emoji picker
function hideEmojiPicker() {
    var picker = document.getElementById('emojiPicker');
    var overlay = document.getElementById('emojiOverlay');
    
    if (picker && overlay) {
        picker.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// Load emojis for a category
function loadEmojis(category) {
    currentEmojiCategory = category;
    var grid = document.getElementById('emojiGrid');
    
    if (!grid) return;
    
    var categoryEmojis = emojis[category] || [];
    var html = '';
    
    categoryEmojis.forEach(function(emoji) {
        html += '<div class="emoji-item" onclick="insertEmoji(\'' + emoji + '\')">' + emoji + '</div>';
    });
    
    grid.innerHTML = html;
}

// Show emoji category
function showEmojiCategory(category) {
    // Update active button
    var buttons = document.querySelectorAll('.emoji-category-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    var activeBtn = document.querySelector('.emoji-category-btn[onclick="showEmojiCategory(\'' + category + '\')"]');
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    loadEmojis(category);
}

// Insert emoji into message input
function insertEmoji(emoji) {
    var input = document.getElementById('messageInput');
    if (input) {
        input.value += emoji;
        input.focus();
    }
}

// Search emojis
function searchEmojis(query) {
    var grid = document.getElementById('emojiGrid');
    if (!grid) return;
    
    query = query.toLowerCase();
    var allEmojis = [];
    
    // Collect all emojis
    Object.keys(emojis).forEach(function(category) {
        emojis[category].forEach(function(emoji) {
            allEmojis.push(emoji);
        });
    });
    
    // Filter emojis
    var filteredEmojis = allEmojis.filter(function(emoji) {
        return true; // Since emojis don't have text, show all
    });
    
    // If search query exists, show matching emojis (you can add custom emoji names)
    if (query) {
        // Show search results from all categories
        var html = '';
        allEmojis.forEach(function(emoji) {
            html += '<div class="emoji-item" onclick="insertEmoji(\'' + emoji + '\')">' + emoji + '</div>';
        });
        grid.innerHTML = html;
    } else {
        // Show current category
        loadEmojis(currentEmojiCategory);
    }
}

function showAttachMenu() {
    var choice = prompt('اختر نوع المرفق:\n1. مستند\n2. موقع\n3. جهة اتصال');
    if (choice === '1') {
        triggerImageUpload();
    }
}

// ========== Voice Recording Functions ==========

// Start voice recording
async function startRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('المتصفح لا يدعم التسجيل الصوتي');
        return;
    }

    try {
        var stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = function(event) {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = function() {
            var audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
            sendVoiceMessage(audioBlob);
        };

        mediaRecorder.start();
        isRecording = true;
        recordingSeconds = 0;
        
        // Update UI
        updateRecordingUI(true);
        
        // Start timer
        recordingTimer = setInterval(updateRecordingTimer, 1000);
        
    } catch (error) {
        console.error('Error starting recording:', error);
        alert('تعذر الوصول للميكروفون. يرجى التحقق من الأذونات.');
    }
}

// Stop voice recording
function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(function(track) { track.stop(); });
        isRecording = false;
        
        clearInterval(recordingTimer);
        updateRecordingUI(false);
    }
}

// Update recording timer display
function updateRecordingTimer() {
    recordingSeconds++;
    var timerDisplay = document.getElementById('recordingTimer');
    if (timerDisplay) {
        var minutes = Math.floor(recordingSeconds / 60);
        var seconds = recordingSeconds % 60;
        timerDisplay.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
}

// Update recording UI
function updateRecordingUI(recording) {
    var micBtn = document.getElementById('micBtn');
    var sendBtn = document.getElementById('sendBtn');
    var recordingContainer = document.getElementById('recordingContainer');
    var messageInput = document.getElementById('messageInput');
    
    if (recording) {
        if (micBtn) micBtn.style.display = 'none';
        if (sendBtn) sendBtn.style.display = 'none';
        if (recordingContainer) recordingContainer.style.display = 'flex';
        if (messageInput) messageInput.placeholder = 'جاري التسجيل...';
    } else {
        if (micBtn) micBtn.style.display = 'flex';
        if (sendBtn) sendBtn.style.display = 'flex';
        if (recordingContainer) recordingContainer.style.display = 'none';
        if (messageInput) messageInput.placeholder = 'اكتب رسالة...';
        
        var timerDisplay = document.getElementById('recordingTimer');
        if (timerDisplay) timerDisplay.textContent = '00:00';
    }
}

// Send voice message
function sendVoiceMessage(audioBlob) {
    if (!currentUser) return;

    var reader = new FileReader();
    reader.onload = function() {
        var audioData = reader.result;
        
        var message = {
            audioData: audioData,
            audioDuration: recordingSeconds,
            sent: true,
            time: getTimeAgo(0),
            type: 'voice',
            text: '🎤 رسالة صوتية (' + formatDuration(recordingSeconds) + ')'
        };

        if (!messages[currentUser.id]) {
            messages[currentUser.id] = [];
        }

        messages[currentUser.id].push(message);
        
        currentUser.lastMessage = message.text;
        currentUser.time = 'الآن';
        saveData();
        displayUsers();
        displayMessages();

        // Simulate reply
        setTimeout(function() {
            var replies = ['تم استلام الرسالة!', 'ممتاز', '👍', 'شكراً'];
            var reply = {
                text: replies[Math.floor(Math.random() * replies.length)],
                sent: false,
                time: getTimeAgo(1),
                type: 'text'
            };
            messages[currentUser.id].push(reply);
            currentUser.lastMessage = reply.text;
            saveData();
            displayUsers();
            displayMessages();
        }, 1500);
    };
    reader.readAsDataURL(audioBlob);
}

// Format duration to MM:SS
function formatDuration(seconds) {
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
}

// Toggle recording on mic button click
function toggleRecording() {
    if (isRecording) {
        stopRecording();
    } else {
        startRecording();
    }
}

// Cancel recording
function cancelRecording() {
    if (isRecording) {
        stopRecording();
        audioChunks = [];
    }
}

// Play voice message
function playVoice(audioData) {
    if (!audioData) return;
    var audio = new Audio(audioData);
    audio.play();
}

// Toggle attachment menu
function toggleAttachMenu() {
    var dropdown = document.getElementById('attachDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Handle attachment selection
function handleAttach(type) {
    // Close dropdown
    var dropdown = document.getElementById('attachDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
    
    switch(type) {
        case 'image':
            triggerImageUpload();
            break;
        case 'camera':
            openCamera();
            break;
        case 'document':
            var docInput = document.createElement('input');
            docInput.type = 'file';
            docInput.accept = '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip';
            docInput.onchange = function(e) {
                if (e.target.files[0]) {
                    alert('تم اختيار الملف: ' + e.target.files[0].name);
                }
            };
            docInput.click();
            break;
        case 'audio':
            var audioInput = document.createElement('input');
            audioInput.type = 'file';
            audioInput.accept = 'audio/*';
            audioInput.onchange = function(e) {
                if (e.target.files[0]) {
                    alert('تم اختيار الملف الصوتي: ' + e.target.files[0].name);
                }
            };
            audioInput.click();
            break;
        case 'location':
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    alert('موقعك:\nخط العرض: ' + position.coords.latitude.toFixed(4) + '\nخط الطول: ' + position.coords.longitude.toFixed(4));
                }, function() {
                    alert('تعذر الحصول على الموقع');
                });
            } else {
                alert('المتصفح لا يدعم تحديد الموقع');
            }
            break;
        case 'contact':
            var contactName = prompt('أدخل اسم جهة الاتصال:');
            if (contactName) {
                alert('تم مشاركة جهة الاتصال: ' + contactName);
            }
            break;
    }
}

// Close attach dropdown when clicking outside
document.addEventListener('click', function(e) {
    var attachMenu = document.querySelector('.attach-menu');
    var dropdown = document.getElementById('attachDropdown');
    
    if (attachMenu && dropdown && !attachMenu.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// ========== Camera Functions ==========

// Open camera modal
async function openCamera() {
    try {
        var stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        
        // Create camera modal if not exists
        var cameraModal = document.getElementById('cameraModal');
        if (!cameraModal) {
            cameraModal = document.createElement('div');
            cameraModal.id = 'cameraModal';
            cameraModal.className = 'camera-modal';
            cameraModal.innerHTML = 
                '<div class="camera-content">' +
                    '<div class="camera-header">' +
                        '<span>الكاميرا</span>' +
                        '<button class="camera-close" onclick="closeCamera()"><i class="fas fa-times"></i></button>' +
                    '</div>' +
                    '<video id="cameraVideo" autoplay playsinline></video>' +
                    '<div class="camera-controls">' +
                        '<button class="camera-btn gallery-btn" onclick="document.getElementById(\'cameraInput\').click()">' +
                            '<i class="fas fa-image"></i>' +
                        '</button>' +
                        '<button class="camera-btn capture-btn" onclick="capturePhoto()">' +
                            '<i class="fas fa-camera"></i>' +
                        '</button>' +
                        '<button class="camera-btn switch-btn" onclick="switchCamera()">' +
                            '<i class="fas fa-sync-alt"></i>' +
                        '</button>' +
                    '</div>' +
                    '<input type="file" id="cameraInput" accept="image/*" capture="environment" style="display:none" onchange="handleCameraInput(event)">' +
                '</div>';
            document.body.appendChild(cameraModal);
            
            // Add camera styles
            var style = document.createElement('style');
            style.textContent = 
                '.camera-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 1000; display: none; justify-content: center; align-items: center; }' +
                '.camera-modal.active { display: flex; }' +
                '.camera-content { width: 100%; max-width: 500px; background: var(--darker-bg); border-radius: 20px; overflow: hidden; }' +
                '.camera-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; background: var(--card-bg); }' +
                '.camera-close { background: none; border: none; color: var(--text-secondary); font-size: 1.2rem; cursor: pointer; }' +
                '#cameraVideo { width: 100%; height: 400px; object-fit: cover; background: #000; }' +
                '.camera-controls { display: flex; justify-content: center; align-items: center; gap: 30px; padding: 20px; background: var(--card-bg); }' +
                '.camera-btn { width: 60px; height: 60px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; transition: all 0.3s ease; }' +
                '.gallery-btn { background: rgba(99, 102, 241, 0.2); color: #6366f1; }' +
                '.capture-btn { background: var(--gradient-1); color: white; width: 70px; height: 70px; }' +
                '.switch-btn { background: rgba(16, 185, 129, 0.2); color: #10b981; }' +
                '.camera-btn:hover { transform: scale(1.1); }' +
                '.camera-btn:active { transform: scale(0.95); }';
            document.head.appendChild(style);
        }
        
        var video = document.getElementById('cameraVideo');
        video.srcObject = stream;
        
        cameraModal.classList.add('active');
        
    } catch (error) {
        console.error('Error accessing camera:', error);
        alert('تعذر الوصول للكاميرا. يرجى التحقق من الأذونات.');
    }
}

// Close camera
function closeCamera() {
    var cameraModal = document.getElementById('cameraModal');
    var video = document.getElementById('cameraVideo');
    
    if (cameraModal) {
        cameraModal.classList.remove('active');
    }
    
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(function(track) { track.stop(); });
    }
}

// Capture photo from camera
function capturePhoto() {
    var video = document.getElementById('cameraVideo');
    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    
    var imageData = canvas.toDataURL('image/jpeg', 0.8);
    
    // Send as message
    if (currentUser) {
        var message = {
            imageData: imageData,
            sent: true,
            time: getTimeAgo(0),
            type: 'image',
            text: '📷 صورة من الكاميرا'
        };

        if (!messages[currentUser.id]) {
            messages[currentUser.id] = [];
        }

        messages[currentUser.id].push(message);
        
        currentUser.lastMessage = message.text;
        currentUser.time = 'الآن';
        saveData();
        displayUsers();
        displayMessages();
    }
    
    closeCamera();
    
    // Simulate reply
    if (currentUser) {
        setTimeout(function() {
            var replies = ['صورة جميلة!', 'ممتاز', '👍'];
            var reply = {
                text: replies[Math.floor(Math.random() * replies.length)],
                sent: false,
                time: getTimeAgo(1),
                type: 'text'
            };
            messages[currentUser.id].push(reply);
            currentUser.lastMessage = reply.text;
            saveData();
            displayUsers();
            displayMessages();
        }, 1500);
    }
}

// Handle camera input (from gallery)
function handleCameraInput(event) {
    var file = event.target.files[0];
    if (!file) return;
    
    var reader = new FileReader();
    reader.onload = function(e) {
        var imageData = e.target.result;
        
        if (currentUser) {
            var message = {
                imageData: imageData,
                sent: true,
                time: getTimeAgo(0),
                type: 'image',
                text: '📷 صورة'
            };

            if (!messages[currentUser.id]) {
                messages[currentUser.id] = [];
            }

            messages[currentUser.id].push(message);
            
            currentUser.lastMessage = message.text;
            currentUser.time = 'الآن';
            saveData();
            displayUsers();
            displayMessages();
        }
        
        closeCamera();
        
        if (currentUser) {
            setTimeout(function() {
                var replies = ['صورة جميلة!', 'ممتاز', '👍'];
                var reply = {
                    text: replies[Math.floor(Math.random() * replies.length)],
                    sent: false,
                    time: getTimeAgo(1),
                    type: 'text'
                };
                messages[currentUser.id].push(reply);
                currentUser.lastMessage = reply.text;
                saveData();
                displayUsers();
                displayMessages();
            }, 1500);
        }
    };
    reader.readAsDataURL(file);
    
    event.target.value = '';
}

// Switch camera (front/back)
async function switchCamera() {
    var video = document.getElementById('cameraVideo');
    if (!video) return;

    var currentStream = video.srcObject || null;

    // Try to determine current facingMode safely
    var facingMode = 'environment';
    if (currentStream) {
        var videoTrack = currentStream.getVideoTracks && currentStream.getVideoTracks()[0];
        if (videoTrack && typeof videoTrack.getConstraints === 'function') {
            try {
                var constraints = videoTrack.getConstraints() || {};
                facingMode = constraints.facingMode || facingMode;
            } catch (e) {
                facingMode = facingMode;
            }
        }

        // Stop previous tracks
        try {
            currentStream.getTracks().forEach(function(track) { track.stop(); });
        } catch (e) {
            // ignore
        }
    }

    var newFacingMode = facingMode === 'environment' ? 'user' : 'environment';
    
    try {
        var newStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: newFacingMode },
            audio: false 
        });
        video.srcObject = newStream;
    } catch (error) {
        console.error('Error switching camera:', error);
    }
}

// Close camera when clicking outside
document.addEventListener('click', function(e) {
    var cameraModal = document.getElementById('cameraModal');
    if (cameraModal && cameraModal.classList.contains('active')) {
        var content = cameraModal.querySelector('.camera-content');
        if (content && !content.contains(e.target)) {
            closeCamera();
        }
    }
});
