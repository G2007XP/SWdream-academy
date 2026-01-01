// SWDream Academy - AI Moving Robot Assistant
// المساعد الذكي للروبوت المتحرك

class AIAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.typingTimeout = null;
        this.conversationHistory = [];
        this.userIntent = null;
        
        // Robot position - fixed at bottom right
        this.robotX = window.innerWidth - 100;
        this.robotY = window.innerHeight - 120;
        this.targetX = this.robotX;
        this.targetY = this.robotY;
        this.isMoving = false;
        
        // Boundaries - fixed position
        this.minX = window.innerWidth - 100;
        this.maxX = window.innerWidth - 100;
        this.minY = window.innerHeight - 120;
        this.maxY = window.innerHeight - 120;
        
        // Configuration
        this.config = {
            typingSpeed: 50,
            responseDelay: 800,
            maxHistoryLength: 10
        };
        
        this.init();
    }

    init() {
        this.createDOM();
        this.bindEvents();
        // Removed random movement - robot stays fixed at bottom right
        this.showWelcomeMessage();
    }

    createDOM() {
        const container = document.createElement('div');
        container.className = 'ai-assistant-container';
        container.id = 'aiAssistantContainer';
        
        container.innerHTML = `
            <div class="ai-robot" id="aiRobot" onclick="aiAssistant.toggleChat()">
                <div class="speed-lines">
                    <div class="speed-line top"></div>
                    <div class="speed-line bottom"></div>
                </div>
                <div class="robot-head">
                    <div class="robot-antenna"></div>
                    <div class="robot-eyes">
                        <div class="robot-eye left"></div>
                        <div class="robot-eye right"></div>
                    </div>
                    <div class="robot-mouth"></div>
                </div>
                <div class="robot-body">
                    <div class="robot-screen"><span>AI</span></div>
                </div>
                <div class="robot-arm left"></div>
                <div class="robot-arm right"></div>
                <div class="robot-legs">
                    <div class="robot-leg"></div>
                    <div class="robot-leg"></div>
                </div>
                <div class="robot-shadow"></div>
                <div class="ai-notification-bubble" id="aiNotification">1</div>
            </div>
        `;
        
        document.body.appendChild(container);
        
        // Chat Window (appended to body for proper positioning)
        const chatWindow = document.createElement('div');
        chatWindow.className = 'ai-chat-window';
        chatWindow.id = 'aiChatWindow';
        chatWindow.innerHTML = `
            <div class="ai-chat-header">
                <div class="ai-status-dot"></div>
                <div class="ai-header-info">
                    <h3>🤖 مساعد SWDream الذكي</h3>
                    <span>متاح دائماً لمساعدتك</span>
                </div>
                <button class="ai-close-btn" onclick="aiAssistant.toggleChat()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="ai-messages" id="aiMessages">
                <div class="ai-welcome">
                    <div class="ai-welcome-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h4>مرحباً! 👋</h4>
                    <p>أنا مساعدك الذكي في SWDream Academy<br>يمكنني مساعدتك في:</p>
                    <div style="text-align: right; margin-top: 10px;">
                        📚 المسارات التعليمية<br>
                        💰 معلومات عن الأسعار<br>
                        🚀 كيفية البدء<br>
                        📞 التواصل والدعم
                    </div>
                </div>
            </div>
            <div class="ai-input-area">
                <input type="text" id="aiInput" placeholder="اكتب سؤالك هنا..." autocomplete="off">
                <button class="ai-send-btn" onclick="aiAssistant.sendMessage()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;
        document.body.appendChild(chatWindow);
        
        // Set initial position
        container.style.left = this.robotX + 'px';
        container.style.top = this.robotY + 'px';
        
        // Update boundaries on resize
        window.addEventListener('resize', () => {
            this.maxX = window.innerWidth - 120;
            this.maxY = window.innerHeight - 150;
        });
    }

    bindEvents() {
        const input = document.getElementById('aiInput');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        const robot = document.getElementById('aiRobot');
        const chatWindow = document.getElementById('aiChatWindow');
        
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            // Robot stays fixed - no movement needed
            robot.classList.add('chat-open');
            chatWindow.classList.add('chat-open');
            document.getElementById('aiInput').focus();
            this.hideNotification();
        } else {
            robot.classList.remove('chat-open');
            chatWindow.classList.remove('chat-open');
        }
    }

    showWelcomeMessage() {
        setTimeout(() => this.showNotification(), 5000);
    }

    showNotification() {
        const notification = document.getElementById('aiNotification');
        if (notification) notification.style.display = 'block';
    }

    hideNotification() {
        const notification = document.getElementById('aiNotification');
        if (notification) notification.style.display = 'none';
    }

    sendQuickMessage(message) {
        this.addUserMessage(message);
        this.processMessage(message);
    }

    sendMessage() {
        const input = document.getElementById('aiInput');
        const message = input.value.trim();
        if (!message) return;
        input.value = '';
        this.addUserMessage(message);
        this.processMessage(message);
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('aiMessages');
        const welcome = messagesContainer.querySelector('.ai-welcome');
        if (welcome) welcome.remove();
        
        this.conversationHistory.push({ role: 'user', message });
        
        const messageHTML = `
            <div class="ai-message user new">
                <div class="ai-message-content">${this.escapeHtml(message)}</div>
                <div class="ai-message-avatar"><i class="fas fa-user"></i></div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    addBotMessage(message) {
        const messagesContainer = document.getElementById('aiMessages');
        const robot = document.getElementById('aiRobot');
        
        robot.classList.add('talking');
        
        this.conversationHistory.push({ role: 'bot', message });
        
        const messageHTML = `
            <div class="ai-message bot new">
                <div class="ai-message-avatar"><i class="fas fa-robot"></i></div>
                <div class="ai-message-content">${message}</div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
        
        setTimeout(() => robot.classList.remove('talking'), 1000);
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('aiMessages');
        const typingHTML = `<div class="ai-typing-indicator" id="aiTypingIndicator" style="margin-left: 46px;"><span></span><span></span><span></span></div>`;
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('aiTypingIndicator');
        if (indicator) indicator.remove();
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('aiMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    processMessage(message) {
        this.showTypingIndicator();
        const responseDelay = this.config.responseDelay + Math.random() * 500;
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.getAIResponse(message);
            this.addBotMessage(response.message);
        }, responseDelay);
    }

    recognizeIntent(message) {
        const lower = message.toLowerCase();
        
        const coursePatterns = [/مسار/i, /كورس/i, /course/i, /تعليمي/i];
        if (coursePatterns.some(p => p.test(lower))) return 'courses';
        
        const pricePatterns = [/سعر/i, /كلفة/i, /اشتراك/i, /دفع/i];
        if (pricePatterns.some(p => p.test(lower))) return 'pricing';
        
        const registerPatterns = [/سجل/i, /تسجيل/i, /بدأ/i];
        if (registerPatterns.some(p => p.test(lower))) return 'register';
        
        const supportPatterns = [/تواصل/i, /اتصل/i, /دعم/i];
        if (supportPatterns.some(p => p.test(lower))) return 'support';
        
        const greetingPatterns = [/مرحبا/i, /اهلا/i, /hello/i, /hi/i];
        if (greetingPatterns.some(p => p.test(lower))) return 'greeting';
        
        return 'general';
    }

    getAIResponse(message) {
        this.userIntent = this.recognizeIntent(message);
        
        switch (this.userIntent) {
            case 'courses': return { message: this.handleCoursesRequest(message) };
            case 'pricing': return { message: this.handlePricingRequest(message) };
            case 'register': return { message: this.handleRegisterRequest(message) };
            case 'support': return { message: this.handleSupportRequest(message) };
            case 'greeting': return { message: this.handleGreeting(message) };
            default: return { message: this.handleGeneralRequest(message) };
        }
    }

    handleCoursesRequest(message) {
        return `🎯 <strong>المسارات التعليمية</strong><br>
            <strong>1. الأمن السيبراني</strong> 🛡️<br>
            حماية الأنظمة والشبكات<br>
            <a href="cybersecurity.html" style="color: #6366f1;">المزيد</a><br>
            <strong>2. Backend</strong> ⚙️<br>
            بناء الخوادم وقواعد البيانات<br>
            <a href="backend.html" style="color: #6366f1;">المزيد</a><br>
            <strong>3. Fullstack</strong> 🔄<br>
            التطوير الكامل للواجهة والخلفية<br>
            <a href="fullstack.html" style="color: #6366f1;">المزيد</a><br>
            <strong>4. الذكاء الاصطناعي</strong> 🤖<br>
            بناء نماذج التعلم الآلي<br>
            <a href="ai-engineer.html" style="color: #6366f1;">المزيد</a><br>
            <strong>5. Frontend</strong> 🎨<br>
            تصميم واجهات المستخدم<br>
            <a href="frontend.html" style="color: #6366f1;">المزيد</a><br>
            <strong>6. تحليل البيانات</strong> 📊<br>
            تحويل البيانات إلى رؤى<br>
            <a href="data-analysis.html" style="color: #6366f1;">المزيد</a>`;
    }

    handlePricingRequest(message) {
        return `💰 <strong>باقات الاشتراك</strong><br>
            <strong>الباقة الأساسية:</strong><br>
            ✓ 7 دولار/مسار<br>
            ✓ وصول كامل للمحتوى<br>
            ✓ شهادات معتمدة<br>
            ✓ دعم فني<br>
            <strong>ملاحظة:</strong><br>
            المحتوى مجاني من مصادر عامة`;
    }

    handleRegisterRequest(message) {
        return `🚀 <strong>كيف تبدأ؟</strong><br>
            <strong>الخطوة 1:</strong> أنشئ حسابك<br>
            <strong>الخطوة 2:</strong> اختر المسار<br>
            <strong>الخطوة 3:</strong> اشترك (7$)<br>
            <strong>الخطوة 4:</strong> ابدأ التعلم!<br>
            <a href="signup.html" style="background: #6366f1; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none;">سجل الآن</a>`;
    }

    handleSupportRequest(message) {
        return `📞 <strong>تواصل معنا</strong><br>
            📧 البريد: sabirboukhlif1@gmail.com<br>
            📱 الهاتف: +212 699 230 061<br>
            📍 المغرب - أكادير<br>
            نحن متاحون دائماً لمساعدتك!`;
    }

    handleGreeting(message) {
        return `👋 أهلاً بك في SWDream Academy!<br>
            أنا مساعدك الذكي. يمكنني مساعدتك في:<br>
            ✓ اختيار المسار المناسب<br>
            ✓ معلومات عن الأسعار<br>
            ✓ كيفية التسجيل<br>
            <strong>كيف يمكنني مساعدتك اليوم؟</strong>`;
    }

    handleGeneralRequest(message) {
        return `🤔 لم أفهم سؤالك بالضبط.<br>
            لكن يمكنني مساعدتك في:<br>
            ✓ المسارات التعليمية<br>
            ✓ الأسعار والتسجيل<br>
            ✓ التواصل والدعم<br>
            <strong>ما الذي تريده؟</strong>`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize AI Assistant
let aiAssistant;
document.addEventListener('DOMContentLoaded', function() {
    aiAssistant = new AIAssistant();
});

