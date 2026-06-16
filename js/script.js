/* ========================================
   Eastern Daily Health Tips - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initMobileMenu();
    initScrollAnimations();
    initTabs();
    initSmoothScroll();
    initCopyrightYear();
});

/* ========================================
   Dynamic Copyright Year
   ======================================== */
function initCopyrightYear() {
    const yearElements = document.querySelectorAll('.copyright-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeader() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

/* ========================================
   Mobile Menu Toggle
   ======================================== */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/* ========================================
   Scroll Animations (Scroll Unfold Effect)
   ======================================== */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all scroll-unfold elements
    const unfoldElements = document.querySelectorAll('.scroll-unfold');
    unfoldElements.forEach(el => observer.observe(el));
}

/* ========================================
   Category Tabs (Fitness Page)
   ======================================== */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

/* ========================================
   Smooth Scroll for Anchor Links
   ======================================== */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ========================================
   Health Calculator Functions
   ======================================== */

// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const height = parseFloat(document.getElementById('bmi-height').value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height');
        return;
    }
    
    const bmi = weight / Math.pow(height / 100, 2);
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const bmiInfo = document.getElementById('bmi-info');
    const result = document.getElementById('bmi-result');
    
    bmiValue.textContent = bmi.toFixed(1);
    
    let category, info, bgColor;
    if (bmi < 18.5) {
        category = 'Underweight';
        info = 'Consider increasing calorie intake and adding strength training';
        bgColor = '#3498db';
    } else if (bmi < 25) {
        category = 'Normal';
        info = 'Your weight is healthy. Keep up the good work!';
        bgColor = '#2ecc71';
    } else if (bmi < 30) {
        category = 'Overweight';
        info = 'Consider reducing calorie intake and increasing cardio exercise';
        bgColor = '#f39c12';
    } else {
        category = 'Obese';
        info = 'Please consult a healthcare professional for a weight management plan';
        bgColor = '#e74c3c';
    }
    
    bmiCategory.textContent = category;
    bmiCategory.style.background = bgColor;
    bmiCategory.style.color = 'white';
    bmiInfo.textContent = info;
    result.style.display = 'block';
}

// Calorie Calculator
function calculateCalorie() {
    const gender = document.querySelector('input[name="calorie-gender"]:checked').value;
    const age = parseInt(document.getElementById('calorie-age').value);
    const weight = parseFloat(document.getElementById('calorie-weight').value);
    const height = parseFloat(document.getElementById('calorie-height').value);
    const activity = parseFloat(document.getElementById('calorie-activity').value);
    
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert('Please enter all personal information');
        return;
    }
    
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    const calories = Math.round(bmr * activity);
    const calorieValue = document.getElementById('calorie-value');
    const calorieInfo = document.getElementById('calorie-info');
    const result = document.getElementById('calorie-result');
    
    calorieValue.textContent = calories;
    calorieInfo.innerHTML = `
        <strong>Basal Metabolic Rate (BMR):</strong> ${Math.round(bmr)} kcal<br>
        <strong>Weight Loss Goal:</strong> ${calories - 500} kcal/day<br>
        <strong>Weight Gain Goal:</strong> ${calories + 500} kcal/day
    `;
    result.style.display = 'block';
}

// Water Calculator
function calculateWater() {
    const weight = parseFloat(document.getElementById('water-weight').value);
    const activity = document.querySelector('input[name="water-activity"]:checked').value;
    
    if (isNaN(weight) || weight <= 0) {
        alert('Please enter a valid weight');
        return;
    }
    
    let multiplier;
    switch(activity) {
        case 'low': multiplier = 30; break;
        case 'medium': multiplier = 35; break;
        case 'high': multiplier = 40; break;
    }
    
    const waterMl = weight * multiplier;
    const waterLiters = (waterMl / 1000).toFixed(1);
    
    const waterValue = document.getElementById('water-value');
    const waterInfo = document.getElementById('water-info');
    const result = document.getElementById('water-result');
    
    waterValue.textContent = waterLiters;
    waterInfo.innerHTML = `
        <strong>Hydration Tips:</strong><br>
        • Before exercise: 300-500ml<br>
        • During exercise: 150-200ml every 15-20 minutes<br>
        • After exercise: Replace fluid lost through sweat<br>
        • Daily total: ${waterMl}ml
    `;
    result.style.display = 'block';
}

// Sleep Calculator
function calculateSleep() {
    const wakeupTime = document.getElementById('sleep-wakeup').value;
    const bedtime = document.getElementById('sleep-bedtime').value;
    
    if (!wakeupTime && !bedtime) {
        alert('Please set a wake-up or bedtime');
        return;
    }
    
    const result = document.getElementById('sleep-result');
    const sleepTimes = document.getElementById('sleep-times');
    
    const sleepCycleMinutes = 90;
    const fallAsleepMinutes = 14;
    
    let html = '';
    
    if (wakeupTime) {
        const [wakeupHour, wakeupMin] = wakeupTime.split(':').map(Number);
        const wakeupDate = new Date();
        wakeupDate.setHours(wakeupHour, wakeupMin, 0, 0);
        
        html += '<div class="sleep-time" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">';
        html += '<div class="sleep-time-label">If you want to wake up at ' + wakeupTime + '</div>';
        html += '<div class="sleep-time-label" style="margin-top: 15px;">Best bedtime:</div>';
        
        for (let cycles = 6; cycles >= 3; cycles--) {
            const sleepTime = new Date(wakeupDate.getTime() - (cycles * sleepCycleMinutes + fallAsleepMinutes) * 60000);
            const timeStr = sleepTime.getHours().toString().padStart(2, '0') + ':' + sleepTime.getMinutes().toString().padStart(2, '0');
            const hours = cycles * 1.5;
            html += '<div class="sleep-time-value">' + timeStr + '</div>';
            html += '<div class="sleep-cycles">' + cycles + ' sleep cycles (' + hours + ' hours)</div>';
        }
        html += '</div>';
    }
    
    if (bedtime) {
        const [bedHour, bedMin] = bedtime.split(':').map(Number);
        const bedDate = new Date();
        bedDate.setHours(bedHour, bedMin, 0, 0);
        
        html += '<div class="sleep-time" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">';
        html += '<div class="sleep-time-label">If you go to bed at ' + bedtime + '</div>';
        html += '<div class="sleep-time-label" style="margin-top: 15px;">Best wake-up time:</div>';
        
        for (let cycles = 3; cycles <= 6; cycles++) {
            const wakeTime = new Date(bedDate.getTime() + (cycles * sleepCycleMinutes - fallAsleepMinutes) * 60000);
            const timeStr = wakeTime.getHours().toString().padStart(2, '0') + ':' + wakeTime.getMinutes().toString().padStart(2, '0');
            const hours = cycles * 1.5;
            html += '<div class="sleep-time-value">' + timeStr + '</div>';
            html += '<div class="sleep-cycles">' + cycles + ' sleep cycles (' + hours + ' hours)</div>';
        }
        html += '</div>';
    }
    
    sleepTimes.innerHTML = html;
    result.style.display = 'block';
}

// Macro Calculator
function updateMacroRatios() {
    const type = document.getElementById('macro-type').value;
    const protein = document.getElementById('macro-protein');
    const carbs = document.getElementById('macro-carbs');
    const fat = document.getElementById('macro-fat');
    
    switch(type) {
        case 'balanced':
            protein.value = 30; carbs.value = 40; fat.value = 30;
            break;
        case 'lowcarb':
            protein.value = 35; carbs.value = 25; fat.value = 40;
            break;
        case 'highprotein':
            protein.value = 40; carbs.value = 30; fat.value = 30;
            break;
        case 'keto':
            protein.value = 25; carbs.value = 5; fat.value = 70;
            break;
    }
    updateMacroDisplay();
}

function updateMacroDisplay() {
    document.getElementById('protein-percent').textContent = document.getElementById('macro-protein').value;
    document.getElementById('carbs-percent').textContent = document.getElementById('macro-carbs').value;
    document.getElementById('fat-percent').textContent = document.getElementById('macro-fat').value;
}

function calculateMacro() {
    const calories = parseInt(document.getElementById('macro-calories').value);
    const proteinPercent = parseInt(document.getElementById('macro-protein').value) / 100;
    const carbsPercent = parseInt(document.getElementById('macro-carbs').value) / 100;
    const fatPercent = parseInt(document.getElementById('macro-fat').value) / 100;
    
    if (isNaN(calories) || calories <= 0) {
        alert('Please enter a valid calorie target');
        return;
    }
    
    const proteinGrams = Math.round((calories * proteinPercent) / 4);
    const carbsGrams = Math.round((calories * carbsPercent) / 4);
    const fatGrams = Math.round((calories * fatPercent) / 9);
    
    document.getElementById('protein-value').textContent = proteinGrams;
    document.getElementById('carbs-value').textContent = carbsGrams;
    document.getElementById('fat-value').textContent = fatGrams;
    
    const macroInfo = document.getElementById('macro-info');
    macroInfo.innerHTML = `
        <strong>Food Sources:</strong><br>
        • Protein: Chicken breast, fish, eggs, legumes<br>
        • Carbs: Brown rice, oats, sweet potato, whole wheat bread<br>
        • Fat: Olive oil, nuts, avocado
    `;
    document.getElementById('macro-result').style.display = 'block';
}

/* ========================================
   Keyboard Shortcuts
   ======================================== */
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const activeCalc = document.querySelector('.calculator.active, .calculator:first-of-type');
        if (activeCalc) {
            const btn = activeCalc.querySelector('.calculate-btn');
            if (btn) btn.click();
        }
    }
});

/* ========================================
   Utility: Form Validation Helper
   ======================================== */
function validateNumberInput(value, min, max) {
    const num = parseFloat(value);
    if (isNaN(num)) return false;
    if (min !== undefined && num < min) return false;
    if (max !== undefined && num > max) return false;
    return true;
}