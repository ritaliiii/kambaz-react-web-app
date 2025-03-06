import { createSlice } from '@reduxjs/toolkit';
import { assignments } from '../../Database';
const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(), // Generate a unique ID for simplicity
        title: payload.title,
        course: payload.course,
        dueDate: payload.dueDate,
        points: payload.points,
        availableFrom: payload.availableFrom,
        availableUntil: payload.availableUntil,
        description: payload.description,
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, { payload }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== payload._id
      );
    },
    updateAssignment: (state, { payload }) => {
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === payload._id
      );
      if (index !== -1) {
        state.assignments[index] = { ...state.assignments[index], ...payload };
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
