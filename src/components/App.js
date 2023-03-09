import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish React & Redux Course', completed: false },
    { id: 'cg2', text: 'Learn all about backend technologies in Node.JS', completed: false },
    { id: 'cg3', text: 'Help other students to learn Full Stack Development using Q&A', completed: false }
  ]);

  const addNewGoalHandler = newGoal => {
    if (newGoal.text.trim().length === 0) {
      return; // Ignore empty goals
    }
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat({
      ...newGoal,
      id: Math.random().toString(),
      completed: false
    }));
  };

  const deleteGoalHandler = goalId => {
    setCourseGoals(prevCourseGoals =>
      prevCourseGoals.filter(goal => goal.id !== goalId)
    );
  };

  const toggleCompletedHandler = goalId => {
    setCourseGoals(prevCourseGoals =>
      prevCourseGoals.map(goal =>
        goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const completedGoalsCount = courseGoals.filter(goal => goal.completed).length;

  return (
    <div className="course-goals">
      <h2>Study Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <p>Total goals: {courseGoals.length}, completed goals: {completedGoalsCount}</p>
      <GoalList goals={courseGoals} onDeleteGoal={deleteGoalHandler} onToggleCompleted={toggleCompletedHandler} />
    </div>
  );
};

export default App;
