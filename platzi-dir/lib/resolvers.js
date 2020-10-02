"use strict";

const connectDB = require("./db");
const { ObjectID } = require("mongodb");

module.exports = {
  Query: {
    getCourses: async () => {
      let courses = [];
      try {
        const database = await connectDB();
        courses = await database.db().collection("courses").find().toArray();
      } catch (error) {
        console.error(error);
      }
      return courses;
    },
    getCourse: async (root, { id }) => {
      let course;
      try {
        const database = await connectDB();
        course = await database
          .db()
          .collection("courses")
          .findOne({ _id: ObjectID(id) });
      } catch (error) {
        console.error(error);
      }
      return course;
    },
  },
};
