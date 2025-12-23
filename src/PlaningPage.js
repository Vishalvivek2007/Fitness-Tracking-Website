import React, { useState } from 'react';
import './planing.css';

const PlaningPage = () => {
  const [inputs, setInputs] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    activity: 'moderate'
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const calculateBMI = (weight, height) => {
    return (weight / ((height / 100) ** 2)).toFixed(1);
  };


  const calculateCalories = (weight, height, age, activity, gender) => {
    const bmr = (10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161);
    
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    return Math.round(bmr * activityMultipliers[activity]);
  };


  const getPlan = (bmi, weight, height, age, activity, gender) => {
    const bmiValue = parseFloat(bmi);
    const calories = calculateCalories(weight, height, age, activity, gender);
    
   
    let targetCalories, weeklyGoal;
    if (bmiValue < 18.5) {
      targetCalories = calories + 300;
      weeklyGoal = "Gain 0.5kg/week";
    } else if (bmiValue <= 24.9) {
      targetCalories = calories;
      weeklyGoal = "Maintain weight";
    } else {
      targetCalories = calories - 500;
      weeklyGoal = "Lose 0.5kg/week";
    }

    
    const exercises = {
      beginner: [
        { name: "Brisk walking", duration: "30 mins", frequency: "Daily", calories: 150 },
        { name: "Bodyweight exercises", details: "3 sets of 10 squats/push-ups", calories: 200 },
        { name: "Stretching routine", duration: "10 mins", frequency: "Daily", calories: 50 }
      ],
      intermediate: [
        { name: "Jogging", duration: "30 mins", frequency: "3×/week", calories: 300 },
        { name: "Resistance training", details: "With bands or weights", calories: 250 },
        { name: "Cycling", duration: "45 mins", frequency: "2×/week", calories: 350 }
      ],
      advanced: [
        { name: "HIIT workouts", duration: "20 mins", frequency: "3×/week", calories: 400 },
        { name: "Strength training", details: "Full body routine", calories: 300 },
        { name: "Sports", duration: "1 hour", frequency: "2×/week", calories: 500 }
      ]
    };

   
    const dietPlan = {
      underweight: [
        {
          meal: "Breakfast",
          options: [
            "Oatmeal with banana, peanut butter, and honey",
            "Scrambled eggs with whole wheat toast and avocado",
            "Smoothie with full-fat milk, nuts, and fruits"
          ]
        },
        {
          meal: "Lunch",
          options: [
            "Grilled chicken with rice and sautéed vegetables",
            "Lentil curry with chapati and a side of yogurt",
            "Egg fried rice with mixed veggies and tofu"
          ]
        },
        {
          meal: "Dinner",
          options: [
            "Salmon with mashed potatoes and steamed broccoli",
            "Pasta with creamy mushroom sauce and grilled chicken",
            "Quinoa with roasted vegetables and chickpeas"
          ]
        }
      ],
      healthy: [
        {
          meal: "Breakfast",
          options: [
            "Greek yogurt with nuts, honey, and mixed fruits",
            "Scrambled eggs with whole wheat toast and a side of spinach",
            "Smoothie with almond milk, protein powder, and berries"
          ]
        },
        {
          meal: "Lunch",
          options: [
            "Grilled salmon with quinoa and roasted vegetables",
            "Brown rice with black beans and grilled chicken",
            "Lentil soup with whole wheat bread"
          ]
        },
        {
          meal: "Dinner",
          options: [
            "Stir-fried tofu with brown rice and steamed greens",
            "Baked chicken with sweet potatoes and asparagus",
            "Whole wheat pasta with tomato sauce and turkey meatballs"
          ]
        }
      ],
      overweight: [
        {
          meal: "Breakfast",
          options: [
            "Scrambled egg whites with spinach and whole wheat toast",
            "Oatmeal with chia seeds, berries, and a dash of honey",
            "Smoothie with low-fat yogurt, spinach, and flaxseeds"
          ]
        },
        {
          meal: "Lunch",
          options: [
            "Grilled chicken salad with olive oil dressing",
            "Steamed fish with quinoa and steamed broccoli",
            "Lentil and vegetable soup with a small portion of brown rice"
          ]
        },
        {
          meal: "Dinner",
          options: [
            "Grilled salmon with roasted zucchini and quinoa",
            "Stir-fried tofu with cauliflower rice and greens",
            "Baked chicken breast with a side of roasted Brussels sprouts"
          ]
        }
      ]
    };
    
    console.log(dietPlan);
    

    return {
      bmi,
      bmiCategory: bmiValue < 18.5 ? "Underweight" : 
                   bmiValue <= 24.9 ? "Healthy" : "Overweight",
      calories: {
        maintenance: calories,
        target: targetCalories,
        weeklyGoal
      },
      exercise: exercises[bmiValue > 28 ? "beginner" : 
                         bmiValue > 22 ? "intermediate" : "advanced"],
      diet: dietPlan[bmiValue < 18.5 ? "underweight" : 
                    bmiValue <= 24.9 ? "healthy" : "overweight"]
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { weight, height, age, activity, gender } = inputs;
    
    if (!weight || !height) {
      alert("Please enter weight and height");
      return;
    }

    const bmi = calculateBMI(weight, height);
    const plan = getPlan(bmi, weight, height, age || 30, activity, gender);
    setResults(plan);
  };

  return (
    <div className="planning-container">
      <div className='planheading'><h2>Complete Health Planner</h2></div>
      
      
      <form onSubmit={handleSubmit} className="planning-form">
        <div className="input-group">
          <label>Weight (kg)</label>
          <input
          className='inputplan'
            type="number"
            name="weight"
            value={inputs.weight}
            onChange={handleChange}
            min="30"
            max="200"
            required
          />
        </div>

        <div className="input-group">
          <label>Height (cm)</label>
          <input
          className='inputplan'
            type="number"
            name="height"
            value={inputs.height}
            onChange={handleChange}
            min="100"
            max="250"
            required
          />
        </div>

        <div className="input-group">
          <label>Age </label>
          <input
          className='inputplan'
            type="number"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            min="10"
            max="100"
          />
        </div>

        <div className="input-group">
          <label>Gender</label>
          <select name="gender" value={inputs.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="input-group">
          <label>Activity Level</label>
          <select name="activity" value={inputs.activity} onChange={handleChange}>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light Activity</option>
            <option value="moderate">Moderate Activity</option>
            <option value="active">Active</option>
            <option value="veryActive">Very Active</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Get My Plan
        </button>
      </form>

      {results && (
        <div className="results-container">
          <div className="health-summary">
            <h3>Your Health Summary</h3>
            <p><strong>BMI:</strong> {results.bmi} ({results.bmiCategory})</p>
            <p><strong>Daily Calories:</strong> {results.calories.target} kcal</p>
            <p><strong>Goal:</strong> {results.calories.weeklyGoal}</p>
          </div>

          <div className="exercise-plan">
            <h4>Exercise Recommendations</h4>
            <div className="exercises">
              {results.exercise.map((ex, index) => (
                <div key={index} className="exercise">
                  <h5>{ex.name}</h5>
                  <p>{ex.duration || ex.details} • {ex.frequency || "3×/week"}</p>
                  <p className="calories">Burns ~{ex.calories} kcal/session</p>
                </div>
              ))}
            </div>
          </div>

          <div className="diet-plan">
            <h4>Meal Suggestions</h4>
            {results.diet.map((meal, index) => (
              <div key={index} className="meal">
                <h5>{meal.meal}</h5>
                <ul>
                  {meal.options.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          
        </div>
      )}
    </div>
  );
};

export default PlaningPage;