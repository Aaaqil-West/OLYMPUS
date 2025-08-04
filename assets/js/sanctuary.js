// Mental Health Helper JavaScript

// Data Storage
let moodLog = JSON.parse(localStorage.getItem('moodLog')) || [];
let savedAffirmations = JSON.parse(localStorage.getItem('savedAffirmations')) || [];
let wellnessGoals = JSON.parse(localStorage.getItem('wellnessGoals')) || [];
let thoughtRecords = JSON.parse(localStorage.getItem('thoughtRecords')) || [];
let anxietyRecords = JSON.parse(localStorage.getItem('anxietyRecords')) || [];
let sleepRecords = JSON.parse(localStorage.getItem('sleepRecords')) || [];
let safetyPlan = JSON.parse(localStorage.getItem('safetyPlan')) || {};
let petData = JSON.parse(localStorage.getItem('petData')) || { happiness: 80, health: 90, energy: 70, name: 'Apollo Jr.' };
let wellnessStreak = JSON.parse(localStorage.getItem('wellnessStreak')) || 0;
let achievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Current State
let currentMoodIntensity = 5;
let currentBreathingType = null;
let selectedTriggers = [];
let meditationTimer = null;
let meditationDuration = 0;
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];

const copingStrategies = {
    anxiety: [
        "Take 5 deep breaths - in for 4, hold for 4, out for 6",
        "Name 5 things you can see, 4 you can touch, 3 you can hear",
        "Try gentle stretching or yoga poses",
        "Listen to calming music or nature sounds"
    ],
    sadness: [
        "Write in a journal about your feelings",
        "Call or text a trusted friend or family member",
        "Do something creative like drawing or crafting",
        "Watch a funny video or movie"
    ],
    anger: [
        "Count to 10 slowly before reacting",
        "Do jumping jacks or go for a walk",
        "Squeeze a stress ball or punch a pillow",
        "Talk to someone you trust about what's bothering you"
    ],
    stress: [
        "Make a to-do list and prioritize tasks",
        "Take a warm bath or shower",
        "Practice mindfulness or meditation",
        "Break big tasks into smaller, manageable steps"
    ],
    lonely: [
        "Reach out to a friend or family member",
        "Join an online community or support group",
        "Write in a journal about your feelings",
        "Practice self-compassion and self-care"
    ],
    confused: [
        "Write down your thoughts to organize them",
        "Talk to someone you trust about your situation",
        "Break down complex problems into smaller parts",
        "Take time to reflect without pressure to decide"
    ],
    excited: [
        "Channel your energy into a creative project",
        "Share your excitement with someone who cares",
        "Use this energy to tackle a challenging task",
        "Practice gratitude for this positive feeling"
    ]
};

const affirmations = [
    "You are stronger than you think",
    "It's okay to have difficult days",
    "You matter and your feelings are valid",
    "Tomorrow is a new day with new possibilities",
    "You are loved and supported",
    "You have overcome challenges before, and you can do it again",
    "Your mental health matters",
    "Progress, not perfection, is what counts",
    "You deserve kindness, especially from yourself",
    "Every small step forward is worth celebrating",
    "You have the power to create positive change in your life",
    "Your feelings are temporary, but your strength is permanent"
];

const selfCareActivities = {
    gratitude: {
        title: "Gratitude Practice",
        content: "Take a moment to think of 3 things you're grateful for today. They can be big or small - maybe a warm cup of coffee, a text from a friend, or simply having a roof over your head.",
        action: "Write them down or just hold them in your heart."
    },
    mindfulness: {
        title: "5-Minute Mindfulness",
        content: "Let's practice the 5-4-3-2-1 grounding technique. Notice: 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste.",
        action: "Take your time with each sense."
    },
    movement: {
        title: "Gentle Movement",
        content: "Your body and mind are connected. Try some gentle stretches, a short walk, or even just rolling your shoulders. Movement can help shift your energy.",
        action: "Listen to your body and move in whatever way feels good."
    },
    creativity: {
        title: "Creative Expression",
        content: "Creativity can be healing. Try drawing, writing, singing, or any form of creative expression. There's no right or wrong way - just let yourself create.",
        action: "Focus on the process, not the outcome."
    },
    nature: {
        title: "Nature Connection",
        content: "Nature has a calming effect on our minds. If you can, step outside for a few minutes. If not, look out a window or even look at pictures of nature.",
        action: "Take a few deep breaths and notice the natural world around you."
    },
    music: {
        title: "Music Therapy",
        content: "Music can shift our mood and help us process emotions. Choose music that matches how you feel, or try something that represents how you'd like to feel.",
        action: "Listen mindfully, or even sing along if you feel like it."
    }
};

function hideAllSections() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
}

function showMenu() {
    hideAllSections();
    document.getElementById('menu').classList.remove('hidden');
}

function showMoodCheck() {
    hideAllSections();
    document.getElementById('mood-check').classList.remove('hidden');
    document.getElementById('mood-result').innerHTML = '';
}

function updateIntensity(value) {
    currentMoodIntensity = value;
    document.getElementById('intensity-value').textContent = value;
}

function selectMood(mood) {
    logMood(mood, currentMoodIntensity);
    const resultDiv = document.getElementById('mood-result');
    
    if (mood === 'happy' || mood === 'excited') {
        resultDiv.innerHTML = `<h3>🎉 That's wonderful! Your positive energy is valuable.</h3>
                              <p>Consider sharing this good feeling with others or using this energy for something meaningful to you.</p>`;
    } else {
        const strategies = copingStrategies[mood];
        let html = `<h3>💙 I hear you. Feeling ${mood} (intensity: ${currentMoodIntensity}/10) is completely valid.</h3>`;
        html += '<p>Here are some strategies that might help:</p>';
        html += '<ul class="strategies-list">';
        strategies.forEach(strategy => {
            html += `<li>${strategy}</li>`;
        });
        html += '</ul>';
        if (currentMoodIntensity >= 8) {
            html += '<p><strong>Since you\'re feeling this intensely, consider reaching out to someone you trust or using our emergency resources if needed.</strong></p>';
        }
        resultDiv.innerHTML = html;
    }
}

function logMood(mood, intensity = 5) {
    const entry = {
        date: new Date().toLocaleString(),
        mood: mood,
        intensity: intensity
    };
    moodLog.push(entry);
    localStorage.setItem('moodLog', JSON.stringify(moodLog));
}

function showCopingStrategies() {
    hideAllSections();
    document.getElementById('coping-strategies').classList.remove('hidden');
    document.getElementById('strategies-result').innerHTML = '';
}

function showStrategies(category) {
    const strategies = copingStrategies[category];
    const resultDiv = document.getElementById('strategies-result');
    
    let html = `<h3>💡 Strategies for ${category}:</h3>`;
    html += '<ul class="strategies-list">';
    strategies.forEach(strategy => {
        html += `<li>${strategy}</li>`;
    });
    html += '</ul>';
    resultDiv.innerHTML = html;
}

function showAffirmation() {
    hideAllSections();
    document.getElementById('affirmation').classList.remove('hidden');
    getNewAffirmation();
    displaySavedAffirmations();
}

function showSelfCare() {
    hideAllSections();
    document.getElementById('self-care').classList.remove('hidden');
}

function showGoalSetting() {
    hideAllSections();
    document.getElementById('goal-setting').classList.remove('hidden');
    displayGoals();
}

function showWellnessGames() {
    hideAllSections();
    document.getElementById('wellness-games').classList.remove('hidden');
}

function startActivity(activityType) {
    const activity = selfCareActivities[activityType];
    const contentDiv = document.getElementById('activity-content');
    
    contentDiv.innerHTML = `
        <div class="activity-card">
            <h3>${activity.title}</h3>
            <p>${activity.content}</p>
            <p><strong>${activity.action}</strong></p>
            <button onclick="completeActivity('${activityType}')">Mark as Complete</button>
        </div>
    `;
}

function completeActivity(activityType) {
    alert(`Great job completing ${selfCareActivities[activityType].title}! Remember, small acts of self-care make a big difference.`);
    document.getElementById('activity-content').innerHTML = '<p>Choose another activity above, or return to the main menu.</p>';
}

function addGoal() {
    const goalInput = document.getElementById('goal-input');
    const timeframe = document.getElementById('goal-timeframe').value;
    const goalText = goalInput.value.trim();
    
    if (goalText) {
        const goal = {
            id: Date.now(),
            text: goalText,
            timeframe: timeframe,
            completed: false,
            dateAdded: new Date().toLocaleDateString()
        };
        
        wellnessGoals.push(goal);
        localStorage.setItem('wellnessGoals', JSON.stringify(wellnessGoals));
        goalInput.value = '';
        displayGoals();
    }
}

function displayGoals() {
    const goalsDiv = document.getElementById('goals-list');
    
    if (wellnessGoals.length === 0) {
        goalsDiv.innerHTML = '<p>No goals set yet. Add your first wellness goal above!</p>';
        return;
    }
    
    let html = '<h3>Your Wellness Goals:</h3>';
    wellnessGoals.forEach(goal => {
        const completedClass = goal.completed ? 'completed' : '';
        html += `
            <div class="goal-item ${completedClass}">
                <div class="goal-content">
                    <span class="goal-text">${goal.text}</span>
                    <span class="goal-timeframe">${goal.timeframe}</span>
                    <span class="goal-date">Added: ${goal.dateAdded}</span>
                </div>
                <div class="goal-actions">
                    ${!goal.completed ? `<button onclick="completeGoal(${goal.id})">Complete</button>` : '<span class="completed-badge">✓ Done</span>'}
                    <button onclick="removeGoal(${goal.id})">Remove</button>
                </div>
            </div>
        `;
    });
    
    goalsDiv.innerHTML = html;
}

function completeGoal(goalId) {
    const goal = wellnessGoals.find(g => g.id === goalId);
    if (goal) {
        goal.completed = true;
        goal.dateCompleted = new Date().toLocaleDateString();
        localStorage.setItem('wellnessGoals', JSON.stringify(wellnessGoals));
        displayGoals();
        alert('Congratulations on completing your goal! 🎉');
    }
}

function removeGoal(goalId) {
    wellnessGoals = wellnessGoals.filter(g => g.id !== goalId);
    localStorage.setItem('wellnessGoals', JSON.stringify(wellnessGoals));
    displayGoals();
}

function getNewAffirmation() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById('affirmation-text').textContent = randomAffirmation;
}

function showMoodTracker() {
    hideAllSections();
    document.getElementById('mood-tracker').classList.remove('hidden');
    displayMoodLog();
}

function displayMoodLog() {
    const logDiv = document.getElementById('mood-log');
    
    if (moodLog.length === 0) {
        logDiv.innerHTML = '<p>No mood entries yet. Start by checking your mood!</p>';
        return;
    }
    
    let html = '<h3>Your Recent Mood Entries:</h3>';
    const recentEntries = moodLog.slice(-10).reverse();
    
    recentEntries.forEach(entry => {
        const intensityBar = entry.intensity ? `<span class="intensity-bar">Intensity: ${entry.intensity}/10</span>` : '';
        html += `<div class="mood-entry">
                    <div>• ${entry.date}: <strong>${entry.mood}</strong></div>
                    ${intensityBar}
                 </div>`;
    });
    
    logDiv.innerHTML = html;
}

function saveAffirmation() {
    const currentAffirmation = document.getElementById('affirmation-text').textContent;
    if (currentAffirmation && !savedAffirmations.includes(currentAffirmation)) {
        savedAffirmations.push(currentAffirmation);
        localStorage.setItem('savedAffirmations', JSON.stringify(savedAffirmations));
        displaySavedAffirmations();
        alert('Affirmation saved!');
    }
}

function shareAffirmation() {
    const currentAffirmation = document.getElementById('affirmation-text').textContent;
    if (navigator.share) {
        navigator.share({
            title: 'Daily Affirmation',
            text: currentAffirmation
        });
    } else {
        navigator.clipboard.writeText(currentAffirmation);
        alert('Affirmation copied to clipboard!');
    }
}

function displaySavedAffirmations() {
    const savedDiv = document.getElementById('saved-list');
    if (savedAffirmations.length === 0) {
        savedDiv.innerHTML = '<p>No saved affirmations yet.</p>';
        return;
    }
    
    let html = '';
    savedAffirmations.forEach((affirmation, index) => {
        html += `<div class="saved-affirmation">
                    <span>${affirmation}</span>
                    <button onclick="removeSavedAffirmation(${index})">Remove</button>
                 </div>`;
    });
    savedDiv.innerHTML = html;
}

function removeSavedAffirmation(index) {
    savedAffirmations.splice(index, 1);
    localStorage.setItem('savedAffirmations', JSON.stringify(savedAffirmations));
    displaySavedAffirmations();
}

function showEmergencyResources() {
    hideAllSections();
    document.getElementById('emergency-resources').classList.remove('hidden');
}

function showBreathingExercise() {
    hideAllSections();
    document.getElementById('breathing-exercise').classList.remove('hidden');
    resetBreathing();
}

let breathingActive = false;
let breathingRound = 0;

function setBreathingType(type) {
    currentBreathingType = type;
    const instructions = document.getElementById('breathing-instructions');
    const btn = document.getElementById('breathing-btn');
    
    switch(type) {
        case 'basic':
            instructions.textContent = 'Basic deep breathing: Breathe in slowly, then out slowly';
            break;
        case 'box':
            instructions.textContent = 'Box breathing: Breathe in for 4, hold for 4, out for 4, hold for 4';
            break;
        case 'calm':
            instructions.textContent = 'Calming breath: Breathe in for 4, hold for 7, out for 8';
            break;
    }
    
    btn.disabled = false;
    btn.textContent = 'Start Exercise';
}

function startBreathing() {
    if (breathingActive || !currentBreathingType) return;
    
    breathingActive = true;
    breathingRound = 0;
    document.getElementById('breathing-btn').textContent = 'Exercise in Progress...';
    document.getElementById('breathing-btn').disabled = true;
    
    runBreathingCycle();
}

function runBreathingCycle() {
    if (breathingRound >= 5) {
        finishBreathing();
        return;
    }
    
    breathingRound++;
    const circle = document.getElementById('breathing-circle');
    const instructions = document.getElementById('breathing-instructions');
    
    let inhaleTime, holdTime, exhaleTime, holdTime2 = 0;
    
    switch(currentBreathingType) {
        case 'basic':
            inhaleTime = 4000; holdTime = 1000; exhaleTime = 4000;
            break;
        case 'box':
            inhaleTime = 4000; holdTime = 4000; exhaleTime = 4000; holdTime2 = 4000;
            break;
        case 'calm':
            inhaleTime = 4000; holdTime = 7000; exhaleTime = 8000;
            break;
    }
    
    instructions.textContent = `Round ${breathingRound}/5 - Breathe in...`;
    circle.classList.add('inhale');
    
    setTimeout(() => {
        if (holdTime > 1000) {
            instructions.textContent = 'Hold your breath...';
        }
        
        setTimeout(() => {
            instructions.textContent = 'Breathe out slowly...';
            circle.classList.remove('inhale');
            circle.classList.add('exhale');
            
            setTimeout(() => {
                circle.classList.remove('exhale');
                if (holdTime2 > 0) {
                    instructions.textContent = 'Hold empty...';
                    setTimeout(runBreathingCycle, holdTime2);
                } else {
                    setTimeout(runBreathingCycle, 1000);
                }
            }, exhaleTime);
        }, holdTime);
    }, inhaleTime);
}

function finishBreathing() {
    breathingActive = false;
    document.getElementById('breathing-instructions').textContent = '✨ Excellent work! Notice how you feel now compared to when you started.';
    document.getElementById('breathing-btn').textContent = 'Start New Exercise';
    document.getElementById('breathing-btn').disabled = false;
}

function resetBreathing() {
    breathingActive = false;
    breathingRound = 0;
    currentBreathingType = null;
    document.getElementById('breathing-circle').classList.remove('inhale', 'exhale');
    document.getElementById('breathing-instructions').textContent = 'Choose a technique above to begin';
    document.getElementById('breathing-btn').textContent = 'Start Exercise';
    document.getElementById('breathing-btn').disabled = true;
}

// New Feature Functions
function showThoughtRecord() {
    hideAllSections();
    document.getElementById('thought-record').classList.remove('hidden');
    displayThoughtHistory();
}

function saveThoughtRecord() {
    const record = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        situation: document.getElementById('situation').value,
        thought: document.getElementById('thought').value,
        emotion: document.getElementById('emotion').value,
        evidenceFor: document.getElementById('evidence-for').value,
        evidenceAgainst: document.getElementById('evidence-against').value,
        balancedThought: document.getElementById('balanced-thought').value
    };
    
    thoughtRecords.push(record);
    localStorage.setItem('thoughtRecords', JSON.stringify(thoughtRecords));
    
    // Clear form
    document.querySelectorAll('#thought-record textarea, #thought-record input').forEach(field => field.value = '');
    
    displayThoughtHistory();
    alert('Thought record saved! Great work on challenging your thoughts.');
}

function displayThoughtHistory() {
    const historyDiv = document.getElementById('thought-history');
    if (thoughtRecords.length === 0) {
        historyDiv.innerHTML = '<p>No thought records yet. Start by recording a challenging thought above.</p>';
        return;
    }
    
    let html = '<h3>Your Thought Records:</h3>';
    thoughtRecords.slice(-5).reverse().forEach(record => {
        html += `<div class="thought-record-item">
                    <strong>${record.date}</strong><br>
                    <strong>Situation:</strong> ${record.situation}<br>
                    <strong>Balanced Thought:</strong> ${record.balancedThought}
                 </div>`;
    });
    historyDiv.innerHTML = html;
}

function showAnxietyTracker() {
    hideAllSections();
    document.getElementById('anxiety-tracker').classList.remove('hidden');
    displayAnxietyInsights();
}

function toggleTrigger(trigger) {
    const button = event.target;
    if (selectedTriggers.includes(trigger)) {
        selectedTriggers = selectedTriggers.filter(t => t !== trigger);
        button.classList.remove('active');
    } else {
        selectedTriggers.push(trigger);
        button.classList.add('active');
    }
}

function saveAnxietyRecord() {
    const symptoms = Array.from(document.querySelectorAll('.symptom-grid input:checked')).map(cb => cb.value);
    
    const record = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        level: document.getElementById('anxiety-level').value,
        triggers: [...selectedTriggers],
        symptoms: symptoms
    };
    
    anxietyRecords.push(record);
    localStorage.setItem('anxietyRecords', JSON.stringify(anxietyRecords));
    
    selectedTriggers = [];
    document.querySelectorAll('.trigger-buttons button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.symptom-grid input').forEach(cb => cb.checked = false);
    document.getElementById('anxiety-level').value = 5;
    
    displayAnxietyInsights();
    alert('Anxiety record logged. You\'re doing great by tracking your patterns!');
}

function displayAnxietyInsights() {
    const insightsDiv = document.getElementById('anxiety-insights');
    if (anxietyRecords.length === 0) {
        insightsDiv.innerHTML = '<p>Start logging your anxiety to see patterns and insights.</p>';
        return;
    }
    
    const avgLevel = anxietyRecords.reduce((sum, r) => sum + parseInt(r.level), 0) / anxietyRecords.length;
    const commonTriggers = {};
    anxietyRecords.forEach(r => {
        r.triggers.forEach(t => commonTriggers[t] = (commonTriggers[t] || 0) + 1);
    });
    
    const topTrigger = Object.keys(commonTriggers).reduce((a, b) => commonTriggers[a] > commonTriggers[b] ? a : b, '');
    
    insightsDiv.innerHTML = `
        <div class="insights-card">
            <h3>Your Anxiety Insights:</h3>
            <p><strong>Average Level:</strong> ${avgLevel.toFixed(1)}/10</p>
            <p><strong>Most Common Trigger:</strong> ${topTrigger}</p>
            <p><strong>Total Records:</strong> ${anxietyRecords.length}</p>
        </div>
    `;
}

function showVirtualPet() {
    hideAllSections();
    document.getElementById('virtual-pet').classList.remove('hidden');
    updatePetDisplay();
}

function updatePetDisplay() {
    document.getElementById('pet-name').textContent = petData.name;
    document.getElementById('happiness-bar').style.width = petData.happiness + '%';
    document.getElementById('health-bar').style.width = petData.health + '%';
    document.getElementById('energy-bar').style.width = petData.energy + '%';
    
    // Update pet avatar based on mood
    const avatar = document.getElementById('pet-avatar');
    if (petData.happiness > 80) avatar.textContent = '😊🐶';
    else if (petData.happiness > 50) avatar.textContent = '🙂🐶';
    else avatar.textContent = '😔🐶';
}

function feedPet() {
    petData.happiness = Math.min(100, petData.happiness + 10);
    petData.health = Math.min(100, petData.health + 5);
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage('Your pet feels loved and well-fed! 🍖');
}

function playWithPet() {
    petData.happiness = Math.min(100, petData.happiness + 15);
    petData.energy = Math.max(0, petData.energy - 10);
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage('Your pet had so much fun playing! 🎾');
}

function petCare() {
    petData.health = Math.min(100, petData.health + 10);
    petData.happiness = Math.min(100, petData.happiness + 5);
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage('Your pet feels cared for and healthy! 💕');
}

function petWalk() {
    petData.energy = Math.min(100, petData.energy + 20);
    petData.happiness = Math.min(100, petData.happiness + 8);
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage('What a refreshing walk! Your pet is energized! 🚶‍♂️');
}

function showPetMessage(message) {
    const messagesDiv = document.getElementById('pet-messages');
    messagesDiv.innerHTML = `<div class="pet-message">${message}</div>`;
    setTimeout(() => messagesDiv.innerHTML = '', 3000);
}

function showMeditationGarden() {
    hideAllSections();
    document.getElementById('meditation-garden').classList.remove('hidden');
}

function startMeditation(type) {
    const durations = { mindfulness: 5, 'body-scan': 10, 'loving-kindness': 7, 'anxiety-relief': 8 };
    meditationDuration = durations[type] * 60; // Convert to seconds
    
    document.getElementById('meditation-player').classList.remove('hidden');
    document.getElementById('meditation-instructions').textContent = `Starting ${type} meditation...`;
    
    meditationTimer = setInterval(() => {
        meditationDuration--;
        const minutes = Math.floor(meditationDuration / 60);
        const seconds = meditationDuration % 60;
        document.getElementById('meditation-timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (meditationDuration <= 0) {
            stopMeditation();
            alert('Meditation complete! Well done on taking time for yourself. 🧘‍♀️');
        }
    }, 1000);
}

function pauseMeditation() {
    if (meditationTimer) {
        clearInterval(meditationTimer);
        meditationTimer = null;
        document.getElementById('meditation-pause').textContent = 'Resume';
    } else {
        startMeditation('resume');
        document.getElementById('meditation-pause').textContent = 'Pause';
    }
}

function stopMeditation() {
    if (meditationTimer) {
        clearInterval(meditationTimer);
        meditationTimer = null;
    }
    document.getElementById('meditation-player').classList.add('hidden');
    document.getElementById('meditation-pause').textContent = 'Pause';
}

function showAICompanion() {
    hideAllSections();
    document.getElementById('ai-companion').classList.remove('hidden');
    loadChatHistory();
}

function loadChatHistory() {
    const messagesDiv = document.getElementById('chat-messages');
    messagesDiv.innerHTML = '<div class="ai-message">Hello! I\'m here to support you 24/7. How are you feeling today?</div>';
    
    chatHistory.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = msg.type + '-message';
        messageDiv.textContent = msg.content;
        messagesDiv.appendChild(messageDiv);
    });
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;
    
    addChatMessage('user', message);
    input.value = '';
    
    // Simple AI responses
    setTimeout(() => {
        const response = generateAIResponse(message);
        addChatMessage('ai', response);
    }, 1000);
}

function addChatMessage(type, content) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = type + '-message';
    messageDiv.textContent = content;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    chatHistory.push({ type, content, timestamp: Date.now() });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

let companionMood = 'supportive';
let userContext = { lastEmotion: '', intensity: 'normal', sessionCount: 0 };

function generateAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    userContext.sessionCount++;
    
    const emotions = detectEmotions(lowerMessage);
    const intensity = detectIntensity(lowerMessage);
    
    if (emotions.length > 0) {
        userContext.lastEmotion = emotions[0];
        userContext.intensity = intensity;
    }
    
    let response = generatePersonalizedResponse(lowerMessage, emotions, intensity);
    response += generateInteractiveSuggestions(emotions);
    
    return response;
}

function detectEmotions(message) {
    const emotionKeywords = {
        anxiety: ['anxious', 'worried', 'panic', 'nervous', 'scared', 'fear', 'overwhelmed'],
        sadness: ['sad', 'depressed', 'down', 'lonely', 'empty', 'hopeless', 'crying'],
        anger: ['angry', 'mad', 'frustrated', 'annoyed', 'furious', 'hate'],
        joy: ['happy', 'excited', 'great', 'amazing', 'wonderful', 'good', 'fantastic'],
        stress: ['stressed', 'pressure', 'busy', 'exhausted', 'tired'],
        gratitude: ['grateful', 'thankful', 'blessed', 'appreciate']
    };
    
    const detected = [];
    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
        if (keywords.some(word => message.includes(word))) {
            detected.push(emotion);
        }
    }
    return detected;
}

function detectIntensity(message) {
    const highWords = ['very', 'extremely', 'really', 'so', 'totally', 'completely', 'super'];
    return highWords.some(word => message.includes(word)) ? 'high' : 'normal';
}

function generatePersonalizedResponse(message, emotions, intensity) {
    const responses = {
        anxiety: {
            normal: ["I sense your worry, dear soul. Let's find peace together. 🕊️", "Anxiety whispers lies, but I'm here with truth and comfort."],
            high: ["This intense anxiety must feel overwhelming. Breathe with me - you're safe in Apollo's light. ✨", "I feel your racing heart. Let's slow it down together, one breath at a time."]
        },
        sadness: {
            normal: ["Your sadness is sacred - it shows your capacity to love deeply. 💙", "I'm sitting with you in this sadness. You don't have to carry it alone."],
            high: ["This deep pain in your heart... I see it, I honor it. You are so much stronger than you know. 🌟", "Even in this darkness, Apollo's light finds you. Let me be your gentle companion."]
        },
        joy: {
            normal: ["Your joy illuminates this sacred space! ☀️ Tell me what's sparking this beautiful energy.", "I love witnessing your happiness - it's like watching flowers bloom! 🌸"],
            high: ["Your radiant joy is contagious! This excitement is pure magic - share it with me! ✨", "Such beautiful, bright energy! You're glowing with divine light! 🌟"]
        },
        stress: {
            normal: ["Stress clouds the mind, but together we can find clarity. What's weighing heaviest?", "Let's untangle this stress, thread by thread. You don't have to solve everything at once."],
            high: ["This overwhelming pressure needs immediate relief. Let's prioritize what truly matters right now. 🎯", "You're carrying the world on your shoulders. Time to set some of it down, beloved."]
        }
    };
    
    if (emotions.length === 0) {
        const general = [
            "I'm here, listening with divine patience. What's stirring in your heart? 💫",
            "This sacred space holds whatever you need to share. I'm honored by your presence. 🙏",
            "Your soul called out, and I answered. How can Apollo's wisdom serve you today? ☀️"
        ];
        return general[Math.floor(Math.random() * general.length)];
    }
    
    const emotion = emotions[0];
    const emotionResponses = responses[emotion] || responses.anxiety;
    const levelResponses = emotionResponses[intensity] || emotionResponses.normal;
    
    return levelResponses[Math.floor(Math.random() * levelResponses.length)];
}

function generateInteractiveSuggestions(emotions) {
    if (emotions.includes('anxiety')) {
        return "\n\n🌬️ Shall I guide you through sacred breathing, or would you prefer a grounding ritual?";
    }
    if (emotions.includes('sadness')) {
        return "\n\n💝 Would you like me to share healing words, or shall we explore what your heart needs most?";
    }
    if (emotions.includes('stress')) {
        return "\n\n🎯 Let's break this down together - what's the one thing we can tackle first?";
    }
    if (emotions.includes('joy')) {
        return "\n\n✨ This joy is divine! Want to capture this feeling or amplify it even more?";
    }
    return "\n\n🤗 How can I best serve your soul's needs right now?";
}

function quickResponse(type) {
    const responses = {
        anxious: "I'm feeling anxious and need support",
        sad: "I'm feeling really sad today",
        stressed: "I'm overwhelmed and stressed",
        help: "I need guidance and help",
        grateful: "I'm feeling grateful today",
        excited: "I'm excited about something!",
        lonely: "I'm feeling lonely right now",
        confused: "I'm confused and need clarity"
    };
    
    document.getElementById('user-input').value = responses[type];
    sendMessage();
}

function offerGuidedExercise(type) {
    const exercises = {
        breathing: "🌬️ Let's breathe together with Apollo's rhythm: Inhale golden light for 4... hold the divine energy for 4... exhale darkness for 6. Feel the sacred breath healing you. Ready? Breathe in... 1, 2, 3, 4... Hold... 1, 2, 3, 4... Out... 1, 2, 3, 4, 5, 6. Beautiful! How does your soul feel now?",
        grounding: "🌍 Let's ground your spirit with the 5-4-3-2-1 ritual: Name 5 things you see (look around with divine awareness), 4 things you can touch (feel Apollo's presence), 3 sounds you hear (listen to life's symphony), 2 scents you notice (breathe in the sacred), 1 thing you taste (savor this moment). Take your time, beloved.",
        affirmation: "✨ Repeat these sacred truths with me: 'I am divinely protected... I am infinitely loved... I am perfectly enough.' Feel Apollo's light filling every word. You are a sacred being having a human experience.",
        wisdom: "🦉 Here's divine wisdom for your journey: Every challenge is your soul's way of growing stronger. Every tear waters the garden of your compassion. Every breath is a gift from the universe. You are exactly where you need to be."
    };
    
    addChatMessage('ai', exercises[type]);
}

function shareWisdom() {
    const wisdom = [
        "🌟 Remember: You are not your thoughts - you are the awareness observing them.",
        "☀️ Apollo whispers: 'Even the sun sets to rise again. Your darkness is temporary.'",
        "🌱 Growth happens in the uncomfortable spaces between who you were and who you're becoming.",
        "💎 Pressure creates diamonds, beloved. Your struggles are forging something beautiful.",
        "🕊️ Peace isn't the absence of storms - it's finding calm within them.",
        "🌊 Like waves, emotions rise and fall. You are the eternal ocean, not the temporary wave."
    ];
    
    const randomWisdom = wisdom[Math.floor(Math.random() * wisdom.length)];
    addChatMessage('ai', randomWisdom);
}

function checkIn() {
    const checkIns = [
        "💫 How is your beautiful soul feeling in this moment?",
        "🌸 What's blooming in your heart today, dear one?",
        "☀️ I sense something stirring in your spirit - want to share?",
        "🦋 Your energy feels different today. What's your heart telling you?"
    ];
    
    const randomCheckIn = checkIns[Math.floor(Math.random() * checkIns.length)];
    addChatMessage('ai', randomCheckIn);
}

function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function showSleepTracker() {
    hideAllSections();
    document.getElementById('sleep-tracker').classList.remove('hidden');
    displaySleepInsights();
}

function logSleep() {
    const record = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        bedtime: document.getElementById('bedtime').value,
        waketime: document.getElementById('waketime').value,
        quality: document.getElementById('sleep-quality').value,
        mood: document.getElementById('morning-mood').value
    };
    
    sleepRecords.push(record);
    localStorage.setItem('sleepRecords', JSON.stringify(sleepRecords));
    
    displaySleepInsights();
    alert('Sleep logged! Keep tracking for better insights.');
}

function displaySleepInsights() {
    const insightsDiv = document.getElementById('sleep-insights');
    if (sleepRecords.length === 0) {
        insightsDiv.innerHTML = '<p>Start logging your sleep to see patterns.</p>';
        return;
    }
    
    const avgQuality = sleepRecords.reduce((sum, r) => sum + parseInt(r.quality), 0) / sleepRecords.length;
    
    insightsDiv.innerHTML = `
        <div class="insights-card">
            <h3>Sleep Insights:</h3>
            <p><strong>Average Quality:</strong> ${avgQuality.toFixed(1)}/10</p>
            <p><strong>Records:</strong> ${sleepRecords.length} nights</p>
        </div>
    `;
}

function showSafetyPlanning() {
    hideAllSections();
    document.getElementById('safety-planning').classList.remove('hidden');
    loadSafetyPlan();
}

function loadSafetyPlan() {
    if (Object.keys(safetyPlan).length > 0) {
        document.getElementById('warning-signs').value = safetyPlan.warningSigns || '';
        document.getElementById('coping-strategies-plan').value = safetyPlan.copingStrategies || '';
        document.getElementById('support-contact-1').value = safetyPlan.supportContact1 || '';
        document.getElementById('support-contact-2').value = safetyPlan.supportContact2 || '';
        document.getElementById('support-contact-3').value = safetyPlan.supportContact3 || '';
        document.getElementById('therapist-contact').value = safetyPlan.therapistContact || '';
        document.getElementById('doctor-contact').value = safetyPlan.doctorContact || '';
        document.getElementById('safe-environment').value = safetyPlan.safeEnvironment || '';
    }
}

function saveSafetyPlan() {
    safetyPlan = {
        warningSigns: document.getElementById('warning-signs').value,
        copingStrategies: document.getElementById('coping-strategies-plan').value,
        supportContact1: document.getElementById('support-contact-1').value,
        supportContact2: document.getElementById('support-contact-2').value,
        supportContact3: document.getElementById('support-contact-3').value,
        therapistContact: document.getElementById('therapist-contact').value,
        doctorContact: document.getElementById('doctor-contact').value,
        safeEnvironment: document.getElementById('safe-environment').value,
        lastUpdated: new Date().toLocaleString()
    };
    
    localStorage.setItem('safetyPlan', JSON.stringify(safetyPlan));
    alert('Safety plan saved! This is an important step in taking care of yourself.');
}

function showWellnessGames() {
    hideAllSections();
    document.getElementById('wellness-games').classList.remove('hidden');
}

// Game state variables
let memoryCards = [];
let flippedCards = [];
let memoryScore = 0;
let breathingGameScore = 0;
let breathingGameActive = false;
let moodMonsterHealth = 100;
let puzzlePieces = [];

// Game descriptions for help feature
const gameDescriptions = {
    memory: {
        title: '🧠 Memory Palace',
        description: 'Train your memory by finding matching pairs of symbols. Click cards to flip them and find matches.',
        benefits: 'Enhances memory, improves focus, reduces anxiety through mindful concentration'
    },
    puzzle: {
        title: '🧩 Zen Number Puzzle',
        description: 'Arrange numbers 1-8 in order by sliding tiles. Click tiles next to the empty space to move them.',
        benefits: 'Develops problem-solving skills, promotes patience, creates a meditative state'
    },
    'breathing-game': {
        title: '🌬️ Breath Master',
        description: 'Follow breathing patterns and click at the right moment when the circle expands.',
        benefits: 'Improves breath control, increases mindfulness, reduces stress and anxiety'
    },
    'mood-monster': {
        title: '👾 Mood Monster Battle',
        description: 'Defeat negative thoughts using positive actions like gratitude, self-care, and exercise.',
        benefits: 'Teaches coping strategies, reinforces positive behaviors, gamifies mental health practices'
    },
    'word-calm': {
        title: '📝 Word Calm',
        description: 'Find peaceful words (PEACE, CALM, JOY, HOPE, LOVE) hidden in a letter grid.',
        benefits: 'Promotes positive thinking, improves focus, reinforces calming concepts'
    },
    'color-therapy': {
        title: '🎨 Color Therapy',
        description: 'Watch and repeat color sequences to improve memory and enjoy therapeutic effects of colors.',
        benefits: 'Enhances memory, provides color therapy benefits, improves concentration'
    },
    'gratitude-garden': {
        title: '🌱 Gratitude Garden',
        description: 'Share what you\'re grateful for to grow a beautiful flower garden.',
        benefits: 'Cultivates gratitude, improves mood, creates positive associations'
    },
    'zen-stones': {
        title: '🪨 Zen Stones',
        description: 'Balance stones by clicking at the right moment. Requires focus and patience.',
        benefits: 'Develops patience, improves focus, promotes mindfulness and inner peace'
    }
};

function playGame(gameType) {
    const gameArea = document.getElementById('game-area');
    
    switch(gameType) {
        case 'memory':
            startMemoryGame(gameArea);
            break;
        case 'puzzle':
            startZenPuzzle(gameArea);
            break;
        case 'breathing-game':
            startBreathingGameMain(gameArea);
            break;
        case 'mood-monster':
            startMoodMonster(gameArea);
            break;
        case 'word-calm':
            startWordCalm(gameArea);
            break;
        case 'color-therapy':
            startColorTherapy(gameArea);
            break;
        case 'gratitude-garden':
            startGratitudeGarden(gameArea);
            break;
        case 'zen-stones':
            startZenStones(gameArea);
            break;
    }
}

function showGameHelp(gameType) {
    const game = gameDescriptions[gameType];
    if (!game) return;
    
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <div class="game-help">
            <h3>${game.title}</h3>
            <div class="help-content">
                <h4>How to Play:</h4>
                <p>${game.description}</p>
                <h4>Mental Health Benefits:</h4>
                <p>${game.benefits}</p>
                <div class="help-actions">
                    <button onclick="playGame('${gameType}')">Play Game</button>
                    <button onclick="showWellnessGames()">Back to Games</button>
                </div>
            </div>
        </div>
    `;
}

function startMemoryGame(gameArea) {
    const symbols = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🍀', '🌿'];
    memoryCards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    flippedCards = [];
    memoryScore = 0;
    
    let html = `
        <div class="memory-game">
            <h3>🧠 Memory Palace</h3>
            <p>Find matching pairs of symbols. Score: <span id="memory-score">0</span></p>
            <div class="memory-grid">
    `;
    
    memoryCards.forEach((symbol, index) => {
        html += `<div class="memory-card" onclick="flipCard(${index})" data-index="${index}">
                    <div class="card-front">?</div>
                    <div class="card-back hidden">${symbol}</div>
                 </div>`;
    });
    
    html += `</div><button onclick="resetMemoryGame()">New Game</button></div>`;
    gameArea.innerHTML = html;
}

function flipCard(index) {
    if (flippedCards.length >= 2 || flippedCards.includes(index)) return;
    
    const card = document.querySelector(`[data-index="${index}"]`);
    if (card.classList.contains('matched')) return;
    
    card.querySelector('.card-front').classList.add('hidden');
    card.querySelector('.card-back').classList.remove('hidden');
    card.classList.add('flipped');
    flippedCards.push(index);
    
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
}

function checkMatch() {
    const [first, second] = flippedCards;
    const firstCard = document.querySelector(`[data-index="${first}"]`);
    const secondCard = document.querySelector(`[data-index="${second}"]`);
    
    if (memoryCards[first] === memoryCards[second]) {
        memoryScore += 10;
        document.getElementById('memory-score').textContent = memoryScore;
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        if (document.querySelectorAll('.matched').length === memoryCards.length) {
            setTimeout(() => alert('🎉 Congratulations! You completed the Memory Palace!'), 500);
        }
    } else {
        firstCard.querySelector('.card-front').classList.remove('hidden');
        firstCard.querySelector('.card-back').classList.add('hidden');
        firstCard.classList.remove('flipped');
        
        secondCard.querySelector('.card-front').classList.remove('hidden');
        secondCard.querySelector('.card-back').classList.add('hidden');
        secondCard.classList.remove('flipped');
    }
    flippedCards = [];
}

function resetMemoryGame() {
    const gameArea = document.getElementById('game-area');
    startMemoryGame(gameArea);
}

function startZenPuzzle(gameArea) {
    const puzzleSize = 9;
    puzzlePieces = Array.from({length: puzzleSize}, (_, i) => i + 1);
    puzzlePieces[puzzleSize - 1] = null; // Empty space
    shufflePuzzle();
    
    let html = `
        <div class="zen-puzzle">
            <h3>🧩 Zen Number Puzzle</h3>
            <p>Arrange numbers 1-8 in order. Click tiles to move them.</p>
            <div class="puzzle-grid">
    `;
    
    puzzlePieces.forEach((piece, index) => {
        html += `<div class="puzzle-piece ${piece === null ? 'empty' : ''}" onclick="movePiece(${index})">
                    ${piece || ''}
                 </div>`;
    });
    
    html += `</div><button onclick="shufflePuzzleGame()">Shuffle</button></div>`;
    gameArea.innerHTML = html;
}

function shufflePuzzle() {
    for (let i = 0; i < 100; i++) {
        const emptyIndex = puzzlePieces.indexOf(null);
        const neighbors = getNeighbors(emptyIndex);
        const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
        [puzzlePieces[emptyIndex], puzzlePieces[randomNeighbor]] = [puzzlePieces[randomNeighbor], puzzlePieces[emptyIndex]];
    }
}

function getNeighbors(index) {
    const neighbors = [];
    const row = Math.floor(index / 3);
    const col = index % 3;
    
    if (row > 0) neighbors.push(index - 3);
    if (row < 2) neighbors.push(index + 3);
    if (col > 0) neighbors.push(index - 1);
    if (col < 2) neighbors.push(index + 1);
    
    return neighbors;
}

function movePiece(index) {
    const emptyIndex = puzzlePieces.indexOf(null);
    const neighbors = getNeighbors(emptyIndex);
    
    if (neighbors.includes(index)) {
        [puzzlePieces[emptyIndex], puzzlePieces[index]] = [puzzlePieces[index], puzzlePieces[emptyIndex]];
        updatePuzzleDisplay();
        
        if (isPuzzleSolved()) {
            setTimeout(() => alert('🎉 Zen achieved! Puzzle completed!'), 300);
        }
    }
}

function updatePuzzleDisplay() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces.forEach((piece, index) => {
        piece.textContent = puzzlePieces[index] || '';
        piece.className = `puzzle-piece ${puzzlePieces[index] === null ? 'empty' : ''}`;
    });
}

function isPuzzleSolved() {
    for (let i = 0; i < 8; i++) {
        if (puzzlePieces[i] !== i + 1) return false;
    }
    return puzzlePieces[8] === null;
}

function shufflePuzzleGame() {
    shufflePuzzle();
    updatePuzzleDisplay();
}

function startBreathingGameMain(gameArea) {
    breathingGameScore = 0;
    breathingGameActive = false;
    
    let html = `
        <div class="breathing-game">
            <h3>🌬️ Breath Master</h3>
            <p>Follow the breathing pattern and click at the right time!</p>
            <p>Score: <span id="breathing-score">0</span></p>
            <div class="breathing-circle-game" id="breathing-circle-game"></div>
            <div class="breathing-instructions-game" id="breathing-instructions-game">Click Start to begin</div>
            <button id="breathing-game-btn" onclick="startBreathingGameRound()">Start Game</button>
            <button onclick="clickBreath()" id="breath-click-btn" disabled>Click Now!</button>
        </div>
    `;
    
    gameArea.innerHTML = html;
}

function startBreathingGameRound() {
    if (breathingGameActive) return;
    
    breathingGameActive = true;
    document.getElementById('breathing-game-btn').disabled = true;
    document.getElementById('breath-click-btn').disabled = false;
    
    const circle = document.getElementById('breathing-circle-game');
    const instructions = document.getElementById('breathing-instructions-game');
    
    instructions.textContent = 'Breathe in... Click when the circle is biggest!';
    circle.classList.add('inhale-game');
    
    setTimeout(() => {
        instructions.textContent = 'NOW! Click the button!';
        setTimeout(() => {
            if (breathingGameActive) {
                instructions.textContent = 'Too slow! Try again.';
                endBreathingRound();
            }
        }, 1000);
    }, 3000);
}

function clickBreath() {
    if (!breathingGameActive) return;
    
    breathingGameScore += 10;
    document.getElementById('breathing-score').textContent = breathingGameScore;
    document.getElementById('breathing-instructions-game').textContent = 'Great timing! +10 points';
    endBreathingRound();
}

function endBreathingRound() {
    breathingGameActive = false;
    document.getElementById('breathing-circle-game').classList.remove('inhale-game');
    document.getElementById('breathing-game-btn').disabled = false;
    document.getElementById('breath-click-btn').disabled = true;
}

function startMoodMonster(gameArea) {
    moodMonsterHealth = 100;
    
    let html = `
        <div class="mood-monster-game">
            <h3>👾 Mood Monster Battle</h3>
            <p>Defeat negative thoughts with positive actions!</p>
            <div class="monster-display">
                <div class="monster">👾</div>
                <div class="monster-health">
                    <div class="health-bar">
                        <div class="health-fill" id="monster-health" style="width: 100%"></div>
                    </div>
                    <span>Negative Thoughts: <span id="monster-health-text">100</span>%</span>
                </div>
            </div>
            <div class="battle-actions">
                <button onclick="usePositiveThought()">💭 Positive Thought (-15)</button>
                <button onclick="useGratitude()">🙏 Gratitude (-20)</button>
                <button onclick="useSelfCare()">💆 Self-Care (-25)</button>
                <button onclick="useExercise()">🏃 Exercise (-30)</button>
            </div>
            <div id="battle-log"></div>
        </div>
    `;
    
    gameArea.innerHTML = html;
}

function usePositiveThought() {
    attackMonster(15, 'You used a positive thought!');
}

function useGratitude() {
    attackMonster(20, 'Gratitude weakens negative thoughts!');
}

function useSelfCare() {
    attackMonster(25, 'Self-care is super effective!');
}

function useExercise() {
    attackMonster(30, 'Exercise delivers a powerful blow!');
}

function attackMonster(damage, message) {
    moodMonsterHealth = Math.max(0, moodMonsterHealth - damage);
    
    document.getElementById('monster-health').style.width = moodMonsterHealth + '%';
    document.getElementById('monster-health-text').textContent = moodMonsterHealth;
    
    const log = document.getElementById('battle-log');
    log.innerHTML = `<div class="battle-message">${message} (-${damage} negative thoughts)</div>`;
    
    if (moodMonsterHealth <= 0) {
        setTimeout(() => {
            log.innerHTML += '<div class="victory-message">🎉 Victory! You\'ve defeated the negative thoughts!</div>';
            alert('Congratulations! You\'ve learned that positive actions can overcome negative thoughts!');
        }, 1000);
    }
}

let wordGrid = [];
let foundWords = [];
let colorSequence = [];
let playerSequence = [];
let gardenFlowers = 0;
let stoneBalance = 0;

function startWordCalm(gameArea) {
    const words = ['PEACE', 'CALM', 'JOY', 'HOPE', 'LOVE'];
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    wordGrid = Array(64).fill().map(() => letters[Math.floor(Math.random() * 26)]);
    
    words.forEach(word => {
        const start = Math.floor(Math.random() * 50);
        for (let i = 0; i < word.length; i++) {
            wordGrid[start + i] = word[i];
        }
    });
    
    foundWords = [];
    
    let html = `
        <div class="word-calm-game">
            <h3>📝 Word Calm</h3>
            <p>Find: PEACE, CALM, JOY, HOPE, LOVE</p>
            <p>Found: <span id="found-count">0</span>/5</p>
            <div class="word-grid">
    `;
    
    wordGrid.forEach((letter, i) => {
        html += `<div class="word-cell" onclick="selectWord(${i})">${letter}</div>`;
    });
    
    html += `</div></div>`;
    gameArea.innerHTML = html;
}

function selectWord(index) {
    const cell = document.querySelectorAll('.word-cell')[index];
    cell.classList.toggle('selected');
    
    const selected = document.querySelectorAll('.word-cell.selected');
    const word = Array.from(selected).map(c => c.textContent).join('');
    
    if (['PEACE', 'CALM', 'JOY', 'HOPE', 'LOVE'].includes(word) && !foundWords.includes(word)) {
        foundWords.push(word);
        selected.forEach(c => c.classList.add('found'));
        document.getElementById('found-count').textContent = foundWords.length;
        
        if (foundWords.length === 5) {
            setTimeout(() => alert('🎉 All peaceful words found! You are calm.'), 500);
        }
    }
}

function startColorTherapy(gameArea) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    colorSequence = [];
    playerSequence = [];
    
    let html = `
        <div class="color-therapy-game">
            <h3>🎨 Color Therapy</h3>
            <p>Watch the sequence, then repeat it</p>
            <div class="color-buttons">
    `;
    
    colors.forEach((color, i) => {
        html += `<div class="color-btn" style="background: ${color}" onclick="colorClick(${i})"></div>`;
    });
    
    html += `</div>
            <button onclick="startColorSequence()">Start Sequence</button>
            <div id="color-message">Click Start to begin</div>
        </div>`;
    
    gameArea.innerHTML = html;
}

function startColorSequence() {
    colorSequence.push(Math.floor(Math.random() * 5));
    playerSequence = [];
    
    document.getElementById('color-message').textContent = 'Watch carefully...';
    
    colorSequence.forEach((colorIndex, i) => {
        setTimeout(() => {
            const btn = document.querySelectorAll('.color-btn')[colorIndex];
            btn.classList.add('flash');
            setTimeout(() => btn.classList.remove('flash'), 300);
            
            if (i === colorSequence.length - 1) {
                setTimeout(() => {
                    document.getElementById('color-message').textContent = 'Now repeat the sequence!';
                }, 500);
            }
        }, i * 600);
    });
}

function colorClick(index) {
    playerSequence.push(index);
    
    if (playerSequence[playerSequence.length - 1] !== colorSequence[playerSequence.length - 1]) {
        document.getElementById('color-message').textContent = 'Try again!';
        setTimeout(startColorSequence, 1000);
        return;
    }
    
    if (playerSequence.length === colorSequence.length) {
        document.getElementById('color-message').textContent = `Perfect! Level ${colorSequence.length}`;
        setTimeout(startColorSequence, 1500);
    }
}

function startGratitudeGarden(gameArea) {
    gardenFlowers = 0;
    
    let html = `
        <div class="gratitude-garden-game">
            <h3>🌱 Gratitude Garden</h3>
            <p>Share what you're grateful for to grow flowers</p>
            <div class="garden-plot" id="garden-plot"></div>
            <input type="text" id="gratitude-input" placeholder="I'm grateful for...">
            <button onclick="plantGratitude()">Plant Flower</button>
            <p>Flowers grown: <span id="flower-count">0</span></p>
        </div>`;
    
    gameArea.innerHTML = html;
    updateGarden();
}

function plantGratitude() {
    const input = document.getElementById('gratitude-input');
    if (input.value.trim()) {
        gardenFlowers++;
        input.value = '';
        updateGarden();
        document.getElementById('flower-count').textContent = gardenFlowers;
        
        if (gardenFlowers === 10) {
            alert('🌸 Beautiful garden! Gratitude blooms everywhere!');
        }
    }
}

function updateGarden() {
    const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹'];
    let garden = '';
    for (let i = 0; i < gardenFlowers; i++) {
        garden += flowers[i % flowers.length];
    }
    document.getElementById('garden-plot').textContent = garden;
}

function startZenStones(gameArea) {
    stoneBalance = 0;
    
    let html = `
        <div class="zen-stones-game">
            <h3>🪨 Zen Stones</h3>
            <p>Click stones at the right moment to balance them</p>
            <div class="stone-tower" id="stone-tower"></div>
            <button onclick="dropStone()" id="drop-btn">Drop Stone</button>
            <p>Balanced: <span id="stone-count">0</span>/7</p>
        </div>`;
    
    gameArea.innerHTML = html;
    updateStones();
}

function dropStone() {
    if (Math.random() > 0.3) {
        stoneBalance++;
        updateStones();
        document.getElementById('stone-count').textContent = stoneBalance;
        
        if (stoneBalance === 7) {
            alert('🧘 Perfect balance achieved! Inner peace unlocked.');
        }
    } else {
        alert('Stone fell! Try again with more focus.');
        stoneBalance = Math.max(0, stoneBalance - 1);
        updateStones();
        document.getElementById('stone-count').textContent = stoneBalance;
    }
}

function updateStones() {
    let stones = '';
    for (let i = 0; i < stoneBalance; i++) {
        stones += '🪨';
    }
    document.getElementById('stone-tower').textContent = stones;
}

function showProgressDashboard() {
    hideAllSections();
    document.getElementById('progress-dashboard').classList.remove('hidden');
    updateProgressStats();
}

function updateProgressStats() {
    // Calculate weekly stats
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const weeklyMoods = moodLog.filter(entry => new Date(entry.date) > weekAgo);
    
    document.getElementById('weekly-checkins').textContent = weeklyMoods.length;
    
    if (weeklyMoods.length > 0) {
        const avgMood = weeklyMoods.reduce((sum, entry) => sum + (entry.intensity || 5), 0) / weeklyMoods.length;
        document.getElementById('weekly-mood').textContent = avgMood.toFixed(1);
    }
    
    document.getElementById('current-streak').textContent = wellnessStreak;
    
    // Update achievements
    updateAchievements();
}

function updateAchievements() {
    const achievementsList = document.getElementById('achievements-list');
    
    const possibleAchievements = [
        { id: 'first-checkin', name: 'First Steps', condition: () => moodLog.length >= 1 },
        { id: 'week-streak', name: 'Week Warrior', condition: () => wellnessStreak >= 7 },
        { id: 'thought-challenger', name: 'Thought Challenger', condition: () => thoughtRecords.length >= 5 },
        { id: 'pet-lover', name: 'Pet Lover', condition: () => petData.happiness > 90 }
    ];
    
    let html = '';
    possibleAchievements.forEach(achievement => {
        const earned = achievements.includes(achievement.id) || achievement.condition();
        if (earned && !achievements.includes(achievement.id)) {
            achievements.push(achievement.id);
            localStorage.setItem('achievements', JSON.stringify(achievements));
        }
        
        html += `<div class="achievement ${earned ? 'earned' : 'locked'}">
                    ${earned ? '🏆' : '🔒'} ${achievement.name}
                 </div>`;
    });
    
    achievementsList.innerHTML = html;
}



// Placeholder functions for remaining features
function showCBTWorkshop() { alert('CBT Workshop - Coming Soon!'); }
function showCommunityHub() { alert('Community Hub - Coming Soon!'); }
function showProfessionalHelp() { alert('Professional Help Finder - Coming Soon!'); }
function showArtTherapy() { alert('Art Therapy - Coming Soon!'); }
function showMusicTherapy() { alert('Music Therapy - Coming Soon!'); }
function showEducationHub() { alert('Education Hub - Coming Soon!'); }
function showWellnessStreaks() { showProgressDashboard(); }

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    showMenu();
    
    // Update pet stats periodically
    setInterval(() => {
        petData.happiness = Math.max(0, petData.happiness - 1);
        petData.energy = Math.max(0, petData.energy - 1);
        localStorage.setItem('petData', JSON.stringify(petData));
    }, 300000); // Every 5 minutes
});