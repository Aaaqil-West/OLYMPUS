// Agora - Divine Community JavaScript

// Data Storage
let communityPosts = JSON.parse(localStorage.getItem('communityPosts')) || [];
let userCircles = JSON.parse(localStorage.getItem('userCircles')) || [];
let communityAchievements = JSON.parse(localStorage.getItem('communityAchievements')) || [];
let mentorProfiles = JSON.parse(localStorage.getItem('mentorProfiles')) || [];
let mentorConnections = JSON.parse(localStorage.getItem('mentorConnections')) || [];
let userMentorStatus = JSON.parse(localStorage.getItem('userMentorStatus')) || { isMentor: false, expertise: [] };

// Sample posts for demonstration
if (communityPosts.length === 0) {
    communityPosts = [
        {
            id: 1,
            type: 'inspiration',
            content: 'Today I realized that healing isn\'t linear, and that\'s perfectly okay. Every step forward, no matter how small, is progress worth celebrating. 🌱',
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            likes: 23,
            supportCount: 8
        },
        {
            id: 2,
            type: 'gratitude',
            content: 'Grateful for this community where I can share my struggles without judgment. Your support means everything. Thank you for being here. 🙏',
            timestamp: new Date(Date.now() - 7200000).toISOString(),
            likes: 31,
            supportCount: 12
        },
        {
            id: 3,
            type: 'tip',
            content: 'Discovered that 5 minutes of morning meditation sets a peaceful tone for my entire day. Small habits, big impact! ✨',
            timestamp: new Date(Date.now() - 10800000).toISOString(),
            likes: 18,
            supportCount: 5
        }
    ];
    localStorage.setItem('communityPosts', JSON.stringify(communityPosts));
}

// Navigation
function goToOlympus() {
    window.location.href = '../OLYMPUS/olympus-hub.html';
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.agora-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.remove('hidden');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Load section-specific content
    switch(sectionName) {
        case 'feed':
            loadCommunityFeed();
            break;
        case 'share':
            setupShareForm();
            break;
        case 'mentorship':
            loadMentorshipSection();
            break;
        case 'achievements':
            loadAchievements();
            break;
    }
}

// Community Feed Functions
function loadCommunityFeed() {
    const container = document.getElementById('posts-container');
    const sortedPosts = communityPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    container.innerHTML = sortedPosts.map(post => createPostHTML(post)).join('');
}

function createPostHTML(post) {
    const timeAgo = getTimeAgo(post.timestamp);
    const typeEmoji = getTypeEmoji(post.type);
    
    return `
        <div class="post-card">
            <div class="post-header">
                <span class="post-type">${typeEmoji} ${post.type}</span>
                <span class="post-time">${timeAgo}</span>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <button class="action-btn" onclick="likePost(${post.id})">
                    💙 ${post.likes} Support
                </button>
                <button class="action-btn" onclick="sendEncouragement(${post.id})">
                    🤗 Encourage
                </button>
            </div>
        </div>
    `;
}

function getTypeEmoji(type) {
    const emojis = {
        inspiration: '💫',
        progress: '📈',
        gratitude: '🙏',
        support: '🤗',
        tip: '💡'
    };
    return emojis[type] || '✨';
}

function getTimeAgo(timestamp) {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffMs = now - postTime;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
}

function likePost(postId) {
    const post = communityPosts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        localStorage.setItem('communityPosts', JSON.stringify(communityPosts));
        loadCommunityFeed();
    }
}

function sendEncouragement(postId) {
    const encouragements = [
        "You're not alone in this journey 💙",
        "Your strength inspires others ✨",
        "Thank you for sharing your wisdom 🙏",
        "Sending you positive energy 🌟",
        "Your courage is admirable 💪"
    ];
    
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    alert(randomEncouragement);
}

// Share Functions
function setupShareForm() {
    const textarea = document.getElementById('post-content');
    const counter = document.getElementById('char-counter');
    
    textarea.addEventListener('input', function() {
        const remaining = 280 - this.value.length;
        counter.textContent = remaining;
        counter.style.color = remaining < 20 ? '#e53e3e' : '#718096';
    });
}

function sharePost() {
    const type = document.getElementById('post-type').value;
    const content = document.getElementById('post-content').value.trim();
    
    if (!content) {
        alert('Please share your wisdom before posting!');
        return;
    }
    
    const newPost = {
        id: Date.now(),
        type: type,
        content: content,
        timestamp: new Date().toISOString(),
        likes: 0,
        supportCount: 0
    };
    
    communityPosts.unshift(newPost);
    localStorage.setItem('communityPosts', JSON.stringify(communityPosts));
    
    // Clear form
    document.getElementById('post-content').value = '';
    document.getElementById('char-counter').textContent = '280';
    
    // Show success message
    alert('Your wisdom has been shared with the community! 🌟');
    
    // Switch to feed to see the post
    showSection('feed');
    document.querySelector('[onclick="showSection(\'feed\')"]').classList.add('active');
}

// Support Circles Functions
function joinCircle(circleType) {
    const circles = {
        anxiety: 'Calm Waters Circle',
        depression: 'Dawn Seekers Circle',
        wellness: 'Sacred Wellness Circle',
        mindfulness: 'Mindful Spirits Circle'
    };
    
    const circleName = circles[circleType];
    
    if (!userCircles.includes(circleType)) {
        userCircles.push(circleType);
        localStorage.setItem('userCircles', JSON.stringify(userCircles));
        alert(`Welcome to the ${circleName}! 🤝\n\nYou'll now receive supportive messages and can connect with others on similar journeys.`);
    } else {
        alert(`You're already part of the ${circleName}! 💙`);
    }
}

// Achievements Functions
function loadAchievements() {
    const container = document.getElementById('achievements-container');
    
    // Get achievements from Sanctuary data if available
    const sanctuaryAchievements = JSON.parse(localStorage.getItem('achievements')) || [];
    const wellnessStreak = JSON.parse(localStorage.getItem('wellnessStreak')) || 0;
    const moodLog = JSON.parse(localStorage.getItem('moodLog')) || [];
    
    const achievements = [
        {
            icon: '🌟',
            title: 'First Steps',
            description: 'Shared your first post with the community',
            unlocked: communityPosts.some(p => p.id > 3)
        },
        {
            icon: '💙',
            title: 'Supportive Soul',
            description: 'Gave support to 10 community members',
            unlocked: false
        },
        {
            icon: '🔥',
            title: `${wellnessStreak} Day Streak`,
            description: 'Maintained your wellness journey',
            unlocked: wellnessStreak > 0
        },
        {
            icon: '📝',
            title: 'Mood Tracker',
            description: `Logged ${moodLog.length} mood entries`,
            unlocked: moodLog.length > 0
        },
        {
            icon: '🤝',
            title: 'Circle Member',
            description: `Joined ${userCircles.length} support circles`,
            unlocked: userCircles.length > 0
        },
        {
            icon: '🏛️',
            title: 'Divine Explorer',
            description: 'Explored all areas of Olympus',
            unlocked: true
        }
    ];
    
    container.innerHTML = achievements.map(achievement => 
        createAchievementHTML(achievement)
    ).join('');
}

function createAchievementHTML(achievement) {
    const className = achievement.unlocked ? 'achievement-card' : 'achievement-card locked';
    const opacity = achievement.unlocked ? '1' : '0.5';
    
    return `
        <div class="${className}" style="opacity: ${opacity}">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-desc">${achievement.description}</div>
            ${achievement.unlocked ? '<div style="margin-top: 10px; color: #38a169;">✓ Unlocked</div>' : '<div style="margin-top: 10px; color: #718096;">🔒 Locked</div>'}
        </div>
    `;
}

// Integration with Sanctuary
function syncWithSanctuary() {
    // Check if user completed activities in Sanctuary
    const sanctuaryData = {
        moodEntries: JSON.parse(localStorage.getItem('moodLog')) || [],
        wellnessStreak: JSON.parse(localStorage.getItem('wellnessStreak')) || 0,
        achievements: JSON.parse(localStorage.getItem('achievements')) || []
    };
    
    // Auto-generate inspirational posts based on Sanctuary progress
    if (sanctuaryData.wellnessStreak > 0 && sanctuaryData.wellnessStreak % 7 === 0) {
        const streakPost = {
            id: Date.now() + Math.random(),
            type: 'progress',
            content: `Celebrating ${sanctuaryData.wellnessStreak} days of consistent wellness practice! Small steps lead to big changes. 🌟`,
            timestamp: new Date().toISOString(),
            likes: Math.floor(Math.random() * 15) + 5,
            supportCount: Math.floor(Math.random() * 8) + 2
        };
        
        // Add to community posts if not already exists
        if (!communityPosts.some(p => p.content.includes(`${sanctuaryData.wellnessStreak} days`))) {
            communityPosts.unshift(streakPost);
            localStorage.setItem('communityPosts', JSON.stringify(communityPosts));
        }
    }
}

// Mentorship Program Functions
function showMentorshipTab(tabName) {
    document.querySelectorAll('.mentorship-tab').forEach(tab => {
        tab.classList.add('hidden');
    });
    document.querySelectorAll('.mentor-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName === 'seek' ? 'seek-guidance' : tabName === 'offer' ? 'offer-wisdom' : 'connections').classList.remove('hidden');
    event.target.classList.add('active');
    
    if (tabName === 'connections') {
        loadMentorConnections();
    }
}

function loadMentorshipSection() {
    // Initialize sample mentors if none exist
    if (mentorProfiles.length === 0) {
        mentorProfiles = [
            {
                id: 1,
                expertise: ['anxiety', 'mindfulness'],
                bio: 'Found peace through meditation after years of anxiety. Here to share what helped me.',
                joinedDate: new Date(Date.now() - 86400000 * 30).toISOString(),
                helpedCount: 12
            },
            {
                id: 2,
                expertise: ['depression', 'self-care'],
                bio: 'Overcame depression through small daily practices. Believe in the power of tiny steps.',
                joinedDate: new Date(Date.now() - 86400000 * 60).toISOString(),
                helpedCount: 8
            },
            {
                id: 3,
                expertise: ['stress', 'relationships'],
                bio: 'Learned healthy boundaries and stress management. Happy to guide others on this path.',
                joinedDate: new Date(Date.now() - 86400000 * 45).toISOString(),
                helpedCount: 15
            }
        ];
        localStorage.setItem('mentorProfiles', JSON.stringify(mentorProfiles));
    }
}

function findMentor() {
    const selectedArea = document.getElementById('guidance-area').value;
    if (!selectedArea) {
        alert('Please select an area where you\'d like guidance.');
        return;
    }
    
    const matchingMentors = mentorProfiles.filter(mentor => 
        mentor.expertise.includes(selectedArea)
    );
    
    const container = document.getElementById('mentor-matches');
    if (matchingMentors.length === 0) {
        container.innerHTML = '<p>No mentors found for this area yet. Check back soon or consider becoming a mentor yourself!</p>';
        return;
    }
    
    container.innerHTML = matchingMentors.map(mentor => createMentorCardHTML(mentor)).join('');
}

function createMentorCardHTML(mentor) {
    const expertiseLabels = {
        anxiety: 'Anxiety Management',
        depression: 'Depression Support',
        stress: 'Stress Relief',
        relationships: 'Healthy Relationships',
        'self-care': 'Self-Care Practices',
        mindfulness: 'Mindfulness & Meditation'
    };
    
    return `
        <div class="mentor-card">
            <div class="mentor-info">
                <h4>🌟 Divine Guide</h4>
                <div class="mentor-expertise">
                    ${mentor.expertise.map(exp => 
                        `<span class="expertise-tag">${expertiseLabels[exp]}</span>`
                    ).join('')}
                </div>
                <p class="mentor-bio">"${mentor.bio}"</p>
                <div class="mentor-stats">
                    <small>✨ Helped ${mentor.helpedCount} souls • 🗓️ Guide since ${new Date(mentor.joinedDate).toLocaleDateString()}</small>
                </div>
            </div>
            <button onclick="connectWithMentor(${mentor.id})" class="connect-btn">Connect with Guide</button>
        </div>
    `;
}

function connectWithMentor(mentorId) {
    const mentor = mentorProfiles.find(m => m.id === mentorId);
    if (!mentor) return;
    
    // Check if already connected
    if (mentorConnections.some(conn => conn.mentorId === mentorId)) {
        alert('You\'re already connected with this guide!');
        return;
    }
    
    const connection = {
        id: Date.now(),
        mentorId: mentorId,
        connectedDate: new Date().toISOString(),
        status: 'active'
    };
    
    mentorConnections.push(connection);
    localStorage.setItem('mentorConnections', JSON.stringify(mentorConnections));
    
    // Update mentor's helped count
    mentor.helpedCount++;
    localStorage.setItem('mentorProfiles', JSON.stringify(mentorProfiles));
    
    alert('🌟 Connected with your Divine Guide! They will reach out with wisdom and support. Check your connections tab.');
}

function becomeMentor() {
    const checkboxes = document.querySelectorAll('.expertise-checkboxes input[type="checkbox"]:checked');
    const expertise = Array.from(checkboxes).map(cb => cb.value);
    const bio = document.getElementById('mentor-bio').value.trim();
    
    if (expertise.length === 0) {
        alert('Please select at least one area where you can offer guidance.');
        return;
    }
    
    const mentorProfile = {
        id: Date.now(),
        expertise: expertise,
        bio: bio || 'Ready to share wisdom and support on the healing journey.',
        joinedDate: new Date().toISOString(),
        helpedCount: 0
    };
    
    mentorProfiles.push(mentorProfile);
    userMentorStatus = { isMentor: true, expertise: expertise, profileId: mentorProfile.id };
    
    localStorage.setItem('mentorProfiles', JSON.stringify(mentorProfiles));
    localStorage.setItem('userMentorStatus', JSON.stringify(userMentorStatus));
    
    // Clear form
    checkboxes.forEach(cb => cb.checked = false);
    document.getElementById('mentor-bio').value = '';
    
    alert('🌟 Welcome, Divine Guide! You\'re now part of our mentorship program. Others seeking guidance in your areas of expertise may connect with you.');
}

function loadMentorConnections() {
    const container = document.getElementById('mentor-connections');
    
    if (mentorConnections.length === 0 && !userMentorStatus.isMentor) {
        container.innerHTML = '<p>No connections yet. Find a mentor or become one to start building divine connections!</p>';
        return;
    }
    
    let html = '';
    
    // Show mentee connections
    if (mentorConnections.length > 0) {
        html += '<h4>Your Divine Guides</h4>';
        mentorConnections.forEach(connection => {
            const mentor = mentorProfiles.find(m => m.id === connection.mentorId);
            if (mentor) {
                html += createConnectionCardHTML(mentor, 'guide');
            }
        });
    }
    
    // Show mentor status
    if (userMentorStatus.isMentor) {
        const userProfile = mentorProfiles.find(m => m.id === userMentorStatus.profileId);
        if (userProfile) {
            html += '<h4>Your Mentorship Profile</h4>';
            html += `
                <div class="connection-card">
                    <h5>🌟 You are a Divine Guide</h5>
                    <p>Expertise: ${userMentorStatus.expertise.join(', ')}</p>
                    <p>Souls helped: ${userProfile.helpedCount}</p>
                    <p>Guide since: ${new Date(userProfile.joinedDate).toLocaleDateString()}</p>
                </div>
            `;
        }
    }
    
    container.innerHTML = html || '<p>No connections yet.</p>';
}

function createConnectionCardHTML(mentor, type) {
    return `
        <div class="connection-card">
            <h5>🌟 ${type === 'guide' ? 'Your Divine Guide' : 'Mentee'}</h5>
            <p>"${mentor.bio}"</p>
            <div class="mentor-expertise">
                ${mentor.expertise.map(exp => `<span class="expertise-tag">${exp}</span>`).join('')}
            </div>
            <small>Connected since ${new Date().toLocaleDateString()}</small>
        </div>
    `;
}

// Initialize Agora
document.addEventListener('DOMContentLoaded', function() {
    loadCommunityFeed();
    syncWithSanctuary();
    loadMentorshipSection();
    
    // Add floating animation to circle icons
    const circleIcons = document.querySelectorAll('.circle-icon');
    circleIcons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
        }
    `;
    document.head.appendChild(style);
});