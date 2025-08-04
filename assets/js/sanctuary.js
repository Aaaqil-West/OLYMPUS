// Mental Health Helper JavaScript

// Data Storage
let moodLog = JSON.parse(localStorage.getItem('moodLog')) || [];
let savedAffirmations = JSON.parse(localStorage.getItem('savedAffirmations')) || [];
let wellnessGoals = JSON.parse(localStorage.getItem('wellnessGoals')) || [];
let thoughtRecords = JSON.parse(localStorage.getItem('thoughtRecords')) || [];
let anxietyRecords = JSON.parse(localStorage.getItem('anxietyRecords')) || [];
let sleepRecords = JSON.parse(localStorage.getItem('sleepRecords')) || [];
let safetyPlan = JSON.parse(localStorage.getItem('safetyPlan')) || {};
let petData = JSON.parse(localStorage.getItem('petData')) || { 
    happiness: 80, health: 90, energy: 70, name: 'Apollo Jr.', 
    intelligence: 50, zen: 0, experience: 0, coins: 20, lastLevel: 0 
};
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

function loadPage(page) {
    window.location.href = page + '.html';
}

function initializePageContent(page) {
    switch(page) {
        case 'affirmation':
            getNewAffirmation();
            displaySavedAffirmations();
            break;
        case 'goal-setting':
            displayGoals();
            break;
        case 'mood-tracker':
            displayMoodLog();
            break;
        case 'breathing-exercise':
            resetBreathing();
            break;
        case 'thought-record':
            displayThoughtHistory();
            break;
        case 'anxiety-tracker':
            displayAnxietyInsights();
            break;
        case 'virtual-pet':
            updatePetDisplay();
            break;
        case 'ai-companion':
            loadChatHistory();
            break;
        case 'sleep-tracker':
            displaySleepInsights();
            break;
        case 'safety-planning':
            loadSafetyPlan();
            break;
        case 'progress-dashboard':
            updateProgressStats();
            break;
        case 'community-hub':
            loadCommunityContent();
            break;
        case 'art-therapy':
            setTimeout(() => initializeCanvas(), 100);
            break;
        case 'education-hub':
            loadEducationContent();
            break;
        case 'habit-tracker':
            displayHabits();
            break;
        case 'crisis-intervention':
            assessCrisisLevel();
            break;
        case 'personalized-dashboard':
            const recommendations = generatePersonalizedRecommendations();
            const dashboardContent = document.getElementById('dashboard-content');
            let html = `<div class="personalized-content"><h3>🎯 Recommended for You</h3><div class="recommendations">`;
            recommendations.forEach(rec => {
                html += `<div class="recommendation-card" onclick="${rec.action}"><h4>${rec.title}</h4><p>Based on your recent mood patterns</p></div>`;
            });
            html += `</div><div class="quick-stats"><h3>📊 Your Week at a Glance</h3><div class="stat-grid"><div class="stat-item"><span class="stat-number">${moodLog.length}</span><span class="stat-label">Total Check-ins</span></div><div class="stat-item"><span class="stat-number">${wellnessStreak}</span><span class="stat-label">Day Streak</span></div><div class="stat-item"><span class="stat-number">${habitData.length}</span><span class="stat-label">Active Habits</span></div></div></div></div>`;
            dashboardContent.innerHTML = html;
            break;
        case 'wellness-games':
            flippedCards = [];
            memoryScore = 0;
            breathingGameActive = false;
            moodMonsterHealth = 100;
            foundWords = [];
            colorSequence = [];
            playerSequence = [];
            gardenFlowers = 0;
            stoneBalance = 0;
            document.getElementById('game-area').innerHTML = '';
            break;
    }
}

function showMenu() {
    window.location.href = 'index.html';
}

// Page-specific initialization functions
function initializeCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    switch(currentPage) {
        case 'affirmation':
            if (document.getElementById('affirmation-text')) {
                getNewAffirmation();
                displaySavedAffirmations();
            }
            break;
        case 'goal-setting':
            if (document.getElementById('goals-list')) {
                displayGoals();
            }
            break;
        case 'mood-tracker':
            if (document.getElementById('mood-log')) {
                displayMoodLog();
            }
            break;
        case 'breathing-exercise':
            if (document.getElementById('breathing-circle')) {
                resetBreathing();
            }
            break;
        case 'thought-record':
            if (document.getElementById('thought-history')) {
                displayThoughtHistory();
            }
            break;
        case 'anxiety-tracker':
            if (document.getElementById('anxiety-insights')) {
                displayAnxietyInsights();
            }
            break;
        case 'virtual-pet':
            if (document.getElementById('pet-avatar')) {
                updatePetDisplay();
            }
            break;
        case 'ai-companion':
            if (document.getElementById('chat-messages')) {
                loadChatHistory();
            }
            break;
        case 'sleep-tracker':
            if (document.getElementById('sleep-insights')) {
                displaySleepInsights();
            }
            break;
        case 'safety-planning':
            if (document.getElementById('warning-signs')) {
                loadSafetyPlan();
            }
            break;
        case 'progress-dashboard':
            if (document.getElementById('weekly-checkins')) {
                updateProgressStats();
            }
            break;
        case 'community-hub':
            if (document.getElementById('community-content')) {
                loadCommunityContent();
            }
            break;
        case 'art-therapy':
            if (document.getElementById('art-canvas')) {
                setTimeout(() => initializeCanvas(), 100);
            }
            break;
        case 'education-hub':
            if (document.getElementById('education-content')) {
                loadEducationContent();
            }
            break;
        case 'habit-tracker':
            if (document.getElementById('habits-list')) {
                displayHabits();
            }
            break;
        case 'crisis-intervention':
            if (document.getElementById('crisis-assessment')) {
                assessCrisisLevel();
            }
            break;
        case 'personalized-dashboard':
            if (document.getElementById('dashboard-content')) {
                const recommendations = generatePersonalizedRecommendations();
                const dashboardContent = document.getElementById('dashboard-content');
                let html = `<div class="personalized-content"><h3>🎯 Recommended for You</h3><div class="recommendations">`;
                recommendations.forEach(rec => {
                    html += `<div class="recommendation-card" onclick="${rec.action}"><h4>${rec.title}</h4><p>Based on your recent mood patterns</p></div>`;
                });
                html += `</div><div class="quick-stats"><h3>📊 Your Week at a Glance</h3><div class="stat-grid"><div class="stat-item"><span class="stat-number">${moodLog.length}</span><span class="stat-label">Total Check-ins</span></div><div class="stat-item"><span class="stat-number">${wellnessStreak}</span><span class="stat-label">Day Streak</span></div><div class="stat-item"><span class="stat-number">${habitData.length}</span><span class="stat-label">Active Habits</span></div></div></div></div>`;
                dashboardContent.innerHTML = html;
            }
            break;
        case 'wellness-games':
            if (document.getElementById('game-area')) {
                flippedCards = [];
                memoryScore = 0;
                breathingGameActive = false;
                moodMonsterHealth = 100;
                foundWords = [];
                colorSequence = [];
                playerSequence = [];
                gardenFlowers = 0;
                stoneBalance = 0;
                document.getElementById('game-area').innerHTML = '';
            }
            break;
    }
}

function showMoodCheck() {
    loadPage('mood-check');
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
    loadPage('coping-strategies');
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
    loadPage('affirmation');
}

function showSelfCare() {
    loadPage('self-care');
}

function showGoalSetting() {
    loadPage('goal-setting');
}

function showWellnessGames() {
    loadPage('wellness-games');
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
    loadPage('mood-tracker');
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
    loadPage('emergency-resources');
}

function showBreathingExercise() {
    loadPage('breathing-exercise');
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
    loadPage('thought-record');
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
    loadPage('anxiety-tracker');
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
    loadPage('virtual-pet');
}

function updatePetDisplay() {
    document.getElementById('pet-name').textContent = petData.name;
    document.getElementById('happiness-bar').style.width = petData.happiness + '%';
    document.getElementById('health-bar').style.width = petData.health + '%';
    document.getElementById('energy-bar').style.width = petData.energy + '%';
    
    // Update pet avatar based on mood and evolution
    const avatar = document.getElementById('pet-avatar');
    const level = Math.floor((petData.happiness + petData.health + petData.energy) / 30);
    
    if (level >= 9) avatar.textContent = '✨🦄'; // Divine form
    else if (level >= 7) avatar.textContent = '🌟🐺'; // Wolf form
    else if (level >= 5) avatar.textContent = '😊🐶'; // Happy dog
    else if (level >= 3) avatar.textContent = '🙂🐶'; // Normal dog
    else avatar.textContent = '😔🐶'; // Sad dog
    
    // Update level display
    document.getElementById('pet-level').textContent = `Level ${level}`;
    document.getElementById('pet-coins').textContent = petData.coins || 0;
    document.getElementById('pet-xp').textContent = petData.experience || 0;
    
    // Show evolution message
    if (level !== petData.lastLevel) {
        if (level > petData.lastLevel) {
            showPetMessage(`🎉 ${petData.name} evolved to Level ${level}!`);
        }
        petData.lastLevel = level;
        localStorage.setItem('petData', JSON.stringify(petData));
    }
}

function feedPet() {
    if (petData.lastFed && new Date().toDateString() === petData.lastFed) {
        showPetMessage('Your pet is already well-fed today! 🍽️');
        return;
    }
    
    petData.happiness = Math.min(100, petData.happiness + 15);
    petData.health = Math.min(100, petData.health + 10);
    petData.lastFed = new Date().toDateString();
    petData.experience = (petData.experience || 0) + 5;
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage('Your pet feels loved and well-fed! 🍖 (+5 XP)');
}

function playWithPet() {
    if (petData.energy < 20) {
        showPetMessage('Your pet is too tired to play! Let them rest. 😴');
        return;
    }
    
    const games = ['fetch', 'tug-of-war', 'hide-and-seek', 'frisbee'];
    const game = games[Math.floor(Math.random() * games.length)];
    
    petData.happiness = Math.min(100, petData.happiness + 20);
    petData.energy = Math.max(0, petData.energy - 15);
    petData.experience = (petData.experience || 0) + 8;
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage(`Your pet loved playing ${game}! 🎾 (+8 XP)`);
}

function petCare() {
    petData.health = Math.min(100, petData.health + 15);
    petData.happiness = Math.min(100, petData.happiness + 10);
    petData.experience = (petData.experience || 0) + 6;
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage('Your pet feels cared for and healthy! 💕 (+6 XP)');
}

function petWalk() {
    petData.energy = Math.min(100, petData.energy + 25);
    petData.happiness = Math.min(100, petData.happiness + 12);
    petData.health = Math.min(100, petData.health + 8);
    petData.experience = (petData.experience || 0) + 10;
    
    // Random encounter during walk
    const encounters = [
        'found a shiny coin! 🪙',
        'met a friendly squirrel! 🐿️',
        'discovered a beautiful flower! 🌸',
        'splashed in a puddle! 💦',
        'chased some butterflies! 🦋'
    ];
    const encounter = encounters[Math.floor(Math.random() * encounters.length)];
    
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage(`Great walk! Your pet ${encounter} (+10 XP)`);
}

function trainPet() {
    if (petData.energy < 30) {
        showPetMessage('Your pet needs more energy for training! 🏃');
        return;
    }
    
    const skills = ['sit', 'stay', 'roll over', 'shake hands', 'speak'];
    const skill = skills[Math.floor(Math.random() * skills.length)];
    
    petData.intelligence = Math.min(100, (petData.intelligence || 50) + 5);
    petData.energy = Math.max(0, petData.energy - 25);
    petData.experience = (petData.experience || 0) + 15;
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage(`${petData.name} learned to ${skill}! 🎓 (+15 XP)`);
}

function petMeditate() {
    petData.happiness = Math.min(100, petData.happiness + 8);
    petData.health = Math.min(100, petData.health + 5);
    petData.zen = Math.min(100, (petData.zen || 0) + 10);
    petData.experience = (petData.experience || 0) + 7;
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage('Your pet found inner peace through meditation! 🧘‍♂️ (+7 XP)');
}

function giveTreat() {
    const treats = {
        'healing': { name: 'Healing Treat', health: 20, cost: 10 },
        'energy': { name: 'Energy Boost', energy: 30, cost: 15 },
        'happiness': { name: 'Joy Biscuit', happiness: 25, cost: 12 }
    };
    
    const treatType = Object.keys(treats)[Math.floor(Math.random() * 3)];
    const treat = treats[treatType];
    
    if ((petData.coins || 0) < treat.cost) {
        showPetMessage(`Not enough coins for ${treat.name}! Need ${treat.cost} coins. 🪙`);
        return;
    }
    
    petData.coins = (petData.coins || 0) - treat.cost;
    if (treat.health) petData.health = Math.min(100, petData.health + treat.health);
    if (treat.energy) petData.energy = Math.min(100, petData.energy + treat.energy);
    if (treat.happiness) petData.happiness = Math.min(100, petData.happiness + treat.happiness);
    
    localStorage.setItem('petData', JSON.stringify(petData));
    updatePetDisplay();
    showPetMessage(`${petData.name} enjoyed the ${treat.name}! ✨`);
}

function earnCoins() {
    const dailyCoins = localStorage.getItem('dailyCoins');
    const today = new Date().toDateString();
    
    if (dailyCoins === today) {
        showPetMessage('Already earned daily coins! Come back tomorrow! 🪙');
        return;
    }
    
    const earned = Math.floor(Math.random() * 10) + 5;
    petData.coins = (petData.coins || 0) + earned;
    localStorage.setItem('petData', JSON.stringify(petData));
    localStorage.setItem('dailyCoins', today);
    updatePetDisplay();
    showPetMessage(`Earned ${earned} coins for daily care! 🪙`);
}

function showPetMessage(message) {
    const messagesDiv = document.getElementById('pet-messages');
    messagesDiv.innerHTML = `<div class="pet-message">${message}</div>`;
    setTimeout(() => messagesDiv.innerHTML = '', 3000);
}

function showMeditationGarden() {
    loadPage('meditation-garden');
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
    loadPage('ai-companion');
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
    loadPage('sleep-tracker');
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
    loadPage('safety-planning');
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
    loadPage('wellness-games');
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
    },
    'mindful-matching': {
        title: '🔮 Mindful Matching',
        description: 'Match emotions with their corresponding healthy coping strategies.',
        benefits: 'Reinforces emotional awareness, teaches coping skills, builds mental health knowledge'
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
        case 'mindful-matching':
            startMindfulMatching(gameArea);
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
    
    instructions.textContent = 'Breathe in slowly... Click when you feel the peak!';
    circle.classList.add('inhale-game');
    
    setTimeout(() => {
        instructions.textContent = 'Perfect timing window - Click NOW!';
        setTimeout(() => {
            if (breathingGameActive) {
                instructions.textContent = 'Missed the window. Focus on your breath and try again.';
                endBreathingRound();
            }
        }, 1500);
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
    
    if (cell.classList.contains('found')) return;
    
    cell.classList.toggle('selected');
    
    const selected = document.querySelectorAll('.word-cell.selected');
    const word = Array.from(selected).map(c => c.textContent).join('');
    
    if (['PEACE', 'CALM', 'JOY', 'HOPE', 'LOVE'].includes(word) && !foundWords.includes(word)) {
        foundWords.push(word);
        selected.forEach(c => {
            c.classList.remove('selected');
            c.classList.add('found');
        });
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
        document.getElementById('color-message').textContent = 'Incorrect sequence. Starting over...';
        playerSequence = [];
        colorSequence = [];
        setTimeout(startColorSequence, 1500);
        return;
    }
    
    if (playerSequence.length === colorSequence.length) {
        document.getElementById('color-message').textContent = `Perfect! Level ${colorSequence.length} complete!`;
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
    const successRate = 0.7 - (stoneBalance * 0.05); // Gets harder as you progress
    
    if (Math.random() < successRate) {
        stoneBalance++;
        updateStones();
        document.getElementById('stone-count').textContent = stoneBalance;
        
        if (stoneBalance === 7) {
            alert('🧘 Perfect balance achieved! Inner peace unlocked.');
        }
    } else {
        if (stoneBalance > 0) {
            stoneBalance = Math.max(0, stoneBalance - 1);
            updateStones();
            document.getElementById('stone-count').textContent = stoneBalance;
        }
        alert('Stone fell! Breathe deeply and try again with more focus.');
    }
}

function updateStones() {
    let stones = '';
    for (let i = 0; i < stoneBalance; i++) {
        stones += '🪨';
    }
    document.getElementById('stone-tower').textContent = stones;
}

let matchingPairs = [];
let selectedCards = [];
let matchingScore = 0;

function startMindfulMatching(gameArea) {
    const emotions = ['😰 Anxiety', '😢 Sadness', '😡 Anger', '😵 Stress'];
    const strategies = ['🌬️ Deep Breathing', '🤝 Talk to Friend', '🏃 Exercise', '🧘 Meditation'];
    
    matchingPairs = [...emotions, ...strategies].sort(() => Math.random() - 0.5);
    selectedCards = [];
    matchingScore = 0;
    
    let html = `
        <div class="mindful-matching-game">
            <h3>🔮 Mindful Matching</h3>
            <p>Match emotions with healthy coping strategies. Score: <span id="matching-score">0</span></p>
            <div class="matching-grid">
    `;
    
    matchingPairs.forEach((item, i) => {
        html += `<div class="matching-card" onclick="selectMatchingCard(${i})" data-index="${i}">
                    <div class="card-content">${item}</div>
                 </div>`;
    });
    
    html += `</div><button onclick="resetMatchingGame()">New Game</button></div>`;
    gameArea.innerHTML = html;
}

function selectMatchingCard(index) {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    
    const card = document.querySelector(`[data-index="${index}"]`);
    card.classList.add('selected');
    selectedCards.push(index);
    
    if (selectedCards.length === 2) {
        setTimeout(checkMatchingPair, 800);
    }
}

function checkMatchingPair() {
    const [first, second] = selectedCards;
    const firstItem = matchingPairs[first];
    const secondItem = matchingPairs[second];
    
    const matches = [
        ['😰 Anxiety', '🌬️ Deep Breathing'],
        ['😢 Sadness', '🤝 Talk to Friend'],
        ['😡 Anger', '🏃 Exercise'],
        ['😵 Stress', '🧘 Meditation']
    ];
    
    const isMatch = matches.some(pair => 
        (pair[0] === firstItem && pair[1] === secondItem) ||
        (pair[1] === firstItem && pair[0] === secondItem)
    );
    
    const firstCard = document.querySelector(`[data-index="${first}"]`);
    const secondCard = document.querySelector(`[data-index="${second}"]`);
    
    if (isMatch) {
        matchingScore += 10;
        document.getElementById('matching-score').textContent = matchingScore;
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        if (document.querySelectorAll('.matched').length === matchingPairs.length) {
            setTimeout(() => alert('🎉 Perfect! You understand healthy coping strategies!'), 500);
        }
    } else {
        firstCard.classList.remove('selected');
        secondCard.classList.remove('selected');
    }
    selectedCards = [];
}

function resetMatchingGame() {
    const gameArea = document.getElementById('game-area');
    startMindfulMatching(gameArea);
}

function showProgressDashboard() {
    loadPage('progress-dashboard');
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



// CBT Workshop Implementation
function showCBTWorkshop() {
    loadPage('cbt-workshop');
}

function startCBTExercise(type) {
    const exercises = {
        'thought-challenging': {
            title: '🧠 Thought Challenging',
            steps: [
                'Identify the negative thought',
                'What evidence supports this thought?',
                'What evidence contradicts it?',
                'What would you tell a friend?',
                'Create a balanced perspective'
            ]
        },
        'behavioral-activation': {
            title: '🎯 Behavioral Activation',
            steps: [
                'List activities you used to enjoy',
                'Rate each from 1-10 for pleasure/mastery',
                'Schedule one small activity today',
                'Notice your mood before/after',
                'Gradually increase pleasant activities'
            ]
        },
        'mindfulness-cbt': {
            title: '🧘 Mindful Awareness',
            steps: [
                'Notice the thought without judgment',
                'Observe where you feel it in your body',
                'Breathe and create space around it',
                'Ask: "Is this thought helpful?"',
                'Choose your response mindfully'
            ]
        }
    };
    
    const exercise = exercises[type];
    const content = document.getElementById('cbt-content');
    
    let html = `<div class="cbt-exercise">
                   <h3>${exercise.title}</h3>
                   <div class="cbt-steps">`;
    
    exercise.steps.forEach((step, i) => {
        html += `<div class="cbt-step">
                    <span class="step-number">${i + 1}</span>
                    <span class="step-text">${step}</span>
                 </div>`;
    });
    
    html += `</div>
             <button onclick="completeCBTExercise('${type}')">Complete Exercise</button>
             </div>`;
    
    content.innerHTML = html;
}

function completeCBTExercise(type) {
    alert('🎉 Great work! CBT techniques take practice - the more you use them, the more natural they become.');
    document.getElementById('cbt-content').innerHTML = '<p>Choose another exercise above to continue your CBT practice.</p>';
}

// Community Hub Implementation
function showCommunityHub() {
    loadPage('community-hub');
}

function loadCommunityContent() {
    const content = document.getElementById('community-content');
    content.innerHTML = `
        <div class="community-features">
            <div class="feature-card">
                <h3>💬 Support Groups</h3>
                <p>Connect with others on similar journeys</p>
                <div class="group-list">
                    <div class="group-item">🌅 Morning Motivation (Daily 8 AM)</div>
                    <div class="group-item">🌙 Evening Reflection (Daily 8 PM)</div>
                    <div class="group-item">💪 Anxiety Warriors (Mon/Wed/Fri)</div>
                    <div class="group-item">🌱 Growth Mindset (Weekends)</div>
                </div>
                <button onclick="joinGroup()">Join a Group</button>
            </div>
            <div class="feature-card">
                <h3>📝 Shared Stories</h3>
                <p>Read inspiring recovery stories</p>
                <div class="story-preview">
                    <div class="story">"How I overcame social anxiety" - Sarah M.</div>
                    <div class="story">"Finding hope after depression" - Alex K.</div>
                    <div class="story">"My mindfulness journey" - Jordan L.</div>
                </div>
                <button onclick="readStories()">Read Stories</button>
            </div>
            <div class="feature-card">
                <h3>🎯 Group Challenges</h3>
                <p>Participate in wellness challenges</p>
                <div class="challenge-list">
                    <div class="challenge">🚶 30-Day Walking Challenge</div>
                    <div class="challenge">📖 Gratitude Journal Week</div>
                    <div class="challenge">🧘 Meditation Marathon</div>
                </div>
                <button onclick="joinChallenge()">Join Challenge</button>
            </div>
        </div>
    `;
}

function joinGroup() {
    alert('🤝 Welcome to the community! Remember: this is a safe space for support and growth.');
}

function readStories() {
    alert('📖 These stories remind us that healing is possible and we\'re not alone in our struggles.');
}

function joinChallenge() {
    alert('🎯 Challenge accepted! Small daily actions create lasting change.');
}

// Professional Help Finder
function showProfessionalHelp() {
    loadPage('professional-help');
}

function findTherapists() {
    const results = document.getElementById('therapist-results');
    results.innerHTML = `
        <div class="therapist-list">
            <div class="therapist-card">
                <h4>Dr. Sarah Johnson, LCSW</h4>
                <p>Specializes in: Anxiety, Depression, CBT</p>
                <p>📍 Downtown Location | 💻 Telehealth Available</p>
                <p>⭐ 4.9/5 rating | 💰 $120/session</p>
                <button onclick="contactTherapist('Dr. Johnson')">Contact</button>
            </div>
            <div class="therapist-card">
                <h4>Michael Chen, PhD</h4>
                <p>Specializes in: Trauma, PTSD, EMDR</p>
                <p>📍 Midtown Location | 💻 Telehealth Available</p>
                <p>⭐ 4.8/5 rating | 💰 $150/session</p>
                <button onclick="contactTherapist('Dr. Chen')">Contact</button>
            </div>
            <div class="therapist-card">
                <h4>Dr. Emily Rodriguez, LMFT</h4>
                <p>Specializes in: Relationships, Family Therapy</p>
                <p>📍 Westside Location | 💻 Telehealth Available</p>
                <p>⭐ 4.7/5 rating | 💰 $130/session</p>
                <button onclick="contactTherapist('Dr. Rodriguez')">Contact</button>
            </div>
        </div>
    `;
}

function contactTherapist(name) {
    alert(`📞 Great choice! Reaching out to ${name} is a brave step toward healing.`);
}

// Art Therapy Implementation
function showArtTherapy() {
    loadPage('art-therapy');
}

function initializeCanvas() {
    const canvas = document.getElementById('art-canvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    
    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = document.getElementById('color-picker').value;
        
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    
    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }
}

function clearCanvas() {
    const canvas = document.getElementById('art-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveArtwork() {
    const canvas = document.getElementById('art-canvas');
    const link = document.createElement('a');
    link.download = 'my-healing-art.png';
    link.href = canvas.toDataURL();
    link.click();
    alert('🎨 Your healing artwork has been saved! Art is a powerful form of self-expression.');
}

// Music Therapy Implementation
function showMusicTherapy() {
    loadPage('music-therapy');
}

function playMusicTherapy(type) {
    const player = document.getElementById('music-player');
    const info = document.getElementById('music-info');
    
    const musicTypes = {
        'nature': {
            title: '🌿 Nature Sounds',
            description: 'Calming forest and ocean sounds for relaxation',
            benefits: 'Reduces stress, improves focus, promotes sleep'
        },
        'binaural': {
            title: '🧠 Binaural Beats',
            description: 'Frequencies designed to promote specific brainwave states',
            benefits: 'Enhances meditation, reduces anxiety, improves concentration'
        },
        'classical': {
            title: '🎼 Classical Therapy',
            description: 'Carefully selected classical pieces for emotional healing',
            benefits: 'Elevates mood, reduces depression, stimulates creativity'
        },
        'ambient': {
            title: '🌌 Ambient Healing',
            description: 'Ethereal soundscapes for deep relaxation',
            benefits: 'Promotes mindfulness, reduces racing thoughts, aids sleep'
        }
    };
    
    const music = musicTypes[type];
    info.innerHTML = `
        <div class="music-session">
            <h3>${music.title}</h3>
            <p>${music.description}</p>
            <div class="benefits">Benefits: ${music.benefits}</div>
            <div class="music-controls">
                <button onclick="startMusicSession('${type}')">▶️ Play</button>
                <button onclick="pauseMusic()">⏸️ Pause</button>
                <button onclick="stopMusic()">⏹️ Stop</button>
            </div>
            <div class="session-timer" id="music-timer">00:00</div>
        </div>
    `;
}

let musicTimer = null;
let musicDuration = 0;

function startMusicSession(type) {
    musicDuration = 0;
    musicTimer = setInterval(() => {
        musicDuration++;
        const minutes = Math.floor(musicDuration / 60);
        const seconds = musicDuration % 60;
        document.getElementById('music-timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
    
    alert(`🎵 Starting ${type} therapy session. Find a comfortable position and let the healing sounds wash over you.`);
}

function pauseMusic() {
    if (musicTimer) {
        clearInterval(musicTimer);
        musicTimer = null;
    }
}

function stopMusic() {
    if (musicTimer) {
        clearInterval(musicTimer);
        musicTimer = null;
    }
    musicDuration = 0;
    document.getElementById('music-timer').textContent = '00:00';
    alert('🎵 Music therapy session complete. Notice how you feel now compared to when you started.');
}

// Education Hub Implementation
function showEducationHub() {
    loadPage('education-hub');
}

function loadEducationContent() {
    const content = document.getElementById('education-content');
    content.innerHTML = `
        <div class="education-categories">
            <div class="category-card" onclick="showEducationTopic('anxiety')">
                <h3>😰 Understanding Anxiety</h3>
                <p>Learn about anxiety disorders, symptoms, and management strategies</p>
            </div>
            <div class="category-card" onclick="showEducationTopic('depression')">
                <h3>😔 Depression Awareness</h3>
                <p>Comprehensive guide to depression, its causes, and treatment options</p>
            </div>
            <div class="category-card" onclick="showEducationTopic('mindfulness')">
                <h3>🧘 Mindfulness & Meditation</h3>
                <p>Practical guides to mindfulness practices and meditation techniques</p>
            </div>
            <div class="category-card" onclick="showEducationTopic('relationships')">
                <h3>💕 Healthy Relationships</h3>
                <p>Building and maintaining healthy relationships and communication skills</p>
            </div>
            <div class="category-card" onclick="showEducationTopic('stress')">
                <h3>😵 Stress Management</h3>
                <p>Effective strategies for managing and reducing stress in daily life</p>
            </div>
            <div class="category-card" onclick="showEducationTopic('self-care')">
                <h3>🌱 Self-Care Essentials</h3>
                <p>Comprehensive guide to physical, emotional, and mental self-care</p>
            </div>
        </div>
        <div id="education-topic-content"></div>
    `;
}

function showEducationTopic(topic) {
    const topicContent = document.getElementById('education-topic-content');
    
    const topics = {
        'anxiety': {
            title: '😰 Understanding Anxiety',
            content: `
                <h4>What is Anxiety?</h4>
                <p>Anxiety is a natural response to stress, but when it becomes overwhelming or persistent, it may indicate an anxiety disorder.</p>
                
                <h4>Common Symptoms:</h4>
                <ul>
                    <li>Excessive worry or fear</li>
                    <li>Physical symptoms (racing heart, sweating, trembling)</li>
                    <li>Avoidance of certain situations</li>
                    <li>Difficulty concentrating</li>
                    <li>Sleep disturbances</li>
                </ul>
                
                <h4>Management Strategies:</h4>
                <ul>
                    <li>Deep breathing exercises</li>
                    <li>Progressive muscle relaxation</li>
                    <li>Cognitive behavioral therapy techniques</li>
                    <li>Regular exercise and healthy lifestyle</li>
                    <li>Professional support when needed</li>
                </ul>
            `
        },
        'depression': {
            title: '😔 Depression Awareness',
            content: `
                <h4>Understanding Depression:</h4>
                <p>Depression is more than feeling sad - it's a serious mental health condition that affects how you feel, think, and handle daily activities.</p>
                
                <h4>Warning Signs:</h4>
                <ul>
                    <li>Persistent sadness or empty mood</li>
                    <li>Loss of interest in activities</li>
                    <li>Changes in appetite or sleep</li>
                    <li>Fatigue or loss of energy</li>
                    <li>Feelings of worthlessness or guilt</li>
                </ul>
                
                <h4>Path to Recovery:</h4>
                <ul>
                    <li>Professional therapy and counseling</li>
                    <li>Medication when appropriate</li>
                    <li>Social support and connection</li>
                    <li>Regular exercise and self-care</li>
                    <li>Mindfulness and stress reduction</li>
                </ul>
            `
        },
        'mindfulness': {
            title: '🧘 Mindfulness & Meditation',
            content: `
                <h4>What is Mindfulness?</h4>
                <p>Mindfulness is the practice of being fully present and engaged in the current moment, without judgment.</p>
                
                <h4>Benefits:</h4>
                <ul>
                    <li>Reduced stress and anxiety</li>
                    <li>Improved emotional regulation</li>
                    <li>Better focus and concentration</li>
                    <li>Enhanced self-awareness</li>
                    <li>Improved relationships</li>
                </ul>
                
                <h4>Simple Practices:</h4>
                <ul>
                    <li>5-minute daily meditation</li>
                    <li>Mindful breathing exercises</li>
                    <li>Body scan meditation</li>
                    <li>Mindful walking</li>
                    <li>Gratitude practice</li>
                </ul>
            `
        }
    };
    
    const selectedTopic = topics[topic] || topics['anxiety'];
    topicContent.innerHTML = `
        <div class="topic-detail">
            <h3>${selectedTopic.title}</h3>
            ${selectedTopic.content}
            <button onclick="completeLesson('${topic}')">Mark as Read</button>
        </div>
    `;
}

function completeLesson(topic) {
    alert('📚 Great job learning about mental health! Knowledge is power on your healing journey.');
}

function showWellnessStreaks() { loadPage('progress-dashboard'); }

// Advanced Habit Tracker
let habitData = JSON.parse(localStorage.getItem('habitData')) || [];

function showHabitTracker() {
    loadPage('habit-tracker');
}

function addHabit() {
    const habitName = document.getElementById('habit-input').value.trim();
    if (habitName) {
        const habit = {
            id: Date.now(),
            name: habitName,
            streak: 0,
            completedDates: [],
            created: new Date().toLocaleDateString()
        };
        habitData.push(habit);
        localStorage.setItem('habitData', JSON.stringify(habitData));
        document.getElementById('habit-input').value = '';
        displayHabits();
    }
}

function displayHabits() {
    const habitsList = document.getElementById('habits-list');
    if (habitData.length === 0) {
        habitsList.innerHTML = '<p>No habits tracked yet. Add your first wellness habit above!</p>';
        return;
    }
    
    let html = '';
    habitData.forEach(habit => {
        const today = new Date().toLocaleDateString();
        const completedToday = habit.completedDates.includes(today);
        
        html += `
            <div class="habit-item">
                <div class="habit-info">
                    <h4>${habit.name}</h4>
                    <div class="habit-stats">
                        <span class="streak">🔥 ${habit.streak} day streak</span>
                        <span class="total">✅ ${habit.completedDates.length} total</span>
                    </div>
                </div>
                <div class="habit-actions">
                    ${!completedToday ? 
                        `<button onclick="completeHabit(${habit.id})">✅ Complete</button>` : 
                        '<span class="completed-badge">✅ Done Today!</span>'
                    }
                    <button onclick="removeHabit(${habit.id})">🗑️</button>
                </div>
            </div>
        `;
    });
    
    habitsList.innerHTML = html;
}

function completeHabit(habitId) {
    const habit = habitData.find(h => h.id === habitId);
    const today = new Date().toLocaleDateString();
    
    if (habit && !habit.completedDates.includes(today)) {
        habit.completedDates.push(today);
        habit.streak++;
        localStorage.setItem('habitData', JSON.stringify(habitData));
        displayHabits();
        
        if (habit.streak === 7) {
            alert('🎉 Amazing! You\'ve completed a full week of ' + habit.name + '!');
        } else if (habit.streak === 30) {
            alert('🏆 Incredible! 30 days of ' + habit.name + '! You\'re building lasting change!');
        }
    }
}

function removeHabit(habitId) {
    habitData = habitData.filter(h => h.id !== habitId);
    localStorage.setItem('habitData', JSON.stringify(habitData));
    displayHabits();
}

// Crisis Intervention System
let crisisLevel = 0;

function showCrisisIntervention() {
    loadPage('crisis-intervention');
}

function assessCrisisLevel() {
    const assessment = document.getElementById('crisis-assessment');
    assessment.innerHTML = `
        <div class="crisis-questions">
            <h3>🛡️ Safety Check</h3>
            <p>Please answer honestly - this helps us provide the right support:</p>
            
            <div class="question">
                <p>Are you having thoughts of hurting yourself?</p>
                <button onclick="setCrisisLevel(5)">Yes, right now</button>
                <button onclick="setCrisisLevel(3)">Sometimes</button>
                <button onclick="setCrisisLevel(1)">No</button>
            </div>
            
            <div class="question">
                <p>Do you feel like you can't cope with your current situation?</p>
                <button onclick="setCrisisLevel(4)">Completely overwhelmed</button>
                <button onclick="setCrisisLevel(2)">Struggling but managing</button>
                <button onclick="setCrisisLevel(1)">I can cope</button>
            </div>
            
            <div class="question">
                <p>Do you have people you can reach out to for support?</p>
                <button onclick="setCrisisLevel(1)">Yes, several people</button>
                <button onclick="setCrisisLevel(2)">One or two people</button>
                <button onclick="setCrisisLevel(4)">No one available</button>
            </div>
        </div>
    `;
}

function setCrisisLevel(level) {
    crisisLevel = Math.max(crisisLevel, level);
    showCrisisResponse();
}

function showCrisisResponse() {
    const response = document.getElementById('crisis-response');
    
    if (crisisLevel >= 5) {
        response.innerHTML = `
            <div class="crisis-urgent">
                <h3>🚨 Immediate Help Needed</h3>
                <p>Your safety is the top priority. Please reach out for help right now:</p>
                <div class="emergency-contacts">
                    <a href="tel:988" class="emergency-btn">📞 Call 988 (Suicide & Crisis Lifeline)</a>
                    <a href="tel:911" class="emergency-btn">🚨 Call 911 (Emergency)</a>
                    <a href="sms:741741" class="emergency-btn">💬 Text HOME to 741741</a>
                </div>
                <p>You are not alone. Help is available 24/7.</p>
            </div>
        `;
    } else if (crisisLevel >= 3) {
        response.innerHTML = `
            <div class="crisis-moderate">
                <h3>⚠️ You Need Support</h3>
                <p>It sounds like you're going through a difficult time. Here are some immediate steps:</p>
                <ul>
                    <li>📞 Call a trusted friend or family member</li>
                    <li>🏥 Consider visiting a mental health professional</li>
                    <li>📱 Use our AI Companion for immediate support</li>
                    <li>🧘 Try our breathing exercises or meditation</li>
                </ul>
                <div class="support-actions">
                    <button onclick="showAICompanion()">💬 Talk to AI Companion</button>
                    <button onclick="showBreathingExercise()">🌬️ Breathing Exercise</button>
                    <button onclick="showEmergencyResources()">📞 Get Help Numbers</button>
                </div>
            </div>
        `;
    } else {
        response.innerHTML = `
            <div class="crisis-low">
                <h3>💚 You're Managing Well</h3>
                <p>It's great that you're checking in with yourself. Here are some ways to maintain your wellbeing:</p>
                <ul>
                    <li>🎯 Set small, achievable daily goals</li>
                    <li>🤝 Stay connected with supportive people</li>
                    <li>🧘 Practice regular self-care</li>
                    <li>📊 Track your mood and progress</li>
                </ul>
                <div class="wellness-actions">
                    <button onclick="showGoalSetting()">🎯 Set Wellness Goals</button>
                    <button onclick="showSelfCare()">🌱 Self-Care Activities</button>
                    <button onclick="showMoodCheck()">💭 Mood Check-in</button>
                </div>
            </div>
        `;
    }
}

// Personalized Recommendations Engine
function generatePersonalizedRecommendations() {
    const recentMoods = moodLog.slice(-7);
    const commonMoods = {};
    
    recentMoods.forEach(entry => {
        commonMoods[entry.mood] = (commonMoods[entry.mood] || 0) + 1;
    });
    
    const dominantMood = Object.keys(commonMoods).reduce((a, b) => 
        commonMoods[a] > commonMoods[b] ? a : b, 'neutral');
    
    const recommendations = {
        anxiety: [
            { type: 'breathing', title: '🌬️ Try breathing exercises', action: 'showBreathingExercise()' },
            { type: 'meditation', title: '🧘 Practice meditation', action: 'showMeditationGarden()' },
            { type: 'thought-record', title: '📝 Challenge anxious thoughts', action: 'showThoughtRecord()' }
        ],
        sadness: [
            { type: 'self-care', title: '🌱 Focus on self-care', action: 'showSelfCare()' },
            { type: 'community', title: '🤝 Connect with others', action: 'showCommunityHub()' },
            { type: 'goals', title: '🎯 Set small achievable goals', action: 'showGoalSetting()' }
        ],
        stress: [
            { type: 'games', title: '🎮 Try wellness games', action: 'showWellnessGames()' },
            { type: 'music', title: '🎵 Listen to healing music', action: 'showMusicTherapy()' },
            { type: 'art', title: '🎨 Express through art', action: 'showArtTherapy()' }
        ]
    };
    
    return recommendations[dominantMood] || recommendations.anxiety;
}

function showPersonalizedDashboard() {
    loadPage('personalized-dashboard');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Show loading animation
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }, 2000);
    }
    
    initializeCurrentPage();
    
    // Update pet stats periodically
    setInterval(() => {
        petData.happiness = Math.max(0, petData.happiness - 1);
        petData.energy = Math.max(0, petData.energy - 1);
        
        // Earn passive coins based on pet level
        const level = Math.floor((petData.happiness + petData.health + petData.energy) / 30);
        petData.coins = (petData.coins || 0) + Math.floor(level / 2);
        
        localStorage.setItem('petData', JSON.stringify(petData));
        if (document.getElementById('virtual-pet').classList.contains('hidden') === false) {
            updatePetDisplay();
        }
    }, 300000); // Every 5 minutes
    
    // Check for wellness streak
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    const today = new Date().toDateString();
    
    if (lastCheckIn !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastCheckIn === yesterday.toDateString()) {
            wellnessStreak++;
        } else if (lastCheckIn) {
            wellnessStreak = 1;
        }
        
        localStorage.setItem('wellnessStreak', JSON.stringify(wellnessStreak));
        localStorage.setItem('lastCheckIn', today);
    }
});